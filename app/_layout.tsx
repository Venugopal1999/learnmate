import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: () => <Ionicons name="home" size={20} /> }} />
      <Tabs.Screen name="upload" options={{ title: "Upload", tabBarIcon: () => <Ionicons name="cloud-upload" size={20} /> }} />
      <Tabs.Screen name="summary" options={{ title: "Summary", tabBarIcon: () => <Ionicons name="document-text" size={20} /> }} />
      <Tabs.Screen name="history" options={{ title: "History", tabBarIcon: () => <Ionicons name="time" size={20} /> }} />
      <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon: () => <Ionicons name="person" size={20} /> }} />
    </Tabs>
  );
}

