/********************************************************************
 WIKIA AD SCREEN
 *********************************************************************/
var React = require('react'),
  CONSTANTS = require('../constants/constants'),
  ControlBar = require('../components/controlBar');

var WikiaAdScreen = React.createClass({

  getInitialState: function () {
    this.isMobile = this.props.controller.state.isMobile;
    return {
      controlBarVisible: true
    };
  },

  componentDidMount: function () {
    this.props.controller.startHideControlBarTimer();
  },

  componentWillUpdate: function (nextProps) {
    if (nextProps) {
      if (nextProps.controller.state.controlBarVisible == false && this.state.controlBarVisible == true) {
        this.hideControlBar();
      }

      if (!this.props.fullscreen && nextProps.fullscreen) {
        this.props.controller.startHideControlBarTimer();
      }

      if (this.props.fullscreen && !nextProps.fullscreen && this.isMobile) {
        this.setState({controlBarVisible: true});
        this.props.controller.showControlBar();
        this.props.controller.startHideControlBarTimer();
      }
    }
  },

  componentWillUnmount: function () {
    this.props.controller.cancelTimer();
  },

  getPlaybackControlItems: function () {
    if (!this.props.skinConfig.adScreen.showControlBar) return null;

    var showControlBar =
      this.props.controller.state.controlBarVisible || this.props.playerState == CONSTANTS.STATE.PAUSE;

    var playbackControlItemTemplates = {
      "controlBar": <ControlBar {...this.props}
                                controlBarVisible={showControlBar}
                                playerState={this.props.playerState}
                                isWikiaAdScreen={true}
                                key='controlBar'/>
    };

    var playbackControlItems = [];
    for (var item in playbackControlItemTemplates) {
      if (playbackControlItemTemplates.hasOwnProperty(item)) {
        playbackControlItems.push(playbackControlItemTemplates[item]);
      }
    }

    return playbackControlItems;
  },

  onClick: function (e) {
    if (!this.state.controlBarVisible && this.props.playerState !== CONSTANTS.STATE.PAUSE) {
      this.props.controller.startHideControlBarTimer();
      this.showControlBar();
    } else {
      this.props.controller.togglePlayPause();
    }
    e.stopPropagation();
  },

  onMouseOver: function () {
    if (!('ontouchstart' in window)) {
      this.showControlBar();
      this.props.controller.startHideControlBarTimer();
    }
  },

  onMouseOut: function () {
    if (!('ontouchstart' in window)) {
      this.hideControlBar();
    }
  },

  showControlBar: function() {
    this.setState({controlBarVisible: true});
    this.props.controller.showControlBar();
  },

  hideControlBar: function(event) {
    if (!(this.isMobile && event)) {
      this.setState({controlBarVisible: false});
      this.props.controller.hideControlBar();
    }
  },

  render: function () {
    var playbackControlItems = null;
    if (this.props.skinConfig.adScreen.showControlBar) {
      playbackControlItems = this.getPlaybackControlItems();
    }

    return (
      <div className="oo-state-screen oo-wikia-ad-screen"
           ref="wikiaAdScreen" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>

        <div className="oo-state-screen-selectable" onClick={this.onClick}></div>

        <div className="oo-wikia-ad-screen-top-bar">
          <a className="oo-wikia-ad-screen-learn-more" href="#">Learn more</a>
        </div>
        <div className="oo-interactive-container">
          {playbackControlItems}
        </div>

      </div>
    );
  }
});
module.exports = WikiaAdScreen;