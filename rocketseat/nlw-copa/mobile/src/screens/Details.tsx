import { useFocusEffect, useRoute } from "@react-navigation/native"
import { HStack, useToast, VStack } from "native-base"
import { useCallback, useEffect, useState } from "react";
import { Share } from "react-native";
import { EmptyMyPoolList } from "../components/EmptyMyPoolList";
import { EmptyRankingList } from "../components/EmptyRankingList";
import { Guesses } from "../components/Guesses";
import { Header } from "../components/Header"
import { Loading } from "../components/Loading";
import { Option } from "../components/Option";
import { PoolProps } from "../components/PoolCard";
import { PoolHeader } from "../components/PoolHeader";
import { api } from "../services/api";

interface RouteParams {
  id: string;
}

export default function DetailsScreen() {
  const route = useRoute();
  const { id } = route.params as RouteParams;

  const [isLoading, setIsLoading] = useState(false)
  const [poolDetails, setPoolDetails] = useState<PoolProps>({} as PoolProps)
  const [optionSelected, setOptionSelected] = useState<'guesses' | 'ranking'>('guesses');

  const toast = useToast();

  const fetchPoolDetails = async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/pools/${id}`);
      setPoolDetails(response.data.pool)
    } catch (error) {
      console.error(error)
      toast.show({
        title: 'Não foi possível carregar os detalhes do bolão',
        bgColor: 'red.500',
        placement: 'top'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleCodeShare = async () => {
    await Share.share({
      message: poolDetails.code
    })
  }

  useEffect(() => {
    fetchPoolDetails()
  }, [id])

  if (isLoading) return <Loading />

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title={poolDetails.title} showBackButton showShareButton onShare=
        {handleCodeShare} />
      <PoolHeader data={poolDetails} />
      {
        poolDetails._count?.participants > 0
          ?
          <VStack px={5} flex={1}>
            <HStack bgColor="gray.800" p={1} rounded="sm" mb={5}>
              <Option
                title="Seus palpites"
                isSelected={optionSelected === 'guesses'}
                onPress={() => setOptionSelected('guesses')}
              />
              <Option
                title="Ranking do grupo"
                isSelected={optionSelected === 'ranking'}
                onPress={() => setOptionSelected('ranking')}
              />
            </HStack>

            {optionSelected === 'guesses'
              ? <Guesses poolId={poolDetails.id} code={poolDetails.code} />
              : <EmptyRankingList />
            }
          </VStack>
          : <EmptyMyPoolList code={poolDetails.code} />
      }
    </VStack>
  )
}