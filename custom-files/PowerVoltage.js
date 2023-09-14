import React from 'react';
import { View, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

export function BarChartExample({ voltageScreen }) {
  const screenWidth = Dimensions.get('window').width;
  let newData = [];
  //let newFiscalPeriod = [];
  let newBillDates = [];
  //let fiscalPeriod=null;
  if (voltageScreen.length) {
    newData = voltageScreen.map(item => item.FISCAL_PERIOD);

    /* for(let i=0;i<=newData.length;i++){
       let newFiscalPeriod = [];
       console.log("newdata"+newData.length);
       fiscalPeriod = newData[i];
       if(fiscalPeriod!=null){
       console.log("fiscalPeriod"+fiscalPeriod);
       const fullDate = fiscalPeriod.split("-");
       //const date = fullDate[0];
       const month = fullDate[1];
       //const dateMonth = date + "-" + month;
       newFiscalPeriod = month;
     }
     
    console.log("newFiscalPeriod"+ newFiscalPeriod);
     }*/
    newBillDates = voltageScreen.map(item => item.VRN_VOLTAGE);
  }
  console.log('from custom code', voltageScreen);

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
        //width={420}
        width={screenWidth} // Set the width to the screen width
        height={420}
        verticalLabelRotation={60}
        //yAxisLabel="$"
        chartConfig={chartConfig}
      />
    </View>
  );
}
