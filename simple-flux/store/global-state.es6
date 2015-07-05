import ProtoStore from "../../proto-store";
import * as constants from "../constants";
import {List} from "immutable";
export default class GlobalStateStore extends ProtoStore{
    constructor(){
        super({
            [constants.CURRENT_ANIMATION_CHANGED]: 'setCurrentAnimation',
            [constants.CURRENT_TARGET_CHANGED]: 'setCurrentTarget',
            [constants.ANIMATION_OPTION_CHANGED]: 'updateAnimationOption',
            [constants.ANIMATION_MODE_CHANGED]: 'setAnimationMode'
        });
        ["CurrentAnimation", "CurrentTarget", "Animations", "AnimationMode"].forEach(this.createProperty.bind(this));
        this.setAnimations(List());
    }

    updateAnimationOption({animationName, optionName, value}){
        var animations = this.getAnimations();
        var index = animations.findIndex(animation => animation.get('slug') == animationName);
        this.setAnimations(animations.setIn([index, 'options', optionName], value));
    }
}