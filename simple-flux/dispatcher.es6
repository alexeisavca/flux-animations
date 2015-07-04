export default class Dispatcher {
    constructor(listeners){
        this.dispatch = function(action, payload){
            listeners.forEach(listener => listener.process(action, payload))
        }
    }
}