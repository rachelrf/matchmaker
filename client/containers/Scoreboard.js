import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ScoreboardActions from '../actions/scoreboard'
import io from 'socket.io-client'

const scoreboardStyle = {
  position: 'fixed',
  width: 230,
  right: 0,
  top: 50,
  bottom: 0,
  backgroundColor: '#eee',
  // borderRight: '1px solid #333',
  // padding: 16
}

class Scoreboard extends Component {
	componentDidMount() {
		const { actions } = this.props
		const socket = io()
		socket.on('scoreboard', (data) => {
		  actions.updateScoreboard(data)
		})
	}

  render() {
    const { scoreboard, actions } = this.props

    let scoreboardEntries = scoreboard.map((scoreboardEntry, index) => {
      return <ScoreboardEntry pair={scoreboardEntry.pair} key={index} />
    })

    console.log("Entries: ", scoreboardEntries)
    console.log("numEntries: ", scoreboardEntries.length)

    return (
    	<div>
        <div className="scoreboardEntries " style={scoreboardStyle}>
          {scoreboardEntries}
        </div>
      </div>
    )
  }
}

const entryStyle = {
  marginTop: 10,
  marginBottom: -5
}

const thumbnailStyle = {
  height: 60,
  width: 60,
  marginRight: 10
}

const heartIconStyle = {
  height: 20,

}

const ScoreboardEntry = (props) => {
  return (
    <div className="well well-sm" style={entryStyle}>
      <img src={props.pair.target.image_url} style={thumbnailStyle}/>
      <img src={props.pair.prospect.image_url} style={thumbnailStyle}/>
      <br></br>
      <img style={heartIconStyle} src='http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/3d-transparent-glass-icons-culture/022152-3d-transparent-glass-icon-culture-heart-solid-sc44.png'/>
      {props ? props.pair.target.first_name : ''} was just matched with {props ? props.pair.prospect.first_name : ''}
    </div>
  )
}

Scoreboard.propTypes = {
  scoreboard: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    scoreboard: state.scoreboard
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ScoreboardActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scoreboard)


