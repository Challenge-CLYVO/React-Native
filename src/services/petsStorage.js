import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'PETS';

export const salvarPets = async (pets) => {
  await AsyncStorage.setItem(KEY, JSON.stringify(pets));
};

export const buscarPets = async () => {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};