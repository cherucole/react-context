import React from 'react';
import {View, StyleSheet} from 'react-native';
import Context from './Context';
import ContextTest from './ContextTest';
const App = () => {
  return (
    <View style={styles.container}>
      <Context.Provider
        value={{
          firstname: 'Coryn',
          lastname: 'Tilly',
          backgroundColor: 'purple',
        }}>
        <ContextTest />
      </Context.Provider>

      <Context.Provider
        value={{
          firstname: 'Micheal',
          lastname: 'De Santa',
          backgroundColor: 'yellow',
        }}>
        <ContextTest />
      </Context.Provider>
      <Context.Provider
        value={{
          firstname: 'Carter',
          lastname: 'Wayne',
          backgroundColor: 'blue',
        }}>
        <ContextTest />
      </Context.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', backgroundColor: 'red'},
});
export default App;
