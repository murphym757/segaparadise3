import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image } from 'react-native';
import Font from '../../assets/styles/globalStyling';
import axios from 'axios';
import IGDB_API_KEY from '../../../server/config';

export default function GameCollectionScreen() {
  const [gameState, setGameState] = useState({
    apiKey: IGDB_API_KEY.IGDB_API_KEY,
    game: {
      consoleID: 29,
      id: ""
    }
  });

  async function myAsyncEffect() {
      await axios({
        url: "https://api-v3.igdb.com/games",
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'user-key': gameState.apiKey.toString()
        },
        // Covers 500 games (Genesis, SegaCD and 32x) officially released on and prior to September 16, 1997
        data: "fields *; where platforms = (29,30,78) & first_release_date < 874368000; limit 500;"
      })
      .then(res => {
        setGameState({
          game: {
            id: ""+ res.data[0].id +""
          }
        })
      })
      .catch(err => {
        console.error(err);
      });
  }

  useEffect(() => {
      myAsyncEffect()
  }, []);
  
  return (
      <View>
    <Text style={{fontFamily: 'Roboto-Regular'}}>{gameState.game.id}</Text>
    </View>
  );
}

  