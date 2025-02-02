import React, { useState, useRef,useCallback } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableWithoutFeedback
} from "react-native";
import { SvgXml } from "react-native-svg";
import { ArrowRight2 } from "iconsax-react-native";
import { BlurView } from "expo-blur";
import { svgs } from "../Views/svg";
import styles from "../Views/Styles/Index";
import Colors from "../Colors";
import fonts from "../fonts";
import Contactes from "./Contactes";
import BottomSheet from "@gorhom/bottom-sheet";
import LinearButton2 from "./linearButton2";
import { icons } from "../Views/icons";
export default function ChatRoom2() {
  const bottomSheetRef = useRef<any>(null);
  const [message, setMessage] = useState("");
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [messages, setMessages] = useState([{ username: 'saad14', message: 'السلام عليكم ورحمة الله وبركاته' }]);
  const openBottomSheet = useCallback(() => {
    setBottomSheetVisible(true);
    bottomSheetRef.current?.expand();
  }, []);

  // Function to close the bottom sheet
  const closeBottomSheet = useCallback(() => {
    setBottomSheetVisible(false);
    bottomSheetRef.current?.close();
  }, []);


  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = { username: 'You', message };
      setMessages([ ...messages, newMessage ]);
      setMessage(""); // Clear input after sending message
    }
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
      backgroundColor: Colors.BACKGROUND_3,
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
                paddingTop: 26,
                zIndex: 7,
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 32,
              }}
            >
                <Pressable onPress={openBottomSheet}>
              <View
                style={{
                  flexDirection: "row",
                  borderRadius: 16,
                  alignItems: "center",
                  padding: 12,
                  gap: 16,
                }}
              >

                <SvgXml xml={svgs[0].pc2} />
                <Text
                  style={{
                      color: Colors.DEFAULT_WHITE,
                      fontFamily: fonts.almaraiBold,
                      fontSize: 16,
                    }}
                    >
                  Saad14
                </Text>
              </View>
                    </Pressable>

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
          </View>
        </BlurView>

        <Contactes  messages={messages} />

        <BlurView intensity={5} tint="dark" style={shadow.blurContainer2}>
          <View style={{ width: "100%", paddingVertical: 16, paddingHorizontal: 16 }}>
            <View
              style={{
                width: "100%",
                paddingHorizontal: 12,
                paddingVertical: 8,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: Colors.BACKGROUND_4,
                borderRadius: 28,
              }}
            >
              <Pressable onPress={handleSendMessage}>
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
          </View>
        </BlurView>
        {isBottomSheetVisible && (
    <>
     <BlurView intensity={100} blurReductionFactor={10} tint="dark" style={[StyleSheet.absoluteFill,{backgroundColor:'#0000003d'}]} />
     <TouchableWithoutFeedback onPress={closeBottomSheet}>
            <View style={StyleSheet.absoluteFillObject} />
          </TouchableWithoutFeedback>
            <BottomSheet
              ref={bottomSheetRef}
              handleComponent={null} 
              snapPoints={["55%"]}
              onClose={closeBottomSheet}
              backgroundStyle={{
                backgroundColor: Colors.BACKGROUND_5,
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32, 
              }}
            >
              <View style={{width:'100%',paddingVertical:32 }}>
                <View style={{width:'100%',alignItems:`center`,justifyContent:'center',position:'relative' }}>
                <SvgXml xml={svgs[0].scrp}/>
                <View
  style={{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUND_4,
    borderRadius: 31,
    paddingHorizontal: 21,
    gap: 4.33,
    top: -25,
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 4 }, // Vertical shadow
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 6, // Shadow blur radius
    elevation: 6, // Elevation for Android
  }}
>
<Text style={{fontSize:13,fontFamily:fonts.almaraiBold,color:Colors.DEFAULT_WHITE}}>
Saad14
</Text>
<SvgXml xml={svgs[0].king}/>
                </View>
                </View>
                <View style={styl.bottomSheetContent}>
                <SvgXml xml={svgs[0].message}/>
                <View style={styl.bottomSheetContentText}>
                <Text style={{ fontSize: 16, color: 'white', fontFamily: fonts.almaraiRegular }}>
                ملاحظات
                </Text>
                </View>
                </View>
                <View style={styl.bottomSheetContent}>
                <SvgXml xml={svgs[0].user}/>
                <View style={styl.bottomSheetContentText}>
                <Text style={{ fontSize: 16, color: 'white', fontFamily: fonts.almaraiRegular }}>
                ملف اللاعب
                </Text>
                </View>
                </View>
                <View style={styl.bottomSheetContent}>
                <SvgXml xml={svgs[0].trash}/>
                <View style={styl.bottomSheetContentText}>
                <Text style={{ fontSize: 16, color: 'white', fontFamily: fonts.almaraiRegular }}>
                حذف المحادثة
                </Text>
                </View>
                </View>
                <View style={styl.bottomSheetContent}>
                <SvgXml xml={svgs[0].delet2}/>
                <View style={styl.bottomSheetContentText}>
                <Text style={{ fontSize: 16, color:Colors.DEFAULT_WHITE, fontFamily: fonts.almaraiRegular }}>
                إزالة
                </Text>
                </View>
                </View>
                <View style={{width:'100%',alignItems:'center',justifyContent:'center',marginTop:16}}>
                <LinearButton2
    text="إهداء"
    onPress={() => {}}
    iconXml={svgs[0].gift} // Pass the SVG XML string here
    containerStyle={{
      width: '95%',
      height: 40,
      shadowColor: "#FFAF36",
      elevation: 5,
      paddingVertical: 8,
    }}
    linearStyle={{
      width: '95%',
      height: 40,
      paddingVertical: 8,
    }}
  />
                </View>
                
              </View>
            </BottomSheet>
      
            </>
          )}
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
      width: 104,
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
    },
    selectedTabText: {
      color:Colors.DEFAULT_WHITE,
    },
bottomSheetContent:{
  paddingHorizontal:24,
  paddingVertical:12,
  gap:16,
  alignItems:'center',
  flexDirection:'row-reverse',
  borderBottomWidth:1,
  borderBottomColor:Colors.BACKGROUND_4
},
bottomSheetContentText:{
  flex:1,
  alignItems:'center',
  justifyContent:'center'
}

  });