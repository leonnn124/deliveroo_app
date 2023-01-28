import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import { CategoryCardData } from "../Data/CategoryCardData";

const Categroies = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      {CategoryCardData.map(({ id, imgUrl, title }) => (
        <CategoryCard key={id} imgUrl={imgUrl} title={title} />
      ))}
    </ScrollView>
  );
};

export default Categroies;
