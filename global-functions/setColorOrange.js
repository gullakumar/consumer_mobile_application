import React from 'react';

const setColorOrange = TextComponent => {
  const requestStatus = TextComponent.props.children;

  if (requestStatus === 'Rectified' || requestStatus === 'Verification') {
    color = 'orange';
  }

  return <Text style={{ ...styles.exampleStyle, color }}>{requestStatus}</Text>;
};

export default setColorOrange;
