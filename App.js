import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CarItem from "./components/CarItem";
export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        name={"Model X"}
        tagline={"Order online for"}
        taglineCTA={"Touchless Delivery"}
        image={require("./assets/images/Model3.jpeg")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});
