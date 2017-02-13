import{ connect } from  'react-redux';
import Stations from '../components/Stations';
import React from 'react';

const convertSongsToStations = function (songsArray) {

  const stations = {};
  
  songsArray.forEach(song => {
    const genre = song.genre;
    stations[genre] = stations[genre] || [];
    stations[genre].push(song);
  });

  return stations;
};

const mapStateToProps = (state, ownProps) => {

	    return {
	    	stations: convertSongsToStations(state.songs)
	    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
		return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Stations);

