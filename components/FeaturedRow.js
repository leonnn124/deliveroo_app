import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row justify-between items-center mx-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 mx-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="mt-4"
      >
        {/* RestaurantCards */}
        <RestaurantCard
          id={1}
          imgUrl="https://rs-menus-api.roocdn.com/images/91670a9c-4755-45c1-a172-65471ec2dffd/image.jpeg?width=524.0000078082085&height=294.0000043809414&auto=webp&format=jpg&fit=crop&v="
          title="Burger King"
          rating={4.8}
          genre="Burgers"
          address="North Rd"
          short_description="description"
          dishes={{}}
          long={0}
          lat={0}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://rs-menus-api.roocdn.com/images/91670a9c-4755-45c1-a172-65471ec2dffd/image.jpeg?width=524.0000078082085&height=294.0000043809414&auto=webp&format=jpg&fit=crop&v="
          title="Burger King"
          rating={4.8}
          genre="Burgers"
          address="North Rd"
          short_description="description"
          dishes={{}}
          long={0}
          lat={0}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://rs-menus-api.roocdn.com/images/91670a9c-4755-45c1-a172-65471ec2dffd/image.jpeg?width=524.0000078082085&height=294.0000043809414&auto=webp&format=jpg&fit=crop&v="
          title="Burger King"
          rating={4.8}
          genre="Burgers"
          address="North Rd"
          short_description="description"
          dishes={{}}
          long={0}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
