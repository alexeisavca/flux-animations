var React = require('react');
var PureRenderComponent = require('../pure-render-component');
var Form = require('../form');
var {List} = require('immutable');

module.exports = DemoApp;
class DemoApp extends PureRenderComponent {
    render() {
        var {animations, targets} = this.props;
        return (
            <div className="row">
                <div className="col-md-12 text-center">
                    <a href="https://github.com/alexeisavca/flux-animations">View source on github.</a>
                </div>
                <Form animations={animations} targets={targets}/>
            </div>
        )
    }
}

var {instanceOf, string, func} = React.PropTypes;
Form.propTypes = {
    animations: instanceOf(List),
    target: instanceOf(List),
    currentAnimation: string.isRequired,
    setCurrentAnimation: func.isRequired,
    currentTarget: string.isRequired,
    setCurrentTarget: func.isRequired
};