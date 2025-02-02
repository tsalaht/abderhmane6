import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import styles from "./Styles/Index";
import Colors from "../Colors";
import fonts from "../fonts";
import React, { useRef, useState, useCallback } from "react";
import { ArrowRight2 } from "iconsax-react-native";
import { SvgXml } from "react-native-svg";
import { svgs } from "./svg";
import { BlurView } from "expo-blur";
import GiftSection from "../Components/GiftSection";
import Subscriptions from "../Components/Subscriptions";
import Trans from "../Components/Trans";
import Header from "../Components/Header";
export default function Profile() {
  const [selectedTab, setSelectedTab] = useState<string>("adds");
  const isSelected = (tab: any) => selectedTab === tab;
  const [type, setType] = useState("تحويل");
  const [giftMessage, setGiftMessage] = useState<string>("");

  const maxCharacterLimit = 80;

  const renderContent = () => {
    switch (type) {
      case "تحويل":
        return <Trans />;
      case "الاشتركات":
        return <Subscriptions />;
      case "الألماس":
        return <GiftSection />;
      default:
        return <Trans />;
    }
  };
  const handleTextChange = (text: string) => {
    if (text.length <= maxCharacterLimit) {
      setGiftMessage(text);
    }
  };

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
        <Header
  title="إهداء لصديق"
  leftOptionText={`1478`}
  rightOptionText="عودة"
  onRightPress={() => console.log("Return pressed")}
/>
        <View style={{ paddingHorizontal: 8, marginTop: 10,flexDirection:'column', gap:8 }}>
          <View style={styl.byGiftV}>
            <Text style={styl.bygiftText}>اشتر هدية لـ</Text>
            <View style={styl.byGiftH}>
              <View
                style={{
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <SvgXml xml={svgs[0].epc} />
                <Text
                  style={{
                    fontFamily: fonts.almaraiBold,
                    color: "white",
                    fontSize: 14,
                  }}
                >
                  Saad14
                </Text>
              </View>
              <View style={styl.choseFreinButton}>
                <Text
                  style={{
                    color: Colors.BACKGROUND_4,
                    fontSize: 12,
                    fontWeight: "medium",
                    fontFamily: fonts.almaraiRegular,
                  }}
                >
                  اختر صديق آخر
                </Text>
              </View>
            </View>
          </View>
          <View style={styl.inputTextContainer}>
          <TextInput
              placeholder="رسالة إهداء"
              style={styl.inputText}
              placeholderTextColor={'#616671'}
              value={giftMessage}
              onChangeText={handleTextChange}
              maxLength={maxCharacterLimit} // Ensure no overflow when pasted
            />
<Text style={{color:'#79808C',fontSize:13, fontFamily:fonts.almaraiBold}}>
{`${giftMessage.length}/${maxCharacterLimit}`}
</Text>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 8,
            marginTop: 16,
            flexDirection: "column",
            flex: 0.99,
          }}
        >
          <View
            style={{
              width: "100%",
              flex: 1,
              backgroundColor: Colors.BACKGROUND_5,
              borderRadius: 16,
              padding: 16,
            }}
          >
            <View
              style={{
                width: "100%",
                backgroundColor: Colors.BACKGROUND_5,
                padding: 8,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Pressable onPress={() => setType("الألماس")}>
                <View
                  style={[styl.tab, type === "الألماس" && styl.selectedTab]}
                >
                  <Text
                    style={[
                      styl.tabText,
                      type === "الألماس" && styl.selectedTabText,
                    ]}
                  >
                    الألماس
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setType("الاشتركات")}>
                <View
                  style={[styl.tab, type === "الاشتركات" && styl.selectedTab]}
                >
                  <Text
                    style={[
                      styl.tabText,
                      type === "الاشتركات" && styl.selectedTabText,
                    ]}
                  >
                    الاشتركات
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setType("تحويل")}>
                <View style={[styl.tab, type === "تحويل" && styl.selectedTab]}>
                  <Text
                    style={[
                      styl.tabText,
                      type === "تحويل" && styl.selectedTabText,
                    ]}
                  >
                    تحويل
                  </Text>
                </View>
              </Pressable>
            </View>
            {renderContent()}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styl = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  tab: {
    borderWidth: 1,
    borderColor: "transparent",
    paddingVertical: 8,
    width: 100,
    backgroundColor: Colors.BACKGROUND_4,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedTab: {
    backgroundColor: Colors.PRIMARY_600,
  },
  tabText: {
    color: "white",
    fontFamily: "Almarai_Regular",
    fontSize: 14,
  },
  selectedTabText: {
    color: Colors.DEFAULT_WHITE,
  },
  byGiftV: {
    width: "100%",
    flexDirection: "column",
    gap: 8,
    borderRadius: 16,
    backgroundColor: Colors.BACKGROUND_4,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  byGiftH: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bygiftText: {
    color: "white",
    fontSize: 12,
    fontWeight: "medium",
    fontFamily: fonts.almaraiRegular,
    textAlign: "right",
  },
  choseFreinButton: {
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 11.43,
    padding: 12,
  },
  inputTextContainer:{
    width: "100%",
    flexDirection: "column",
    gap: 4,
    borderRadius: 16,
    backgroundColor: Colors.BACKGROUND_5,
    paddingHorizontal: 8,
    paddingTop: 16,
    paddingBottom:8
  },
  inputText:{
    backgroundColor: Colors.BACKGROUND_4,
    borderRadius: 16,
    width: "100%",
    height:57,
    paddingHorizontal: 16,
    paddingTop: 8,
    fontFamily: fonts.almaraiBold,
    color: "white",
    fontSize: 13,
  }
});
