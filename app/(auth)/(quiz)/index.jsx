import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Swiper from "react-native-deck-swiper";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
const CARD_DATA = [
  { id: 1, text: "Card 1" },
  { id: 2, text: "Card 2" },
  { id: 3, text: "Card 3" },
  { id: 4, text: "Card 4" },
  { id: 5, text: "Card 5" },
  { id: 6, text: "Card 6" },
  { id: 7, text: "Card 7" },
];

const SwiperScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwiped = (cardIndex) => {
    console.log("Swiped card index:", cardIndex);
    setCurrentIndex(cardIndex + 1);
  };

  const handleSwipeLeft = (cardIndex) => {
    console.log(`Swiped Left on Card ${CARD_DATA[cardIndex].text}`);
  };

  const handleSwipeRight = (cardIndex) => {
    console.log(`Swiped Right on Card ${CARD_DATA[cardIndex].text}`);
  };

  return (
    <SafeAreaView style={{flex:1, backgroundColor: "white" }}>

        <View style={{  paddingLeft: 20, paddingRight: 20, paddingTop: 10 , flexDirection: "row", justifyContent: "space-between"}}>
          <ArrowLeft size={30} color="black" onPress={() => router.push("(auth)/(tabs)/home")}/>
          <Image style={{width: 30, height: 30}} source={require("../../../assets/profile/profile.png")}/>
        </View>
        <View>
        <Swiper
          cards={CARD_DATA}
          cardIndex={currentIndex}
          renderCard={(card) => (
            <View style={styles.card}>
              <Text style={styles.text}>{card.text}</Text>
            </View>
          )}
          backgroundColor="transparent"
          onSwiped={handleSwiped}
          onSwipedLeft={handleSwipeLeft}
          onSwipedRight={handleSwipeRight}
          stackSize={3}
          showSecondCard={true}
          stackSeparation={1}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  backgroundColor: "red",
                  color: "white",
                  fontSize: 24,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  marginTop: 20,
                  marginLeft: -20,
                },
              },
            },
            right: {
              title: "LIKE",
              style: {
                label: {
                  backgroundColor: "green",
                  color: "white",
                  fontSize: 24,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: 20,
                  marginLeft: 20,
                },
              },
            },
          }}
          animateOverlayLabelsOpacity
          verticalSwipe={false}
        />
        </View>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: width * 0.9,
    height: height * 0.8,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 24,
    color: "#333",
  },
});

export default SwiperScreen;
