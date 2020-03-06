import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';
import axios from 'axios';
import IGDB_API_KEY from '../../../server/config';


// App Styling
import {
  MainContainer,
  MainFont
} from '../../assets/styles/globalStyling';

export default function GameCollectionScreen() {
  const [gameState, setGameState] = useState({
    apiKey: IGDB_API_KEY.IGDB_API_KEY,
    genGames: [],
    genGames2: [],
    game: {
      consoleIDGen: 29,
      consoleID32x: 30,
      consoleIDSegaCD: 78,
      id: "",
      name: "",
      cover: "",
      genGamesImageUrl: "",
      releaseDate: "",
      genres: "",
      developers:"",
      players: "",
      popularity: ""
    }
  });

  async function myAsyncEffect() {
      await axios({
        url: "https://api-v3.igdb.com/games",
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'user-key': "" + IGDB_API_KEY.IGDB_API_KEY + ""
        },
        // Covers 500 games (Genesis) officially released between August 14, 1989 & January 1, 1994
        data: "fields first_release_date,name,cover.*; where platforms = (29) & first_release_date > 677635200 & first_release_date < 757814400; sort first_release_date desc; limit 500;"
      })
      .then(res => {
        const genGames = res.data;
        setGameState({
          genGames,
          genGamesImageUrl: res.data.id
        })
      })
      .catch(err => {
        console.error(err);
      });
  }

  useEffect(() => {
      myAsyncEffect()
  });

  function SegaGenesisCollection() {
    const segaGenIGDBArray = gameState.genGames;
    const segaGameCoverSize = 'cover_big';
      return (
        <View>
          {Object.keys(segaGenIGDBArray)
              .map((object, i) => (
                <Text>{segaGenIGDBArray[i].cover.image_id}</Text>
          ))}
        </View>
      )
  }
  
  return (
      <MainContainer>
        <ScrollView>
          <SegaGenesisCollection />
        </ScrollView>
      </MainContainer>
  );
}

  
