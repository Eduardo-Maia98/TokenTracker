import { ActivityIndicator, Pressable, Text, View } from 'react-native';

import { TokenUsageArcs } from '@/presentation/components/token-usage-arcs';
import { useTokenUsageArcs } from '@/presentation/viewmodels/use-token-usage-arcs';

export default function TokensScreen() {
  const { status, autoPercent, paidPercent, error, isRefreshing, refresh } =
    useTokenUsageArcs();

  if (status === 'disconnected') {
    return (
      <View className="flex-1 items-center justify-center bg-white px-5">
        <Text className="mb-2 text-2xl font-semibold text-black">Tokens</Text>
        <Text className="text-center text-base text-neutral-600">
          Connect your Cursor account on the Connect tab to see usage.
        </Text>
      </View>
    );
  }

  if (status === 'loading') {
    return (
      <View className="flex-1 items-center justify-center bg-white px-5">
        <ActivityIndicator />
        <Text className="mt-3 text-base text-neutral-600">Loading usage…</Text>
      </View>
    );
  }

  if (status === 'error') {
    return (
      <View className="flex-1 items-center justify-center bg-white px-5">
        <Text className="mb-2 text-center text-base text-red-600">
          {error ?? 'Failed to load usage'}
        </Text>
        <Pressable
          accessibilityRole="button"
          className="mt-3 min-h-[40px] min-w-[96px] items-center justify-center rounded-md bg-black px-4 py-2"
          disabled={isRefreshing}
          style={({ pressed }) => [{ opacity: pressed || isRefreshing ? 0.6 : 1 }]}
          onPress={() => {
            void refresh();
          }}
        >
          {isRefreshing ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-base font-medium text-white">Retry</Text>
          )}
        </Pressable>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center bg-white px-5">
      <Text className="mb-8 text-2xl font-semibold text-black">Tokens</Text>
      <TokenUsageArcs autoPercent={autoPercent} paidPercent={paidPercent} />
      <Pressable
        accessibilityRole="button"
        className="mt-8 min-h-[40px] min-w-[96px] items-center justify-center rounded-md border border-neutral-300 px-4 py-2 active:opacity-80"
        disabled={isRefreshing}
        onPress={() => {
          void refresh();
        }}
      >
        {isRefreshing ? (
          <ActivityIndicator color="#171717" />
        ) : (
          <Text className="text-base text-neutral-800">Refresh</Text>
        )}
      </Pressable>
    </View>
  );
}
