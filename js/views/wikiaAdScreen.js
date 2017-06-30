/********************************************************************
 WIKIA AD SCREEN
 *********************************************************************/
var React = require('react'),
  ControlBar = require('../components/controlBar');

var WikiaAdScreen = React.createClass({
  getInitialState: function() {
    return {
      controlBarVisible: false
    };
  },

  componentDidMount: function () {

  },

  componentWillUpdate: function(nextProps) {

  },

  componentWillUnmount: function () {

  },

  getPlaybackControlItems: function() {
    if (!this.props.skinConfig.adScreen.showControlBar) return null;

    var showControlBar =
      this.state.controlBarVisible;

    var playbackControlItemTemplates = {
      "controlBar": <ControlBar {...this.props}
                                controlBarVisible={showControlBar}
                                playerState={this.props.playerState}
                                key='controlBar' />
    };

    var playbackControlItems = [];
    for (var item in playbackControlItemTemplates) {
      if (playbackControlItemTemplates.hasOwnProperty(item)) {
        playbackControlItems.push(playbackControlItemTemplates[item]);
      }
    }

    return playbackControlItems;
  },

  onClick: function(e) {
    this.setState({
      controlBarVisible: !this.state.controlBarVisible
    });
    e.stopPropagation();
  },

  onMouseOver: function(e) {
    if (!('ontouchstart' in window)) {
      this.setState({
        controlBarVisible: true
      });
    }
  },

  onMouseOut: function(e) {
    this.setState({
      controlBarVisible: false
    });
  },

  render: function() {
    var playbackControlItems = null;
    if(this.props.skinConfig.adScreen.showControlBar) {
      playbackControlItems = this.getPlaybackControlItems();
    }

    return (
      <div className="oo-state-screen oo-wikia-ad-screen"
           ref="wikiaAdScreen" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}
           onClick={this.onClick}>

        <div className="oo-interactive-container">
          {playbackControlItems}
        </div>

      </div>
    );
  }
});
module.exports = WikiaAdScreen;