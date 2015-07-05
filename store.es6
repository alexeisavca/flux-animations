import {Map} from "immutable";
import ProtoStore from "./proto-store.es6";
import * as constants from "./constants.es6";
export default class AnimationsStore extends Store{
    constructor(){
        super({
            [constants.JS_ANIMATION_FRAME]: "updateAnimatableStyle"
        });
        ['Animatables'].forEach(property => this.createProperty(property));
    }

    getStyleFor(target){

    }

    getClassNameFor(target){

    }

    getCssAnimations(){

    }
};