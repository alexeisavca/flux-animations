import Store from "./index.es6";
import constants from "../constants";
import injectAnimationLogic from "../../store";
export default class AnimationsStore extends Store{
    constructor(){
        super({

        });
        injectAnimationLogic(this);
    }
}