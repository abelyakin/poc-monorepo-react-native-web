import React, { FC } from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";

export const DevicesInfo: FC<any> = ({ devicesFilter, amount }) => {
  let mainColor;
  let statusText;
  switch (devicesFilter) {
    case 1:
      mainColor = "#5cc0ff";
      statusText = "Online";
      break;
    case 2:
      mainColor = "#ff9800";
      statusText = "Warnings";
      break;
    case 3:
      mainColor = "#ff5454";
      statusText = "Critical";
      break;
    default:
      mainColor = "#9c9c9c";
      statusText = "Not Active";
      break;
  }

  const statusStyle = StyleSheet.create({
    border: {
      borderLeftColor: mainColor,
    },
    color: {
      color: mainColor,
    },
  });

  const styles = StyleSheet.create({
    highligthWrapper: {
      flex: 1,
    },
    wrapper: {
      flex: 1,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    info: {
      borderLeftWidth: 3,
      paddingLeft: 10,
    },
    innerContent: {
      paddingVertical: 8,
    },
    amountValue: {
      fontSize: 30,
    },
    devicesStatus: {
      textTransform: "uppercase",
      fontWeight: "400",
    },
  });

  return (
    <TouchableHighlight
      onPress={() => console.log("HEY HO ")}
      underlayColor={"#f5f5f5"}
      style={[styles.highligthWrapper]}
    >
      <View style={styles.wrapper}>
        <View style={[styles.info, statusStyle.border]}>
          <View style={[styles.innerContent]}>
            <Text style={styles.amountValue}>{amount}</Text>
            <Text style={[styles.devicesStatus, statusStyle.color]}>
              {statusText}
            </Text>
          </View>
        </View>
        <View>
          <Text>&gt;</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
