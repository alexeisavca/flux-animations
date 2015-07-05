var constants = require('./constants');
var {List, Map} = require('immutable');
export default class Actions{
    constructor(dispatcher){
        this.dispatch = dispatcher;
    }

    setCurrentAnimation(slug){
        this.dispatch(constants.CURRENT_ANIMATION_CHANGED, slug);
    }

    setCurrentTarget(slug){
        this.dispatch(constants.CURRENT_TARGET_CHANGED, slug);
    }

    updateAnimationOption(animationName, optionName, value){
        this.dispatch(constants.ANIMATION_OPTION_CHANGED, {
            animationName: animationName,
            optionName: optionName,
            value: value
        })
    }
};