import React from "react";
import { StyleSheet, Text, Vi2ew, Image } from "react-native";

export default function loginScreen() {
  return (
    /* Background */
    <View style={styles.header}>
      <Image
        source={require("../assets/wayfinder-logo.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#2D2D2D",
  },
});
