import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import SLIcon from 'react-native-vector-icons/SimpleLineIcons';

const TabItem = ({ isFocused, label, options, onPress, onLongPress }) => {
  const renderIcon = name => {
    switch (name?.toLowerCase()) {
      case 'dashboard':
        return (
          <SLIcon
            name="book-open"
            size={styles.icon.height}
            color={isFocused ? COLORS.primary : COLORS.gray}
          />
        );

      case 'salat':
        return (
          <FA5Icon
            name="pray"
            size={styles.icon.height}
            color={isFocused ? COLORS.primary : COLORS.gray}
          />
        );

      case 'prayer':
        return (
          <FA5Icon
            name="praying-hands"
            size={styles.icon.height}
            color={isFocused ? COLORS.primary : COLORS.gray}
          />
        );

      case 'bookmark':
        return (
          <FA5Icon
            name="bookmark"
            size={styles.icon.height}
            color={isFocused ? COLORS.primary : COLORS.gray}
          />
        );
      default:
        return name;
    }
  };

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.button}>
      <Text style={styles.label(isFocused)}>{renderIcon(label)}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    height: 32,
    width: 32,
    color: COLORS.black,
  },
  label: isFocused => ({
    color: isFocused ? COLORS.primary : COLORS.gray,
  }),
});
