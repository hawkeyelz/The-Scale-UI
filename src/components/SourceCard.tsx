import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors'; // Using the theme we built

// 1. Define the "Contract" for the data
interface SourceCardProps {
  name: string;
  url: string;
}

// 2. Assign the Interface to the Component
const SourceCard: React.FC<SourceCardProps> = ({ name, url }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name || 'Unknown Source'}</Text>
      <Text style={styles.url}>{url}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary, 
  },
  title: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  url: {
    color: Colors.subtext,
    fontSize: 14,
    marginTop: 4,
  },
});

export default SourceCard;