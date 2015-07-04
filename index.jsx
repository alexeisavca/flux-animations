var React = require('react');
var DemoApp = require('./components/demo-app');
var {List, Map} = require('immutable');
var Flux = require('./simple-flux');
var animations = List([
    Map({
        name: "Fade",
        slug: "fade"
    })
]);

var targets = List([
    Map({
        name: "Box",
        slug: "box"
    }),
    Map({
        name: "Image",
        slug: "image"
    })
]);

var flux = new Flux();
var globalStateStore = flux.store("globalStateStore");
globalStateStore.setCurrentAnimation("fade");

flux.setOnStoreUpdateListener(function(){
    React.render(<DemoApp
        animations={animations}
        targets={targets}
        currentAnimation={globalStateStore.getCurrentAnimation()}
    />, document.getElementById('the-container'));
});