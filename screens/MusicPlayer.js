import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

const MusicPlayer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>MusicPlayer</Text>
      </View>
    </SafeAreaView>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#555",
  },
  maincontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
