import * as React from 'react';

// Sega Paradise 3 Default Color Scheme
const primaryColor = 'rgb(232, 224, 204)';
const primaryColorAlt = 'rgb(210, 183, 127)';
const secondaryColor = 'rgb(187, 163, 164)';
const secondaryColorAlt = 'rgb(163, 173, 191)';
const primaryFontColor = 'rgb(119, 86, 90)';
const white = 'rgb(255, 255, 255)';
const black = 'rgb(0, 0, 0)';
const dayThemeOpacity = 0.95;
const nightThemeOpacity = 0.85;

const segaParadiseDefaultTheme = {
    light: {
        primaryColor: primaryColor,
        primaryColorAlt: primaryColorAlt,
        secondaryColor: secondaryColor,
        secondaryColorAlt: secondaryColorAlt,
        primaryFontColor: primaryFontColor,
        white: white,
        black: black
    },
    dark: {
        primaryColor: primaryColorAlt,
        primaryColorAlt: primaryColorAlt,
        secondaryColor: secondaryColor,
        secondaryColorAlt: secondaryColorAlt,
        primaryFontColor: primaryFontColor,
        white: black,
        black: white
    }
    
}
// Checks for night hours
let currentTime = new Date();
let time = currentTime.getHours();

function themeSelector() {
    if (time >= 17 || time < 7) {
        return segaParadiseDefaultTheme.dark;
    } else {
        return segaParadiseDefaultTheme.light;
    }
}
export const currentTheme = themeSelector();

export const CurrentThemeContext = React.createContext(currentTheme);

