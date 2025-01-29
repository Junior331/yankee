import { useRouter } from "expo-router";
import { Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Text, View } from '@/components/Themed';

export default function signin() {
  const navigation = useNavigation<any>();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Button title="Go to SignUp" onPress={() => navigation.navigate('signup')} />
      <Button title="Go to Home" onPress={() => router.push("/(tabs)/two")} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
