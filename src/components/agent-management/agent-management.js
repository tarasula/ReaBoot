import React, {Component} from 'react';
import {InputText} from "primereact/components/inputtext/InputText";
import './agent-management.css';
import {connect} from "react-redux";
import bindActionCreators from "redux/src/bindActionCreators";
import Type from 'prop-types';

import {
    setAgentType,
    setCategory, setExpert, setOperator, setPrice,
    setStamp
} from "../../actions/agent-management/agent-management-action";
import {Button} from "primereact/components/button/Button";
import {DataTable} from "primereact/components/datatable/DataTable";
import {Column} from "primereact/components/column/Column";
import {InputMask} from "primereact/components/inputmask/InputMask";
import {InputSwitch} from "primereact/components/inputswitch/InputSwitch";
import {Spinner} from "primereact/components/spinner/Spinner";
import {Dropdown} from "primereact/components/dropdown/Dropdown";


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setPrice,
        setOperator,
        setExpert,
        setCategory,
        setAgentType
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        newPrice: state.global.newPrice,
        stamp: state.global.stamp,
        operator: state.global.operator,
        expert: state.global.expert,
        category: state.global.category,
        stationSpinnerDisabled: state.global.stationSpinnerDisabled,
        agentType: state.global.agentType

    };
}

export const agents = [
    {agentSecondNameDataTable: 'Семенов', agentFirstNameDataTable: 'Семенов', agentMiddleNameDataTable: 'Богданович', agentLoginDataTable: "truele", agentPasswordDataTable: "123", agentEmailDataTable: 'jhvjhg@kjb.com', agentPhoneNumberDataTable: '79096636363'},
    {agentSecondNameDataTable: 'Свинолупов', agentFirstNameDataTable: 'Свинолупов', agentMiddleNameDataTable: 'Еремеевич', agentLoginDataTable: "tarasa", agentPasswordDataTable: "123", agentEmailDataTable: 'jhvjhg@kjb.com', agentPhoneNumberDataTable: '79392352145'},
    {agentSecondNameDataTable: 'Береста', agentFirstNameDataTable: 'Береста', agentMiddleNameDataTable: 'Ереванович', agentLoginDataTable: "lalal", agentPasswordDataTable: "123", agentEmailDataTable: 'jhvjhg@kjb.com', agentPhoneNumberDataTable: '798752432365'},
    {agentSecondNameDataTable: 'Букгага', agentFirstNameDataTable: 'Букгага', agentMiddleNameDataTable: 'Барнаулович', agentLoginDataTable: "kutar", agentPasswordDataTable: "123", agentEmailDataTable: 'jhvjhg@kjb.com', agentPhoneNumberDataTable: '4957653121'}
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

export const agentTypes = [
    {label: 'Агент Создатель', value: 'ДК'},
    {label: 'Агент Запись', value: 'ТО'}
];

@connect(mapStateToProps, mapDispatchToProps)
export class AgentManagement extends Component {

    static propTypes = {
        setPrice: Type.func,
        setStamp: Type.func
    };


// Сделать метод который будет апдейтить масив данных которыми заполняется DataTbale - onChange

    agentSecondNameEditor = (props) => {
        return <InputText type="text" value={props.rowData.agentSecondNameDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
    };

    agentFirstNameEditor = (props) => {
        return <InputText type="text" value={props.rowData.agentFirstNameDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
    };

    agentMiddleNameEditor = (props) => {
        return <InputText type="text" value={props.rowData.agentMiddleNameDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
    };

    agentLoginEditor = (props) => {
        return <InputText type="text" value={props.rowData.agentLoginDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
    };

    agentPasswordEditor = (props) => { // При изменении должен выпадать список с подписями
        return <InputText type="text" value={props.rowData.agentPasswordDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
    };

    agentEmailEditor = (props) => { // При изменении должен выпадать список с подписями
        return <InputText type="text" value={props.rowData.agentEmailDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
    };

    agentPhoneNumberEditor = (props) => { // При изменении должен выпадать список с подписями
        return <InputText type="text" value={props.rowData.agentPhoneNumberDataTable}/>; /*onChange={(e) => this.onEditorValueChange(props, e.target.value)} */
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

                        <h1 style={{fontSize: '20px'}}>Добавить агента</h1>
                        <br/>
                        <div className="p-grid p-fluid">
                                <div className="card">
                                    <div className="p-grid">

                                        <div className="p-col-12 p-lg-4">
                                            <div className="p-float-label">
                                                <InputText id="agentSecondName" type="text" size="30" maxLength="50"/>
                                                <label htmlFor="agentSecondName">Фамилия</label>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div className="p-col-12 p-lg-4">
                                            <div className="p-float-label">
                                                <InputText id="agentLogin" type="text" size="30" maxLength="50"/>
                                                <label htmlFor="agentLogin">Логин</label>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div className="p-col-12 p-lg-4">
                                            <div className="p-float-label">
                                                <InputText id="agentFirstName" type="text" size="30" maxLength="50"/>
                                                <label htmlFor="agentFirstName">Имя</label>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div className="p-col-12 p-lg-4">
                                            <div className="p-float-label">
                                                <InputText id="agentPassword" type="password" size="30" maxLength="50"/>
                                                <label htmlFor="agentPassword">Пароль</label>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div className="p-col-12 p-lg-4">
                                            <div className="p-float-label">
                                                <InputText id="agentMiddleName" type="text" size="30" maxLength="50"/>
                                                <label htmlFor="agentMiddleName">Отчество</label>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div className="p-col-12 p-lg-4">
                                            <div className="p-float-label">
                                                <InputText id="agentEmail" type="text" size="30" maxLength="50"/>
                                                <label htmlFor="agentEmail">Email</label>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div className="p-col-12 p-lg-4">
                                            <div className="p-float-label">
                                                <InputMask id="agentPhoneNumber" mask="+7(999) 999-9999" type="text" size="30" maxLength="50"/>
                                                <label htmlFor="agentPhoneNumber">Телефон</label>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div className="p-col-12 p-lg-4">
                                            <div className="p-float-label">
                                                <Spinner id="agemtDayCardLimit" value={this.props.newPrice} size={26} step={1} //Этот метод в экшене используется в других спинерах - подумать их обьеденить или сделать отдельный метод для каждого
                                                         onChange={(e) => this.props.setPrice({value: e.value})} disabled={false} sstyle={{width: '436px'}}/>
                                                <label htmlFor="agemtDayCardLimit">Цена за категорию B</label>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div className="p-col-12 p-lg-4">
                                            <Dropdown value={this.props.agentType} options={agentTypes} onChange={(e) => this.props.setAgentType({value: e.value})}
                                                      style={{width: '436px'}} placeholder="Выберете тип агента"/>
                                        </div>
                                    </div>
                                </div>
                        </div>

                        <div className="p-float-label">
                            <Button style={{height: '50px', backgroundColor: '#39b6cd'}} label="Создать" type='submit'
                                    onClick={this.props.getCard}/>
                        </div>

                        <h1 style={{fontSize: '20px'}}>Агенты:</h1>
                        <br/>
                        <DataTable value={agents} paginator={true} rows={10} rowsPerPageOptions={[5, 10, 20]} editable={true}>
                            <Column field="agentSecondNameDataTable" header="Фамилия" sortable={true} filter={true} filterMatchMode="contains" editor={this.agentSecondNameEditor}/>
                            <Column field="agentFirstNameDataTable" header="Имя" sortable={true} filter={true} filterMatchMode="contains" editor={this.agentFirstNameEditor}/>
                            <Column field="agentMiddleNameDataTable" header="Отчество" sortable={true} filter={true} filterMatchMode="contains" editor={this.agentMiddleNameEditor}/>
                            <Column field="agentLoginDataTable" header="Логин" sortable={true} filter={true} filterMatchMode="contains" editor={this.agentLoginEditor}/>
                            <Column field="agentPasswordDataTable" header="Пароль" sortable={true} filter={true} filterMatchMode="contains" editor={this.agentPasswordEditor}/>
                            <Column field="agentEmailDataTable" header="Email" sortable={true} filter={true} filterMatchMode="contains" editor={this.agentEmailEditor}/>
                            <Column field="agentPhoneNumberDataTable" header="Номер телефона" sortable={true} filter={true} filterMatchMode="contains" editor={this.agentPhoneNumberEditor}/>
                            <Column header="Действие" body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
                        </DataTable>
                    </div>
                </div>
            </div>
        );
    }

}