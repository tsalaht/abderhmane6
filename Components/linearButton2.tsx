import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle, View } from 'react-native';
import { ReactNode } from 'react';
import Colors from '../Colors';
import { SvgXml } from 'react-native-svg'; // Import SvgXml for SVG icons

interface BasicProps {
  onPress: () => void;
  containerStyle?: ViewStyle;
  linearStyle?: ViewStyle;
  textStyles?: TextStyle;
  disabled?: boolean;
  insetShadowContainerStyle?: ViewStyle;
  iconXml?: string; // Accept an SVG XML string as a prop for the icon
}

interface ChildrenProps extends BasicProps {
  children: ReactNode;
}

interface TextProps extends BasicProps {
  text: string;
}

export default function LinearButton(props: TextProps | ChildrenProps) {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={[styles.container, props.containerStyle]}
      onPress={props.onPress}
    >
      <LinearGradient
        style={[styles.linear, props.linearStyle]}
        colors={[Colors.PRIMARY_600, '#FFAF36']}
        start={[0, 0]}
        end={[1, 1]}
      >
        <View style={styles.contentWrapper}>
          {props.iconXml && (
            <SvgXml xml={props.iconXml} width={18} height={18} style={styles.icon} />
          )}
          {'children' in props ? (
            props.children
          ) : (
            <Text style={[styles.text, props.textStyles]}>{props.text}</Text>
          )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  linear: {
    width: '100%',
    borderRadius: 6,
    paddingVertical: 10,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.DEFAULT_WHITE,
    fontFamily: 'Almarai_Bold',
    fontSize: 12,
    textAlign: 'center',
  },
  container: {
    elevation: 10,
    shadowColor: Colors.PRIMARY_600,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 20.4,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    flexDirection: 'row-reverse', // Align the icon and text in a row
    alignItems: 'center', // Center the items vertically
    justifyContent: 'center',
    gap:6.59
  },
  icon: {
    marginRight: 8, // Space between icon and text
  },
});
