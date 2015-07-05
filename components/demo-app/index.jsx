var React = require('react');
var PureRenderComponent = require('../pure-render-component');
var Form = require('../form');
var {List} = require('immutable');

module.exports = DemoApp;
class DemoApp extends PureRenderComponent {
    render() {
        var {animations, targets, currentAnimation, currentTarget, actions, animationMode} = this.props;
        return (
            <div className="row">
                <div className="col-md-12 text-center">
                    <a href="https://github.com/alexeisavca/flux-animations">View source on github.</a>
                </div>
                <Form
                    animations={animations}
                    targets={targets}
                    currentAnimation={currentAnimation}
                    currentTarget={currentTarget}
                    animationMode={animationMode}
                    setCurrentAnimation={actions.setCurrentAnimation.bind(this.props.actions)}
                    setCurrentTarget={actions.setCurrentTarget.bind(this.props.actions)}
                    updateAnimationOption={actions.updateAnimationOption.bind(this.props.actions)}
                    setAnimationMode={actions.setAnimationMode.bind(this.props.actions)}
                    animationActions={actions.animations}
                />
            </div>
        )
    }
}

var {instanceOf, string, func, shape, oneOf} = React.PropTypes;
var requiredFunc = func.isRequired;
DemoApp.propTypes = {
    animations: instanceOf(List),
    target: instanceOf(List),
    currentAnimation: string.isRequired,
    currentTarget: string.isRequired,
    animationMode: oneOf(['js', 'css']).isRequired,
    actions: shape({
        setCurrentAnimation: requiredFunc,
        setCurrentTarget: requiredFunc,
        updateAnimationOption: requiredFunc,
        setAnimationMode: requiredFunc,
        animations: shape({
            fade: requiredFunc,
            resize: requiredFunc
        }).isRequired
    }).isRequired
};