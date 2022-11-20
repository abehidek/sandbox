import { Button, HStack, Text, useTheme, useToast, VStack } from 'native-base';
import { X, Check } from 'phosphor-react-native';
import { getName } from 'country-list';

import { Team } from './Team';
import dayjs from 'dayjs';
import ptBR from 'dayjs/locale/pt-br'
import { useState } from 'react';
import { api } from '../services/api';

export interface GuessProps {
  id: string;
  gameId: string;
  createdAt: string;
  participantId: string;
  firstTeamPoints: number;
  secondTeamPoints: number;
}

export interface GameProps {
  id: string;
  date: string;
  firstTeamCountryCode: string;
  secondTeamCountryCode: string;
  guess: null | GuessProps;
};

interface Props {
  data: GameProps;
  poolId: string;
  fetchGames: () => Promise<void>
};

export function Game({ data, poolId, fetchGames }: Props) {
  const { colors, sizes } = useTheme();
  const [firstTeamPoints, setFirstTeamPoints] = useState('');
  const [secondTeamPoints, setSecondTeamPoints] = useState('');
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(true)

  const handleGuessConfirm = async (gameId: string) => {
    try {
      if (!firstTeamPoints.trim() || !secondTeamPoints.trim()) return toast.show({
        title: 'Informe o placar do palpite',
        placement: 'top',
        bgColor: 'red.500'
      })

      await api.post(`/pools/${poolId}/games/${gameId}/guesses`, {
        firstTeamPoints: Number(firstTeamPoints),
        secondTeamPoints: Number(secondTeamPoints)
      })

      toast.show({
        title: 'Palpite realizado com sucesso',
        placement: 'top',
        bgColor: 'green.500'
      })

      fetchGames();
    } catch (error) {
      toast.show({
        title: 'Não enviar o seu palpite',
        placement: 'top',
        bgColor: 'red.500'
      })
    }
  }

  return (
    <VStack
      w="full"
      bgColor="gray.800"
      rounded="sm"
      alignItems="center"
      borderBottomWidth={3}
      borderBottomColor="yellow.500"
      mb={3}
      p={4}
    >
      <Text color="gray.100" fontFamily="heading" fontSize="sm">
        {getName(data.firstTeamCountryCode)} vs. {getName(data.secondTeamCountryCode)}
      </Text>

      <Text color="gray.200" fontSize="xs">
        {dayjs(data.date).locale(ptBR).format('DD [de] MMMM [de] YYYY [às] HH:00[h]')}
      </Text>

      <HStack mt={4} w="full" justifyContent="space-between" alignItems="center">
        <Team
          code={data.firstTeamCountryCode}
          position="right"
          guess={data.guess?.firstTeamPoints}
          teamPoints={firstTeamPoints}
          onChangeTeamPoints={setFirstTeamPoints}
        />

        <X color={colors.gray[300]} size={sizes[6]} />

        <Team
          code={data.secondTeamCountryCode}
          position="left"
          guess={data.guess?.secondTeamPoints}
          teamPoints={secondTeamPoints}
          onChangeTeamPoints={setSecondTeamPoints}
        />
      </HStack>

      {
        !data.guess &&
        <Button size="xs" w="full" bgColor="green.500" mt={4} onPress={() => handleGuessConfirm(data.id)}>
          <HStack alignItems="center">
            <Text color="white" fontSize="xs" fontFamily="heading" mr={3}>
              CONFIRMAR PALPITE
            </Text>

            <Check color={colors.white} size={sizes[4]} />
          </HStack>
        </Button>
      }
    </VStack>
  );
}