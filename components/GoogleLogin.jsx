import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "tamagui";
import { signInWithGoogle } from "../appWrite";
import { useCustomContext } from "./Context";
import { deleteSession } from "../appWrite";
import { AntDesign } from "@expo/vector-icons";
import { deleteSessionDevice } from "./Context";

export default function GoogleLogin() {
  const { LocalSession, setLocalSession, getSessionDevice } = useCustomContext();

  const Logout = async() =>{
    const res = await deleteSession()
    if(res.success){
      await setLocalSession(null)
    }
  }
  const LogIn = async() =>{
    const res = await signInWithGoogle(setLocalSession)
    console.log(res)
    // if(res.success){
    //   await setLocalSession(res.session)
    // }
  }

    return (
    <View style={styles.container}>
      {LocalSession ? (
        <Button
          onPress={Logout}
        >
          Logout
        </Button>
      ) : (
        <Button
          icon={<AntDesign name="google" size={20} color="white" />}
          onPress={LogIn}
        >
          Google Login
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
