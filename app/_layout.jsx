import { Stack } from "expo-router";
import { createTamagui } from "tamagui";
import { config } from "@tamagui/config/v3";
import { useFonts } from "expo-font";
import { Theme } from "@tamagui/core";
import { useEffect } from "react";
import { PortalProvider } from '@tamagui/portal'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TamaguiProvider } from "@tamagui/core";
import ContextProvider from "../components/Context";
import { StatusBar } from "expo-status-bar";


export function RootLayout() {
  const tamaguiConfig = createTamagui(config);
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <ContextProvider>
      <SafeAreaProvider>
        <PortalProvider shouldAddRootHost>
          <TamaguiProvider config={tamaguiConfig}>
            <Theme name="dark">
              <StatusBar style="white" />
              <Stack screenOptions={{animation: "ios_from_right"}}>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="google/index" options={{ headerShown: false }} />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
              </Stack>
            </Theme>
          </TamaguiProvider>
        </PortalProvider>
      </SafeAreaProvider>
    </ContextProvider>
  );
}
export default RootLayout;
