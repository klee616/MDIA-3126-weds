import { View, Text } from 'react-native';

import { Link } from 'expo-router'

export default function Page() {
  return (
    <View >
      <Text>Home</Text>
      <Link href="./cheese">Cheese</Link>
      <Link href="./sandwich">Sandwich</Link>
    </View>
  );
}