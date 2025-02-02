import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import Colors from "../Colors";
import fonts from "../fonts";
import { svgs } from "../Views/svg";

interface GiftSectionProps {
  title?: string;
}

const Trans: React.FC<GiftSectionProps> = ({ title = "تحويل ألماس" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.giftContainer}>
        {renderGiftInfo("تحويل إلى", "Saad14", svgs[0].epc)}
        {renderGiftValueRow("قيمة الهدية", "400", Colors.DEFAULT_WHITE, svgs[0].dia1)}
        {renderGiftValueRow("رسوم العملية", "5", Colors.DANGER_600, svgs[0].dia1)}
        <View style={styles.separator} />
        {renderGiftValueRow("المجموع", "405", Colors.DANGER_600, svgs[0].dia1, fonts.almaraiBold)}
      </View>
    </View>
  );
};

const renderGiftInfo = (label: string, value: string, icon: string) => (
  <View style={styles.rowContainer}>
    <View style={styles.labelContainer}>
      <Text style={styles.infoText}>{label}</Text>
    </View>
    <SvgXml xml={icon} />
    <Text style={styles.infoText}>{value}</Text>
  </View>
);

const renderGiftValueRow = (
  label: string,
  value: string,
  textColor: string,
  icon: string,
  fontFamily: string = fonts.almaraiRegular
) => (
  <View style={styles.rowContainer}>
    <View style={styles.labelContainer}>
      <Text style={styles.infoText}>{label}</Text>
    </View>
    <View style={styles.valueContainerRow}>
      <View style={[styles.valueBox, { backgroundColor: Colors.BACKGROUND_4 }]}>
        <Text style={[styles.valueText, { color: textColor, fontFamily }]}>{value}</Text>
      </View>
      <SvgXml xml={icon} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
  },
  title: {
    color: Colors.DEFAULT_WHITE,
    textAlign: "center",
    fontSize: 24,
    fontFamily: fonts.almaraiBold,
  },
  giftContainer: {
    width: "100%",
    backgroundColor: Colors.BACKGROUND_5,
    borderRadius: 16,
    paddingHorizontal: 10.45,
    paddingTop: 16,
    gap: 16,
  },
  rowContainer: {
    flexDirection: "row-reverse",
    gap: 16,
    alignItems: "center",
  },
  labelContainer: {
    width: 109,
  },
  infoText: {
    fontSize: 14,
    fontFamily: fonts.almaraiBold,
    color: Colors.DEFAULT_WHITE,
    textAlign: "right",
  },
  valueContainerRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 8,
  },
  valueBox: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    borderRadius: 28,
    width: 162,
  },
  valueText: {
    fontSize: 14,
    fontFamily: fonts.almaraiRegular,
  },
  separator: {
    width: "100%",
    height: 0.8,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
});

export default Trans;
