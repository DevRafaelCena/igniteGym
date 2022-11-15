import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { VStack, HStack } from 'native-base';

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />

      <HStack>
        <Group name="Costa" />
        <Group name="ombro" />
      </HStack>
    </VStack>
  );
}