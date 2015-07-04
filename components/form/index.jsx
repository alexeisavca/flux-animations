var React = require('react');
var PureRenderComponent = require('../pure-render-component');
var {List} = require('immutable');

module.exports = Form;
class Form extends PureRenderComponent {
    render() {
        var {animations, targets} = this.props;
        return (
            <div className="col-md-12">
                <form className="form-inline">
                    <div className="form-group">
                        <select className="form-control">
                            {animations.map(animation => (
                                <option value={animation.get('slug')} key={animation.get('slug')}>{animation.get('name')}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <select className="form-control">
                            {targets.map(target => (
                                <option value={target.get('slug')} key={target.get('slug')}>{target.get('name')}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-default">Go!</button>
                </form>
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