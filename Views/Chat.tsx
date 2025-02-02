import React, { useRef } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { BlurView } from "expo-blur";
import { ArrowRight2, Gift } from "iconsax-react-native";
import ProfileCard from "../Components/ProfileCard";
import Chatroom from "../Components/Chatroom";
import { SvgXml } from "react-native-svg";
import { svgs } from "./svg";
import styles from "./Styles/Index";
import Colors from "../Colors";
import fonts from "../fonts";
import { icons } from "./icons";
import LinearGradient from "react-native-svg";
export default function Chat() {
  const bottomSheetRef = useRef<any>(null);

  const openBottomSheet:any = () => {
    bottomSheetRef.current?.expand();
  };

  const shadow = StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: Colors.NEUTRALS,
      borderRadius: 8,
      shadowColor: "#0000004D",
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 6.8,
      elevation: 10,
    },
    text: {
      color:Colors.PRIMARY_600,
      fontFamily: fonts.almaraiRegular,
    },
    blurContainer: {
      width: "100%",
      overflow: "hidden",
      backgroundColor: Colors.BACKGROUND_3,
      alignItems: "center",
      justifyContent: "center",
      borderBottomEndRadius: 24,
      borderBottomStartRadius: 24,
    },
    imageContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      gap: 48,
      paddingBottom: 35,
    },
    isideContainer: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
    },
    gradientBorder: {
      padding: 6,
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center",
    },
    iconContainer: {
      backgroundColor:Colors.BACKGROUND_3,
      borderRadius: 100,
      position: "relative",
    },
    blurContainer2: {
      width: "100%",
      overflow: "hidden",
      backgroundColor: Colors.BACKGROUND_3,
      alignItems: "center",
      justifyContent: "center",
      borderTopEndRadius: 24,
      borderTopStartRadius: 24,
    },
    inputContainer: {
      width: 270,
      paddingVertical: 8,
      borderRadius: 28,
      backgroundColor: Colors.BACKGROUND_4,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonContainer: {
      borderRadius: 6.29,
      flexDirection: "row",
      gap: 6,
      backgroundColor: "#FFAF36",
      paddingHorizontal: 7,
      paddingVertical: 8,
      shadowColor: "#FFCF0B",
      shadowOpacity: 0.8,
      shadowRadius: 1,
      elevation: 5,
    },
    blContainer: {
      width: "100%",
      gap: 8,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row-reverse",
    },
  });

  return (
    <View style={styles.viewContainer}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/plagin.png")}
        resizeMode="cover"
        imageStyle={{
          opacity: 0.1,
        }}
      >
        <BlurView intensity={5} tint="dark" style={shadow.blurContainer}>
          <View style={{ width: "100%", flexDirection: "column" }}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                paddingVertical: 36,
                zIndex: 7,
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 32,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor:Colors.BACKGROUND_5,
                  borderRadius: 16,
                  alignItems: "center",
                  padding: 12,
                  gap: 4,
                }}
              >
                <SvgXml xml={svgs[0].rocket} />
                <Text
                  style={{ color:Colors.BACKGROUND_3, fontFamily: "Almarai_Regular" }}
                >
                  قائمة الكرام
                </Text>
              </View>
              <View style={shadow.container}>
                <Text style={shadow.text}> الدردشة</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: Colors.BACKGROUND_5,
                  borderRadius: 16,
                  alignItems: "center",
                  paddingVertical: 12,
                  gap: 4,
                  paddingHorizontal: 30.5,
                }}
              >
                <Text
                  style={{ color: Colors.BACKGROUND_3, fontFamily: "Almarai_Regular" }}
                >
                  عودة
                </Text>
                <ArrowRight2 size={16} color={Colors.BACKGROUND_3} />
              </View>
            </View>
            <View style={shadow.imageContainer}>
              <Pressable onPress={openBottomSheet}>
                <ProfileCard
                  gradientColors={["#F3EBE1", "#CCB28D", "#B08D57", "#F3EBE1"]}
                  profileSvg={svgs[0].profile}
                  badgeSvg={svgs[0].bag3}
                  smallCardSvg={svgs[0].smalCards}
                  name="Saad14"
                  giftCount="152 ألفاً"
                />
              </Pressable>
              <Pressable onPress={openBottomSheet}>
                <ProfileCard
                  gradientColors={[
                    "#FFF8C1",
                    "#C2E8FD",
                    "#909090",
                    "#DDDDDD",
                    "#FFFFFF",
                  ]}
                  profileSvg={svgs[0].profile}
                  badgeSvg={svgs[0].badge3}
                  smallCardSvg={svgs[0].smalCards}
                  name="Saad14"
                  giftCount="200 ألفاً"
                />
              </Pressable>
              <Pressable onPress={openBottomSheet}>
                <ProfileCard
                  gradientColors={["#FFFCA8", "#FDB836", "#FDC966", "#F1DC83"]}
                  profileSvg={svgs[0].profile}
                  badgeSvg={svgs[0].badge2}
                  smallCardSvg={svgs[0].smalCards}
                  name="Saad14"
                  giftCount="500 ألفاً"
                />
              </Pressable>
            </View>
          </View>
        </BlurView>
        <Chatroom />
        <BlurView
          intensity={5}
          tint="dark"
          style={{ ...shadow.blurContainer2 }}
        >
          <View
            style={{ width: "100%", paddingVertical: 32, paddingHorizontal: 16 }}
          >
            <View style={shadow.blContainer}>
              <View style={shadow.inputContainer}>
                <Text
                  style={{
                    fontFamily: fonts.almaraiRegular,
                    color: "#9C9FA6",
                    fontSize: 12,
                  }}
                >
                  هذه الخاصية متوفرة فقط للمشتركين
                </Text>
              </View>
              <View style={shadow.buttonContainer}>
                <Text
                  style={{
                    fontFamily: fonts.almaraiBold,
                    color: Colors.DEFAULT_WHITE,
                    fontSize: 12,
                  }}
                >
                  إهداء
                </Text>
                <SvgXml xml={icons[0].giftw}/>
              </View>
            </View>
          </View>
        </BlurView>

      </ImageBackground>
    </View>
  );
}
