var constants = require('./constants');
var {List, Map} = require('immutable');
export default class Actions{
    constructor(dispatcher){
        this.dispatch = dispatcher;
    }

    setCurrentAnimation(slug){
        this.dispatch(constants.CURRENT_ANIMATION_CHANGED, slug);
    }
};