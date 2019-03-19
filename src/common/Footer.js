import React from 'react';
import { Text, View, Platform, FlatList } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// Make a component
const Footer = () => {
  // const { textStyle, viewStyle } = styles;
  // const icon = (<FontAwesome5 name={'comments'} />);
  // <Icon
  //   name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
  //   color='#ccc'
  //   size={25}
  // />
  return (
    <View style={styles.viewStyle}>
      <View style={styles.iconWidth}><Text style={styles.textStyle}>1</Text></View>
      <View style={styles.iconWidth}><Text style={styles.textStyle}>2</Text></View>
      <View style={styles.iconWidth}><Text style={styles.textStyle}>3</Text></View>
      <View style={styles.iconWidth}><Text style={styles.textStyle}>4</Text></View>
      <View style={styles.iconWidth}><Text style={styles.textStyle}>5</Text></View>

    </View>
  );
};


const styles = {
  textStyle: {
    fontSize: 50,
    color: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconWidth: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    flex: 1
    //used to position elements vertically. flex-end (bottom), center, flex-start (top)
    //used to position elements horizontally. flex-end (right), center, flex-start (left)
    // elevation: 2,

  }
};

// Make the component available to other parts of the app
export { Footer };
