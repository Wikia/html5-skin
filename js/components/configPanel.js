/**
 * Panel component for video quality selection
 *
 * @module VideoQualityPanel
 */
var React = require('react'),
    ClassNames = require('classnames'),
    VideoQualityPanel = require('./videoQualityPanel'),
    AutoplaySwitch = require('./autoplaySwitch');

var ConfigPanel = React.createClass({
    getInitialState: function() {
        return {

        };
    },

    handleVideoQualityClick: function () {
        this.props.toggleQualityAction();
    },

    render: function() {

        return (
            <div className="oo-config-panel">
                    <ul>
                        <li><a onClick={this.handleVideoQualityClick}>Video Quality <svg className="chevron" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 14a.997.997 0 0 1-.707-.293l-7-7a.999.999 0 1 1 1.414-1.414L9 11.586l6.293-6.293a.999.999 0 1 1 1.414 1.414l-7 7A.997.997 0 0 1 9 14" fill-rule="evenodd"/>
                        </svg></a></li>
                        <li>Autoplay Videos <AutoplaySwitch/></li>
                    </ul>
            </div>
        );
    }
});

// VideoQualityPanel.propTypes = {
//     videoQualityOptions: React.PropTypes.shape({
//         availableBitrates: React.PropTypes.arrayOf(React.PropTypes.shape({
//             id: React.PropTypes.string,
//             bitrate: React.PropTypes.oneOfType([
//                 React.PropTypes.string,
//                 React.PropTypes.number,
//             ]),
//             label: React.PropTypes.string
//         }))
//     }),
//     togglePopoverAction: React.PropTypes.func,
//     controller: React.PropTypes.shape({
//         sendVideoQualityChangeEvent: React.PropTypes.func
//     })
// };
//
// VideoQualityPanel.defaultProps = {
//     popover: false,
//     skinConfig: {
//         icons: {
//             quality:{fontStyleClass:'oo-icon oo-icon-topmenu-quality'}
//         }
//     },
//     videoQualityOptions: {
//         availableBitrates: []
//     },
//     togglePopoverAction: function(){},
//     controller: {
//         sendVideoQualityChangeEvent: function(a){}
//     }
// };

module.exports = ConfigPanel;