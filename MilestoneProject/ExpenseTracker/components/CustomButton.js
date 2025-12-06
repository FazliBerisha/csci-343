import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SPACING, BORDER_RADIUS, FONT_SIZES, FONTS } from '../constants/theme';

const CustomButton = ({ title, onPress, variant = 'primary', style }) => {
  if (variant === 'primary') {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.button, style]} activeOpacity={0.8}>
        <LinearGradient
          colors={[COLORS.gradient1, COLORS.gradient2]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <Text style={styles.primaryText}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  if (variant === 'danger') {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, styles.dangerButton, style]}
        activeOpacity={0.8}
      >
        <Text style={styles.dangerText}>{title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, styles.secondaryButton, style]}
      activeOpacity={0.8}
    >
      <Text style={styles.secondaryText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: BORDER_RADIUS.md,
    overflow: 'hidden',
  },
  gradient: {
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    color: COLORS.card,
    fontSize: FONT_SIZES.md,
    fontFamily: FONTS.semiBold,
  },
  secondaryButton: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.primary,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryText: {
    color: COLORS.primary,
    fontSize: FONT_SIZES.md,
    fontFamily: FONTS.semiBold,
  },
  dangerButton: {
    backgroundColor: COLORS.error,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dangerText: {
    color: COLORS.card,
    fontSize: FONT_SIZES.md,
    fontFamily: FONTS.semiBold,
  },
});

export default CustomButton;
