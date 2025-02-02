import React from "react";
import { View, Text, StyleSheet } from "react-native";
import GiftCard from "../Components/GiftCard";
import Colors from "../Colors";
import fonts from "../fonts";
import { svgs } from "../Views/svg";

interface GiftSectionProps {
  title?: string;
}

const Subscriptions: React.FC<GiftSectionProps> = ({ title = "إهداء اشتراكات" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.giftContainer}>
        <View style={styles.giftRow}>
          <GiftCard
            svg={svgs[0].crown}
            text="اشتراك 30 يوم"
            buttonText="اهداء بـ 39.99 ر.س"
            onPress={() => {}}
          />
          <GiftCard
            svg={svgs[0].crown}
            text="اشتراك 7 أيام"
            buttonText="اهداء بـ 14.99 ر.س"
            onPress={() => {}}
          />
        </View>
        <View style={{width:'100%',alignItems:'center',justifyContent:'center',paddingBottom:4}}>
        <GiftCard
          svg={svgs[0].crown}
          text="اشتراك 365 أيام"
          buttonText="اهداء بـ 299.99 ر.س"
          onPress={() => {}}

        />
        </View>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 12,
    flex: 1,
   
  },
  title: {
    color: Colors.DEFAULT_WHITE,
    textAlign: "center",
    fontSize: 24,
    fontFamily: fonts.almaraiBold,
  },
  giftContainer: {
    width: "100%",
    backgroundColor: Colors.BACKGROUND_4,
    borderRadius: 16,
    paddingHorizontal: 10.45,
    paddingTop: 16,
    gap: 12,
  },
  giftRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Subscriptions;