var Tweenable = require('shifty');
module.exports = class Actions {
    constructor(dispatcher){
        this.dispatch = function(action, payload){
            dispatcher(action, payload);
        }
    }
};