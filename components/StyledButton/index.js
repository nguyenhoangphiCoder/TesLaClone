import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";

const StyledButton = (props) => {
  // const type = props.type;
  // const content = props.content;
  // const onPress = props.onPress;
  const { type, onPress, content } = props;
  const backgroundColor = type === "primary" ? "black" : "#ffffffA6";
  const textColor = type === "primary" ? "white" : "black";
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
