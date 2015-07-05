import Store from "./index.es6";
import * as constants from "../constants";
import {List} from "immutable";
export default class GlobalStateStore extends Store{
    constructor(){
        super({
            [constants.CURRENT_ANIMATION_CHANGED]: 'setCurrentAnimation',
            [constants.CURRENT_TARGET_CHANGED]: 'setCurrentTarget'
        });
        ["CurrentAnimation", "CurrentTarget", "Animations"].forEach(this.createProperty.bind(this));
        this.setAnimations(List());
    }
}