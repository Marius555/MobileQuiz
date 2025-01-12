import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "tamagui";
import { useCustomContext } from "../../../components/Context";
import { CircleUser } from "@tamagui/lucide-icons";
import { ArrowRight } from "@tamagui/lucide-icons";
import { Button } from "tamagui";
import { Wallet } from "@tamagui/lucide-icons";
import { Lock } from "@tamagui/lucide-icons";
import { Bell } from "@tamagui/lucide-icons";
import { LogOut } from "@tamagui/lucide-icons";
import { deleteSession } from "../../../appWrite";
import { Redirect } from "expo-router";
import { router } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const settings = () => {
  const { LocalSession, setLocalSession, getSessionDevice } =
    useCustomContext();

  const LogOutSession = async () => {
    const isDeleted = await deleteSession();
    if (isDeleted.success) {
      setLocalSession(null);
      return <Redirect href={router.replace("/")} />;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        {LocalSession ? (
          <>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginLeft: 10,
              }}
            >
              <View style={{ position: "relative", width: 150, height: 150}}>
                <Image
                  source={require("../../../assets/profile/profile.png")}
                  style={{ width: 150, height: 150 }}
                />
                <View style={{position: "absolute", right: 10, top: 10, borderWidth: 2, padding: 5, borderRadius: 50, backgroundColor: "white", borderColor:"blue"}}>
                  <MaterialIcons  name="edit" size={24} color="blue" />
                </View>
              </View>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 25 }}>
                  {LocalSession?.session?.name}
                </Text>
                <Text>{LocalSession?.session?.email}</Text>
              </View>
            </View>

            <View style={{ marginTop: 20, gap: 10 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  marginBottom:10,
                  marginLeft: 10,
                }}
              >
                Profile Settings
              </Text>
              <Button
                style={{
                  justifyContent: "space-between",
                  marginLeft: 10,
                  marginRight: 10,
                }}
                size={55}
                icon={<CircleUser size={24} color="white" />}
                iconAfter={<ArrowRight size={24} color="white" />}
              >
                Personal information
              </Button>
              <Button
                style={{
                  justifyContent: "space-between",
                  marginLeft: 10,
                  marginRight: 10,
                }}
                size={55}
                icon={<Wallet size={24} color="white" />}
                iconAfter={<ArrowRight size={24} color="white" />}
              >
                Payments and Payouts
              </Button>
              <Button
                style={{
                  justifyContent: "space-between",
                  marginLeft: 10,
                  marginRight: 10,
                }}
                size={55}
                icon={<Lock size={24} color="white" />}
                iconAfter={<ArrowRight size={24} color="white" />}
              >
                Payments and Payouts
              </Button>
              <Button
                style={{
                  justifyContent: "space-between",
                  marginLeft: 10,
                  marginRight: 10,
                }}
                size={55}
                icon={<Bell size={24} color="white" />}
                iconAfter={<ArrowRight size={24} color="white" />}
              >
                Notifications
              </Button>
              <Button
                onPress={LogOutSession}
                color="red"
                style={{ marginLeft: 10, marginRight: 10 }}
                size={55}
                iconAfter={<LogOut size={24} color="red" />}
              >
                Logout
              </Button>
            </View>
          </>
        ) : (
          <Text style={{ flex: 1 }}>No Active Session</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default settings;

const styles = StyleSheet.create({});
