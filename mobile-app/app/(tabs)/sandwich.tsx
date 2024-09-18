import { View, Text } from 'react-native';

import { Link } from 'expo-router'

export default function Sandwich() {
  return (
    <View >
      <Text>Sandwich</Text>

      <Link href="./cheese">Cheese</Link>
      <Link href="./">Home</Link>
    </View>
  );
}