import React, { useState } from "react";
import { Button, Text, Sheet } from "tamagui";
import { signInWithGoogle } from "../appWrite";
import { useCustomContext } from "./Context";
import Animated from "react-native-reanimated";
import { View } from "tamagui";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Redirect, router } from "expo-router";


const BottomSheet = () => {
  const [open, setOpen] = useState(false);
  const { LocalSession, setLocalSession } =
    useCustomContext();

  const LogIn = async () => {
    const res = await signInWithGoogle();
    if (res.success === true) {
      setLocalSession(res.session);
      setOpen(false);
      // <Redirect href={router.replace("(auth)/(tabs)/home")} />
    }
  };

  return (
    <View>
      <Button onPress={() => setOpen(true)}>Open Sheet</Button>

      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[70, 90]} 
        dismissOnSnapToBottom
        native
        animation={false}
      >
        <Sheet.Overlay
          animation="lazy"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Sheet.Handle />

        <Sheet.Frame
          flex={1}
          backgroundColor="$background"
          borderTopLeftRadius="$4"
          borderTopRightRadius="$4"
          padding="$4"
        >
          <Text fontSize="$8" fontWeight="bold" marginBottom="$3">
            Login To Continue
          </Text>
          <Text marginBottom="$3">Please Choose Login In Method</Text>
          <Button size={60} icon={<AntDesign name="google" size={24} color="white" />} onPress={LogIn}>GOOGLE</Button>
        </Sheet.Frame>
      </Sheet>
    </View>
  );
};

export default BottomSheet;
