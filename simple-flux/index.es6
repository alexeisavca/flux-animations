//This is a very simple and primitive Flux implementation and should be not taken seriously
import Actions from "./actions";
import GlobalStateStore from "./store/global-state";
import AnimationsStore from "./store/animations";
import Dispatcher from "./dispatcher";
import obj2arr from "../tools/obj2arr";

export default class Flux{
    constructor(){
        this.stores = {
            globalStateStore: new GlobalStateStore(),
            animationsStore: new AnimationsStore()
        };
        var dispatcher = new Dispatcher(obj2arr(this.stores));
        this.actions = new Actions(dispatcher.dispatch.bind(dispatcher));
    }

    setOnStoreUpdateListener(listener){
        obj2arr(this.stores).forEach(store => store.setOnUpdateListener(listener));
    }

    store(name){
        return this.stores[name];
    }
};