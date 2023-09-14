import React from 'react';
import { View, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

export function BarChartExample({ powerfactorScreen }) {
  let newData = [];
  const screenWidth = Dimensions.get('window').width;
  let newBillDates = [];
  if (powerfactorScreen.length) {
    newData = powerfactorScreen.map(item => item.FISCAL_PERIOD);
    newBillDates = powerfactorScreen.map(item => item.AVG_PF);
  }
  console.log('from custom code', powerfactorScreen);
  const data = {
    labels: newData,
    //labels: ["10-Mar", "11-Mar", "12-Mar", "13-Mar", "14-Mar", "15-Mar", "16-Mar"],
    datasets: [
      {
        data: newBillDates,
        //data: [55,35,60,30,70,45,90,],
      },
    ],
    legend: ['Voltage(V)'],
  };

  const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: 'white',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 25, 46, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.2,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <View>
      <BarChart
        data={data}
        //width={400}
        width={screenWidth} // Set the width to the screen width
        height={420}
        verticalLabelRotation={60}
        //yAxisLabel="$"
        chartConfig={chartConfig}
      />
    </View>
  );
}
