import {SET_STATION_ORDER_LIST} from "../../constants/common-constants";



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