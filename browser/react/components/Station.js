import React from 'react';
import Songs from './Songs';
import {convertSong} from '../utils'


const DUMMY_GENRE_NAME = 'Jazz';
const DUMMY_SONGS = [{
  id: 1,
  name: "A Love Supreme",
  genre: "Jazz",
  artists: [{ name: "John Coltrane" }]
}];
const DUMMY_CURRENT_SONG = {};
const DUMMY_IS_PLAYING = false;
const DUMMY_TOGGLE_ONE = function () {};



export default function (props) {


	console.log(props.songs)

  return (
    <div>
      <h3>{ props.genreName } Station</h3>
      <Songs 
        songs={ props.songs } 
        currentSong={DUMMY_CURRENT_SONG} 
        isPlaying={DUMMY_IS_PLAYING} 
        toggleOne={DUMMY_TOGGLE_ONE}
      />
    </div>
  );
}