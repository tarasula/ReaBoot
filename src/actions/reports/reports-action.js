import {
    SET_REPORTS_AGENT, SET_REPORTS_CATEGORY, SET_REPORTS_DATE,
    SHOW_REPORTS
} from "../../constants/common-constants";


    export function setReportsDate(date){
        console.log('New DATE');
        console.log(date.date);
    return(dispatch) => {

        dispatch({
            type: SET_REPORTS_DATE,
            date: date.date
        });
    }
}

export function setReportsCategory(category){
    console.log('New Category');
    console.log(category.category);
    return(dispatch) => {

        dispatch({
            type: SET_REPORTS_CATEGORY,
            reportCategory: category.category
        });
    }
}

export function setReportsAgent(agent){
    console.log('New Agent');
    console.log(agent.agent);
    return(dispatch) => {

        dispatch({
            type: SET_REPORTS_AGENT,
            reportAgent: agent.agent
        });
    }
}

export function showReports(){
    console.log('Show reports');
    return(dispatch) => {

        dispatch({
            type: SHOW_REPORTS,
            showDataTable: true
        });
    }
}