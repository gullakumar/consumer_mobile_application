import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export function LineChartComponent1({ prepaidBillingHistory }) {
  const screenWidth = Dimensions.get('window').width;
  let newData = [];
  let newBillDates = [];
  let billMonth = [];
  let billYear = [];
  let result = [];
  let resultArray = [];

  console.log('from custom code', prepaidBillingHistory);

  if (prepaidBillingHistory.length) {
    newData = prepaidBillingHistory.map(item => item.closingBalanceTemp);
    //newBillDates = prepaidBillingHistory.map( item => item.billmonth )
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
    }
    appendWithHyphen(result, billYear);
    function appendWithHyphen(result, billYear) {
      return result.map((element, index) => element + '-' + billYear[index]);
    }
    resultArray = appendWithHyphen(result, billYear);
    console.log(resultArray);
  }
  newBillDates = resultArray;
  //console.log("from custom code",prepaidBillingHistory)

  const data = {
    //labels: prepaidBillingHistory.BillIssueDate,
    labels: newBillDates,
    //labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        data: newData,
        //data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
      },
    ],
    legend: ['Bill Amount(₹)'],
  };

  return (
    <View>
      <LineChart
        data={data}
        //width={430}
        width={screenWidth} // Set the width to the screen width
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
          margin: 8,
          //borderRadius: 8,
        }}
      />
    </View>
  );
}
