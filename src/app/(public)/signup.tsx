import { Button, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { useNavigation } from "@react-navigation/native";

export default function signup() {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Button title="Go to SignUp" onPress={() => navigation.navigate('index')} />
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
