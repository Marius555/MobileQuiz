import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
const home = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
      <Button onPress={() => router.push("(auth)/(quiz)")}>Start Quiz</Button>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({});
