import React, {Component} from 'react';
import bindActionCreators from "redux/src/bindActionCreators";
import {connect} from "react-redux";
import {InputText} from "primereact/components/inputtext/InputText";
import {Dropdown} from "primereact/components/dropdown/Dropdown";
import './create-card.css';
import {
    checkCalculatedDate,
    setBasicCategory, setBreakSystemType,
    setCarsToState, setDataFromDropdown, setDataFromInput, setCalculatedDate, setDocumentDateRelease,
    setExpirationAndCalculateDate,
    setFuelType,
    setModelsToState, setOkpCategory,
    updateCheckingResult, generateObjectAndSendToCreate
} from "../../actions/create-card/create-card-action";
import {InputSwitch} from 'primereact/inputswitch';
import {Calendar} from 'primereact/calendar';
import Type from "prop-types";
import {SelectButton} from "primereact/components/selectbutton/SelectButton";
import {
    UPDATE_CHECKING_RESULT, UPDATE_CHECKING_TYPE, SET_REGISTER_ID,
    SET_VIN_NUMBER, SET_VEHICLE_YEAR, SET_CHASSIS_NUMBER, SET_BODY_NUMBER, SET_ALLOWED_WEIGHT, SET_NO_LOAD_MASS,
    SET_TIRE_BRAND, SET_DOCUMENT_TYPE, SET_DOCUMENT_SERIAL_NUMBER, SET_DOCUMENT_NUMBER, SET_MILEAGE,
    SET_DOCUMENT_CREATED_BY, SET_SECOND_NAME, SET_FIRST_NAME, SET_MIDDLE_NAME, SET_MARKS, SET_ISSUED_BY,
    SET_EXTERNAL_SITIZEN, SET_DANGEROUS_CARGO, SET_TRAINING_CAR, SET_TAXI_CAR, SET_TEXT_AREA, SET_CREATED_DOCS_DATE,
    SET_CHECKING_DATE, SET_EXPIRATION_DATE, SET_VEHICLE_BRAND, SET_CAR_MODEL
} from "../../constants/common-constants";
import {InputTextarea} from "primereact/components/inputtextarea/InputTextarea";
import {Button} from "primereact/components/button/Button";
import {ToggleButton} from "primereact/components/togglebutton/ToggleButton";
import {Dashboard} from "../Dashboard";
import {Link, Route, Switch} from "react-router-dom";
import {CardList} from "../card-list/card-list";
import {InputMask} from "primereact/components/inputmask/InputMask";
import {Message} from "primereact/components/message/Message";


export const cars = [
    {label: 'Audi', value: 'Audi', id: "1"},
    {label: 'BMW', value: 'BMW', id: "2"},
    {label: 'Fiat', value: 'Fiat', id: "3"},
    {label: 'Honda', value: 'Honda', id: "4"},
    {label: 'Jaguar', value: 'Jaguar', id: "5"},
    {label: 'Mercedes', value: 'Mercedes', id: "6"},
    {label: 'Renault', value: 'Renault', id: "7"},
    {label: 'VW', value: 'VW', id: "8"},
    {label: 'Volvo', value: 'Volvo', id: "9"}
];

export const resultChecking = [
    {label: 'Пройдена', value: 'Passed'},
    {label: 'Непройдена', value: 'NotPassed'}
];

export const typeChecking = [
    {label: 'Первичная', value: 'Primary'},
    {label: 'Повторная', value: 'Secondary'}
];

export const expirationDate = [
    {label: '6', value: '181'},
    {label: '12', value: '365'},
    {label: '24', value: '731'}
];

export const fuelType = [
    {label: 'Бензин', value: 'Petrol'},
    {label: 'Дизель', value: 'Diesel'},
    {label: 'Сжатый газ', value: 'PressureGas'},
    {label: 'Сжиженный газ', value: 'LiquefiedGas'},
    {label: 'Без топлива', value: 'None'}
];

export const breakSystemType = [
    {label: 'Механический', value: 'Mechanical'},
    {label: 'Гидравлический', value: 'Hydraulic'},
    {label: 'Пневматический', value: 'Pneumatic'},
    {label: 'Комбинированный', value: 'Combined'},
    {label: 'Без томозной системы', value: 'None'}
];

export const basicCategories = [
    {label: 'A', value: 'A'},
    {label: 'B', value: 'B'},
    {label: 'C', value: 'C'},
    {label: 'D', value: 'D'},
    {label: 'E', value: 'E'}
];

export const tires = [
    {label: 'Bridgestone', value: 'Bridgestone'},
    {label: 'Continental', value: 'Continental'},
    {label: 'Dunlop', value: 'Dunlop'},
    {label: 'Goodyear', value: 'Goodyear'},
    {label: 'Michelin', value: 'Michelin'},
    {label: 'Nokian', value: 'Nokian'},
    {label: 'Pirelli', value: 'Pirelli'},
    {label: 'Yokohama', value: 'Yokohama'}
];

export const documents = [
    {label: 'СТС', value: 'RegTalon'},
    {label: 'ПТС', value: 'PTS'}
];


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setCarsToState,
        setDocumentDateRelease,
        updateCheckingResult,
        setExpirationAndCalculateDate,
        setFuelType,
        setBasicCategory,
        setOkpCategory,
        setBreakSystemType,
        setDataFromInput,
        setModelsToState,
        setDataFromDropdown,
        checkCalculatedDate,
        setCalculatedDate,
        generateObjectAndSendToCreate
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        carsArr: state.cars.carsArr,
        updatedCar: state.cars.updatedCar,
        carModel: state.cars.carModel,
        updatedDate: state.cars.updatedDate,
        checkingRes: state.cars.checkingRes,
        checkingType: state.cars.checkingType,
        expirationDate: state.cars.expirationDate,
        calculatedDate: state.cars.calculatedDate,
        fuelType: state.cars.fuelType,
        basicCategory: state.cars.basicCategory,
        okpCategory: state.cars.okpCategory,
        breakSysType: state.cars.breakSysType,
        registerId: state.cars.registerId,
        vinNumber: state.cars.vinNumber,
        vehicleYear: state.cars.vehicleYear,
        chassisNumber: state.cars.chassisNumber,
        bodyNumber: state.cars.bodyNumber,
        allowedWeight: state.cars.allowedWeight,
        noLoadMass: state.cars.noLoadMass,
        tireBrand: state.cars.tireBrand,
        documentType: state.cars.documentType,
        serialNumber: state.cars.serialNumber,
        documentNumber: state.cars.documentNumber,
        mileage: state.cars.mileage,
        docCreatedBy: state.cars.docCreatedBy,
        secondName: state.cars.secondName,
        firstName: state.cars.firstName,
        middleName: state.cars.middleName,
        marks: state.cars.marks,
        issuedWhen: state.cars.issuedWhen,
        externalSitizen: state.cars.externalSitizen,
        dangerousCargo: state.cars.dangerousCargo,
        taxiCar: state.cars.taxiCar,
        trainingCar: state.cars.trainingCar,
        textArea: state.cars.textArea,
        checkingDate: state.cars.checkingDate,
        checked6M: state.cars.checked6M,
        checked12M: state.cars.checked12M,
        checked24M: state.cars.checked24M,
        vehicleBrand: state.cars.vehicleBrand,
        classNameError: state.cars.classNameError,
        secondNameError: state.cars.secondNameError,
        firstNameError: state.cars.firstNameError,
        vehicleBrandError: state.cars.vehicleBrandError,
        carModelError: state.cars.carModelError,
        vehicleYearError: state.cars.vehicleYearError,
        noLoadMassError: state.cars.noLoadMassError,
        allowedWeightError: state.cars.allowedWeightError,
        tireBrandError: state.cars.tireBrandError,
        serialNumberError: state.cars.serialNumberError,
        documentNumberError: state.cars.documentNumberError,
        mileageError: state.cars.mileageError,
        dateError: state.cars.dateError,
        docCreatedByError: state.cars.docCreatedByError

    };
}

@connect(mapStateToProps, mapDispatchToProps)
export class CreateCard extends Component {

    static propTypes = {
        setCarsToState: Type.func,
        okpCategory: Type.array
    };

    componentDidMount() {
        // console.log(this.props.checkingDate);
    }

    componentWillMount() {
        this.props.checkCalculatedDate();
    }

    onCityChange = () => {
        console.log(this.props.carsArr);
        let {carsArr: [...item1]} = this.props;
        console.log(item1);
    };

    render() {
        return (
            <form>
                <div className="p-grid p-fluid">
                    <div className="p-lg-6">
                        <div className="card">
                            <h1 style={{fontSize: '16px'}}>Лицевая сторона СТС</h1>
                            <br/>
                            <div className="p-float-label">
                                <InputMask mask="a999aa999" required={true} maxLength="9" id="registerId"
                                           value={this.props.registerId} validateOnly={true}
                                           onChange={(e) => this.props.setDataFromInput({value: e.target.value}, SET_REGISTER_ID)}/>
                                <label htmlFor="registerId">Регистрационный знак</label>
                            </div>
                            <br/>
                            <div className="p-float-label">
                                <InputText maxLength="17" id="vinNumber" value={this.props.vinNumber}
                                           onChange={(e) => this.props.setDataFromInput({value: e.target.value}, SET_VIN_NUMBER)}/>
                                <label htmlFor="vinNumber">Идентификационный номер (VIN)</label>
                            </div>
                            <br/>
                            <div className="p-float-label">
                                <InputText maxLength="100" id="vehicleBrand" className={this.props.vehicleBrandError}
                                           value={this.props.vehicleBrand}
                                           onChange={(e) => this.props.setDataFromInput({value: e.target.value}, SET_VEHICLE_BRAND)}/>
                                <label htmlFor="vehicleBrand">Марка ТС</label>
                            </div>
                            <br/>
                            <div className="p-float-label">
                                <InputText maxLength="100" id="carModel" className={this.props.carModelError}
                                           value={this.props.carModel}
                                           onChange={(e) => this.props.setDataFromInput({value: e.target.value}, SET_CAR_MODEL)}/>
                                <label htmlFor="carModel">Модель ТС</label>
                            </div>
                            <br/>
                            <div className="p-float-label">
                                <InputText type="text" id="vehicleYear" className={this.props.vehicleYearError}
                                           value={this.props.vehicleYear}
                                           onBlur={() => this.props.setBasicCategory({value: this.props.basicCategory})}
                                           onChange={(e) => this.props.setDataFromInput({value: e.target.value}, SET_VEHICLE_YEAR)}/>
                                <label htmlFor="vehicleYear">Год выпуска ТС</label>
                            </div>
                            <br/>
                            <div className="p-grid">
                                <div className="p-col-12 p-lg-6">
                                    <p>Категория ТС</p>
                                    <Dropdown value={this.props.basicCategory} options={basicCategories}
                                              onChange={(e) => this.props.setBasicCategory(e)} style={{width: '200px'}}
                                              placeholder="Категория ТС"/>
                                </div>
                                <div className="p-col-12 p-lg-6">
                                    <p>Категория ТС (ОКП)</p>
                                    <Dropdown value={this.props.okpCategory[0].value} options={this.props.okpCategory}
                                              onChange={(e) => this.props.setOkpCategory(e, this.props.okpCategory)}
                                              style={{width: '200px'}} placeholder="Категория ТС (ОКП)"/>
                                </div>
                            </div>
                            <br/>
                            <div className="p-float-label">
                                <InputText maxLength="20" type="text" id="chassisNumber"
                                           value={this.props.chassisNumber}
                                           onChange={(e) => this.props.setDataFromInput({value: e.target.value}, SET_CHASSIS_NUMBER)}/>
                                <label htmlFor="chassisNumber">Шасси (рама) №</label>
                            </div>
                            <br/>
                            <div className="p-float-label">
                                <InputText maxLength="20" type="text" id="bodyNumber" value={this.props.bodyNumber}
                                           onChange={(e) => this.props.setDataFromInput({value: e.target.value}, SET_BODY_NUMBER)}/>
                                <label htmlFor="bodyNumber">Кузов (коляска) №</label>
                            </div>
                            <br/>
                            <div className="p-float-label">
                                <InputText keyfilter="pint" type="text" id="allowedWeight"
                                           className={this.props.allowedWeightError} value={this.props.allowedWeight}
                                           onChange={(e) => this.props.setDataFromInput({value: e.target.value}, SET_ALLOWED_WEIGHT)}/>
                                <label htmlFor="allowedWeight">Разрешенная max масса, кг</label>
                            </div>
                            <br/>
                            <div className="p-float-label">
                                <InputText keyfilter="pint" type="text" id="noLoadMass"
                                           className={this.props.noLoadMassError} value={this.props.noLoadMass}
                                           onChange={(e) => this.props.setDataFromInput({value: e.target.value}, SET_NO_LOAD_MASS)}/>
                                <label htmlFor="noLoadMass">Масса без нагрузки, кг</label>
                            </div>
                            <br/>
                            <div className="p-grid">
                                <div className="p-col-12 p-lg-6">
                                    <p>Тип топлива</p>
                                    <Dropdown value={this.props.fuelType} options={fuelType}
                                              onChange={(e) => this.props.setFuelType(e)} style={{width: '200px'}}
                                              placeholder="Тип топлива"/>
                                </div>
                                <div className="p-col-12 p-lg-6">
                                    <p>Тип тормозной системы</p>
                                    <Dropdown value={this.props.breakSysType} options={breakSystemType}
                                              onChange={(e) => this.props.setBreakSystemType(e)}
                                              style={{width: '200px'}} placeholder="Тип тормозной системы"/>
                                </div>
                            </div>
                            <br/>
                            <div className="p-grid">
                                <div className="p-lg-6">
                                    <div className="p-float-label">
                                        <InputText keyfilter="pint" type="text" id="mileage" maxLength="30"
                                                   className={this.props.mileageError} value={this.props.mileage}
                                                   onChange={(e) => this.props.setDataFromInput({value: e.target.value}, SET_MILEAGE)}/>
                                        <label htmlFor="mileage">Пробег</label>
                                    </div>
                                </div>
                                <div className="p-lg-6">
                                    <div className="p-float-label">
                                        <InputText type="text" id="tireBrand" maxLength="50"
                                                   className={this.props.tireBrandError} value={this.props.tireBrand}
                                                   onChange={(e) => this.props.setDataFromInput({value: e.target.value}, SET_TIRE_BRAND)}/>
                                        <label htmlFor="tireBrand">Марка шин</label>
                                    </div>
                                </div>
                            </div>
                            <div className="p-grid">
                                <div className="p-col-12">
                                    <p>Тип Документа</p>
                                    <Dropdown value={this.props.documentType} options={documents}
                                              onChange={(e) => this.props.setDataFromDropdown(e, SET_DOCUMENT_TYPE)}
                                              style={{width: '200px'}} placeholder="Тип Документа"/>
                                </div>
                            </div>

                            <br/>
                            <br/>
                            <div className="p-grid">
                                <div className="p-lg-6">
                                    <div className="p-float-label">
                                        <InputText keyfilter="pint" type="text" id="serialNumber" maxLength="4"
                                                   className={this.props.serialNumberError}
                                                   value={this.props.serialNumber}
                                                   onChange={(e) => this.props.setDataFromInput({value: e.target.value}, SET_DOCUMENT_SERIAL_NUMBER)}/>
                                        <label htmlFor="serialNumber">Серия документа</label>
                                    </div>
                                </div>
                                <div className="p-lg-6">
                                    <div className="p-float-label">
                                        <InputText keyfilter="pint" type="text" id="documentNumber" maxLength="6"
                                                   className={this.props.documentNumberError}
                                                   value={this.props.documentNumber}
                                                   onChange={(e) => this.props.setDataFromInput({value: e.target.value}, SET_DOCUMENT_NUMBER)}/>
                                        <label htmlFor="documentNumber">Номер документа</label>
                                    </div>
                                </div>
                            </div>
                            <br/>

                            <br/>
                            <div className="p-float-label">
                                <InputText type="text" id="docCreatedBy" maxLength="500"
                                           className={this.props.docCreatedByError} value={this.props.docCreatedBy}
                                           onChange={(e) => this.props.setDataFromInput({value: e.target.value}, SET_DOCUMENT_CREATED_BY)}/>
                                <label htmlFor="docCreatedBy">Кем выдан документ</label>
                            </div>
                            <br/>
                            <div className="p-float-label">
                                <p>Дата выдачи документов</p>
                                <Calendar showIcon={true} dateFormat="dd/mm/yy" className={this.props.dateError}
                                          value={this.props.updatedDate}
                                          onChange={(e) => this.props.setDocumentDateRelease(e, SET_CREATED_DOCS_DATE)}
                                          monthNavigator={true} yearNavigator={true} yearRange="1990:2019"/>
                            </div>

                            <br/>
                            <div className="p-float-label">
                                <Link to={"/card-list"}>
                                <Button style={{height: '77px'}} label="Создать ДК" type='submit'
                                        onClick={this.props.generateObjectAndSendToCreate}/>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="p-lg-6">
                        <div className="card">
                            <h1 style={{fontSize: '16px'}}>Обратная сторона СТС</h1>
                            <h2 style={{fontSize: '16px'}}>Собственник (владелец):</h2>
                            <br/>
                            <div className="p-float-label">
                                <InputText type="text" id="secondName" className={this.props.secondNameError}
                                           maxLength="50" value={this.props.secondName}
                                           onChange={(e) => this.props.setDataFromInput({value: e.target.value}, SET_SECOND_NAME)}/>
                                <label htmlFor="secondName">Фамилия</label>
                            </div>
                            <br/>
                            <div className="p-float-label">
                                <InputText type="text" id="firstName" maxLength="50"
                                           className={this.props.firstNameError} value={this.props.firstName}
                                           onChange={(e) => this.props.setDataFromInput({value: e.target.value}, SET_FIRST_NAME)}/>
                                <label htmlFor="firstName">Имя</label>
                            </div>
                            <br/>
                            <div className="p-float-label">
                                <InputText type="text" id="middleName" maxLength="50" value={this.props.middleName}
                                           onChange={(e) => this.props.setDataFromInput({value: e.target.value}, SET_MIDDLE_NAME)}/>
                                <label htmlFor="middleName">Отчество</label>
                            </div>
                            <br/>
                            <div className="p-float-label">
                                <InputText type="text" id="marks" maxLength="30" value={this.props.marks}
                                           onChange={(e) => this.props.setDataFromInput({value: e.target.value}, SET_MARKS)}/>
                                <label htmlFor="marks">Особые отметки</label>
                            </div>

                            <br/>
                            <div className="p-grid">
                                <div className="p-lg-6">
                                    <p>Иностранный гражданин</p>
                                    <InputSwitch checked={this.props.externalSitizen} id="externalSitizen"
                                                 onChange={(e) => this.props.setCalculatedDate(e, SET_EXTERNAL_SITIZEN)}/>
                                </div>
                                <br/>
                                <div className="p-lg-6">
                                    <p>Опасный груз</p>
                                    <InputSwitch checked={this.props.dangerousCargo} id="dangerousCargo"
                                                 onChange={(e) => this.props.setCalculatedDate(e, SET_DANGEROUS_CARGO)}/>
                                </div>
                            </div>
                            <br/>
                            <div className="p-grid">
                                <div className="p-lg-6">
                                    <p>Такси</p>
                                    <InputSwitch checked={this.props.taxiCar} id="taxiCar"
                                                 onChange={(e) => this.props.setCalculatedDate(e, SET_TAXI_CAR)}/>
                                </div>
                                <br/>
                                <div className="p-lg-6">
                                    <p>Учебный автомобиль</p>
                                    <InputSwitch checked={this.props.trainingCar} id="trainingCar"
                                                 onChange={(e) => this.props.setCalculatedDate(e, SET_TRAINING_CAR)}/>
                                </div>
                            </div>
                        </div>

                        <div className="p-lg-12">
                            <div className="card">
                                <h1 style={{fontSize: '16px'}}>Заключение о возможности/невозможности эксплуатации
                                    транспортного средства</h1>

                                <p style={{fontSize: '16px'}}>Результаты проверки</p>
                                <SelectButton value={this.props.checkingRes} disabled={true} options={resultChecking}
                                              onChange={(e) => this.props.updateCheckingResult(e, UPDATE_CHECKING_RESULT)}/>
                                <br/>
                                <p style={{fontSize: '16px'}}>Вид проверки</p>
                                <SelectButton value={this.props.checkingType} disabled={true} options={typeChecking}
                                              onChange={(e) => this.props.updateCheckingResult(e, UPDATE_CHECKING_TYPE)}/>
                                <br/>
                                <div className="p-float-label">
                                    <p style={{fontSize: '16px'}}>Замечания</p>
                                    <InputTextarea maxLength="2000" id="textArea" rows={5} cols={30} value={this.props.textArea}
                                                   onChange={(e) => this.props.setDataFromInput({value: e.target.value}, SET_TEXT_AREA)}/>
                                </div>
                                <br/>
                                <div className="p-float-label">
                                    <p style={{fontSize: '16px'}}>Дата проверки</p>
                                    <Calendar showIcon={true} dateFormat="dd/mm/yy" value={this.props.checkingDate}
                                              onChange={(e) => this.props.setDocumentDateRelease(e, SET_CHECKING_DATE)}
                                              monthNavigator={true} yearNavigator={true} yearRange="1990:2019"/>
                                </div>
                                <br/>
                                <p style={{fontSize: '16px'}}>Срок действия до:</p>
                                <Calendar value={this.props.calculatedDate} dateFormat="dd/mm/yy"
                                          onChange={(e) => this.props.setDocumentDateRelease(e, SET_EXPIRATION_DATE)}/>
                                <br/>
                                <br/>
                                <div className="p-lg-12 toggleButton">
                                    <ToggleButton style={{width: '180px', marginRight: '28px'}}
                                                  checked={this.props.checked6M} onLabel="6 месяцев"
                                                  offLabel="6 месяцев"/>
                                    <ToggleButton style={{width: '180px', marginRight: '28px'}}
                                                  checked={this.props.checked12M} onLabel="12 месяцев"
                                                  offLabel="12 месяцев"/>
                                    <ToggleButton style={{width: '180px', marginRight: '28px'}}
                                                  checked={this.props.checked24M} onLabel="24 месяца"
                                                  offLabel="24 месяца"/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        );
    }
}