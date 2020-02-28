import React, {
  useState,
  useEffect
} from 'react';

import {
  View, Text, Button, Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { 
  MainContainer,
  MainFont
} from '../../assets/styles/globalStyling';
import {
  currentTheme
} from '../../assets/styles/globalTheme';

const Stack = createStackNavigator();

function Homepage({navigation}) {
  return(
    <MainContainer>
      <MainFont>Hello World</MainFont>
      <Button
        title="Go to Game"
        onPress={()=>{
          navigation.navigate("Game");
        }}
        >
      </Button>
    </MainContainer>
  );
}

function GamePage() {
  return(
    <MainContainer>
      <MainFont>Game Info Appears here</MainFont>
    </MainContainer>
  );
}

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
    foundWhite: currentTheme.white,
    foundBlack: currentTheme.black
  });
  const primaryColor = state.foundPrimaryColor;
  const primaryColorAlt = state.foundPrimaryColorAlt;
  const secondaryColor = state.foundSecondaryColor;
  const white = state.foundWhite;
  const black = state.foundBlack;
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerTitle: props => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTintColor: secondaryColor
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