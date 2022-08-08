import { View, Text, StyleSheet } from "react-native";
import React from "react";

const blue = "#3777f0";
const grey = "lightgray";

const Message = () => {
  const isMe = true;

  return (
    <View style={[styles.container, { backgroundColor: isMe ? grey : blue }]}>
      <Text style={styles.text}>Message</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3777f0",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: "75%",
  },
  text: {
    color: "white",
  },
});

export default Message;
