import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#001a33' }}>
      <View style={{ padding: 50 }}>
        <Text style={{ color: '#00ffcc', fontSize: 24, fontWeight: 'bold' }}>
          THE SCALE: ENGINE TEST
        </Text>
        <Text style={{ color: '#ffffff', marginTop: 10 }}>
          If you see this, the bridge is working.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;