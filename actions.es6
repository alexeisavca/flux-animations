import Tweenable from "shifty";
import {JS_ANIMATION_FRAME} from "./constants";
export default class Actions {
    constructor(dispatcher){
        this.dispatch = function(action, payload){
            dispatcher(action, payload);
        }
    }

    animateWithJs({target, from, to, duration}){
        Tweenable.tween({
            from: from,
            to: to,
            duration: duration,
            step: (state) => {
                this.dispatch(JS_ANIMATION_FRAME, {
                    target: target,
                    style: state
                });
            }
        })
    }

    animateWithCss(){
        throw new Error("Implement me");
    }


    fade({target, from, to, duration, _mode}){
        var mode = _mode || 'css';
        var cb = 'js' == mode ? this.animateWithJs : this.animateWithCss;
        cb({
            target: target,
            from: {
                opacity: from
            },
            to: {
                opacity: to
            },
            duration: duration
        })
    }
};