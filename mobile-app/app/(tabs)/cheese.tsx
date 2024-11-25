import { View, Text } from 'react-native';

import { Link } from 'expo-router'

export default function Cheese() {
  return (
    <View >
      <Text>Cheese</Text>
      <Link href="./sandwich">Sanwich</Link>
      <Link href="./">Home</Link>
    </View>
  );
}