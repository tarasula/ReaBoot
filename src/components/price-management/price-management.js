import React, {Component} from 'react';
import './price-management.css';
import {connect} from "react-redux";
import bindActionCreators from "redux/src/bindActionCreators";
import {Spinner} from "primereact/components/spinner/Spinner";
import {Button} from "primereact/components/button/Button";

import {DataTable} from "primereact/components/datatable/DataTable";
import {Column} from "primereact/components/column/Column";
import {Dropdown} from "primereact/components/dropdown/Dropdown";


function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

function mapStateToProps(state) {
    return {};
}

export const agents = [
    {label: 'Свинолупов Семеныч Сергеевич', value: 'Свинолупов Семеныч Сергеевич'},
    {label: 'Семенов Семен Петрович', value: 'Семенов Семен Петрович'},
    {label: 'Береста Слепень Пуклавич', value: 'Береста Слепень Пуклавич'},
    {label: 'Букгага Гагабу Иванович', value: 'Букгага Гагабу Иванович'}
];

export const categories = [
    {label: 'A', value: 'A'},
    {label: 'B', value: 'B'},
    {label: 'C', value: 'C'},
    {label: 'D', value: 'D'},
    {label: 'E', value: 'E'}
];

export const agentsDataTable = [
    {dateOfPrice: '12/02/2009', category: 'A', price: '120'},
    {dateOfPrice: '01/12/2015', category: 'C', price: '200'},
    {dateOfPrice: '01/12/2015', category: 'C', price: '200'},
    {dateOfPrice: '01/12/2015', category: 'C', price: '200'},
    {dateOfPrice: '01/12/2015', category: 'C', price: '200'},
    {dateOfPrice: '22/04/2010', category: 'D', price: '60'},
    {dateOfPrice: '22/04/2010', category: 'D', price: '60'},
    {dateOfPrice: '22/04/2010', category: 'D', price: '60'},
    {dateOfPrice: '16/09/2019', category: 'B', price: '10'},

];

@connect(mapStateToProps, mapDispatchToProps)
export class PriceManagement extends Component {

    static propTypes = {
        // updateData: Type.func
    };


    render() {
        return (
            <div className="p-grid p-fluid">
                <div className="card">
                    <div className="p-col-12">
                        <h1 style={{fontSize: '20px'}}>Создайте нового агента</h1>
                        <br/>
                        <div className="p-grid">
                            <div className="p-col-12 p-lg-6">

                                <div className="p-col-12 p-lg-6">
                                    <p>Выберете агента</p>
                                    <Dropdown value={""} options={agents} style={{width: '200px'}}
                                              placeholder="Выберете агента" size="30"/>
                                </div>

                                <div className="p-col-12 p-lg-6">
                                    <p>Категория ТС</p>
                                    <Dropdown value={""} options={categories}
                                              style={{width: '200px'}} placeholder="Категория ТС"/>
                                </div>

                                <div className="p-col-12 p-lg-6">
                                    <p>Цена за карту категории B</p>
                                    <Spinner id="priceB" size={10} step={25}/>
                                </div>
                            </div>

                            <div className="p-col-6">
                                <DataTable value={agentsDataTable} paginator={true} rows={5}
                                           rowsPerPageOptions={[5]}>
                                    <Column field="dateOfPrice" header="Дата" sortable={true} filter={true}/>
                                    <Column field="category" header="Категория" sortable={true} filter={true}
                                            filterMatchMode="contains"/>
                                    <Column field="price" header="Цена" sortable={true} filter={true}
                                            filterMatchMode="contains"/>
                                </DataTable>
                            </div>
                        </div>
                    </div>
                    <div className="p-col-12">
                        <div className="p-col-12 p-lg-6">
                            <Button style={{height: '50px', backgroundColor: '#39b6cd'}} label="Создать"
                                    type='submit' onClick={this.props.getCard}/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}