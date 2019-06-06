import {SET_AGENT_PRICE_OF_CATEGORY, SET_OPERATOR_STAMP} from "../../constants/common-constants";

export function setPrice(newPrice){
    return(dispatch) => {


        console.log('New Price of category B');
        console.log(newPrice);
        dispatch({
            type: SET_AGENT_PRICE_OF_CATEGORY,
            newPrice: newPrice
        });
    }
}

export function setStamp(stamp){
    return(dispatch) => {


        console.log('New Stamp selected');
        console.log(stamp);
        dispatch({
            type: SET_OPERATOR_STAMP,
            stamp: stamp
        });
    }
}