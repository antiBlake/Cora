import { Image, StyleSheet, Platform, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View className="flex justify-center items-center">
      <Text className="text-white font-bold"> Hello Aora</Text>
      <StatusBar style="auto" />
    </View>
  )
}

