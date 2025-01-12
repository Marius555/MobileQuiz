import { StyleSheet } from "react-native";
import React from "react";
import {  Stack } from "expo-router";
import { View } from "tamagui";


const RootLayout = () => {
 

  return (
    <View flex={1} >
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,

          }}
        />
        <Stack.Screen
          name="(quiz)/index"
          options={{
            headerShown: false,

          }}
        />
      </Stack>
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
