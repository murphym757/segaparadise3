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
    primaryColor: primaryColor,
    primaryColorAlt: primaryColorAlt,
    secondaryColor: secondaryColor,
    secondaryColorAlt: secondaryColorAlt,
    primaryFontColor: primaryFontColor,
    white: white,
    black: black,
    themeOpacity: dayThemeOpacity,
    '$card-bg': primaryColor
}

const segaParadiseDefaultThemeDark = {
    primaryColor: primaryColorAlt,
    primaryColorAlt: primaryColorAlt,
    secondaryColor: secondaryColor,
    secondaryColorAlt: secondaryColorAlt,
    primaryFontColor: primaryFontColor,
    white: black,
    black: white,
    themeOpacity: nightThemeOpacity,
    '$card-bg': primaryColor
}

// Checks for night hours
let currentTime = new Date();
let time = currentTime.getHours();

function themeSelector() {
    if (time >= 17 || time < 7) {
        return segaParadiseDefaultThemeDark;
    } else {
        return segaParadiseDefaultTheme;
    }
}

export const currentTheme = themeSelector();