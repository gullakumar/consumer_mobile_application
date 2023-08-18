import React from 'react';

const setColorRed = TextComponent => {
  const requestStatus = TextComponent.props.children;

  if (
    requestStatus === 'Inspection Pending' ||
    requestStatus === 'Pending For Approval AAO' ||
    requestStatus === 'Pending'
  ) {
    color = 'red';
  }

  return <Text style={{ ...styles.exampleStyle, color }}>{requestStatus}</Text>;
};

export default setColorRed;
