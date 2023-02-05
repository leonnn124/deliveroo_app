import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = React.useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-100 flex-row items-center ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-1 pr-2">
          <Text className="text-lg mb-1">{name}</Text>

          <Text className="text-gray-400">{description}</Text>

          <Text className="text-gray-400 mt-2">
            <Currency quantity={price} currency="TWD" />
          </Text>
        </View>

        <View className="">
          <Image
            style={{
              borderWidth: 1,
              borderColor: "#F3F3F4",
            }}
            source={{ uri: urlFor(image).url() }}
            className="h-20 w-20 bg-gray-300 p-4"
          />
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity>
              <MinusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>

            <Text></Text>

            <TouchableOpacity>
              <PlusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
