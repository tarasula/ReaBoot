import {
    SET_AGENT_PRICE_OF_CATEGORY, SET_AGENT_TYPE,
    SET_CATEGORY,
    SET_EXPERT,
    SET_EXPERTR,
    SET_OPERATOR,
    SET_STATION_ORDER_LIST
} from "../../constants/common-constants";

export function setPrice(newPrice){
    return(dispatch) => {


        console.log('New Price of category B');
        console.log(newPrice.value);
        dispatch({
            type: SET_AGENT_PRICE_OF_CATEGORY,
            newPrice: newPrice.value
        });
    }
}

export function setOperator(operator){
    return(dispatch) => {


        console.log('New operator selected');
        console.log(operator.value);
        dispatch({
            type: SET_OPERATOR,
            operator: operator.value,
            stationSpinnerDisabled: 'true'
        });
    }
}

export function setExpert(expert){
    return(dispatch) => {


        console.log('New expert selected');
        console.log(expert.value);
        dispatch({
            type: SET_EXPERT,
            expert: expert.value
        });
    }
}

export function setCategory(category){
    return(dispatch) => {


        console.log('New category selected');
        console.log(category.value);
        dispatch({
            type: SET_CATEGORY,
            category: category.value
        });
    }
}

export function setList(item){
    return(dispatch) => {


        console.log('New item selected');
        console.log(item.value);
        dispatch({
            type: SET_STATION_ORDER_LIST,
            newstation: item.value
        });
    }
}

export function setAgentType(agentType){
    return(dispatch) => {


        console.log('New agent type selected');
        console.log(agentType.value);
        dispatch({
            type: SET_AGENT_TYPE,
            agentType: agentType.value
        });
    }
}
