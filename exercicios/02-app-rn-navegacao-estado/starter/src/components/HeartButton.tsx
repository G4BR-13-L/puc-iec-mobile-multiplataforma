import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

type Props = {
  active?: boolean;
  onPress?: () => void;
};

export default function HeartButton({ active = false, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.button} accessibilityLabel="favorite">
      <Text style={[styles.icon, { color: active ? '#e0245e' : '#999' }]}>{active ? '❤️' : '🤍'}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { padding: 8 },
  icon: { fontSize: 22 },
});
