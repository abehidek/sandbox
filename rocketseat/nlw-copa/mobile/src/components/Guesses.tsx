import { useFocusEffect } from '@react-navigation/native';
import { Box, FlatList, useToast } from 'native-base';
import { useCallback, useState } from 'react';
import { api } from '../services/api';
import { EmptyGameList } from './EmptyGameList';
import { EmptyMyPoolList } from './EmptyMyPoolList';
import { Game, GameProps } from './Game';
import { Loading } from './Loading';

interface Props {
  poolId: string;
  code: string;
}

export function Guesses({ poolId, code }: Props) {

  const toast = useToast();
  const [isLoading, setIsLoading] = useState(true)
  const [games, setGames] = useState<GameProps[]>([])

  const fetchGames = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/pools/${poolId}/games`);
      setGames(response.data.games);
    } catch (error) {
      console.error(error)
      toast.show({
        title: 'Não foi possível carregar os jogos',
        placement: 'top',
        bgColor: 'red.500'
      })
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchGames()
  }, [poolId]))

  if (isLoading) return <Loading />

  return (

    <FlatList
      data={games}
      keyExtractor={item => item.id}
      removeClippedSubviews={false}
      renderItem={({ item }) => (
        <Game
          data={item}
          poolId={poolId}
          fetchGames={fetchGames}
        />
      )}
      ListEmptyComponent={() => <EmptyGameList />}
    />
  );
}
