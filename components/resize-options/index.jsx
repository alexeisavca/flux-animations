var React = require('react');
var PureRenderComponent = require('../pure-render-component');
module.exports = ResizeOptions;
class ResizeOptions extends PureRenderComponent {
    updateAnimationOptions(optionName, event){
        this.props.updateAnimationOption('resize', optionName, parseFloat(event.target.value));
    }

    render() {
        var {from, to, duration} = this.props;
        return (
            <span>
                <div className="form-group">
                    <label>From:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={from}
                        onChange={this.updateAnimationOptions.bind(this, 'from')}
                        step="0.1"
                        min="0"
                        max="1"
                    />
                </div>
                &nbsp;
                <div className="form-group">
                    <label>To:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={to}
                        onChange={this.updateAnimationOptions.bind(this, 'to')}
                        step="0.1"
                        min="0"
                        max="1"
                    />
                </div>
                &nbsp;
                <div className="form-group">
                    <label>During:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={duration}
                        onChange={this.updateAnimationOptions.bind(this, 'duration')}
                        min="0"
                    />
                    &nbsp;
                    <label>ms</label>
                </div>
            </span>
        )
    }
}
var {number, func} = React.PropTypes;
var requiredNumber = number.isRequired;
ResizeOptions.propTypes = {
    from: requiredNumber,
    to: requiredNumber,
    duration: requiredNumber,
    updateAnimationOption: func.isRequired
};