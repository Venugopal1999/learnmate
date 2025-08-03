// // app/upload.tsx
// import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
// import { useRouter } from 'expo-router';

// export default function UploadScreen() {
//   const router = useRouter();
//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../assets/images/upload.png')}
//         style={styles.image}
//         resizeMode="contain"
//       />


//       <Text style={styles.title}>Note Upload</Text>
//       <Text style={styles.subtitle}>Upload your file below</Text>

//       <TextInput
//   style={styles.noteInput}
//   placeholder="Paste or type your notes here..."
//   placeholderTextColor="#888"
//   multiline
//   numberOfLines={6}
// />

//       <TouchableOpacity style={styles.uploadButton}>
//         <Text style={styles.uploadText}>Upload File</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.aiButton} onPress={() => router.push('/summary')}>
//         <Text style={styles.aiButtonText}>AI Summary</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     paddingHorizontal: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     height: 180,
//     width: 180,
//     marginBottom: 32,
//   },
//   title: {
//     fontSize: 24,
//     color: '#fff',
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#aaa',
//     marginBottom: 24,
//   },
//   uploadButton: {
//     backgroundColor: '#1f2937',
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//     marginBottom: 16,
//   },
//   uploadText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   aiButton: {
//     backgroundColor: '#3B82F6',
//     paddingVertical: 14,
//     borderRadius: 8,
//     width: '100%',
//     alignItems: 'center',
//   },
//   aiButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   noteInput: {
//   backgroundColor: '#1a1a1a',
//   color: '#fff',
//   borderRadius: 8,
//   padding: 12,
//   width: '100%',
//   textAlignVertical: 'top',
//   marginBottom: 20,
// }

// });

// @ts-ignore
import { GROQ_API_KEY } from '@env';

import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function UploadScreen() {
  const router = useRouter();
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAISummary = async () => {
    if (!note.trim()) {
      Alert.alert('Note is empty', 'Please enter some text to summarize.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`, // 🔐 Replace this
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'user',
              content: `Summarize this in simple words:\n\n${note}`,
            },
          ],
          model: 'llama3-8b-8192',
        }),
      });

      const data = await res.json();
      const summary = data?.choices?.[0]?.message?.content;

      if (summary) {
        router.push({
          pathname: '/summary',
          params: { result: summary },
        });
      } else {
        Alert.alert('Error', 'No summary returned from AI.');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Something went wrong while summarizing.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/upload.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Note Upload</Text>
      <Text style={styles.subtitle}>Paste or type your notes below</Text>

      <TextInput
        placeholder="Paste your note here..."
        placeholderTextColor="#888"
        style={styles.textInput}
        multiline
        numberOfLines={6}
        value={note}
        onChangeText={setNote}
      />

      <TouchableOpacity style={styles.aiButton} onPress={handleAISummary} disabled={loading}>
        <Text style={styles.aiButtonText}>
          {loading ? 'Summarizing...' : 'AI Summary'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 180,
    width: 180,
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 16,
  },
  textInput: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    borderRadius: 8,
    padding: 12,
    width: '100%',
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  aiButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 14,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  aiButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

