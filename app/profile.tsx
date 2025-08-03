// app/profile.tsx
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#000' : '#f4f4f4' }]}>
      <Image
        source={require('../assets/images/profile-pic.png')}
        style={styles.profileImage}
      />

      <Text style={[styles.name, { color: darkMode ? '#fff' : '#000' }]}>Venugopal K.</Text>
      <Text style={[styles.email, { color: darkMode ? '#aaa' : '#555' }]}>venu@example.com</Text>

      <View style={styles.switchRow}>
        <Text style={[styles.label, { color: darkMode ? '#fff' : '#000' }]}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/history')}
      >
        <Text style={styles.buttonText}>View History</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#ef4444' }]}
        onPress={() => router.replace('/login')}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 24,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    marginBottom: 24,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    gap: 12,
  },
  label: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 10,
    marginBottom: 16,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

