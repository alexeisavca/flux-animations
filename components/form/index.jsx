var React = require('react');
var PureRenderComponent = require('../pure-render-component');
var {List} = require('immutable');

module.exports = Form;
class Form extends PureRenderComponent {
    updateCurrentAnimation(event){
        this.props.setCurrentAnimation(event.target.value);
    }

    updateCurrentTarget(event){
        this.props.setCurrentTarget(event.target.value);
    }

    render() {
        var {animations, targets, currentAnimation, currentTarget, updateAnimationOption} = this.props;
        var currentAnimationObj = animations.find(animation => animation.get('slug') == currentAnimation);
        var CurrentAnimationOptions = currentAnimationObj.get('component');
        var currentAnimationProps = currentAnimationObj.get('options').toJS();
        return (
            <div className="col-md-12">
                <form className="form-inline">
                    <div className="form-group">
                        <select className="form-control" value={currentAnimation} onChange={this.updateCurrentAnimation.bind(this)}>
                            {animations.map(animation => (
                                <option value={animation.get('slug')} key={animation.get('slug')}>{animation.get('name')}</option>
                            ))}
                        </select>
                    </div>
                    &nbsp;
                    <div className="form-group">
                        <select className="form-control" value={currentTarget} onChange={this.updateCurrentTarget.bind(this)}>
                            {targets.map(target => (
                                <option value={target.get('slug')} key={target.get('slug')}>{target.get('name')}</option>
                            ))}
                        </select>
                    </div>
                    &nbsp;
                    <CurrentAnimationOptions {...currentAnimationProps} updateAnimationOption={updateAnimationOption}/>
                    &nbsp;
                    <button type="submit" className="btn btn-default">Go!</button>
                </form>
            </div>
        )
    }
}

var {instanceOf, string, func} = React.PropTypes;
var requiredFunc = func.isRequired;
var requiredString = string.isRequired;
Form.propTypes = {
    animations: instanceOf(List),
    target: instanceOf(List),
    currentAnimation: requiredString,
    setCurrentAnimation: requiredFunc,
    currentTarget: requiredString,
    setCurrentTarget: requiredFunc,
    updateAnimationOption: requiredFunc
};