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

    updateAnimationMode(event){
        this.props.setAnimationMode(event.target.value);
    }

    doAnimation(event){
        event.preventDefault();
        var {currentAnimation, animationActions} = this.props;
        animationActions[currentAnimation]();
    }

    render() {
        var {animations, targets, currentAnimation, currentTarget, updateAnimationOption, animationMode,
            setAnimationMode} = this.props;
        var currentAnimationObj = animations.find(animation => animation.get('slug') == currentAnimation);
        var CurrentAnimationOptions = currentAnimationObj.get('component');
        var currentAnimationProps = currentAnimationObj.get('options').toJS();
        return (
            <div className="col-md-12">
                <form className="form-inline" onSubmit={this.doAnimation}>
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
                    <div className="form-group">
                        <label>via</label>
                        <select className="form-control" value={animationMode} onChange={this.updateAnimationMode.bind(this)}>
                            <option value="css">CSS</option>
                            <option value="js">JS</option>
                        </select>
                    </div>
                    &nbsp;
                    <button type="submit" className="btn btn-default">Go!</button>
                </form>
            </div>
        )
    }
}

var {instanceOf, string, func, shape, oneOf} = React.PropTypes;
var requiredFunc = func.isRequired;
var requiredString = string.isRequired;
Form.propTypes = {
    animations: instanceOf(List),
    target: instanceOf(List),
    currentAnimation: requiredString,
    setCurrentAnimation: requiredFunc,
    currentTarget: requiredString,
    setCurrentTarget: requiredFunc,
    updateAnimationOption: requiredFunc,
    animationMode: oneOf(['js', 'css']).isRequired,
    setAnimationMode: requiredFunc,
    animationActions: shape({
        fade: requiredFunc,
        resize: requiredFunc
    }).isRequired
};