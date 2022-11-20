import { HStack } from 'native-base';
import CountryFlag from "react-native-country-flag";
import { GuessProps } from './Game';

import { Input } from './Input';

interface Props {
  code: string;
  position: 'left' | 'right';
  teamPoints: string;
  guess?: number
  onChangeTeamPoints: (value: string) => void;
}

export function Team({ code, position, teamPoints, onChangeTeamPoints, guess }: Props) {
  if (guess !== undefined) {
    onChangeTeamPoints(guess.toString())
  }
  return (
    <HStack alignItems="center">
      {position === 'left' && <CountryFlag isoCode={code} size={25} style={{ marginRight: 12 }} />}

      <Input
        w={10}
        h={9}
        textAlign="center"
        fontSize="xs"
        keyboardType="numeric"
        value={teamPoints}
        onChangeText={onChangeTeamPoints}
      />

      {position === 'right' && <CountryFlag isoCode={code} size={25} style={{ marginLeft: 12 }} />}
    </HStack>
  );
}