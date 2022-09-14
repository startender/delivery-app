import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}

      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="123" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="124" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="214" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="123" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="124" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="214" />
    </ScrollView>
  );
};

export default Categories;
