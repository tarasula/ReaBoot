import {
    SET_AGENT_PRICE_OF_CATEGORY, SET_AGENT_TYPE, SET_CATEGORY, SET_EXPERT, SET_OPERATOR,
    SET_OPERATOR_STAMP, SET_REPORTS_AGENT, SET_REPORTS_CATEGORY, SET_REPORTS_DATE, SET_STATION_ORDER_LIST, SHOW_REPORTS
} from "../constants/common-constants";


export const initialState = {
    newPrice: 0,
    stamp:'',
    operatorLoginDataTable: '',
    stationSpinnerDisabled: 'false',
    showDataTable: false,
    agentType: '',
    newstation: ['Оператор 1', 'Оператор 2', 'Оператор 3', 'Оператор 4', 'Оператор 5', 'Оператор 6', 'Оператор 7', 'Оператор 8', 'Оператор 9', 'Оператор 10', 'Оператор 11', 'Оператор 12', 'Оператор 13'],

    reportCategory: []
    // newstation: [
    //         {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
    //         {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
    //         {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
    //         {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
    //         {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
    //         {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
    //         {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
    //         {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
    //         {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
    //         {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
    //     ]
};

const globalReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_AGENT_PRICE_OF_CATEGORY:
            console.log(action.newPrice);
            return{
                ...state,
                newPrice: action.newPrice
            };

        case SET_OPERATOR_STAMP:
            console.log(action.stamp);
            return{
                ...state,
                stamp: action.stamp
            };

        case SET_OPERATOR:
            console.log(action.operator);
            console.log(action.stationSpinnerDisabled);
            return{
                ...state,
                operator: action.operator,
                stationSpinnerDisabled: action.stationSpinnerDisabled
            };

        case SET_EXPERT:
            console.log(action.expert);
            return{
                ...state,
                expert: action.expert
            };

        case SET_CATEGORY:
            console.log(action.category);
            return{
                ...state,
                category: action.category
            };

        case SET_STATION_ORDER_LIST:
            console.log(action.newstation);
            return{
                ...state,
                newstation: action.newstation
            };

        case SET_REPORTS_DATE:
            console.log(action.date);
            return{
                ...state,
                date: action.date
            };

        case SET_REPORTS_CATEGORY:
            console.log(action.reportCategory);
            return{
                ...state,
                reportCategory: action.reportCategory
            };


        case SET_REPORTS_AGENT:
            console.log(action.reportAgent);
            return{
                ...state,
                reportAgent: action.reportAgent
            };

        case SHOW_REPORTS:
            console.log(action.showDataTable);
            return{
                ...state,
                showDataTable: action.showDataTable
            };

        case SET_AGENT_TYPE:
            console.log(action.agentType);
            return{
                ...state,
                agentType: action.agentType
            };


        default:
            return state;
    }
};

export default globalReducer;