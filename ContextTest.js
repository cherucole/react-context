import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Context from './Context';

function ContextTest(props) {
  const {firstname, lastname, backgroundColor} = useContext(Context);
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Text>
        {firstname} {lastname}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '30%',
    elevation: 5,
    borderColor: 'black',
    //backgroundColor: 'blue',
    margin: 10,
  },
});
export default ContextTest;
