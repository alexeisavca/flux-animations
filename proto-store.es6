var {List, Map} = require('immutable');
export default class {
    createProperty (capitalizedName){
        var value;
        this['get' + capitalizedName] = () => value;
        this['set' + capitalizedName] = function(newVal){
            value = newVal;
            this.getOnUpdateListener()();
        }
    }

    constructor(actions){
        this.process = function(action, payload){
            if('undefined' != typeof actions[action]){
                this[actions[action]](payload);
            }
        };
        ['OnUpdateListener'].forEach(this.createProperty.bind(this));
        this.setOnUpdateListener(function(){});
    }
};