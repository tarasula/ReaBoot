import {
    SET_BASIC_CATEGORY,
    SET_CHECKING_DATE,
    SET_CREATED_DOCS_DATE,
    SET_DANGEROUS_CARGO,
    SET_EXPIRATION_DATE,
    SET_EXTERNAL_SITIZEN,
    SET_OKP_CATEGORY,
    SET_TAXI_CAR,
    SET_TRAINING_CAR,
    UPDATE_BRTEAK_SYSTEM_TYPE,
    UPDATE_CAR_IN_STATE,
    UPDATE_CHECKING_RESULT,
    UPDATE_CHECKING_TYPE,
    UPDATE_EXPIRATION_DATE,
    UPDATE_FUEL_TYPE,
    UPDATE_MODEL_IN_STATE
} from "../../constants/common-constants";

export function checkCalculatedDate(){

    return(dispatch, getState) => {
        let {cars: {calculatedDate, checked24M}} = getState();
        calculatedDate = new Date();
        calculatedDate.setMonth(calculatedDate.getMonth() + 24);
        calculatedDate.setDate(calculatedDate.getDate() + 1);
        console.log(calculatedDate);
        checked24M = true;

        dispatch({
            type: SET_EXPIRATION_DATE,
            updatedDate: calculatedDate,
            checked24M: checked24M
        });
    }
}

export function setCarsToState(carForUpdate){
    return(dispatch) => {

        dispatch({
           type: UPDATE_CAR_IN_STATE,
           updatedCar: carForUpdate.value
        });
    }
}

export function setModelsToState(modelForUpdate){
    return(dispatch) => {
        console.log(modelForUpdate.value);
        dispatch({
            type: UPDATE_MODEL_IN_STATE,
            carModel: modelForUpdate.value
        });
    }
}

export function setFuelType(fuelType){
    return(dispatch) => {
        console.log(fuelType);
        dispatch({
            type: UPDATE_FUEL_TYPE,
            fuelType: fuelType.value
        });
    }
}

export function setBreakSystemType(breakSysType){
    return(dispatch) => {
        console.log(breakSysType.value);
        dispatch({
            type: UPDATE_BRTEAK_SYSTEM_TYPE,
            breakSysType: breakSysType.value
        });
    }
}

export function setDocumentDateRelease(date, type){

    switch (type){

        case SET_EXPIRATION_DATE:
            return(dispatch) => {
                dispatch({
                    type: type,
                    updatedDate: date.value
                });
            };

        case SET_CHECKING_DATE:

            return(dispatch) => {
                dispatch({
                    type: type,
                    updatedDate: date.value
                });
            };

        case SET_CREATED_DOCS_DATE:

            console.log(date.value);
            console.log(type);

            return(dispatch) => {
                dispatch({
                    type: type,
                    updatedDate: date.value
                });
            };
    }
}

export function setExpirationAndCalculateDate(date){
    return(dispatch) => {
        console.log(date);

        let calculatedDate = new Date();
        calculatedDate.setDate(calculatedDate.getDate() + +date.value);
        console.log(calculatedDate.getDate());

        dispatch({
            type: UPDATE_EXPIRATION_DATE,
            expirationDate: date.value,
            calculatedDate: calculatedDate
        });
    }
}


export function setDataFromInput(updData, type){
    console.log(updData.value);

    return (dispatch, getState) => {

        dispatch({
            type: type,
            updatedData : updData.value
        });
    }
}

export function setCalculatedDate(updData, type) {
    console.log(updData.value);

    switch(type){

        case SET_TAXI_CAR:
            return (dispatch, getState) => {

                let {cars: {calculatedDate, checked6M, checked12M, checked24M, basicCategory,  dangerousCargo, trainingCar, taxiCar}} = getState();

                taxiCar = true;
                dangerousCargo = false;
                trainingCar = false;

                if (updData.value === true) {
                    calculatedDate = new Date();
                    calculatedDate.setMonth(calculatedDate.getMonth() + 6);
                    calculatedDate.setDate(calculatedDate.getDate() + 1);
                    checked6M = true;
                    checked12M = false;
                    checked24M = false;
                } else {
                    // Обратный переключатель кнопок возвращает Срок действия до в зависимости от выбранной категории
                    taxiCar = false;
                    switch (basicCategory){
                        case 'A':
                        case 'B':
                            calculatedDate = new Date();
                            calculatedDate.setMonth(calculatedDate.getMonth() + 24);
                            calculatedDate.setDate(calculatedDate.getDate() + 1);
                            checked6M = false;
                            checked12M = false;
                            checked24M = true;
                            break;

                        case 'C':
                            calculatedDate = new Date();
                            calculatedDate.setMonth(calculatedDate.getMonth() + 12);
                            calculatedDate.setDate(calculatedDate.getDate() + 1);
                            checked6M = false;
                            checked12M = false;
                            checked24M = true;
                            break;

                        case 'D':
                            calculatedDate = new Date();
                            calculatedDate.setMonth(calculatedDate.getMonth() + 6);
                            calculatedDate.setDate(calculatedDate.getDate() + 1);
                            checked6M = false;
                            checked12M = false;
                            checked24M = true;
                            break;

                        case 'E':
                            calculatedDate = new Date();
                            calculatedDate.setMonth(calculatedDate.getMonth() + 12);
                            calculatedDate.setDate(calculatedDate.getDate() + 1);
                            checked6M = false;
                            checked12M = false;
                            checked24M = true;
                            break;

                        default:
                            calculatedDate = new Date();
                            calculatedDate.setMonth(calculatedDate.getMonth() + 24);
                            calculatedDate.setDate(calculatedDate.getDate() + 1);
                            checked6M = false;
                            checked12M = false;
                            checked24M = true;
                            break;
                    }
                }

                console.log(calculatedDate);
                dispatch({
                    type: type,
                    updatedData: updData.value,
                    calculatedDate: calculatedDate,
                    checked6M: checked6M,
                    checked12M: checked12M,
                    checked24M: checked24M,
                    trainingCar: trainingCar,
                    taxiCar: taxiCar,
                    dangerousCargo: dangerousCargo
                });

            };

        case SET_DANGEROUS_CARGO:
            return (dispatch, getState) => {

                let {cars: {calculatedDate, checked6M, checked12M, checked24M, basicCategory,  dangerousCargo, trainingCar, taxiCar}} = getState();

                taxiCar = false;
                dangerousCargo = true;
                trainingCar = false;

                if (updData.value === true) {
                    calculatedDate = new Date();
                    calculatedDate.setMonth(calculatedDate.getMonth() + 6);
                    calculatedDate.setDate(calculatedDate.getDate() + 1);
                    checked6M = true;
                    checked12M = false;
                    checked24M = false;
                } else {
                    // Обратный переключатель кнопок возвращает Срок действия до в зависимости от выбранной категории
                    dangerousCargo = false;
                    switch (basicCategory){
                        case 'A':
                        case 'B':
                            calculatedDate = new Date();
                            calculatedDate.setMonth(calculatedDate.getMonth() + 24);
                            calculatedDate.setDate(calculatedDate.getDate() + 1);
                            checked6M = false;
                            checked12M = false;
                            checked24M = true;
                            break;

                        case 'C':
                            calculatedDate = new Date();
                            calculatedDate.setMonth(calculatedDate.getMonth() + 12);
                            calculatedDate.setDate(calculatedDate.getDate() + 1);
                            checked6M = false;
                            checked12M = false;
                            checked24M = true;
                            break;

                        case 'D':
                            calculatedDate = new Date();
                            calculatedDate.setMonth(calculatedDate.getMonth() + 6);
                            calculatedDate.setDate(calculatedDate.getDate() + 1);
                            checked6M = false;
                            checked12M = false;
                            checked24M = true;
                            break;

                        case 'E':
                            calculatedDate = new Date();
                            calculatedDate.setMonth(calculatedDate.getMonth() + 12);
                            calculatedDate.setDate(calculatedDate.getDate() + 1);
                            checked6M = false;
                            checked12M = false;
                            checked24M = true;
                            break;

                        default:
                            calculatedDate = new Date();
                            calculatedDate.setMonth(calculatedDate.getMonth() + 24);
                            calculatedDate.setDate(calculatedDate.getDate() + 1);
                            checked6M = false;
                            checked12M = false;
                            checked24M = true;
                            break;
                    }

                }

                console.log(calculatedDate);
                dispatch({
                    type: type,
                    updatedData: updData.value,
                    calculatedDate: calculatedDate,
                    checked6M: checked6M,
                    checked12M: checked12M,
                    checked24M: checked24M,
                    trainingCar: trainingCar,
                    taxiCar: taxiCar,
                    dangerousCargo: dangerousCargo
                });
            };

        case SET_TRAINING_CAR:
            return (dispatch, getState) => {

                let {cars: {calculatedDate, checked6M, checked12M, checked24M, dangerousCargo, taxiCar}} = getState();

                dangerousCargo = false;
                taxiCar = false;

                if (updData.value === true) {
                    calculatedDate = new Date();
                    calculatedDate.setMonth(calculatedDate.getMonth() + 12);
                    calculatedDate.setDate(calculatedDate.getDate() + 1);
                    checked6M = false;
                    checked12M = true;
                    checked24M = false;
                } else {
                    calculatedDate = new Date();
                    calculatedDate.setMonth(calculatedDate.getMonth() + 24);
                    calculatedDate.setDate(calculatedDate.getDate() + 1);
                    checked6M = false;
                    checked12M = false;
                    checked24M = true;
                }

                console.log(calculatedDate);
                dispatch({
                    type: type,
                    updatedData: updData.value,
                    calculatedDate: calculatedDate,
                    checked6M: checked6M,
                    checked12M: checked12M,
                    checked24M: checked24M,
                    dangerousCargo: dangerousCargo,
                    taxiCar: taxiCar

                });
            };

        case SET_EXTERNAL_SITIZEN:

            return (dispatch, getState) => {
                dispatch({
                    type: type,
                    updatedData: updData.value
                });
            }
    }

}

export function setDataFromDropdown(updData, type){

    console.log(updData.value);
    return (dispatch, getState) => {
        dispatch({
            type: type,
            updatedData : updData.value
        });
    }
}

export function updateCheckingResult(updatedData, type){
    console.log(updatedData);
    console.log(type);
    switch (type){
        case UPDATE_CHECKING_RESULT:
            return (dispatch) => {
                dispatch({
                    type: type,
                    checkingRes: updatedData.value
                });
            };

        case UPDATE_CHECKING_TYPE:
            return (dispatch) => {
                dispatch({
                    type: type,
                    checkingType: updatedData.value
                });
            };
    }
}

export function setBasicCategory(category) {
    return (dispatch, getState) => {

        let type = SET_BASIC_CATEGORY;
        let m24 = 24, m12 = 12, m6 = 6;

        let {cars: {calculatedDate, checked6M, checked12M, checked24M, vehicleYear}} = getState();


        switch (category.value) {

            case 'A':
                const okpA = [{label: 'L', value: 'L'}];

                calculatedDate = new Date();

                if((calculatedDate.getFullYear() - vehicleYear) >= 7){
                    console.log('Машине 7 или больше лет');
                    console.log('Год выпуска' + vehicleYear);
                    console.log(calculatedDate.getFullYear() - vehicleYear);


                    calculatedDate.setMonth(calculatedDate.getMonth() + m12);
                    calculatedDate.setDate(calculatedDate.getDate() + 1);
                    checked12M = true;
                    checked24M = false;
                }else{
                    console.log('Машине 7 или меньше лет');
                    console.log('Год выпуска' + vehicleYear);
                    console.log(calculatedDate.getFullYear() - vehicleYear);

                    calculatedDate.setMonth(calculatedDate.getMonth() + m24);
                    calculatedDate.setDate(calculatedDate.getDate() + 1);
                    checked12M = false;
                    checked24M = true;
                }

                checked6M = false;


                return dispatch({
                    type: type,
                    basicCategory: category.value,
                    okpCategory: okpA,
                    calculatedDate: calculatedDate,
                    checked6M: checked6M,
                    checked12M: checked12M,
                    checked24M: checked24M
                });

            case 'B':
                const okpB = [{label: 'M1', value: 'M1'}, {label: 'N1', value: 'N1'}];

                calculatedDate = new Date();
                if((calculatedDate.getFullYear() - vehicleYear) >= 7){
                    console.log('Машине 7 или больше лет');
                    console.log('Год выпуска' + vehicleYear);
                    console.log('Результат подсчета' + calculatedDate.getFullYear() - vehicleYear);


                    calculatedDate.setMonth(calculatedDate.getMonth() + m12);
                    calculatedDate.setDate(calculatedDate.getDate() + 1);
                    checked12M = true;
                    checked24M = false;
                }else{
                    console.log('Машине 7 или меньше лет');
                    console.log('Год выпуска' + vehicleYear);
                    console.log('Результат подсчета' + calculatedDate.getFullYear() - vehicleYear);

                    calculatedDate.setMonth(calculatedDate.getMonth() + m24);
                    calculatedDate.setDate(calculatedDate.getDate() + 1);
                    checked12M = false;
                    checked24M = true;
                }

                checked6M = false;
                return dispatch({
                    type: type,
                    basicCategory: category.value,
                    okpCategory: okpB,
                    calculatedDate: calculatedDate,
                    checked6M: checked6M,
                    checked12M: checked12M,
                    checked24M: checked24M
                });

            case 'C':
                const okpC = [{label: 'N2', value: 'N2'}, {label: 'N3', value: 'N3'}];

                calculatedDate = new Date();
                calculatedDate.setMonth(calculatedDate.getMonth() + m12);
                calculatedDate.setDate(calculatedDate.getDate() + 1);
                checked6M = false;
                checked12M = true;
                checked24M = false;

                return dispatch({
                    type: type,
                    basicCategory: category.value,
                    okpCategory: okpC,
                    calculatedDate: calculatedDate,
                    checked6M: checked6M,
                    checked12M: checked12M,
                    checked24M: checked24M
                });

            case 'D':
                const okpD = [{label: 'M2', value: 'M2'}, {label: 'M3', value: 'M3'}];

                calculatedDate = new Date();
                calculatedDate.setMonth(calculatedDate.getMonth() + m6);
                calculatedDate.setDate(calculatedDate.getDate() + 1);
                checked6M = true;
                checked12M = false;
                checked24M = false;

                return dispatch({
                    type: type,
                    basicCategory: category.value,
                    okpCategory: okpD,
                    calculatedDate: calculatedDate,
                    checked6M: checked6M,
                    checked12M: checked12M,
                    checked24M: checked24M
                });

            case 'E':
                const okpE = [{label: 'O1', value: 'O1'},
                            {label: 'O2', value: 'O2'},
                            {label: 'O3', value: 'O3'},
                            {label: 'O4', value: 'O4'}];

                calculatedDate = new Date();
                calculatedDate.setMonth(calculatedDate.getMonth() + m12);
                calculatedDate.setDate(calculatedDate.getDate() + 1);
                checked6M = false;
                checked12M = true;
                checked24M = false;

                return dispatch({
                    type: type,
                    basicCategory: category.value,
                    okpCategory: okpE,
                    calculatedDate: calculatedDate,
                    checked6M: checked6M,
                    checked12M: checked12M,
                    checked24M: checked24M
                });

            default:
                calculatedDate = new Date();
                calculatedDate.setMonth(calculatedDate.getMonth() + m24);
                calculatedDate.setDate(calculatedDate.getDate() + 1);
                checked6M = false;
                checked12M = false;
                checked24M = true;

                return dispatch({
                    type: type,
                    basicCategory: category.value,
                    okpCategory: okpB,
                    calculatedDate: calculatedDate,
                    checked6M: checked6M,
                    checked12M: checked12M,
                    checked24M: checked24M
                });
        }

    }
}

export function setOkpCategory(category, arr) {

    console.log(category);
    console.log(arr);


    for(var i=0; i<arr.length; i++) {
        if (arr[i].value === category.value){

            let newCat = {label:category.value, value:category.value};
            arr.splice(i, 1);
            arr.unshift(newCat);
        }
    }

    console.log(arr);
    return (dispatch) => {
        dispatch({
            type: SET_OKP_CATEGORY,
            okpCategory: arr
        });
    }
}

export function generateObjectAndSendToCreate(event) {

    // const history = createHistory();
    // const location = history.location;
    // history.push('/cardList', { some: 'state' });
    //
    // console.log('history');
    // console.log(history);


    event.preventDefault();

    return (dispatch, getState) => {
        let {
            cars: {
                calculatedDate,
                vehicleYear,
                bodyNumber,
                checkingDate,
                secondName,
                firstName,
                middleName,
                textArea,
                registerId,
                checkingRes,
                checkingType,
                vehicleBrand,
                carModel,
                okpCategory,
                vinNumber,
                basicCategory,
                chassisNumber,
                noLoadMass,
                allowedWeight,
                fuelType,
                breakSysType,
                documentType,
                tireBrand,
                serialNumber,
                documentNumber,
                mileage,
                updatedDate,
                docCreatedBy,
                externalSitizen

            }
        } = getState();

        console.log(updatedDate);
        console.log(carModel);
        console.log('++++++++');

        const arrState = [
            {label: 'secondName', value: secondName},
            {label: 'firstName', value: firstName},
            {label: 'vehicleBrand', value: vehicleBrand},
            {label: 'carModel', value: carModel},
            {label: 'vehicleYear', value: vehicleYear},
            {label: 'noLoadMass', value: noLoadMass},
            {label: 'allowedWeight', value: allowedWeight},
            {label: 'tireBrand', value: tireBrand},
            {label: 'serialNumber', value: serialNumber},
            {label: 'documentNumber', value: documentNumber},
            {label: 'mileage', value: mileage},
            {label: 'docDate', value: updatedDate},
            {label: 'docCreatedBy', value: docCreatedBy}
            ];

        const needToSend = formValidation(arrState, dispatch);

        if(externalSitizen){
            externalSitizen = 'Y'
        }else{
            externalSitizen = 'N'
        }

        let cardObject = {
            "id": null,
            "cardIsSecondaryFor": null,
            "cardIsDublicateFor": null,
            "isArchive": 0,
            "bodyNumber": bodyNumber,
            "dateOfDiagnosis": checkingDate,
            "form": {
                "comment": null,
                "duplicate": false,
                "number": null,
                "series": null,
                "type": null , //Blank OR Certificate
                "validity": calculatedDate
            },
            "name": secondName,
            "note": textArea,
            "registrationNumber": registerId,
            "testResult": checkingRes,
            "testType": checkingType,
            "values": null,
            "vehicle": {
                "make": vehicleBrand,
                "model": carModel
            },
            "vehicleCategory": basicCategory,
            "vehicleCategory2": okpCategory[0].value,
            "vin": vinNumber,
            "year": vehicleYear,
            "frameNumber": chassisNumber,
            "emptyMass": noLoadMass,
            "maxMass": allowedWeight,
            "fuel": fuelType,
            "brakingSystem": breakSysType,
            "tyres": tireBrand,
            "killometrage": mileage,
            "registrationDocument": {
                "documentType": documentType,
                "series": serialNumber,
                "number": documentNumber,
                "organization": docCreatedBy,
                "date": updatedDate,
                "foreign": externalSitizen
            },
            "dateOfRetest": null,
            "fname": firstName,
            "mname": middleName
        };

        if (true) { //TODO поменять на результат вызова

            (async () => {
                // console.log('In async');
                const rawResponse = await fetch('https://mihaltos.com/createCard', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: cardObject
                });

                // console.log('Request');
                // console.log(cardObject);

                const content = await rawResponse.json();
                // console.log('Response');
                // console.log(content);

            })();

            // dispatch(doRoute(`/cardList`));


            // export function showOrderItem(orderId, statusName) {
            //     return (dispatch) => {
            //         switch (statusName) {
            //             case statuses.draft:
            //                 dispatch(doRoute(`/page/salary/${orderId}`));
            //                 break;
            //             case statuses.sign:
            //                 dispatch(doRoute(`/page/status/${orderId}`));
            //                 break;
            //             case statuses.needWork:
            //                 dispatch(doRoute(`/page/docs/${orderId}`));
            //                 break;
            //         }
            //     };
            // }

        }
    }
}

// export function doRoute(path) {
//     return (dispatch) => {
//         dispatch(push(path));
//     };
// }

export function formValidation(arrState, dispatch) {

    let classNameError = '';
    let counter = 0;
    let arrLength = arrState.length;

    for (let item in arrState){
        console.log('=============');
        console.log(arrState[item].value);
        console.log(arrState[item]);

        let typeForDispatch = 'SET_' + arrState[item].label + '_INPUT_ERROR';
        typeForDispatch = typeForDispatch.toUpperCase();

        console.log(typeForDispatch);

        if (arrState[item].value === "" || arrState[item].value === undefined) {
            classNameError = 'p-error';
        }else{
            classNameError = '';
            counter ++;
        }
        dispatch({
            type: typeForDispatch,
            error: classNameError
        });

    }
    if(counter === arrLength)
        return true;

    return false;
}


