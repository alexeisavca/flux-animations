import Store from "./index.es6";
import * as constants from "../constants";
export default class GlobalStateStore extends Store{
    constructor(){
        super({
            [constants.CURRENT_ANIMATION_CHANGED]: 'setCurrentAnimation',
            [constants.CURRENT_TARGET_CHANGED]: 'setCurrentTarget'
        });
        ["CurrentAnimation", "CurrentTarget"].forEach(this.createProperty.bind(this));
    }
}