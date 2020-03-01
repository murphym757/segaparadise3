import React, {
  useState,
  useEffect
} from 'react';
import GameCollectionScreen from './gameCollectionScreen';

// React Navigation
import {
  View, Text, Button, Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// App Styling
import { 
  MainContainer,
  MainFont
} from '../../assets/styles/globalStyling';
import {
  currentTheme
} from '../../assets/styles/globalTheme';


const Stack = createStackNavigator();

// Main Page Code
function Homepage({navigation}) {
  return(
    <MainContainer>
      <MainFont style={{fontFamily: 'Roboto-Medium'}}>Hello World</MainFont>
      <Button
        title="Go to Game"
        onPress={()=>{
          navigation.navigate("Game");
        }}
        >
      </Button>
      <GameCollectionScreen />
    </MainContainer>
  );
}

// Game Page Code
function GamePage() {
  return(
    <MainContainer>
      <MainFont>Game Info Appears here</MainFont>
    </MainContainer>
  );
}

// App Logo
function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
    />
  );
}


export default function MainScreen(props) {
  const [state, setState] = useState({
    foundPrimaryColor: currentTheme.primaryColor,
    foundPrimaryColorAlt: currentTheme.primaryColorAlt,
    foundSecondaryColor: currentTheme.secondaryColor,
    foundSecondaryColorAlt: currentTheme.secondaryColorAlt,
    foundPrimaryFontColor: currentTheme.primaryFontColor,
    foundWhite: currentTheme.white,
    foundBlack: currentTheme.black
  });
  const primaryColor = state.foundPrimaryColor;
  const primaryColorAlt = state.foundPrimaryColorAlt;
  const secondaryColor = state.foundSecondaryColor;
  const secondaryColorAlt = state.foundSecondaryColorAlt;
  const primaryFontColor = state.foundPrimaryFontColor;
  const white = state.foundWhite;
  const black = state.foundBlack;
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerTitle: props => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor: primaryColor,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0
          },
          headerTintColor: primaryFontColor,
          style: {
            shadowColor: 'transparent',
          },
        }}
        initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          options={{
            
          }}
          component={Homepage} 
        />
        <Stack.Screen 
          name="Game"
           options={{  }}
          component={GamePage} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}