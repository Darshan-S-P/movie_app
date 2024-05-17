import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subCtn}>
        <Text>This is your user onboarding screen</Text>
        <TouchableOpacity
          onPress={() => router.push("/home")}
          style={styles.btn}
        >
          <Text style={styles.whiteText}>Click to continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  subCtn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  btn: {
    paddingVertical: "10px",
    paddingHorizontal: "16px",
    backgroundColor: "blue",
    borderRadius: "8px",
  },
  whiteText: {
    color: "white",
  },
});
