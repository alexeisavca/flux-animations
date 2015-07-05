import {Map} from "immutable";
import ProtoStore from "./proto-store.es6";
import * as constants from "./constants.es6";
export default class extends ProtoStore{
    constructor(){
        super({
            [constants.JS_ANIMATION_FRAME]: "updateAnimatableStyle"
        });
        ['Animatables'].forEach(property => this.createProperty(property));
        this.setAnimatables(Map());
    }

    updateAnimatableStyle({target, style}){
        this.setAnimatables(this.getAnimatables().setIn([target, 'style'], Map(style)));
    }

    getStyleFor(target){
        var style = this.getAnimatables().getIn([target, 'style']);
        return style && style.toJS();
    }

    getClassNameFor(target){

    }

    getCssAnimations(){

    }
};