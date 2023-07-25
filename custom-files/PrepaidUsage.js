import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export function LineChartComponent({ prepaidBillingHistory }) {
  let newData = [];
  let newBillDates = [];
  if (prepaidBillingHistory.length) {
    newData = prepaidBillingHistory.map(item => item.fixedSubsidy);
    newBillDates = prepaidBillingHistory.map(item => item.billmonth);
  }
  console.log('from custom code', prepaidBillingHistory);
  const data = {
    lables: prepaidBillingHistory.BillIssueDate,
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
