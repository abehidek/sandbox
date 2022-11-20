import { VStack, Center, Text, Heading, useToast } from "native-base";
import { Header } from "../components/Header";
import Logo from '../assets/logo.svg'
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";
import { api } from "../services/api";


export default function NewScreen() {
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast();
  async function handlePoolCreate() {
    if (!title.trim()) {
      return toast.show({
        title: 'Informe um nome para o seu bolão',
        bgColor: 'red.500',
        placement: 'top'
      })
    }

    try {
      setIsLoading(true)

      await api.post('/pools', { title: title.toUpperCase() })

      toast.show({
        title: 'Bolão criado com sucesso!',
        bgColor: 'green.500',
        placement: 'top'
      })

    } catch (error) {
      console.error(error);
      toast.show({
        title: 'Não foi possível criar o bolão',
        bgColor: 'red.500',
        placement: 'top'
      })
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Criar novo bolão" />

      <VStack mt={8} mx={5} alignItems="center">
        <Logo />

        <Heading fontFamily="heading" color="white" fontSize="xl" my={8} textAlign="center">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </Heading>

        <Input
          mb={2}
          placeholder="Qual nome do seu bolão?"
          onChangeText={setTitle}
          value={title}
        />

        <Button title="CRIAR MEU BOLÃO" onPress={handlePoolCreate} isLoading={isLoading} />

        <Text color="gray.200" fontSize="sm" textAlign="center" px={10} mt={4}>
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas.
        </Text>
      </VStack>
    </VStack>
  )
}