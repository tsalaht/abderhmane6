import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  Dimensions,
  TextInput
} from "react-native";
import styles from "./Styles/Index";
import Colors from "../Colors";
import fonts from "../fonts";
import React, { useState } from "react";
import GradientText from "../Components/GradientText ";
import {
  ArrowRight2,
  SearchNormal1,
} from "iconsax-react-native";
import { icons } from "./icons";
import { SvgXml } from "react-native-svg";
import { svgs } from "./svg";
import { BlurView } from "expo-blur";
import NewChat from "../Components/NewChat";
export default function Detials() {
  const getColoredIcon = (xmlString:any, color:any) => {
    return xmlString
    .replace(/stroke="[^"]*"/g, `stroke="${color}"`);
  };
  
  const [selectedTab, setSelectedTab] = useState<string>("overview"); 
  const isSelected = (tab:any) => selectedTab === tab;
  const coloredChatIconXml = getColoredIcon(icons[0].chatT, isSelected("chat") ? '#FFFFFF' : Colors.BACKGROUND_3);
  const coloredPlanIconXml = getColoredIcon(svgs[0].leeg, isSelected("plan") ? '#FFFFFF' : Colors.BACKGROUND_3);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([{ username: 'saad14', message: 'السلام عليكم ورحمة الله وبركاته' }]);
    const handleSendMessage = () => {
      if (message.trim()) {
        const newMessage = { username: 'You', message };
        setMessages([ ...messages, newMessage ]);
        setMessage(""); 
      }
    }
  const shadow = StyleSheet.create({
    // inside shadow
    container: {
      padding: 16,
      backgroundColor: Colors.NEUTRALS,
      borderRadius: 8,
      shadowColor: "#0000004D",
      // marginLeft: 45,
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 6.8,
      elevation: 10,
    },
    text: {
      color: Colors.PRIMARY_600,
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
    blurContainer2: {
      width: "100%",
      overflow: "hidden",
      backgroundColor: Colors.BACKGROUND_3,
      alignItems: "center",
      justifyContent: "center",
      borderTopEndRadius: 24,
      borderTopStartRadius: 24,
      zIndex:999999
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
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              paddingVertical: 20,
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 32,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                borderRadius: 16,
                alignItems: "center",
                padding: 12,
                gap: 21.25,
              }}
            >
           <GradientText
  text="الأبطال"
  style={{
    fontSize: 15, 
    fontFamily: fonts.almaraiBold, 
  }}
/>

              <Text
                style={{
                  fontSize: 20,
                  fontFamily: fonts.almaraiRegular,
                  color: "white",
                }}
              >
                45
              </Text>
              <SvgXml xml={svgs[0].trophySmall} />
            </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: Colors.BACKGROUND_5,
                borderRadius: 16,
                alignItems: "center",
                padding: 12,
                gap: 4,
              }}
            >
              <Text
                style={{
                  color: Colors.BACKGROUND_3,
                  fontFamily: "Almarai_Regular",
                }}
              >
                عودة
              </Text>
              <ArrowRight2 size={16} color={Colors.BACKGROUND_3} />
            </View>
          </View>
        </BlurView>

        <NewChat messages={messages} />

        <BlurView intensity={5} tint="dark" style={{ ...shadow.blurContainer2 }}>
          <View style={{ width: "100%", padding: 12 }}>
              <View
                          style={{
                            width: "100%",
                            paddingHorizontal: 12,
                            paddingVertical: 8,
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: Colors.BACKGROUND_4,
                            borderRadius: 28,
                            marginBottom:16
                          }}
                        >
                          <Pressable  onPress={handleSendMessage}>
                            <SvgXml xml={svgs[0].send} />
                          </Pressable>
                          <TextInput
                            placeholder="رسالتك..."
                            style={{
                              flex: 1,
                              fontFamily: fonts.almaraiRegular,
                              fontSize: 12,
                              color: Colors.DEFAULT_WHITE,
                            }}
                            placeholderTextColor="#9C9FA6"
                            value={message}
                            onChangeText={setMessage}
                     
                          />
                        </View>
            <View style={{
              backgroundColor: Colors.BACKGROUND_5,
              padding: 8,
              borderRadius: 16,
              width: "100%",
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Pressable onPress={() => setSelectedTab("plan")}>
                <View style={{
                  paddingHorizontal: 28,
                  paddingVertical: 8,
                  backgroundColor: isSelected("plan") ? Colors.PRIMARY_600 : Colors.BACKGROUND_4,
                  borderRadius: 16,
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                 <SvgXml xml={coloredPlanIconXml} />
                  <Text style={{
                    color: isSelected("plan") ? '#FFFFFF' : Colors.BACKGROUND_3,
                    fontSize: 14,
                    fontFamily: fonts.almaraiRegular,
                    marginTop: 4
                  }}>
                الدوريات
                  </Text>
                </View>
              </Pressable>

              <Pressable onPress={() => setSelectedTab("overview")}>
                <View style={{
                  paddingHorizontal: 28,
                  paddingVertical: 8,
                  backgroundColor: isSelected("overview") ? Colors.PRIMARY_600 : Colors.BACKGROUND_4,
                  borderRadius: 16,
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <SearchNormal1
                    size="24"
                    color={isSelected("overview") ? '#FFFFFF' : Colors.BACKGROUND_3}
                  />
                  <Text style={{
                    color: isSelected("overview") ? '#FFFFFF' : Colors.BACKGROUND_3,
                    fontSize: 14,
                    fontFamily: fonts.almaraiRegular,
                    marginTop: 4
                  }}>
                    نظرة عامة
                  </Text>
                </View>
              </Pressable>

              <Pressable onPress={() => setSelectedTab("chat")}>
                <View style={{
                  paddingHorizontal: 28,
                  paddingVertical: 8,
                  backgroundColor: isSelected("chat") ? Colors.PRIMARY_600 : Colors.BACKGROUND_4,
                  borderRadius: 16,
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                        <SvgXml xml={coloredChatIconXml} />
                  <Text style={{
                    color: isSelected("chat") ? '#FFFFFF' : Colors.BACKGROUND_3,
                    fontSize: 14,
                    fontFamily: fonts.almaraiRegular,
                    marginTop: 4
                  }}>
                    دردشة
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </BlurView>
      </ImageBackground>
    </View>
  );
}

