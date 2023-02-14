import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import Currency from "react-currency-formatter";
import * as Animatable from "react-native-animatable";

const BasketIcon = () => {
  const navigate = useNavigation();

  const basketTotal = useSelector(selectBasketTotal);

  const items = useSelector(selectBasketItems);

  if (items.length === 0) return null;

  return (
    <Animatable.View
      animation="slideInUp"
      iterationCount={1}
      duration={300}
      className="absolute bottom-10 w-full z-50"
    >
      <TouchableOpacity
        onPress={() => navigate.navigate("Basket")}
        className="bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1 mx-5"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={basketTotal} currency="TWD" />
        </Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default BasketIcon;
