import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export function LineChartComponent({ prepaidBillingHistory }) {
  let newData = [];
  let newBillDates = [];
  let billMonth = [];
  let billYear = [];
  let result = [];
  let resultArray = [];

  console.log('from custom code', prepaidBillingHistory);

  if (prepaidBillingHistory.length) {
    newData = prepaidBillingHistory.map(item => item.billUnits);
    //newBillDates = prepaidBillingHistory.map( item => item.billmonth)
    billMonth = prepaidBillingHistory.map(item => item.billmonth);
    billYear = prepaidBillingHistory.map(item => item.billyear);
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

  //console.log('from custom code', prepaidBillingHistory);
  const data = {
    //lables: prepaidBillingHistory.BillIssueDate,
    labels: newBillDates,
    //labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Fri"],
    datasets: [
      {
        data: newData,
        //data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
      },
      /*{
        data: newData,
        //data: [50, 30, 90, 41, 86, 24],
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
      },*/
    ],
    legend: ['Units(Kwh)'],
  };

  return (
    <View style={{ flex: 1 }}>
      <LineChart
        data={data}
        width={400}
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
          borderRadius: 16,
        }}
      />
    </View>
  );
}
