import ProtoStore from "../../proto-store";
import * as  constants from "../constants";
import AnimationsStore from "../../store";
export default class Store extends ProtoStore{
    constructor(){
        super({});
        var animationsStore = new AnimationsStore();
        this.process = animationsStore.process.bind(animationsStore);
    }
}