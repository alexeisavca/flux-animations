var React = require('react');
var PureRenderComponent = require('../pure-render-component');
var Form = require('../form');
var {List, Map} = require('immutable');

module.exports = DemoApp;
class DemoApp extends PureRenderComponent {
    render() {
        var {animations, targets, currentAnimation, currentTarget, actions, animationMode, imageStyle,
            paragraphStyle} = this.props;
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
                <div className="col-md-6" style={{marginTop: 10}}>
                    <img src="http://placekitten.com/400/600" alt="" style={imageStyle.toJS()}/>
                </div>
                <div className="col-md-6" style={{marginTop: 10}}>
                    <p style={paragraphStyle.toJS()}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id tristique purus. Morbi tincidunt est vitae massa volutpat posuere. Mauris ut faucibus nisi. Sed quis semper velit. Aliquam elementum mi eu enim pulvinar mattis. In porta in turpis non pretium. Aenean at facilisis diam. Morbi non iaculis eros.

                        Aliquam condimentum iaculis dolor, vel aliquet enim pretium non. Duis vel libero vel dolor sagittis suscipit vel non libero. Suspendisse venenatis at velit vel tempor. Etiam et elementum massa. Pellentesque auctor lacus vulputate congue blandit. Phasellus consequat, est eu consectetur porttitor, lacus est dignissim dolor, sit amet pulvinar eros risus id massa. Sed nisi tortor, lacinia sit amet nisi non, commodo sagittis turpis. Aenean pretium lectus at laoreet iaculis. Phasellus porttitor sapien id hendrerit rutrum. Integer vel ullamcorper nunc. Vestibulum dui ipsum, sollicitudin ac odio eget, tincidunt ultricies sem. Donec suscipit eros orci, vel egestas sem sollicitudin tempor. Maecenas placerat ligula eget ipsum rutrum, ut suscipit nisl fringilla.

                        Sed rutrum nec nulla a ultrices. Morbi egestas quam in sapien vulputate, at ornare est placerat. Praesent sit amet arcu a justo elementum dictum. Ut lacinia vel sem ut tincidunt. Sed vel facilisis augue. Vestibulum feugiat diam at efficitur luctus. Sed vel ultricies purus. Vestibulum tincidunt, nisi sit amet accumsan pharetra, velit quam auctor magna, eu viverra nunc ligula hendrerit elit. Proin in tempor nisl, id feugiat ipsum. Morbi consequat neque purus, a feugiat turpis suscipit elementum. Sed rhoncus dictum rutrum. Sed et nulla non leo placerat elementum sed ut risus.

                        Pellentesque eu rutrum mauris. Nunc pulvinar aliquet urna vitae gravida. Suspendisse eget sapien ipsum. In porttitor orci ut tincidunt facilisis. Donec aliquam ornare aliquam. Nunc odio ex, tempus ut efficitur vitae, vehicula ut ipsum. Vestibulum consequat rhoncus sapien, at fermentum libero vulputate vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris aliquet blandit nulla, non interdum ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed interdum ipsum dolor, eu placerat odio semper a. Pellentesque sit amet est non massa ornare congue. Duis ac tempus orci. Quisque tincidunt, lacus in semper vulputate, nulla sapien tempor tortor, sed posuere ante risus varius nisl. Vestibulum tristique felis quam, feugiat iaculis nisl rhoncus ac.

                        Praesent in elit accumsan, rhoncus ligula et, vehicula nunc. Vivamus porttitor enim et aliquet cursus. In pretium metus nisl, vel mattis leo hendrerit ac. Phasellus porttitor nisl quis ornare vestibulum. Nullam sed leo nisi. Praesent commodo dolor in enim dictum blandit. In nibh ligula, lobortis quis egestas ac, maximus at tellus. Proin placerat sed mauris id suscipit. Nulla blandit consequat diam, aliquam tempus sapien. Donec iaculis dui tortor, in molestie purus placerat nec. Nunc rhoncus molestie turpis, at lobortis mauris venenatis sed. Duis hendrerit efficitur nisi id ullamcorper. In in augue purus. Proin consectetur libero sit amet tortor congue, ut auctor lacus faucibus.
                    </p>
                </div>
            </div>
        )
    }
}

var {instanceOf, string, func, shape, oneOf, object} = React.PropTypes;
var requiredFunc = func.isRequired;
var requiredMap = instanceOf(Map).isRequired;
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
    }).isRequired,
    imageStyle: requiredMap,
    paragraphStyle: requiredMap
};