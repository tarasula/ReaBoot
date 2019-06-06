import React, {Component} from 'react';
import {connect} from "react-redux";
import "./reports.css"
import bindActionCreators from "redux/src/bindActionCreators";
import {Calendar} from "primereact/components/calendar/Calendar";
import {setReportsDate, setReportsCategory, setReportsAgent, showReports} from "../../actions/reports/reports-action";
import {categories} from "../price-management/price-management";
import {Dropdown} from "primereact/components/dropdown/Dropdown";
import {MultiSelect} from "primereact/components/multiselect/MultiSelect";
import {Button} from "primereact/components/button/Button";
import {DataTable} from "primereact/components/datatable/DataTable";
import {Column} from "primereact/components/column/Column";

export const agents = [
    {label: 'Свинолупов Семеныч Сергеевич', value: 'Свинолупов Семеныч Сергеевич'},
    {label: 'Семенов Семен Петрович', value: 'Семенов Семен Петрович'},
    {label: 'Береста Слепень Пуклавич', value: 'Береста Слепень Пуклавич'},
    {label: 'Букгага Гагабу Иванович', value: 'Букгага Гагабу Иванович'}
];

export const reports = [
    {creationDateDataTable: '12/02/2019', creatorDataTable: 'Свинолупов Семеныч Сергеевич', numberOfCardDataTable: '123', categoryDataTable: 'A', priceDataTable: '100'},
    {creationDateDataTable: '22/05/2019', creatorDataTable: 'Свинолупов Семеныч Сергеевич', numberOfCardDataTable: '321', categoryDataTable: 'B', priceDataTable: '110'},
    {creationDateDataTable: '10/03/2011', creatorDataTable: 'Свинолупов Семеныч Сергеевич', numberOfCardDataTable: '231', categoryDataTable: 'C', priceDataTable: '200'},
    {creationDateDataTable: '06/09/2012', creatorDataTable: 'Свинолупов Семеныч Сергеевич', numberOfCardDataTable: '4444', categoryDataTable: 'D', priceDataTable: '190'},
    {creationDateDataTable: '02/12/2015', creatorDataTable: 'Свинолупов Семеныч Сергеевич', numberOfCardDataTable: '12', categoryDataTable: 'E', priceDataTable: '50'}
];

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setReportsDate,
        setReportsCategory,
        setReportsAgent,
        showReports
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        date: state.global.date,
        reportCategory: state.global.reportCategory,
        reportAgent: state.global.reportAgent,
        showDataTable: state.global.showDataTable
        // dateFrom: state.global.dateFrom,
        // dateUntil: state.global.dateUntil
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export class Reports extends Component {

    static propTypes = {
        // getCard: Type.func
    };


    constructor() {
        super();
        // this.showError = this.showError.bind(this);
    }

    componentDidMount() {

    }


    render() {
        return (
            <div className="p-grid p-fluid">
                <div className="p-col-12">
                    <div className="card">
                        <h1 style={{fontSize: '20px'}}>Отчеты</h1>
                        <div className="p-grid">
                            <br/>
                            <br/>
                            <div className="p-col-12 p-lg-3">
                                <p htmlFor="dateRange">Выберите даты</p>
                                <Calendar id="dateRange" value={this.props.date} onChange={(e) => this.props.setReportsDate({date: e.value})} selectionMode="range" readonlyInput={true}/>
                            </div>

                            <div className="p-col-12 p-lg-3">
                                <p>Выберите ктегорию</p>
                                <MultiSelect value={this.props.reportCategory} options={categories}
                                             style={{width: '300px'}}
                                             placeholder="Категории"
                                             filter={false}
                                             onChange={(e) => this.props.setReportsCategory({category: e.value})}/>
                            </div>


                            <div className="p-col-12 p-lg-3">
                                <p>Выберите агента</p>
                                <MultiSelect value={this.props.reportAgent} options={agents}
                                             style={{width: '300px'}}
                                             placeholder="Агенты"
                                             filter={false}
                                             onChange={(e) => this.props.setReportsAgent({agent: e.value})}/>
                            </div>

                                <div className="p-col-12 p-lg-3">
                                    <Button style={{top: '46px', backgroundColor: '#39b6cd'}} label="Создать" type='submit'
                                            onClick={this.props.showReports}/>
                                </div>

                            {
                                this.props.showDataTable ?
                                <div className="p-col-12">
                                    <div className="card">
                                        <DataTable value={reports} paginator={true} rows={10} rowsPerPageOptions={[5, 10, 20]} editable={true}>
                                            <Column field="creationDateDataTable" header="Дата создания" sortable={true} filter={true} filterMatchMode="contains" editor={this.agentSecondNameEditor}/>
                                            <Column field="creatorDataTable" header="Создатель" sortable={true} filter={true} filterMatchMode="contains" editor={this.agentFirstNameEditor}/>
                                            <Column field="numberOfCardDataTable" header="Номер карты" sortable={true} filter={true} filterMatchMode="contains" editor={this.agentMiddleNameEditor}/>
                                            <Column field="categoryDataTable" header="Категория" sortable={true} filter={true} filterMatchMode="contains" editor={this.agentLoginEditor}/>
                                            <Column field="priceDataTable" header="Цена" sortable={true} filter={true} filterMatchMode="contains" editor={this.agentPasswordEditor}/>
                                            <Column header="Действие" body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
                                        </DataTable>
                                    </div>
                                </div> : null
                            }

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
