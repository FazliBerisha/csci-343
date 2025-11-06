/**
 * Color Constants
 * Centralized color palette for consistent theming throughout the app
 * Uses Material Design color naming convention (200, 500, 800 represent lightness)
 *
 * Color Scheme:
 * - Accent colors (blue): Used for interactive elements, headers, tabs
 * - Primary colors (gray/black): Used for drawer, text, backgrounds
 */
const Colors = {
    // Accent Blue Colors - Used for headers, tabs, and interactive elements
    accent200: "#64B5F6",  // Light blue - for active drawer items
    accent500: "#1976D2",  // Medium blue - main accent color for headers/tabs
    accent800: "#0D47A1",  // Dark blue - for active tab highlighting

    // Primary Gray/Black Colors - Used for drawer and text elements
    primary300o5: "rgba(33, 33, 33, 0.5)",  // Dark gray with 50% opacity
    primary300: "#212121",  // Very dark gray - main text color
    primary500o8: "rgba(66, 66, 66, 0.8)",  // Medium gray with 80% opacity
    primary500: "#424242",  // Medium gray - drawer background
    primary800: "#1A1A1A"   // Almost black - active drawer item background
};

export default Colors;