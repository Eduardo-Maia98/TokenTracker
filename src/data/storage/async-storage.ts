import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Thin Async Storage wrapper for non-sensitive key-value data.
 * Do not store secrets here — use SecureStore in a dedicated feature.
 */
export namespace AppStorage {
  export async function getString(key: string): Promise<string | null> {
    return AsyncStorage.getItem(key);
  }

  export async function setString(key: string, value: string): Promise<void> {
    await AsyncStorage.setItem(key, value);
  }

  export async function getJson<T>(key: string): Promise<T | null> {
    const raw = await AsyncStorage.getItem(key);
    if (raw == null) {
      return null;
    }

    try {
      return JSON.parse(raw) as T;
    } catch (cause) {
      throw new Error(`Failed to parse AsyncStorage JSON for key "${key}"`, { cause });
    }
  }

  export async function setJson(key: string, value: unknown): Promise<void> {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }

  export async function remove(key: string): Promise<void> {
    await AsyncStorage.removeItem(key);
  }

  export async function clear(): Promise<void> {
    await AsyncStorage.clear();
  }
}
