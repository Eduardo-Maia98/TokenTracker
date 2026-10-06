import { Text, View } from 'react-native';

export default function TokensScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-5">
      <Text className="mb-2 text-2xl font-semibold text-black">Tokens</Text>
      <Text className="text-center text-base text-neutral-600">
        Token usage will appear here after the Cursor connection is ready.
      </Text>
    </View>
  );
}
