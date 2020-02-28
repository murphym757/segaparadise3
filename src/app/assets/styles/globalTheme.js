// Sega Paradise 3 Default Color Scheme
const primaryColorAlt = 'rgb(160, 141, 165)';
const secondaryColor = 'rgb(114,225,209)';
const primaryColor = 'rgb(137, 112, 144)';
const white = 'rgb(255, 255, 255)';
const black = 'rgb(0, 0, 0)';
const dayThemeOpacity = 0.95;
const nightThemeOpacity = 0.85;

const segaParadiseDefaultTheme = {
    primaryColorAlt: primaryColorAlt,
    secondaryColor: secondaryColor,
    primaryColor: primaryColor,
    primaryFontColor: primaryColor,
    white: white,
    black: black,
    themeOpacity: dayThemeOpacity,
    '$card-bg': primaryColor
}

const segaParadiseDefaultThemeDark = {
    primaryColorAlt: primaryColorAlt,
    secondaryColor: secondaryColor,
    primaryColor: primaryColorAlt,
    primaryFontColor: secondaryColor,
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