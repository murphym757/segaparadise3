import React, {
  useState,
  useEffect
} from 'react';

import {
  View, Text
} from 'react-native';

import { 
  MainContainer,
  MainFont
} from './src/app/assets/styles/globalStyling';

export default function App(props) {
  return (
    <MainContainer>
      <MainFont>Hello World</MainFont>
    </MainContainer>
  );
}



