import React from "react";
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import styles from "../Views/Styles/Index";
import Colors from "../Colors";
import fonts from "../fonts";
import { SvgXml } from "react-native-svg";
import { svgs } from "../Views/svg";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
const discussions = [
  { id: 1, name: "Saad14", message: "نص الرسالة", time: "قبل 11 ثانية" },
  { id: 2, name: "Saad14", message: "نص الرسالة", time: "قبل 11 ثانية" },
  { id: 3, name: "Saad14", message: "نص الرسالة", time: "قبل 11 ثانية" },
];

const DiscussionItem = ({ name, message, time, onPress }: any) => (
  
  <Pressable onPress={onPress} style={styl.discisionContainer}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
      <SvgXml xml={svgs[0].arrowL} />
      <Text style={styl.time}>{time}</Text>
    </View>
    <View style={styl.nameAndIconContainer}>
      <View style={styl.nameAndMessage}>
        <Text style={styl.name}>{name}</Text>
        <Text style={styl.message}>{message}</Text>
      </View>
      <SvgXml xml={svgs[0].icoP} />
    </View>
  </Pressable>
);

export default function Chat() {
  const navigation: any = useNavigation();
  const { width } = Dimensions.get("window");
  const dispatch = useDispatch();

  const handleDiscussionPress = (id: number) => {
    console.log(`Discussion ${id} pressed!`);
    navigation.navigate("chat")
  };

  return (
    <View style={styles.viewContainer}>
      <View
        style={{
          paddingHorizontal: width * 0.04,
          flex: 1,
          overflow: "hidden",
        }}
      >
        {/* Connected Status Section */}
        <View style={styl.conectedContainer}>
          <Text style={styl.textConected}>0</Text>
          <View style={{ flex: 1, height: 1, backgroundColor: Colors.DEFAULT_WHITE }} />
          <Text style={styl.textConected}>متصل</Text>
        </View>

        {/* Chat Section */}
        <View style={styl.chatfContainer}>
          {discussions.map(({ id, name, message, time }) => (
            <DiscussionItem
              key={id}
              name={name}
              message={message}
              time={time}
              onPress={() => handleDiscussionPress(id)}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styl = StyleSheet.create({
  conectedContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 16,
    borderRadius: 16,
    backgroundColor: Colors.BACKGROUND_5,
    gap: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  textConected: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 10,
    fontFamily: fonts.almaraiBold,
  },
  chatfContainer: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 16,
    backgroundColor: Colors.BACKGROUND_5,
  },
  discisionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.BACKGROUND_4,
  },
  name: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 13.76,
    fontFamily: fonts.almaraiBold,
  },
  message: {
    color: "#CACCD1",
    fontSize: 10,
    fontFamily: fonts.almaraiRegular,
  },
  time: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 8,
    fontFamily: fonts.almaraiRegular,
    marginBottom: 10,
  },
  nameAndIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  nameAndMessage: {
    flexDirection: "column",
    gap: 4,
  },
});
