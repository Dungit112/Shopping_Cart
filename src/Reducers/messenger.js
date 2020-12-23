
import * as Types from './../Constants/ActionType';
import *as Messenger from './../Constants/Messenger';

var initialState = Messenger.MSG_WELCOME;


const messenger = (state = initialState, action) =>{
 
   switch(action.type){
    case Types.CHANGE_MESSENGER:
        return action.messenger;
        default : return state;
   }

}


export default messenger;