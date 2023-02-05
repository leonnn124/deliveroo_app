import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

const Categroies = () => {
  const [categories, setCategories] = React.useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == 'category'] | order(_updatedAt desc)
        `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categroies;
