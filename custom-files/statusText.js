import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function determineColor(requestStatus) {
  switch (requestStatus) {
    case 'Rectified':
    case 'Verification':
      return 'orange';
    case 'Inspection Pending':
    case 'Pending For Approval AAO':
    case 'Pending':
      return 'red';
    case 'Closed':
      return 'green';
    default:
      return 'black'; // default color if the status doesn't match any condition
  }
}

const StatusText = ({ requestStatus }) => {
  const color = determineColor(requestStatus);

  return (
    <View style={styles.container}>
      <Text style={{ color }}>{requestStatus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // add any container styles you need
    padding: 10,
  },
});

export default StatusText;
