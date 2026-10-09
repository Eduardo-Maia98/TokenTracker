import { useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';

import { useCursorConnect } from '@/presentation/viewmodels/use-cursor-connect';

export default function ConnectScreen() {
  const {
    status,
    account,
    isLoading,
    isConnecting,
    isDisconnecting,
    error,
    connect,
    disconnect,
  } = useCursorConnect();
  const [token, setToken] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);

  const busy = isConnecting || isDisconnecting;

  async function onConnect() {
    setLocalError(null);
    try {
      await connect(token);
      setToken('');
    } catch (cause) {
      setLocalError(
        cause instanceof Error ? cause.message : 'Failed to connect to Cursor',
      );
    }
  }

  async function onDisconnect() {
    setLocalError(null);
    try {
      await disconnect();
    } catch (cause) {
      setLocalError(
        cause instanceof Error ? cause.message : 'Failed to disconnect',
      );
    }
  }

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator />
      </View>
    );
  }

  const displayError = localError ?? error;

  return (
    <View className="flex-1 bg-white px-5 pt-6">
      <Text className="mb-2 text-2xl font-semibold text-black">Connect</Text>
      <Text className="mb-6 text-base text-neutral-600">
        Paste your Cursor WorkosCursorSessionToken cookie from cursor.com to
        validate account and plan.
      </Text>

      {status === 'connected' && account != null ? (
        <View className="mb-6 rounded-lg border border-neutral-200 p-4">
          <Text className="mb-2 text-lg font-semibold text-green-700">
            Connected
          </Text>
          <Text className="text-base text-black">Email: {account.email}</Text>
          <Text className="mt-1 text-base text-black">Plan: {account.plan}</Text>
        </View>
      ) : (
        <View className="mb-4">
          <Text className="mb-2 text-sm font-medium text-neutral-700">
            Session token
          </Text>
          <TextInput
            className="min-h-[100px] rounded-lg border border-neutral-300 px-3 py-2 text-base text-black"
            value={token}
            onChangeText={setToken}
            placeholder="WorkosCursorSessionToken=…"
            placeholderTextColor="#9CA3AF"
            autoCapitalize="none"
            autoCorrect={false}
            multiline
            editable={!busy}
          />
        </View>
      )}

      {displayError != null ? (
        <Text className="mb-4 text-sm text-red-600">{displayError}</Text>
      ) : null}

      {status === 'connected' ? (
        <Pressable
          className="items-center rounded-lg bg-neutral-900 px-4 py-3"
          disabled={busy}
          style={({ pressed }) => [{ opacity: pressed || busy ? 0.6 : 1 }]}
          onPress={() => {
            void onDisconnect();
          }}>
          {isDisconnecting ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-base font-medium text-white">Disconnect</Text>
          )}
        </Pressable>
      ) : (
        <Pressable
          className="items-center rounded-lg bg-neutral-900 px-4 py-3"
          disabled={busy || token.trim().length === 0}
          style={({ pressed }) => [
            {
              opacity:
                pressed || busy || token.trim().length === 0 ? 0.6 : 1,
            },
          ]}
          onPress={() => {
            void onConnect();
          }}>
          {isConnecting ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-base font-medium text-white">Connect</Text>
          )}
        </Pressable>
      )}
    </View>
  );
}
