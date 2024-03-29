import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import styles from "./styles";
import cars from "./cars";
import CarItem from "../CarItem";
const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("screen").height}
        // cuon theo man hinh
        showsVerticalScrollIndicator={false}
      />
      {/* lay thong tin tu Cars */}
    </View>
  );
};

export default CarsList;
