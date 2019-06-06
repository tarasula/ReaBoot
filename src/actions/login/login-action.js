import axios from "axios/index";

const cars = {
    type: 'audi',
    model: 'a3',
};

export function getUsers(){
    console.log('get');
    return(dispatch, getState) => {

        //РАБОТАЕТ
        // fetch('https://mihaltos.com//emptyPost', {method: 'POST'})
        //     .then(function(response) {
        //         return response.json();
        //     })
        //     .then(function(myJson) {
        //         console.log(JSON.stringify(myJson));
        //     });


        //РАБОТАЕТ
        // axios.get(`https://mihaltos.com/emptyGet`)
        //     .then(res => {
        //         console.log(res.data);
        //         dispatch({
        //             type: 'SET',
        //             users: res.data
        //         });
        //         // console.log('test');
        //         // console.log(getState());
        //     });


        //РАБОТАЕТ
        // (async () => {
        //     const rawResponse = await fetch('https://mihaltos.com/paramPost', {
        //         method: 'POST',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(cars)
        //     });
        //     const content = await rawResponse.json();
        //
        //     console.log(content);
        // })();


    };
}

export function postMethod(){
    console.log('post');
    return(dispatch, getState) => {

        axios.post(`http://mihaltos.com/paramPost`, { cars })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    }
}

export function checkLogin(data){
    console.log('Login');
    if(data === 'login'){
        return true;
    }
}

export function setLogin(userName){
    return(dispatch, getState) => {
        console.log('New USERNAME');
        console.log(userName);

        dispatch({
            type: 'SET_USER_NAME',
            userName: userName
        });
    }
}

export function updateData(updatedData){
    return(dispatch, getState) => {
        console.log('Updated data');
        console.log(updatedData);

        dispatch({
            type: 'UPDATE_DATA',
            updatedData: updatedData
        });
    }
}