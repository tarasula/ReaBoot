import React, {Component} from 'react';
import {InputText} from "primereact/components/inputtext/InputText";
import './operator-management.css';
import {connect} from "react-redux";
import bindActionCreators from "redux/src/bindActionCreators";
import Type from 'prop-types';
import {InputMask} from "primereact/components/inputmask/InputMask";
import {Spinner} from "primereact/components/spinner/Spinner";
import {setPrice, setStamp} from "../../actions/operator-management/operator-management-action";
import {Button} from "primereact/components/button/Button";
import {DataTable} from "primereact/components/datatable/DataTable";
import {Column} from "primereact/components/column/Column";
import {Dropdown} from "primereact/components/dropdown/Dropdown";
import {Checkbox} from "primereact/components/checkbox/Checkbox";
import {InputSwitch} from "primereact/components/inputswitch/InputSwitch";


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setPrice,
        setStamp
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        newPrice: state.global.newPrice,
        stamp: state.global.stamp
        //operatorLoginDataTable: state.global.operatorLoginDataTable

    };
}

export const agents = [
    {shortOrgNameDataTable: 'Семенов', fullOrgNameDataTable: 'СеменовИЧ', orgAddressDataTable: 'Москва', operatorLoginDataTable: "truele", operatorPasswordDataTable: "123", dayCardLimitDataTable: "23", rsaNumberDataTable: "13245", operatorCategoryDataTable: 'A, B', operatorStampDataTable: '1'},
    {shortOrgNameDataTable: 'Свинолупов', fullOrgNameDataTable: 'СвинолуповИЧ', orgAddressDataTable: 'Питер', operatorLoginDataTable: "tarasa", operatorPasswordDataTable: "123", dayCardLimitDataTable: "2", rsaNumberDataTable: "55554", operatorCategoryDataTable: 'A', operatorStampDataTable: '4'},
    {shortOrgNameDataTable: 'Береста', fullOrgNameDataTable: 'БерестаНОВНА', orgAddressDataTable: 'Ереван', operatorLoginDataTable: "lalal", operatorPasswordDataTable: "123", dayCardLimitDataTable: "34", rsaNumberDataTable: "20344", operatorCategoryDataTable: 'A, B, D', operatorStampDataTable: '3'},
    {shortOrgNameDataTable: 'Букгага', fullOrgNameDataTable: 'БукгагаКОВНА', orgAddressDataTable: 'Барнаул', operatorLoginDataTable: "kutar", operatorPasswordDataTable: "123", dayCardLimitDataTable: "5", rsaNumberDataTable: "24545", operatorCategoryDataTable: 'A, B, E', operatorStampDataTable: '2'}
    ];

export const stamps = [
    {label: 'Печать №1', value: '1'},
    {label: 'Печать №2', value: '2'},
    {label: 'Печать №3', value: '3'},
    {label: 'Печать №4', value: '4'},
    {label: 'Печать №5', value: '5'}
];


@connect(mapStateToProps, mapDispatchToProps)
export class OperatorManagement extends Component {

    static propTypes = {
        setPrice: Type.func,
        setStamp: Type.func
    };


// Сделать метод который будет апдейтить масив данных которыми заполняется DataTbale - onChange

    shortOrgNameEditor = (props) => {
        return <InputText type="text" value={props.rowData.shortOrgNameDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
    };

    fullOrgNameEditor = (props) => {
        return <InputText type="text" value={props.rowData.fullOrgNameDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
    };

    orgAddressEditor = (props) => {
        return <InputText type="text" value={props.rowData.orgAddressDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
    };

    operatorLoginEditor = (props) => {
        return <InputText type="text" value={props.rowData.operatorLoginDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
    };

    operatorPasswordEditor = (props) => {
        return <InputText type="text" value={props.rowData.operatorPasswordDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
    };

    dayCardLimitEditor = (props) => {
        return (
            <div>
                <InputText type="text" value={props.rowData.dayCardLimitDataTable}/>
                <Spinner size={26} step={1}/>
            </div>)
    };

    rsaNumberEditor = (props) => {
        return <InputText type="text" value={props.rowData.rsaNumberDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
    };

    operatorCategoryEditor = (props) => {
        return <InputText type="text" value={props.rowData.operatorCategoryDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
    };

    operatorStampEditor = (props) => { // При изменении должен выпадать список с печатями
        return <InputText type="text" value={props.rowData.operatorStampDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
    };

    actionTemplate = (rowData, column) => { //Подумать как сделать onChange на каждую строку в DataTable - этот метод добавляет кнопки в последний столбец для всех строк
        return <div>
            <InputSwitch checked={false} /* onChange={(e) => this.setState({value: e.value})}*/ />
            <br/>
            <Button type="button" icon="pi pi-ban" className="p-button-warning"/>
        </div>;
    };

    render() {
        return (
            <div className="p-grid p-fluid">
                <div className="p-col-12">
                    <div className="card">

                        <h1 style={{fontSize: '20px'}}>Добавить оператора</h1>
                        <br/>
                        <div className="p-grid p-fluid">
                                <div className="card">
                                    <div className="p-grid">

                                        <div className="p-col-12 p-lg-6 p-md-4">
                                            <div className="p-float-label">
                                                <InputText id="shortOrgName" type="text" size="30" maxLength="100"/>
                                                <label htmlFor="shortOrgName">Короткое название организации</label>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div className="p-col-12 p-lg-6 p-md-4">
                                            <div className="p-float-label">
                                                <InputText id="fullOrgName" type="text" size="30" maxLength="100"/>
                                                <label htmlFor="fullOrgName">Полное название организации</label>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div className="p-col-12 p-lg-6 p-md-4">
                                            <div className="p-float-label">
                                                <InputText id="orgAddress" type="text" size="30" maxLength="100"/>
                                                <label htmlFor="orgAddress">Адрес организации</label>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div className="p-col-12 p-lg-6 p-md-4">
                                            <div className="p-float-label">
                                                <InputMask mask="99999"  id="rsaNumber" size="30" maxLength="5"/>
                                                <label htmlFor="rsaNumber">Номер РСА</label>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div className="p-col-12 p-lg-6 p-md-4">
                                            <div className="p-float-label">
                                                <InputText id="operatorLogin" type="text" size="30" maxLength="4"/>
                                                <label htmlFor="operatorLogin">Логин</label>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div className="p-col-12 p-lg-6 p-md-4">
                                            <div className="p-float-label">
                                                <InputText id="operatorPassword" type="password" size="30" maxLength="50"/>
                                                <label htmlFor="operatorPassword">Пароль</label>
                                            </div>
                                        </div>
                                        <div className="p-col-12 p-lg-6">
                                            <Dropdown value={this.props.stamp.value} options={stamps} onChange={(e) => this.props.setStamp({value: e.value})}
                                                      style={{width: '650px'}} placeholder="Выберете печать"/>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div className="p-col-12 p-lg-6 p-md-4">
                                            <div className="p-float-label">
                                                <Spinner id="dayCardLimit" value={this.props.newPrice.value} size={26} step={1}
                                                         onChange={(e) => this.props.setPrice({value: e.value})}/>
                                                <label htmlFor="dayCardLimit">Лимит карт в сутки</label>
                                            </div>
                                        </div>
                                    </div>

                                    <br/>
                                    <br/>
                                    <div className="p-grid">

                                            <lable className="p-md-2" style={{fontSize: '16px'}}>Выберете категории:</lable>

                                            <div className="p-md-2">
                                                <Checkbox inputId="categoryA" value="A" ></Checkbox>
                                                <label htmlFor="categoryA" className="p-checkbox-label">A</label>
                                            </div>

                                            <div className="p-md-2">
                                                <Checkbox inputId="categoryB" value="B" ></Checkbox>
                                                <label htmlFor="categoryB" className="p-checkbox-label">B</label>
                                            </div>

                                            <div className="p-md-2">
                                                <Checkbox inputId="categoryC" value="C" ></Checkbox>
                                                <label htmlFor="categoryC" className="p-checkbox-label">C</label>
                                            </div>

                                            <div className="p-md-2">
                                                <Checkbox inputId="categoryD" value="D" ></Checkbox>
                                                <label htmlFor="categoryD" className="p-checkbox-label">D</label>
                                            </div>

                                            <div className="p-md-2">
                                                <Checkbox inputId="categoryE" value="E" ></Checkbox>
                                                <label htmlFor="categoryE" className="p-checkbox-label">E</label>
                                            </div>
                                        </div>

                                </div>
                        </div>

                        <div className="p-float-label">
                            <Button style={{height: '50px', backgroundColor: '#39b6cd'}} label="Создать" type='submit'
                                    onClick={this.props.getCard}/>
                        </div>

                        <h1 style={{fontSize: '20px'}}>Операторы:</h1>
                        <br/>
                        <DataTable value={agents} paginator={true} rows={10} rowsPerPageOptions={[5, 10, 20]} editable={true}>
                            <Column field="shortOrgNameDataTable" header="Короткое название организации" sortable={true} filter={true} filterMatchMode="contains" editor={this.shortOrgNameEditor}/>
                            <Column field="fullOrgNameDataTable" header="Полное название организации" sortable={true} filter={true} filterMatchMode="contains" editor={this.fullOrgNameEditor}/>
                            <Column field="orgAddressDataTable" header="Адрес организации" sortable={true} filter={true} filterMatchMode="contains" editor={this.orgAddressEditor}/>
                            <Column field="operatorLoginDataTable" header="Логин" sortable={true} filter={true} filterMatchMode="contains" editor={this.operatorLoginEditor}/>
                            <Column field="operatorPasswordDataTable" header="Пароль" sortable={true} filter={true} filterMatchMode="contains" editor={this.operatorPasswordEditor}/>
                            <Column field="dayCardLimitDataTable" header="Лимит карт в сутки" sortable={true} filter={true} filterMatchMode="contains" editor={this.dayCardLimitEditor}/>
                            <Column field="rsaNumberDataTable" header="Номер РСА" sortable={true} filter={true} filterMatchMode="contains" editor={this.rsaNumberEditor}/>
                            <Column field="operatorCategoryDataTable" header="Категории" sortable={true} filter={true} filterMatchMode="contains" editor={this.operatorCategoryEditor}/>
                            <Column field="operatorStampDataTable" header="Печать" sortable={true} filter={true} filterMatchMode="contains" editor={this.operatorStampEditor}/>
                            <Column header="Действие" body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
                        </DataTable>
                    </div>
                </div>
            </div>
        );
    }

}