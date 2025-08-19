import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";
import { SetStateAction, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../../../theme";

/**
 Credit score range: 300-850


Exceptional: 800+
Very good: 740 – 799
Good: 670 – 739
Fair: 580 – 669
Poor: 300 – 580

steps: 
Calculate which of the 5 buckets it should be placed.
Divide the credit score by that bucket's max range.
Use the percentage to determine which how much to offset the arrow from the buckets starting point.
 */
type Props = {
  creditScore: number;
};

const CreditScoreRange = ({ creditScore }: Props) => {
  const [width1, setWidth1] = useState(0);
  const [width2, setWidth2] = useState(0);
  const [width3, setWidth3] = useState(0);
  const [width4, setWidth4] = useState(0);
  const [width5, setWidth5] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (creditScore <= 580) {
      const percentage = creditScore / 580;

      setOffset(width1 * percentage);
    } else if (creditScore > 580 && creditScore <= 669) {
      const percentage = creditScore / 669;

      setOffset((2 + width1 + width2) * percentage);
    } else if (creditScore > 669 && creditScore <= 739) {
      const percentage = creditScore / 739;

      setOffset((4 + width1 + width2 + width3) * percentage);
    } else if (creditScore > 740 && creditScore <= 799) {
      const percentage = creditScore / 799;

      setOffset((6 + width1 + width2 + width3 + width4) * percentage);
    } else if (creditScore > 799) {
      const percentage = (creditScore - 800) / 850;

      setOffset((8 + width1 + width2 + width3 + width4) * percentage);
    }
  }, [width1, width2, width3, width4, width5, creditScore]);

  type Event = {
    nativeEvent: { layout: { width: number } };
  };
  const handleOnLayout = (
    setWidthFn: React.Dispatch<SetStateAction<number>>,
    event: Event
  ) => setWidthFn(event.nativeEvent.layout.width);

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "flex-end" }}>
        <View
          style={{
            alignSelf: "flex-start",
            transform: [{ translateX: offset }],
          }}
        >
          <View style={{ transform: [{ translateX: "-50%" }] }}>
            <FontAwesome6
              name="caret-down"
              color={"black"}
              size={30}
              iconStyle="solid"
            />
          </View>
        </View>
      </View>

      <View style={styles.creditScoreBar}>
        <View
          onLayout={(event) => handleOnLayout(setWidth1, event)}
          style={styles.lowestRange}
        />
        <View
          onLayout={(event) => handleOnLayout(setWidth2, event)}
          /* eslint-disable-next-line react-native/no-inline-styles */
          style={{ ...styles.range, backgroundColor: COLORS.secondary }}
        />
        <View
          onLayout={(event) => handleOnLayout(setWidth3, event)}
          /* eslint-disable-next-line react-native/no-inline-styles */
          style={{ ...styles.range, backgroundColor: COLORS.primary }}
        />
        <View
          onLayout={(event) => handleOnLayout(setWidth4, event)}
          /* eslint-disable-next-line react-native/no-inline-styles */
          style={{ ...styles.range, backgroundColor: COLORS.tertiary }}
        />
        <View
          onLayout={(event) => handleOnLayout(setWidth5, event)}
          style={styles.highestRange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 30,
  },
  creditScoreBar: {
    height: 16,
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
