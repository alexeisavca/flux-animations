import Store from "./index.es6";
import constants from "../constants";
export default class GlobalStateStore extends Store{
    constructor(){
        super({
            [constants.CURRENT_ANIMATION_CHANGED]: this.setCurrentAnimation
        });
        ["CurrentAnimation"].forEach(property => this.createProperty.bind(this));
    }
}