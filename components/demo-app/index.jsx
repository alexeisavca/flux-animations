var React = require('react');
var PureRenderComponent = require('../pure-render-component');
var Form = require('../form');
var {List} = require('immutable');

module.exports = DemoApp;
class DemoApp extends PureRenderComponent {
    render() {
        var {animations, targets, currentAnimation, currentTarget, actions} = this.props;
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
                    setCurrentAnimation={actions.setCurrentAnimation.bind(this.props.actions)}
                    setCurrentTarget={actions.setCurrentTarget.bind(this.props.actions)}
                />
            </div>
        )
    }
}

var {instanceOf, string, func, shape} = React.PropTypes;
DemoApp.propTypes = {
    animations: instanceOf(List),
    target: instanceOf(List),
    currentAnimation: string.isRequired,
    currentTarget: string.isRequired,
    actions: shape({
        setCurrentAnimation: func.isRequired,
        setCurrentTarget: func.isRequired
    }).isRequired
};