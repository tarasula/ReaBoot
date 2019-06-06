
export function increment() {

    return(dispatch, getState) => {

        console.log('test');
        dispatch({
            type: 'INC'
        });


    };
}
