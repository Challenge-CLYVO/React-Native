import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'LEMBRETES';

export const salvarLembretes = async (lembretes) => {
  await AsyncStorage.setItem(KEY, JSON.stringify(lembretes));
};

export const buscarLembretes = async () => {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};