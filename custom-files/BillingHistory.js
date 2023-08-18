import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export function LineChartComponent1({ billingHistoryScreen }) {
  let newData = [];
  let newBillDates = [];
  let billMonth = [];
  let billYear = [];
  let result = [];
  let resultArray = [];

  console.log('from custom code', billingHistoryScreen);

  if (billingHistoryScreen.length) {
    newData = billingHistoryScreen.map(item => item.BillAmount);
    billMonth = billingHistoryScreen.map(item => item.BillMonth);
    billYear = billingHistoryScreen.map(item => item.BillYear);
    console.log('billYear' + billYear);
    convertMonthNoToMonthName(billMonth);
    function convertMonthNoToMonthName(billMonth) {
      const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];

      for (const monthNumber of billMonth) {
        if (monthNumber >= 1 && monthNumber <= 12) {
          result.push(monthNames[monthNumber - 1]);
        }
      }
      appendWithHyphen(result, billYear);
      function appendWithHyphen(result, billYear) {
        return result.map((element, index) => element + '-' + billYear[index]);
      }
      resultArray = appendWithHyphen(result, billYear);
      console.log(resultArray);
    }
    newBillDates = resultArray;
  }
  //console.log('from custom code', billingHistoryScreen);

  const data = {
    //lables: billingHistoryScreen.BillIssueDate,
    labels: newBillDates,
    //labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      /*{
        data: newData,
      //  data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
      },*/
      {
        data: newData,
        //data: [50, 30, 90, 41, 86, 24],
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
      },
    ],
    legend: ['Bill Amount(₹)'],
  };

  return (
    <View style={{ flex: 1 }}>
      <LineChart
        data={data}
        width={430}
        height={350}
        verticalLabelRotation={60}
        chartConfig={{
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(26, 25, 16, ${opacity})`,
        }}
        bezier
        style={{
          marginVertical: 12,
          //borderRadius: 8,
        }}
      />
    </View>
  );
}
