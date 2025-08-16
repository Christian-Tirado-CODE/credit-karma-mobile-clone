import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";
import { StyleSheet, View } from "react-native";

const CreditScoreRange = () => {
  return (
    <View style={styles.container}>
      <FontAwesome6
        name="caret-down"
        color={"black"}
        size={20}
        iconStyle="solid"
      />

      <View style={styles.creditScoreBar}>
        <View style={styles.lowestRange} />
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <View style={{ ...styles.range, backgroundColor: "#89F336" }} />
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <View style={{ ...styles.range, backgroundColor: "#008600" }} />
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <View style={{ ...styles.range, backgroundColor: "#155A03" }} />
        <View style={styles.highestRange} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 16,
  },
  creditScoreBar: {
    height: "100%",
    flexDirection: "row",
    columnGap: 2,
  },
  lowestRange: {
    flex: 3,
    backgroundColor: "#DAEDD5",
    borderTopLeftRadius: "11%",
    borderBottomLeftRadius: "11%",
  },
  range: {
    flex: 1,
  },
  highestRange: {
    flex: 2,
    backgroundColor: "#0B2E02",
    borderTopRightRadius: "11%",
    borderBottomRightRadius: "11%",
  },
});

export default CreditScoreRange;
