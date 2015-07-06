var React = require('react');
var DemoApp = require('./components/demo-app');
var {List, Map} = require('immutable');
var Flux = require('./simple-flux');
var targets = List([
    Map({
        name: "Paragraph",
        slug: "paragraph"
    }),
    Map({
        name: "Image",
        slug: "image"
    })
]);

var flux = new Flux();
var globalStateStore = flux.store("globalStateStore");
globalStateStore.setAnimations(List([
    Map({
        name: "Fade",
        slug: "fade",
        component: require('./components/fade-options'),
        options: Map({
            from: 1,
            to: 0,
            duration: 1000
        })
    }),
    Map({
        name: "Resize",
        slug: "resize",
        component: require('./components/resize-options'),
        options: Map({
            from: 1,
            to: 0,
            duration: 1000
        })
    })
]));
globalStateStore.setCurrentAnimation("fade");
globalStateStore.setCurrentTarget('image');
globalStateStore.setAnimationMode('css');
var animationsStore = flux.store("animationsStore");

flux.setOnStoreUpdateListener(function(){
    React.render(<DemoApp
        animations={globalStateStore.getAnimations()}
        targets={targets}
        currentAnimation={globalStateStore.getCurrentAnimation()}
        currentTarget={globalStateStore.getCurrentTarget()}
        animationMode={globalStateStore.getAnimationMode()}
        actions={flux.actions}
        imageStyle={animationsStore.getStyleFor("image")}
        paragraphStyle={animationsStore.getStyleFor("paragraph")}
    />, document.getElementById('the-container'));
});