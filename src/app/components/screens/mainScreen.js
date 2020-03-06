import React, { useState, useEffect, useContext } from 'react'; 
import HomeStack from './homeStack';
import {CurrentThemeContext} from '../../assets/styles/globalTheme';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export default function MainScreen(props) {
  const colors = useContext(CurrentThemeContext);
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={colors.primaryFontColor}
        inactiveColor = "#3e2465"
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: colors.primaryColor }}
        barStyle={{ backgroundColor: colors.primaryColor }}
      >
        <Tab.Screen 
          name="Home"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={ faHome } color={color} size={size} />
          ),
          }}
          component={HomeStack} 
        />
    </Tab.Navigator>
    </NavigationContainer>
  );
}