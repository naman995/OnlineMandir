import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import MusicPlayer from "./MusicPlayer";

const MainScreen = () => {
  return (
    <SafeAreaView >
      <View>
        <MusicPlayer />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#555",
  },
  maincontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
