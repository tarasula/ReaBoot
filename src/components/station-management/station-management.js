import React, {Component} from 'react';
import {InputText} from "primereact/components/inputtext/InputText";
import './station-management.css';
import {connect} from "react-redux";
import bindActionCreators from "redux/src/bindActionCreators";
import Type from 'prop-types';

import {
    setCategory,
    setExpert,
    setOperator,
    setPrice,
    setStamp
} from "../../actions/station-management/station-management-action";
import {Button} from "primereact/components/button/Button";
import {DataTable} from "primereact/components/datatable/DataTable";
import {Column} from "primereact/components/column/Column";
import {Dropdown} from "primereact/components/dropdown/Dropdown";
import {InputSwitch} from "primereact/components/inputswitch/InputSwitch";
import {Spinner} from "primereact/components/spinner/Spinner";


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setPrice,
        setOperator,
        setExpert,
        setCategory
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        newPrice: state.global.newPrice,
        stamp: state.global.stamp,
        operator: state.global.operator,
        expert: state.global.expert,
        category: state.global.category,
        stationSpinnerDisabled: state.global.stationSpinnerDisabled


        //operatorLoginDataTable: state.global.operatorLoginDataTable

    };
}

export const stations = [
    {stationNameDataTable: 'Станция Еремеево', stationAddressDataTable: 'Москва', stationOperatorDataTable: 'Оператор №1', stationExpertDataTable: "Эксперт №3", stationLimitDataTable: "23", stationCategoriesDataTable: 'A'},
    {stationNameDataTable: 'Станция Игрок', stationAddressDataTable: 'Питер', stationOperatorDataTable: 'Оператор №3', stationExpertDataTable: "Эксперт №2", stationLimitDataTable: "33", stationCategoriesDataTable: 'A, D'},
    {stationNameDataTable: 'Станция Милка', stationAddressDataTable: 'Реховот', stationOperatorDataTable: 'Оператор №6', stationExpertDataTable: "Эксперт №3", stationLimitDataTable: "10", stationCategoriesDataTable: 'B'},
    {stationNameDataTable: 'Станция Гифк', stationAddressDataTable: 'Бейрут', stationOperatorDataTable: 'Оператор №2', stationExpertDataTable: "Эксперт №1", stationLimitDataTable: "9", stationCategoriesDataTable: 'C, E'}
    ];

export const operators = [
    {label: 'Оператор №1', value: '1'},
    {label: 'Оператор №2', value: '2'},
    {label: 'Оператор №3', value: '3'},
    {label: 'Оператор №4', value: '4'},
    {label: 'Оператор №5', value: '5'}
];


export const experts = [
    {label: 'Эксперт №1', value: '1'},
    {label: 'Эксперт №2', value: '2'},
    {label: 'Эксперт №3', value: '3'},
    {label: 'Эксперт №4', value: '4'},
    {label: 'Эксперт №5', value: '5'}
];


export const categories = [
    {label: 'A', value: 'A'},
    {label: 'B', value: 'B'},
    {label: 'C', value: 'C'},
    {label: 'D', value: 'D'},
    {label: 'E', value: 'E'}
];

@connect(mapStateToProps, mapDispatchToProps)
export class StationManagement extends Component {

    static propTypes = {
        setPrice: Type.func,
        setStamp: Type.func
    };


// Сделать метод который будет апдейтить масив данных которыми заполняется DataTbale - onChange

    stationNameEditor = (props) => {
        return <InputText type="text" value={props.rowData.expertSecondNameDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
    };

    stationAddressEditor = (props) => {
        return <InputText type="text" value={props.rowData.expertFirstNameDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
    };

    stationOperatorEditor = (props) => {
        return <InputText type="text" value={props.rowData.expertMiddleNameDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
    };

    stationExpertEditor = (props) => {
        return <InputText type="text" value={props.rowData.expertLoginDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
    };

    stationLimitEditor = (props) => {
        return (
            <div>
                <InputText type="text" value={props.rowData.dayCardLimitDataTable}/>
                <Spinner size={26} step={1}/>
            </div>)
    };

    stationCategoriesEditor = (props) => { // При изменении должен выпадать список с подписями
        return <InputText type="text" value={props.rowData.expertSignatureDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
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

                        <h1 style={{fontSize: '20px'}}>Добавить станцию</h1>
                        <br/>
                        <div className="p-grid p-fluid">
                                <div className="card">
                                    <div className="p-grid">

                                        <div className="p-col-12 p-lg-6 p-md-4">
                                            <div className="p-float-label">
                                                <InputText id="stationName" type="text" size="30" maxLength="100"/>
                                                <label htmlFor="stationName">Название</label>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div className="p-col-12 p-lg-6 p-md-4">
                                            <div className="p-float-label">
                                                <InputText id="stationAddress" type="password" size="30" maxLength="200"/>
                                                <label htmlFor="stationAddress">Адрес</label>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div className="p-col-12 p-lg-6">
                                            <Dropdown value={this.props.operator} options={operators} onChange={(e) => this.props.setOperator({value: e.value})}
                                                      style={{width: '650px'}} placeholder="Выберете оператора"/>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div className="p-col-12 p-lg-6">
                                            <Dropdown value={this.props.expert} options={experts} onChange={(e) => this.props.setExpert({value: e.value})}
                                                      style={{width: '650px'}} placeholder="Выберете эксперта"/>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div className="p-col-12 p-lg-6 p-md-4">
                                            <div className="p-float-label">
                                                <Spinner id="dayCardLimit" value={this.props.newPrice} size={26} step={1}
                                                         onChange={(e) => this.props.setPrice({value: e.value})} disabled={this.props.stationSpinnerDisabled}/>
                                                <label htmlFor="dayCardLimit">Лимит карт в сутки</label>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div className="p-col-12 p-lg-6">
                                            <Dropdown value={this.props.category} options={categories} onChange={(e) => this.props.setCategory({value: e.value})}
                                                      style={{width: '650px'}} placeholder="Выберете категорию"/>
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
                        <DataTable value={stations} paginator={true} rows={10} rowsPerPageOptions={[5, 10, 20]} editable={true}>
                            <Column field="stationNameDataTable" header="Название" sortable={true} filter={true} filterMatchMode="contains" editor={this.stationNameEditor}/>
                            <Column field="stationAddressDataTable" header="Адрес" sortable={true} filter={true} filterMatchMode="contains" editor={this.stationAddressEditor}/>
                            <Column field="stationOperatorDataTable" header="Оператор" sortable={true} filter={true} filterMatchMode="contains" editor={this.stationOperatorEditor}/>
                            <Column field="stationExpertDataTable" header="Эксперт" sortable={true} filter={true} filterMatchMode="contains" editor={this.stationExpertEditor}/>
                            <Column field="stationLimitDataTable" header="Лимит карт" sortable={true} filter={true} filterMatchMode="contains" editor={this.stationLimitEditor}/>
                            <Column field="stationCategoriesDataTable" header="Категории" sortable={true} filter={true} filterMatchMode="contains" editor={this.stationCategoriesEditor}/>
                            <Column header="Действие" body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
                        </DataTable>
                    </div>
                </div>
            </div>
        );
    }

}