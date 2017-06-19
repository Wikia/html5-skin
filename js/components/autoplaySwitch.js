var React = require('react'),
    Utils = require('./utils'),
    CONSTANTS = require('../constants/constants'),
    ClassNames = require('classnames');

var AutoplaySwitch = React.createClass({
    // handleOnOffSwitch: function() {
    //     this.props.controller.toggleClosedCaptionEnabled();
    // },

    render: function(){

        var switchThumbClassName = ClassNames({
            'oo-switch-thumb': true,
            'oo-switch-thumb-on': this.props.autoPlay.enabled,
            'oo-switch-thumb-off': !this.props.autoPlay.enabled
        });
        var switchBodyClassName = ClassNames({
            'oo-switch-body': true,
            'oo-switch-body-off': !this.props.autoPlay.enabled
        });
        var onCaptionClassName = ClassNames({
            'oo-switch-captions oo-switch-captions-on': true,
            'oo-switch-captions-active': this.props.autoPlay.enabled
        });
        var offCaptionClassName = ClassNames({
            'oo-switch-captions oo-switch-captions-off': true,
            'oo-switch-captions-active': !this.props.autoPlay.enabled
        });
          var ccOnStyle =  {backgroundColor: this.props.autoPlay.enabled && this.props.skinConfig.general.accentColor ? this.props.skinConfig.general.accentColor : null};
        // var offString = Utils.getLocalizedString(this.props.language, CONSTANTS.SKIN_TEXT.OFF, this.props.localizableStrings);
        // var onString = Utils.getLocalizedString(this.props.language, CONSTANTS.SKIN_TEXT.ON, this.props.localizableStrings);

        // return (
        //     <div className="oo-switch-container">
        //         <span className={offCaptionClassName}>Off</span>
        //         <div className="oo-switch-element">
        //             <span className={switchBodyClassName} style={ccOnStyle}></span>
        //             <span className={switchThumbClassName}></span>
        //         </div>
        //         <span className={onCaptionClassName}>On</span>
        //         <a className="oo-switch-container-selectable"></a>
        //     </div>
        // );

        return (
            <div className="oo-switch-container">
                <span className={offCaptionClassName}></span>
                <div className="oo-switch-element">
                    <span className={switchBodyClassName} style={ccOnStyle}></span>
                    <span className={switchThumbClassName}></span>
                </div>
                <span className={onCaptionClassName}></span>
                <a className="oo-switch-container-selectable" onClick={this.handleOnOffSwitch}></a>
            </div>
        );
    }
});

module.exports = AutoplaySwitch;