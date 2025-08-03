import { View, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import React from 'react';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#0D0D0D', justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../assets/images/learning.png')}
        style={{ width: 250, height: 250 }}
        resizeMode="contain"
      />
      <Text style={{ color: '#FFFFFF', fontSize: 24, marginTop: 20 }}>Welcome to LearnMate</Text>
      <Text style={{ color: '#CCCCCC', fontSize: 16, marginBottom: 40 }}>A Study Assistant</Text>

      <TouchableOpacity
        onPress={() => router.push('/login')}
        style={{ backgroundColor: '#3B82F6', paddingHorizontal: 30, paddingVertical: 12, borderRadius: 10 }}
      >
        <Text style={{ color: '#fff', fontSize: 16 }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

