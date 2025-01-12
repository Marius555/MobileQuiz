import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomSheet from '../components/BottomSheet'
import { Button } from 'tamagui'
import { router } from 'expo-router'

const index = () => {
  return (
    <SafeAreaView style={{flex: 1, alignContent: "center", justifyContent: "center"}}>
      <Text>this is my app</Text>
      <BottomSheet/>
      <Button onPress={() => router.push("(auth)/(tabs)/home")}>tab</Button>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})