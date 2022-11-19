import { VStack, Heading, useToast } from "native-base";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";
import { api } from "../services/api";
import { useNavigation } from "@react-navigation/native";

export default function FindScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState('')
  const toast = useToast();
  const { navigate } = useNavigation();
  const handlePoolJoin = async () => {
    try {
      setIsLoading(true)

      if (!code.trim()) {
        return toast.show({
          title: "Informe o código.",
          placement: 'top',
          bgColor: 'red.500'
        })
      }

      await api.post('/pools/join', { code });

      toast.show({
        title: "Você entrou no bolão com sucesso",
        placement: 'top',
        bgColor: 'green.500'
      })

      navigate('pools')
    } catch (error: any) {
      console.error(error)
      setIsLoading(false)

      if(error.response?.data?.message === 'Pool not found.') {
        return toast.show({
          title: "Bolão não encontrado!.",
          placement: 'top',
          bgColor: 'red.500'
        })
      }

      if(error.response?.data?.message === 'You already joined this pool.') {
        return toast.show({
          title: "Você já está nesse bolão!",
          placement: 'top',
          bgColor: 'red.500'
        })
      }

      toast.show({
        title: "Não foi possível encontrar o bolão",
        placement: 'top',
        bgColor: 'red.500'
      })
    }
  }
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Buscar por código" showBackButton/>

      <VStack mt={8} mx={5} alignItems="center">
        <Heading fontFamily="heading" color="white" fontSize="xl" mb={8} textAlign="center">
          Encontre um bolão através de seu código único
        </Heading>

        <Input
          mb={2}
          placeholder="Qual código do bolão?"
          onChangeText={setCode}
          value={code}
          autoCapitalize="characters"
        />

        <Button title="BUSCAR BOLÃO" isLoading={isLoading} onPress={handlePoolJoin} />
      </VStack>
    </VStack>
  )
}