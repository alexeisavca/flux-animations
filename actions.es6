import {JS_ANIMATION_FRAME} from "./constants";
import * as K from "keyframes.js";
export default class Actions {
    constructor(dispatcher){
        this.dispatch = function(action, payload){
            dispatcher(action, payload);
        }
    }

    animateWithJs(target, duration, tween){
        K.stream(duration, tween, state => {
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
        var _ease = easing || K.easings.linear;
        var cb = ('js' == _mode ? this.animateWithJs : this.animateWithCss).bind(this);
        cb(target, duration, K.prerender(duration, _ease(K.transition('opacity', from, to))));
    }

    resize({target, from, to, duration, mode, easing}){
        var _mode = mode || 'css';
        var cb = ('js' == _mode ? this.animateWithJs : this.animateWithCss).bind(this);
        //cb(target, new ScaleAnimation(from, to, duration, easing));
    }
};