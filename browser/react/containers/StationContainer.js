import{ connect } from  'react-redux';
import Station from '../components/Station';
import Songs from '../components/Songs';
import React from 'react';

const mapStateToProps = (state, ownProps) => {

	const filteredSongs = state.songs.filter(song => song.genre === ownProps.params.stationId)

	console.log(filteredSongs)

    return {
	  	genreName: ownProps.params.stationId,
	  	songs: filteredSongs
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Station);

