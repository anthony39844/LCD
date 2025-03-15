import React from "react";
import { View, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";


type donutChartProps = {
  data: { value: number; color: string }[];
  total: number;
};

export default function DonutChart(props: donutChartProps){

  return (
    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 50 }}>
      <PieChart
        data={props.data}
        radius={100} 
        innerRadius={60} 
        centerLabelComponent={() => (
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Total: {props.total}</Text>
        )}
      />
    </View>
  );
};
