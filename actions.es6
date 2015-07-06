import {JS_ANIMATION_FRAME} from "./constants";
import FadeAnimation from "keyframes.js/animation/fade";
import ScaleAnimation from "keyframes.js/animation/scale";
export default class Actions {
    constructor(dispatcher){
        this.dispatch = function(action, payload){
            dispatcher(action, payload);
        }
    }

    animateWithJs(target, animation){
        animation.play( state => {
            this.dispatch(JS_ANIMATION_FRAME, {
                target: target,
                style: state
            })
        })
    }

    animateWithCss(target, animation){
        throw new Error("Implement me");
    }

    fade({target, from, to, duration, mode, easing}){
        var _mode = mode || 'css';
        var cb = ('js' == _mode ? this.animateWithJs : this.animateWithCss).bind(this);
        cb(target, new FadeAnimation(from, to, duration, easing));
    }

    resize({target, from, to, duration, mode, easing}){
        var _mode = mode || 'css';
        var cb = ('js' == _mode ? this.animateWithJs : this.animateWithCss).bind(this);
        cb(target, new ScaleAnimation(from, to, duration, easing));
    }
};