// import some libraries for making a registerComponent
import React from 'react';
import { Text, View } from 'react-native';


// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};


const styles = {
  textStyle: {
    fontSize: 50
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    //used to position elements vertically. flex-end (bottom), center, flex-start (top)
    justifyContent: 'center',
    //used to position elements horizontally. flex-end (right), center, flex-start (left)
    alignItems: 'center',
    height: 80,
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  }
};

// Make the component available to other parts of the app
export { Header };
