import { SafeAreaView } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);
  }, []);

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 items-center justify-center space-y-24 ">
      <Animatable.Image
        source={require("../assets/drive.png")}
        animation="slideInUp"
        iterationCount={1}
        className="h-48 w-48"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-4xl font-extrabold text-white tracking-[3px]"
      >
        Deliveroo
      </Animatable.Text>
    </SafeAreaView>
  );
};

export default LoadingScreen;
