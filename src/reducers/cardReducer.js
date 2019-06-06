import {
    SET_ALLOWED_WEIGHT,
    SET_ALLOWEDWEIGHT_INPUT_ERROR,
    SET_BODY_NUMBER,
    SET_CAR_MODEL,
    SET_CARMODEL_INPUT_ERROR,
    SET_CHASSIS_NUMBER,
    SET_CHECKING_DATE,
    SET_CREATED_DOCS_DATE,
    SET_DANGEROUS_CARGO,
    SET_DOCCREATEDBY_INPUT_ERROR,
    SET_DOCDATE_INPUT_ERROR,
    SET_DOCUMENT_CREATED_BY,
    SET_DOCUMENT_NUMBER,
    SET_DOCUMENT_SERIAL_NUMBER,
    SET_DOCUMENT_TYPE,
    SET_DOCUMENTNUMBER_INPUT_ERROR,
    SET_EXPIRATION_DATE,
    SET_EXTERNAL_SITIZEN,
    SET_FIRST_NAME,
    SET_FIRSTNAME_INPUT_ERROR,
    SET_ISSUED_WHEN,
    SET_MARKS,
    SET_MIDDLE_NAME,
    SET_MILEAGE,
    SET_MILEAGE_INPUT_ERROR,
    SET_NO_LOAD_MASS,
    SET_NOLOADMASS_INPUT_ERROR,
    SET_OKP_CATEGORY,
    SET_REGISTER_ID,
    SET_SECOND_NAME,
    SET_SECONDNAME_INPUT_ERROR,
    SET_SERIALNUMBER_INPUT_ERROR,
    SET_TAXI_CAR,
    SET_TEXT_AREA,
    SET_TIRE_BRAND,
    SET_TIREBRAND_INPUT_ERROR,
    SET_TRAINING_CAR,
    SET_VEHICLE_BRAND,
    SET_VEHICLE_YEAR,
    SET_VEHICLEBRAND_INPUT_ERROR,
    SET_VEHICLEYEAR_INPUT_ERROR,
    SET_VIN_NUMBER,
    UPDATE_CAR_IN_STATE
} from "../constants/common-constants";

export const initialState = {
    cars: [],
    checkingRes: 'Passed',
    checkingType: 'Primary',
    calculatedDate: '',
    basicCategory: 'B',
    okpCategory: [{label: 'M1', value: 'M1'},
                    {label: 'N1', value: 'N1'}],
    fuelType: 'Petrol',
    breakSysType: 'Hydraulic',
    registerId: '',
    vinNumber: '',
    vehicleYear: '',
    chassisNumber: '',
    bodyNumber: '',
    allowedWeight: '',
    noLoadMass: '',
    tireBrand: '',
    serialNumber: '',
    documentNumber: '',
    mileage: '',
    docCreatedBy: '',
    secondName: '',
    firstName: '',
    middleName: '',
    marks: '',
    issuedWhen: '',
    externalSitizen: false,
    dangerousCargo: false,
    taxiCar: false,
    trainingCar: false,
    checkingDate: new Date(),
    checked6M: false,
    checked12M: false,
    checked24M: false,
    vehicleBrand: '',
    classNameError: '',
    secondNameError: '',
    firstNameError: '',
    vehicleBrandError: '',
    carModelError: '',
    vehicleYearError: '',
    noLoadMassError: '',
    allowedWeightError: '',
    tireBrandError: '',
    serialNumberError: '',
    documentNumberError: '',
    mileageError: '',
    dateError: '',
    docCreatedByError: '',
    updatedDate: '',
    carModel:''


};

const createReducer = (state = initialState, action) => {
    switch (action.type){

        case UPDATE_CAR_IN_STATE:
            console.log(action.updatedCar);
            return{
                ...state,
                updatedCar: action.updatedCar
            };

        case SET_CAR_MODEL:
            return{
                ...state,
                carModel: action.updatedData
            };

        case SET_CREATED_DOCS_DATE:
            console.log(action);
            return{
                ...state,
                updatedDate: action.updatedDate
            };

        case SET_CHECKING_DATE:
            console.log(action.updatedDate);
            console.log('Date');
            return{
                ...state,
                checkingDate: action.updatedDate
            };

        case SET_EXPIRATION_DATE:
            console.log(action.updatedDate);
            return{
                ...state,
                calculatedDate: action.updatedDate,
                checked24M: action.checked24M
            };


        case 'UPDATE_CHECKING_RESULT':
            console.log(action.checkingRes);
            return{
                ...state,
                checkingRes: action.checkingRes
            };
        case 'UPDATE_CHECKING_TYPE':
            console.log(action.checkingType);
            return{
                ...state,
                checkingType: action.checkingType
            };

        case 'UPDATE_EXPIRATION_DATE':
            // console.log(action.expirationDate + ' expDate');
            // console.log(action.calculatedDate + ' calcDate');
            // console.log(action);
            return{
                ...state,
                expirationDate: action.expirationDate,
                calculatedDate: action.calculatedDate
            };

        case 'UPDATE_FUEL_TYPE':
            console.log(action.fuelType);
            return{
                ...state,
                fuelType: action.fuelType
            };

        case 'UPDATE_BRTEAK_SYSTEM_TYPE':
            console.log(action.breakSysType);
            return{
                ...state,
                breakSysType: action.breakSysType
            };

        case 'SET_BASIC_CATEGORY':
            console.log(action.basicCategory);
            console.log(action.okpCategory);
            console.log(action.calculatedDate);
            return{
                ...state,
                basicCategory: action.basicCategory,
                okpCategory: action.okpCategory,
                calculatedDate: action.calculatedDate,
                checked6M: action.checked6M,
                checked12M: action.checked12M,
                checked24M: action.checked24M
            };

        case SET_OKP_CATEGORY:
            console.log(action.okpCategory);
            return{
                ...state,
                okpCategory: action.okpCategory
            };

        case SET_REGISTER_ID:
            return{
                ...state,
                registerId: action.updatedData
            };

        case SET_VIN_NUMBER:
            return{
                ...state,
                vinNumber: action.updatedData
            };

        case SET_VEHICLE_YEAR:
            return{
                ...state,
                vehicleYear: action.updatedData
            };

        case SET_CHASSIS_NUMBER:
            return{
                ...state,
                chassisNumber: action.updatedData
            };

        case SET_BODY_NUMBER:
            return{
                ...state,
                bodyNumber: action.updatedData
            };

        case SET_ALLOWED_WEIGHT:
            return{
                ...state,
                allowedWeight: action.updatedData
            };

        case SET_NO_LOAD_MASS:
            return{
                ...state,
                noLoadMass: action.updatedData
            };

        case SET_TIRE_BRAND:
            return{
                ...state,
                tireBrand: action.updatedData
            };

        case SET_DOCUMENT_SERIAL_NUMBER:
            return{
                ...state,
                serialNumber: action.updatedData
            };

        case SET_DOCUMENT_TYPE:
            return{
                ...state,
                documentType: action.updatedData
            };

        case SET_DOCUMENT_NUMBER:
            return{
                ...state,
                documentNumber: action.updatedData
            };

        case SET_MILEAGE:
            return{
                ...state,
                mileage: action.updatedData
            };

        case SET_DOCUMENT_CREATED_BY:
            return{
                ...state,
                docCreatedBy: action.updatedData
            };

        case SET_SECOND_NAME:
            return{
                ...state,
                secondName: action.updatedData
            };

        case SET_FIRST_NAME:
            return{
                ...state,
                firstName: action.updatedData
            };

        case SET_MIDDLE_NAME:
            return{
                ...state,
                middleName: action.updatedData
            };

        case SET_MARKS:
            return{
                ...state,
                marks: action.updatedData
            };

        case SET_ISSUED_WHEN:
            return{
                ...state,
                issuedWhen: action.updatedData
            };

        case SET_EXTERNAL_SITIZEN:
            return{
                ...state,
                externalSitizen: action.updatedData
            };

        case SET_VEHICLE_BRAND:
            return{
                ...state,
                vehicleBrand: action.updatedData
            };

        case SET_DANGEROUS_CARGO:
            console.log(action);
            return{
                ...state,
                dangerousCargo: action.updatedData,
                calculatedDate: action.calculatedDate,
                checked6M: action.checked6M,
                checked12M: action.checked12M,
                checked24M: action.checked24M,
                taxiCar: action.taxiCar,
                trainingCar: action.trainingCar,
                dangerousCargo: action.dangerousCargo
            };

        case SET_TAXI_CAR:
            return{
                ...state,
                taxiCar: action.updatedData,
                calculatedDate: action.calculatedDate,
                checked6M: action.checked6M,
                checked12M: action.checked12M,
                checked24M: action.checked24M,
                dangerousCargo: action.dangerousCargo,
                taxiCar: action.taxiCar,
                trainingCar: action.trainingCar
            };

        case SET_TRAINING_CAR:
            return{
                ...state,
                trainingCar: action.updatedData,
                calculatedDate: action.calculatedDate,
                checked6M: action.checked6M,
                checked12M: action.checked12M,
                checked24M: action.checked24M,
                dangerousCargo: action.dangerousCargo,
                taxiCar: action.taxiCar
            };

        case SET_TEXT_AREA:
            return{
                ...state,
                textArea: action.updatedData
            };






        case SET_SECONDNAME_INPUT_ERROR:
            return{
                ...state,
                secondNameError: action.error
            };

        case SET_FIRSTNAME_INPUT_ERROR:
            return{
                ...state,
                firstNameError: action.error
            };

        case SET_VEHICLEBRAND_INPUT_ERROR:
            return{
                ...state,
                vehicleBrandError: action.error
            };

        case SET_CARMODEL_INPUT_ERROR:
            return{
                ...state,
                carModelError: action.error
            };

        case SET_VEHICLEYEAR_INPUT_ERROR:
            return{
                ...state,
                vehicleYearError: action.error
            };

        case SET_NOLOADMASS_INPUT_ERROR:
            return{
                ...state,
                noLoadMassError: action.error
            };

        case SET_ALLOWEDWEIGHT_INPUT_ERROR:
            return{
                ...state,
                allowedWeightError: action.error
            };

        case SET_TIREBRAND_INPUT_ERROR:
            return{
                ...state,
                tireBrandError: action.error
            };

        case SET_SERIALNUMBER_INPUT_ERROR:
            return{
                ...state,
                serialNumberError: action.error
            };

        case SET_DOCUMENTNUMBER_INPUT_ERROR:
            return{
                ...state,
                documentNumberError: action.error
            };

        case SET_MILEAGE_INPUT_ERROR:
            return{
                ...state,
                mileageError: action.error
            };

        case SET_DOCDATE_INPUT_ERROR:
            return{
                ...state,
                dateError: action.error
            };

        case SET_DOCCREATEDBY_INPUT_ERROR:
            return{
                ...state,
                docCreatedByError: action.error
            };


        default:
            return state;
    }
};

export default createReducer;