

export function getCard() {
    console.log('getCard');
    return (dispatch, getState) => {

//РАБОТАЕТ
//         fetch('https://mihaltos.com//emptyPost', {method: 'POST'})
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (myJson) {
//                 console.log(JSON.stringify(myJson));
//             });

        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))

    }
}