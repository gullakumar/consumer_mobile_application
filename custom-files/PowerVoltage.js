import React from 'react';
import { View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

export function BarChartExample({ voltageScreen }) {
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
        width={400}
        height={220}
        //yAxisLabel="$"
        chartConfig={chartConfig}
      />
    </View>
  );
}
