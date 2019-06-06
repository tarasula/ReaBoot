import React, {Component} from 'react';
import './chain-management.css';
import {connect} from "react-redux";
import bindActionCreators from "redux/src/bindActionCreators";
import Type from 'prop-types';
import {setList} from "../../actions/chain-management/chain-management-action";
import {Button} from "primereact/components/button/Button";
import {DataTable} from "primereact/components/datatable/DataTable";
import {Column} from "primereact/components/column/Column";
import {InputSwitch} from "primereact/components/inputswitch/InputSwitch";
import {OrderList} from 'primereact/orderlist';



function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setList
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
        newstation: state.global.newstation,
        newstationlist: state.global.newstationlist

    };
}

export const savedOperators = [
    {dateOfSave: '20/12/2010', savedList: ['Оператор 1 ', 'Оператор 2 ', 'Оператор 4'] },
    {dateOfSave: '23/12/2010', savedList: ['Оператор 1 ', 'Оператор 2 ', 'Оператор 4 ', 'Оператор 3'] },
    {dateOfSave: '12/12/2010', savedList: ['Оператор 5 ', 'Оператор 2 ', 'Оператор 4 ', 'Оператор 1 ', 'Оператор 2'] },
    {dateOfSave: '10/11/2010', savedList: ['Оператор 1 ', 'Оператор 2'] }
];



export const experts = [{id: '1', item: 'Оператор 1'}, {id: '2', item: 'Оператор 2'}, {id: '3', item: 'Оператор 3'},{id: '4', item: 'Оператор 4'}, {id: '5', item: 'Оператор 5'}, {id: '6', item: 'Оператор 6'}, {id: '7', item: 'Оператор 7'}];

export const experts2 = ['Оператор 1', 'Оператор 2', 'Оператор 3', 'Оператор 4', 'Оператор 5', 'Оператор 6', 'Оператор 7', 'Оператор 8', 'Оператор 9', 'Оператор 10', 'Оператор 11', 'Оператор 12', 'Оператор 13'];


export const categories = [
    {label: 'A', value: 'A'},
    {label: 'B', value: 'B'},
    {label: 'C', value: 'C'},
    {label: 'D', value: 'D'},
    {label: 'E', value: 'E'}
];

@connect(mapStateToProps, mapDispatchToProps)
export class ChainManagement extends Component {

    static propTypes = {
        setPrice: Type.func,
        setStamp: Type.func
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
                        <div className="content-section implementation">
                            <div className="p-grid">
                                <div className="p-col-12 p-md-6">
                                    <h1>Управление цепями</h1>
                                    <OrderList value={this.props.newstation}
                                               dragdrop={true}
                                               responsive={true}
                                               header="Список станций"
                                               style={{height: '20em', width: '20em'}}
                                               listStyle={{height: '20em', width: '30em'}}
                                               onChange={(e) => this.props.setList({value: e.value})}/>


                                    <br/>
                                    <br/>
                                    <Button style={{height: '40px', width: '30em', left: '60px', backgroundColor: '#39b6cd'}} label="Сохранить" type='submit'
                                            onClick={this.props.getCard}/>
                                </div>

                                <div className="p-md-6">
                                    <h1> Сохраненные списки операторов</h1>
                                    <DataTable value={savedOperators} paginator={true} rows={10} rowsPerPageOptions={[5, 10, 20]} editable={true}>
                                        <Column field="dateOfSave" header="Дата сохранения" sortable={true} filter={true} filterMatchMode="contains" editor={this.shortOrgNameEditor}/>
                                        <Column field="savedList" header="Сохраненный список" sortable={true} filter={true} filterMatchMode="contains" editor={this.fullOrgNameEditor}/>
                                        <Column header="Действие" body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
                                    </DataTable>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}