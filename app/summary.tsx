// // app/summary.tsx
// import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

// export default function SummaryScreen() {
//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../assets/images/receipt.png')}
//         style={styles.image}
//         resizeMode="contain"
//       />

//       <Text style={styles.title}>AI Summary</Text>

//       <ScrollView style={styles.summaryBox}>
//         <Text style={styles.summaryText}>
//           • Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize food from carbon dioxide and water.{"\n\n"}
//           • It takes place in chloroplasts, primarily using chlorophyll.{"\n\n"}
//           • Oxygen is released as a byproduct.{"\n\n"}
//           • Light-dependent and light-independent (Calvin cycle) reactions are the two main stages.{"\n\n"}
//           • Factors affecting it include light intensity, carbon dioxide concentration, and temperature.
//         </Text>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     padding: 20,
//     alignItems: 'center',
//   },
//   image: {
//     width: 180,
//     height: 180,
//     marginBottom: 20,
//   },
//   title: {
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 12,
//   },
//   summaryBox: {
//     backgroundColor: '#1f2937',
//     borderRadius: 10,
//     padding: 16,
//     width: '100%',
//     maxHeight: '60%',
//   },
//   summaryText: {
//     color: '#fff',
//     fontSize: 16,
//     lineHeight: 24,
//   },
// });

import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function SummaryScreen() {
  const { result } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/receipt.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>AI Summary</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryText}>{result || 'No summary found.'}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 24,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  scrollContainer: {
    paddingBottom: 40,
    width: width - 40,
  },
  summaryBox: {
    backgroundColor: '#1f2937',
    borderRadius: 12,
    padding: 18,
  },
  summaryText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
  },
});




// app/summary.tsx
// import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native';
// import { useEffect, useState } from 'react';
// import { getAISummary } from '../lib/groq';

// export default function SummaryScreen() {
//   const [summary, setSummary] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSummary = async () => {
//       try {
//         const result = await getAISummary('Explain photosynthesis in 5 bullet points');
//         setSummary(result);
//       } catch (err) {
//         setSummary('Failed to fetch summary. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSummary();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../assets/images/receipt.png')}
//         style={styles.image}
//         resizeMode="contain"
//       />

//       <Text style={styles.title}>AI Summary</Text>

//       <ScrollView style={styles.summaryBox}>
//         {loading ? (
//           <ActivityIndicator size="large" color="#3B82F6" />
//         ) : (
//           <Text style={styles.summaryText}>{summary}</Text>
//         )}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     padding: 20,
//     alignItems: 'center',
//   },
//   image: {
//     width: 180,
//     height: 180,
//     marginBottom: 20,
//   },
//   title: {
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 12,
//   },
//   summaryBox: {
//     backgroundColor: '#1f2937',
//     borderRadius: 10,
//     padding: 16,
//     width: '100%',
//     maxHeight: '60%',
//   },
//   summaryText: {
//     color: '#fff',
//     fontSize: 16,
//     lineHeight: 24,
//   },
// });




// import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native';
// import { useEffect, useState } from 'react';

// export default function SummaryScreen() {
//   const [loading, setLoading] = useState(true);
//   const [summary, setSummary] = useState('');

//   useEffect(() => {
//     // Simulate API delay
//     setTimeout(() => {
//       setSummary(
//         `• Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize food from carbon dioxide and water.\n\n` +
//         `• It takes place in chloroplasts, primarily using chlorophyll.\n\n` +
//         `• Oxygen is released as a byproduct.\n\n` +
//         `• Light-dependent and light-independent (Calvin cycle) reactions are the two main stages.\n\n` +
//         `• Factors affecting it include light intensity, carbon dioxide concentration, and temperature.`
//       );
//       setLoading(false);
//     }, 1500); // 1.5 sec delay
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../assets/images/receipt.png')}
//         style={styles.image}
//         resizeMode="contain"
//       />

//       <Text style={styles.title}>AI Summary</Text>

//       {loading ? (
//         <ActivityIndicator size="large" color="#3B82F6" style={{ marginTop: 32 }} />
//       ) : (
//         <ScrollView style={styles.summaryBox}>
//           <Text style={styles.summaryText}>{summary}</Text>
//         </ScrollView>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     padding: 20,
//     alignItems: 'center',
//   },
//   image: {
//     width: 180,
//     height: 180,
//     marginBottom: 20,
//   },
//   title: {
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 12,
//   },
//   summaryBox: {
//     backgroundColor: '#1f2937',
//     borderRadius: 10,
//     padding: 16,
//     width: '100%',
//     maxHeight: '60%',
//   },
//   summaryText: {
//     color: '#fff',
//     fontSize: 16,
//     lineHeight: 24,
//   },
// });
