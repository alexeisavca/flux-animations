import Tweenable from "shifty";
export default class Actions {
    constructor(dispatcher){
        this.dispatch = function(action, payload){
            dispatcher(action, payload);
        }
    }
};