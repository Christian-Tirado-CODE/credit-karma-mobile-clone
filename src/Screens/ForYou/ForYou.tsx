import { StyleSheet, Text, View } from "react-native";
import CreditScoreRange from "./components/CreditScoreRange";
import { COLORS } from "../../theme";

const ForYou = () => {
  const CREDIT_SCORE = 800;
  return (
    <View
      style={{
        backgroundColor: "white",
        paddingHorizontal: 20,
      }}
    >
      <View>
        {/*Row */}
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={{ fontWeight: "500", fontSize: 14, marginBottom: 3 }}>
              Cash
            </Text>
            <Text style={{ fontWeight: "700", fontSize: 24 }}>$--</Text>
            <Text
              style={{ fontWeight: "700", fontSize: 14, color: COLORS.primary }}
            >
              Connect account
            </Text>
          </View>

          <View
            style={{ ...styles.column, ...styles.leftBorder, paddingLeft: 20 }}
          >
            <Text style={{ fontWeight: "500", fontSize: 14, marginBottom: 3 }}>
              Spending
            </Text>
            <Text style={{ fontWeight: "700", fontSize: 24 }}>$--</Text>
          </View>
        </View>

        {/*Row */}
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={{ fontWeight: "500", fontSize: 14, marginBottom: 3 }}>
              TransUnion
            </Text>
            <Text style={{ fontWeight: "700", fontSize: 24 }}>800</Text>
            <Text
              style={{ fontWeight: "700", fontSize: 14, color: COLORS.primary }}
            >
              6 pts
            </Text>
            <CreditScoreRange creditScore={CREDIT_SCORE} />
          </View>

          <View
            style={{ ...styles.column, ...styles.leftBorder, paddingLeft: 20 }}
          >
            <Text style={{ fontWeight: "500", fontSize: 14, marginBottom: 3 }}>
              Equifax
            </Text>
            <Text style={{ fontWeight: "700", fontSize: 24 }}>800</Text>
            <Text style={{ fontWeight: "500", fontSize: 14, marginBottom: 3 }}>
              {" "}
              -- No change
            </Text>
            <CreditScoreRange creditScore={CREDIT_SCORE} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#eee",
    borderBottomWidth: 2,
    paddingVertical: 20,
  },
  column: {
    flex: 1,
    paddingVertical: 20,
  },
  leftBorder: {
    borderLeftColor: "#eee",
    borderLeftWidth: 2,
    paddingLeft: 20,
  },
});
export default ForYou;
