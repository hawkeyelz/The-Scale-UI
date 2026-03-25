import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View style={{ 
      flex: 1, 
      backgroundColor: 'red', // If this is red, we've won.
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>
        BOOT ACTIVE
      </Text>
    </View>
  );
};

export default App;