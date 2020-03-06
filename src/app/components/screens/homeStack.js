import React, { useState, useEffect, useContext } from 'react';
import GameCollectionScreen from './gameCollectionScreen';
import {CurrentThemeContext} from '../../assets/styles/globalTheme';

// React Navigation
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

 export default function MainScreen(){
     const colors = useContext(CurrentThemeContext);
     return (
         <Stack.Navigator 
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primaryColor,
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0
                },
                headerTintColor: colors.primaryFontColor,
                style: {
                    shadowColor: 'transparent',
                },
            }}
            initialRouteName="Games"
        >
             <Stack.Screen 
                name= "Games"
                options={{  }}
                component={GameCollectionScreen} 
            />
         </Stack.Navigator>
     );
 }
