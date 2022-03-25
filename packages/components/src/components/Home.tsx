import React, { FC } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { DevicesInfo } from "./common/DevicesInfo";

export default function Home() {
  const styles = StyleSheet.create({
    scrollWrapper: {
      backgroundColor: "#fff",
      flex: 1,
      maxWidth: 600,
      width: "100%",
    },
    wrapper: {
      backgroundColor: "#fff",
      padding: 40,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    infoArray: {
      // height: 230
    },
  });

  return (
    <ScrollView style={styles.scrollWrapper}>
      {/* <TouchableOpacity activeOpacity={0.7}>
          <PieChart
            loading={isLoading}
            devicesOnline={devicesStats.online}
            devicesWarning={devicesStats.warning}
            devicesStock={devicesStats.stock}
            devicesError={devicesStats.error}
            devicesAll={devicesStats.all}
          />
        </TouchableOpacity> */}
      <View style={styles.infoArray}>
        <>
          <DevicesInfo devicesFilter={1} amount={10} />
          <Separator />
          <DevicesInfo devicesFilter={2} amount={20} />
          <Separator />
          <DevicesInfo devicesFilter={3} amount={30} />
          <Separator />
          <DevicesInfo devicesFilter={4} amount={40} />
        </>
      </View>
    </ScrollView>
  );
}

const Separator: FC = () => {
  const styles = StyleSheet.create({
    separator: {
      borderBottomWidth: 1,
      borderBottomColor: "#d4d4d4",
    },
  });

  return <View style={[styles.separator]}></View>;
};
