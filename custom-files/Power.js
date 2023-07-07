import React from 'react';
import { View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

export function BarChartExample() {
  const data = {
    labels: [
      '10-Mar',
      '11-Mar',
      '12-Mar',
      '13-Mar',
      '14-Mar',
      '15-Mar',
      '16-Mar',
    ],
    datasets: [
      {
        data: [55, 35, 60, 30, 70, 45, 90],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: 'grey',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 25, 46, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <View>
      <BarChart
        data={data}
        width={380}
        height={220}
        //yAxisLabel="$"
        chartConfig={chartConfig}
      />
    </View>
  );
}
