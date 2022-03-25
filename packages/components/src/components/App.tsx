import React from "react";
import { StyleSheet, View } from "react-native";
import Home from "./Home";

const styles = StyleSheet.create({
  box: { padding: 10, justifyContent: "center", alignItems: "center", flex: 1 },
  text: { fontWeight: "bold" },
});

export function App() {
  return (
    <View style={styles.box}>
      <Home />
    </View>
  );
}
