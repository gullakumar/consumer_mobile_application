import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export function LineChartComponent({ billingHistoryScreen }) {
  let newData = [];
  let newBillDates = [];
  if (billingHistoryScreen.length) {
    newData = billingHistoryScreen.map(item => item.BillUnits);
    newBillDates = billingHistoryScreen.map(item => item.BillMonth);
  }
  console.log('from custom code', billingHistoryScreen);
  const data = {
    //lables: billingHistoryScreen.BillIssueDate,
    labels: newBillDates,
    //labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Fri"],
    datasets: [
      {
        data: newData,
        //data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
      },
      {
        data: newData,
        //data: [50, 30, 90, 41, 86, 24],
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
      },
    ],
  };

  return (
    <View style={{ flex: 1 }}>
      <LineChart
        data={data}
        width={400}
        height={220}
        chartConfig={{
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(26, 25, 16, ${opacity})`,
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}
