import{ connect } from  'react-redux';
import Station from '../components/Station';
import Songs from '../components/Songs';
import React from 'react';

const mapStateToProps = (state, ownProps) => {

	// console.log(ownProps)

    return {
	  	genreName: ownProps.params.stationId,
	  	songs: state.songs
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Station);