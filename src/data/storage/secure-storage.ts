import * as SecureStore from 'expo-secure-store';

/**
 * Thin SecureStore wrapper for sensitive credentials (session tokens, API keys).
 * Do not put non-secrets here — use AppStorage (AsyncStorage) instead.
 */
export namespace SecureStorage {
  export async function getString(key: string): Promise<string | null> {
    return SecureStore.getItemAsync(key);
  }

  export async function setString(key: string, value: string): Promise<void> {
    await SecureStore.setItemAsync(key, value);
  }

  export async function remove(key: string): Promise<void> {
    await SecureStore.deleteItemAsync(key);
  }

  export async function isAvailable(): Promise<boolean> {
    return SecureStore.isAvailableAsync();
  }
}
