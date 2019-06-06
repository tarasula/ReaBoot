import React, {Component} from 'react';
import {InputText} from "primereact/components/inputtext/InputText";
import './expert-management.css';
import {connect} from "react-redux";
import bindActionCreators from "redux/src/bindActionCreators";
import Type from 'prop-types';
import {setPrice, setStamp} from "../../actions/expert-management/expert-management-action";
import {Button} from "primereact/components/button/Button";
import {DataTable} from "primereact/components/datatable/DataTable";
import {Column} from "primereact/components/column/Column";
import {Dropdown} from "primereact/components/dropdown/Dropdown";
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

export const experts = [
    {expertSecondNameDataTable: 'Семенов', expertFirstNameDataTable: 'Семенов', expertMiddleNameDataTable: 'Богданович', expertLoginDataTable: "truele", expertPasswordDataTable: "123", expertSignatureDataTable: '1'},
    {expertSecondNameDataTable: 'Свинолупов', expertFirstNameDataTable: 'Свинолупов', expertMiddleNameDataTable: 'Еремеевич', expertLoginDataTable: "tarasa", expertPasswordDataTable: "123", expertSignatureDataTable: '4'},
    {expertSecondNameDataTable: 'Береста', expertFirstNameDataTable: 'Береста', expertMiddleNameDataTable: 'Ереванович', expertLoginDataTable: "lalal", expertPasswordDataTable: "123", expertSignatureDataTable: '3'},
    {expertSecondNameDataTable: 'Букгага', expertFirstNameDataTable: 'Букгага', expertMiddleNameDataTable: 'Барнаулович', expertLoginDataTable: "kutar", expertPasswordDataTable: "123", expertSignatureDataTable: '2'}
    ];

export const signatures = [
    {label: 'Подпись №1', value: '1'},
    {label: 'Подпись №2', value: '2'},
    {label: 'Подпись №3', value: '3'},
    {label: 'Подпись №4', value: '4'},
    {label: 'Подпись №5', value: '5'}
];


@connect(mapStateToProps, mapDispatchToProps)
export class ExpertManagement extends Component {

    static propTypes = {
        setPrice: Type.func,
        setStamp: Type.func
    };


// Сделать метод который будет апдейтить масив данных которыми заполняется DataTbale - onChange

    expertSecondNameEditor = (props) => {
        return <InputText type="text" value={props.rowData.expertSecondNameDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
    };

    expertFirstNameEditor = (props) => {
        return <InputText type="text" value={props.rowData.expertFirstNameDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
    };

    expertMiddleNameEditor = (props) => {
        return <InputText type="text" value={props.rowData.expertMiddleNameDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
    };

    expertLoginEditor = (props) => {
        return <InputText type="text" value={props.rowData.expertLoginDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
    };

    expertPasswordEditor = (props) => {
        return <InputText type="text" value={props.rowData.expertPasswordDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
    };

    expertSignatureEditor = (props) => { // При изменении должен выпадать список с подписями
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

                        <h1 style={{fontSize: '20px'}}>Добавить эксперта</h1>
                        <br/>
                        <div className="p-grid p-fluid">
                                <div className="card">
                                    <div className="p-grid">

                                        <div className="p-col-12 p-lg-6 p-md-4">
                                            <div className="p-float-label">
                                                <InputText id="expertSecondName" type="text" size="30" maxLength="50"/>
                                                <label htmlFor="expertSecondName">Фамилия</label>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div className="p-col-12 p-lg-6 p-md-4">
                                            <div className="p-float-label">
                                                <InputText id="expertPassword" type="password" size="30" maxLength="50"/>
                                                <label htmlFor="expertPassword">Пароль</label>
                                            </div>
                                        </div>

                                        <br/>
                                        <br/>
                                        <br/>
                                        <div className="p-col-12 p-lg-6 p-md-4">
                                            <div className="p-float-label">
                                                <InputText id="expertFirstName" type="text" size="30" maxLength="50"/>
                                                <label htmlFor="expertFirstName">Имя</label>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div className="p-col-12 p-lg-6 p-md-4">
                                            <div className="p-float-label">
                                                <InputText id="expertLogin" type="text" size="30" maxLength="4"/>
                                                <label htmlFor="expertLogin">Логин</label>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div className="p-col-12 p-lg-6 p-md-4">
                                            <div className="p-float-label">
                                                <InputText id="expertMiddleName" type="text" size="30" maxLength="50"/>
                                                <label htmlFor="expertMiddleName">Отчество</label>
                                            </div>
                                        </div>
                                        <div className="p-col-12 p-lg-6">
                                            <Dropdown value={this.props.stamp.value} options={signatures} onChange={(e) => this.props.setStamp({value: e.value})}
                                                      style={{width: '650px'}} placeholder="Выберете подпись"/>
                                        </div>
                                    </div>
                                </div>
                        </div>

                        <div className="p-float-label">
                            <Button style={{height: '50px', backgroundColor: '#39b6cd'}} label="Создать" type='submit'
                                    onClick={this.props.getCard}/>
                        </div>

                        <h1 style={{fontSize: '20px'}}>Эксперты:</h1>
                        <br/>
                        <DataTable value={experts} paginator={true} rows={10} rowsPerPageOptions={[5, 10, 20]} editable={true}>
                            <Column field="expertSecondNameDataTable" header="Фамилия эксперта" sortable={true} filter={true} filterMatchMode="contains" editor={this.expertSecondNameEditor}/>
                            <Column field="expertFirstNameDataTable" header="Имя эксперта" sortable={true} filter={true} filterMatchMode="contains" editor={this.expertFirstNameEditor}/>
                            <Column field="expertMiddleNameDataTable" header="Отчество эксперта" sortable={true} filter={true} filterMatchMode="contains" editor={this.expertMiddleNameEditor}/>
                            <Column field="expertLoginDataTable" header="Логин" sortable={true} filter={true} filterMatchMode="contains" editor={this.expertLoginEditor}/>
                            <Column field="expertPasswordDataTable" header="Пароль" sortable={true} filter={true} filterMatchMode="contains" editor={this.expertPasswordEditor}/>
                            <Column field="expertSignatureDataTable" header="Подпись" sortable={true} filter={true} filterMatchMode="contains" editor={this.expertSignatureEditor}/>
                            <Column header="Действие" body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
                        </DataTable>
                    </div>
                </div>
            </div>
        );
    }

}