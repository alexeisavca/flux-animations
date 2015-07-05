import {default as ProtoStore} from "./index.es6";
import * as  constants from "../constants";
import AnimationsStore from "../../store";
export default class Store extends ProtoStore{
    constructor(){
        super({
            [constants.animations.JS_ANIMATION_FRAME]: "onJsAnimationFrame"
        });
        var animationStore = new AnimationsStore();
    }
}