import React, {Component} from 'react';
import bindActionCreators from "redux/src/bindActionCreators";
import {connect} from "react-redux";
import {DataTable} from "primereact/components/datatable/DataTable";
import {Column} from "primereact/components/column/Column";
import {Button} from "primereact/components/button/Button";


export const cars = [
    {creator: 'Семен Семенов', fio: 'Семен Семенов Слепень', cardCreatedDate: '12/02/2011', cardNumber: "001", category: "A", model: "BMW", regNumber: "1324", action: "exel, pfd, word", status: "Done"},
    {creator: 'Семен Семенов', fio: 'Семен Семенов Слепень', cardCreatedDate: '12/03/2015', cardNumber: "002", category: "A", model: "Mercedes", regNumber: "1234", action: "exel, pfd, word", status: "Done"},
    {creator: 'Семен Семенов', fio: 'Семен Семенов Слепень', cardCreatedDate: '22/02/2010', cardNumber: "003", category: "A", model: "Opel", regNumber: "1234", action: "exel, pfd, word", status: "Done"},
    {creator: 'Семен Семенов', fio: 'Семен Семенов Слепень', cardCreatedDate: '21/02/2000', cardNumber: "004", category: "A", model: "Mercedes", regNumber: "1234", action: "exel, pfd, word", status: "Done"},
    {creator: 'Семен Семенов', fio: 'Семен Семенов Слепень', cardCreatedDate: '12/12/2013', cardNumber: "005", category: "A", model: "Opel", regNumber: "1234", action: "exel, pfd, word", status: "In work"},
    {creator: 'Семен Семенов', fio: 'Семен Семенов Слепень', cardCreatedDate: '15/05/2001', cardNumber: "006", category: "A", model: "Opel", regNumber: "4567", action: "exel, pfd, word", status: "In work"},
    {creator: 'Семен Семенов', fio: 'Семен Семенов Слепень', cardCreatedDate: '03/05/2017', cardNumber: "007", category: "A", model: "Opel", regNumber: "4567", action: "exel, pfd, word", status: "In work"},
    {creator: 'Семен Семенов', fio: 'Семен Семенов Слепень', cardCreatedDate: '12/02/2011', cardNumber: "008", category: "A", model: "Opel", regNumber: "2345", action: "exel, pfd, word", status: "In work"},
    {creator: 'Василий Пупкин', fio: 'Семен Семенов Слепень', cardCreatedDate: '12/02/2011', cardNumber: "009", category: "B", model: "BMW", regNumber: "3546", action: "exel, pfd, word", status: "In work"},
    {creator: 'Василий Пупкин', fio: 'Василий Пупкин Пипкка', cardCreatedDate: '12/02/2011', cardNumber: "010", category: "B", model: "Opel", regNumber: "3456", action: "exel, pfd, word", status: "In work"},
    {creator: 'Василий Пупкин', fio: 'Василий Пупкин Пипкка', cardCreatedDate: '12/02/2011', cardNumber: "011", category: "B", model: "BMW", regNumber: "3456", action: "exel, pfd, word", status: "Deslined"},
    {creator: 'Василий Пупкин', fio: 'Василий Пупкин Пипкка', cardCreatedDate: '12/02/2011', cardNumber: "012", category: "B", model: "Mercedes", regNumber: "56785", action: "exel, pfd, word", status: "Done"},
    {creator: 'Василий Пупкин', fio: 'Василий Пупкин Пипкка', cardCreatedDate: '12/02/2011', cardNumber: "013", category: "B", model: "Cadilac", regNumber: "5678", action: "exel, pfd, word", status: "Done"},
    {creator: 'Василий Пупкин', fio: 'Василий Пупкин Пипкка', cardCreatedDate: '12/02/2011', cardNumber: "014", category: "C", model: "Cadilac", regNumber: "5678", action: "exel, pfd, word", status: "Done"},
    {creator: 'Василий Пупкин', fio: 'Василий Пупкин Пипкка', cardCreatedDate: '12/02/2011', cardNumber: "015", category: "C", model: "BMW", regNumber: "5678", action: "exel, pfd, word", status: "Done"},
    {creator: 'Василий Пупкин', fio: 'Василий Пупкин Пипкка', cardCreatedDate: '12/02/2011', cardNumber: "016", category: "C", model: "Mercedes", regNumber: "5678", action: "exel, pfd, word", status: "Done"},
    {creator: 'Василий Пупкин', fio: 'Василий Пупкин Пипкка', cardCreatedDate: '12/02/2011', cardNumber: "017", category: "AE", model: "Mercedes", regNumber: "5678", action: "exel, pfd, word", status: "Done"},
    {creator: 'Евгений Кулик', fio: 'Василий Пупкин Пипкка', cardCreatedDate: '12/02/2011', cardNumber: "018", category: "BE", model: "VW", regNumber: "5678", action: "exel, pfd, word", status: "Done"},
    {creator: 'Евгений Кулик', fio: 'Чукча Евгений Кулик', cardCreatedDate: '12/02/2011', cardNumber: "019", category: "BE", model: "BMW", regNumber: "5678", action: "exel, pfd, word", status: "Done"},
    {creator: 'Евгений Кулик', fio: 'Чукча Евгений Кулик', cardCreatedDate: '12/02/2011', cardNumber: "020", category: "BE", model: "VW", regNumber: "5678", action: "exel, pfd, word", status: "Done"},
    {creator: 'Евгений Кулик', fio: 'Чукча Евгений Кулик', cardCreatedDate: '12/02/2011', cardNumber: "021", category: "C", model: "Mercedes", regNumber: "3456", action: "exel, pfd, word", status: "Done"},
    {creator: 'Евгений Кулик', fio: 'Чукча Евгений Кулик', cardCreatedDate: '12/02/2011', cardNumber: "022", category: "C", model: "VW", regNumber: "986785463", action: "exel, pfd, word", status: "Deslined"},
    {creator: 'Евгений Кулик', fio: 'Чукча Евгений Кулик', cardCreatedDate: '12/02/2011', cardNumber: "023", category: "D", model: "Mercedes", regNumber: "34563456", action: "exel, pfd, word", status: "Deslined"},
    {creator: 'Евгений Кулик', fio: 'Чукча Евгений Кулик', cardCreatedDate: '12/02/2011', cardNumber: "024", category: "D", model: "VW", regNumber: "356356", action: "exel, pfd, word", status: "Deslined"},
    {creator: 'Евгений Кулик', fio: 'Чукча Евгений Кулик', cardCreatedDate: '12/02/2011', cardNumber: "025", category: "D", model: "BMW", regNumber: "3674567", action: "exel, pfd, word", status: "Done"},
    {creator: 'Евгений Кулик', fio: 'Чукча Евгений Кулик', cardCreatedDate: '12/02/2011', cardNumber: "026", category: "D", model: "Mercedes", regNumber: "45674567", action: "exel, pfd, word", status: "Done"},
    {creator: 'Евгений Кулик', fio: 'Чукча Евгений Кулик', cardCreatedDate: '12/02/2011', cardNumber: "027", category: "D", model: "Fiat", regNumber: "35463456", action: "exel, pfd, word", status: "Done"},
    {creator: 'Евгений Кулик', fio: 'Чукча Евгений Кулик', cardCreatedDate: '12/02/2011', cardNumber: "028", category: "B", model: "BMW", regNumber: "23454235", action: "exel, pfd, word", status: "Done"},
    {creator: 'Никита Джигурда', fio: 'Деревня Никита Агрибаевич', cardCreatedDate: '12/02/2011', cardNumber: "029", category: "B", model: "Mercedes", regNumber: "54634565", action: "exel, pfd, word", status: "Done"},
    {creator: 'Никита Джигурда', fio: 'Деревня Никита Агрибаевич', cardCreatedDate: '12/02/2016', cardNumber: "030", category: "B", model: "BMW", regNumber: "34563456", action: "exel, pfd, word", status: "Deslined"},
    {creator: 'Никита Джигурда', fio: 'Деревня Никита Агрибаевич', cardCreatedDate: '12/06/2011', cardNumber: "031", category: "B", model: "VW", regNumber: "46574567", action: "exel, pfd, word", status: "Deslined"},
    {creator: 'Никита Джигурда', fio: 'Деревня Никита Агрибаевич', cardCreatedDate: '16/02/2011', cardNumber: "032", category: "B", model: "VW", regNumber: "46576", action: "exel, pfd, word", status: "Done"},
    {creator: 'Никита Джигурда', fio: 'Деревня Никита Агрибаевич', cardCreatedDate: '16/02/2011', cardNumber: "033", category: "BE", model: "Mercedes", regNumber: "456745656", action: "exel, pfd, word", status: "Deslined"},
    {creator: 'Никита Джигурда', fio: 'Деревня Никита Агрибаевич', cardCreatedDate: '12/02/2011', cardNumber: "034", category: "BE", model: "BMW", regNumber: "456745675", action: "exel, pfd, word", status: "Deslined"},
    {creator: 'Никита Джигурда', fio: 'Деревня Никита Агрибаевич', cardCreatedDate: '12/07/2011', cardNumber: "035", category: "BE", model: "VW", regNumber: "78467846", action: "exel, pfd, word", status: "Deslined"},
    {creator: 'Никита Джигурда', fio: 'Деревня Никита Агрибаевич', cardCreatedDate: '12/02/2011', cardNumber: "036", category: "DE", model: "Cadilac", regNumber: "34563456", action: "exel, pfd, word", status: "Deslined"},
    {creator: 'Никита Джигурда', fio: 'Деревня Никита Агрибаевич', cardCreatedDate: '17/02/2011', cardNumber: "037", category: "DE", model: "BMW", regNumber: "35674567", action: "exel, pfd, word", status: "Deslined"},
    {creator: 'Никита Джигурда', fio: 'Деревня Никита Агрибаевич', cardCreatedDate: '12/02/2011', cardNumber: "038", category: "AE", model: "Cadilac", regNumber: "2435234524", action: "exel, pfd, word", status: "Done"},
    {creator: 'Никита Джигурда', fio: 'Деревня Никита Агрибаевич', cardCreatedDate: '12/06/2011', cardNumber: "039", category: "AE", model: "Cadilac", regNumber: "545674567", action: "exel, pfd, word", status: "Done"},
    {creator: 'Никита Джигурда', fio: 'Деревня Никита Агрибаевич', cardCreatedDate: '12/02/2016', cardNumber: "040", category: "A", model: "BMW", regNumber: "34563456", action: "exel, pfd, word", status: "Done"},
    {creator: 'Кутаб Зеленый', fio: 'Масляков Кутаб Зеленый', cardCreatedDate: '12/08/2013', cardNumber: "041", category: "A", model: "Mercedes", regNumber: "45674567", action: "exel, pfd, word", status: "Done"},
    {creator: 'Кутаб Зеленый', fio: 'Масляков Кутаб Зеленый', cardCreatedDate: '12/02/2015', cardNumber: "042", category: "A", model: "BMW", regNumber: "45674567", action: "exel, pfd, word", status: "Done"},
    {creator: 'Кутаб Зеленый', fio: 'Масляков Кутаб Зеленый', cardCreatedDate: '12/02/2015', cardNumber: "043", category: "A", model: "Fiat", regNumber: "3546743", action: "exel, pfd, word", status: "Done"},
    {creator: 'Кутаб Зеленый', fio: 'Масляков Кутаб Зеленый', cardCreatedDate: '12/03/2012', cardNumber: "044", category: "B", model: "Mercedes", regNumber: "34563456", action: "exel, pfd, word", status: "Done"},
    {creator: 'Кутаб Зеленый', fio: 'Масляков Кутаб Зеленый', cardCreatedDate: '15/11/2015', cardNumber: "045", category: "C", model: "Jaguar", regNumber: "345634563", action: "exel, pfd, word", status: "Done"},
    {creator: 'Кутаб Зеленый', fio: 'Масляков Кутаб Зеленый', cardCreatedDate: '12/10/2011', cardNumber: "046", category: "D", model: "Mercedes", regNumber: "456345", action: "exel, pfd, word", status: "Done"},
    {creator: 'Кутаб Зеленый', fio: 'Масляков Кутаб Зеленый', cardCreatedDate: '09/02/2011', cardNumber: "047", category: "B", model: "Fiat", regNumber: "3456345", action: "exel, pfd, word", status: "Done"},
    {creator: 'Кутаб Зеленый', fio: 'Масляков Кутаб Зеленый', cardCreatedDate: '09/07/2009', cardNumber: "048", category: "B", model: "BMW", regNumber: "345634563", action: "exel, pfd, word", status: "Done"},
    {creator: 'Кутаб Зеленый', fio: 'Масляков Кутаб Зеленый', cardCreatedDate: '08/08/2008', cardNumber: "049", category: "B", model: "Fiat", regNumber: "345635", action: "exel, pfd, word", status: ""},
    {creator: 'Семен Виноградов', fio: 'Ерунда Семен Виноградов', cardCreatedDate: '10/02/2011', cardNumber: "050", category: "B", model: "Fiat", regNumber: "345637456", action: "exel, pfd, word", status: ""},
    {creator: 'Семен Виноградов', fio: 'Ерунда Семен Виноградов', cardCreatedDate: '14/02/2016', cardNumber: "051", category: "B", model: "BMW", regNumber: "56785678", action: "exel, pfd, word", status: ""},
    {creator: 'Семен Виноградов', fio: 'Ерунда Семен Виноградов', cardCreatedDate: '12/02/2018', cardNumber: "052", category: "B", model: "Mercedes", regNumber: "345634", action: "exel, pfd, word", status: ""},
    {creator: 'Семен Виноградов', fio: 'Ерунда Семен Виноградов', cardCreatedDate: '18/05/2019', cardNumber: "053", category: "B", model: "BMW", regNumber: "4567845674", action: "exel, pfd, word", status: ""},
    {creator: 'Семен Виноградов', fio: 'Ерунда Семен Виноградов', cardCreatedDate: '17/06/2011', cardNumber: "054", category: "B", model: "Fiat", regNumber: "3456354", action: "exel, pfd, word", status: ""},
    {creator: 'Семен Виноградов', fio: 'Ерунда Семен Виноградов', cardCreatedDate: '14/04/2011', cardNumber: "055", category: "B", model: "Fiat", regNumber: "34563546", action: "exel, pfd, word", status: ""},
    {creator: 'Семен Виноградов', fio: 'Ерунда Семен Виноградов', cardCreatedDate: '12/12/2011', cardNumber: "056", category: "B", model: "BMW", regNumber: "46574657", action: "exel, pfd, word", status: ""}

];


// let colorFilter = <MultiSelect style={{width:'100%'}}
//                                value={this.state.colors} options={colors} onChange={this.onColorChange}/>


function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

function mapStateToProps(state) {
    return {


    };
}

@connect(mapStateToProps, mapDispatchToProps)
export class CardList extends Component {

    static propTypes = {

    };

    componentDidMount() {

    }

    componentWillMount(){

    }

    actionTemplate = (rowData, column) => { //Подумать как сделать onChange на каждую строку в DataTable - этот метод добавляет кнопки в последний столбец для всех строк
        return <div>
                <Button type="button" icon="pi pi-star" className="p-button-warning"/>
                <Button type="button" icon="pi pi-download" className="p-button-warning" style={{left: '4px'}}/>
            </div>;
    };

    render() {
        return (
            <div className="p-grid p-fluid">
                <div className="p-lg-12 p-lg-6">
                    <div className="card">
                        <h1 style={{fontSize: '20px'}}>Список диагностических карт:</h1>
                        <br/>
                        <DataTable value={cars} paginator={true} rows={10} rowsPerPageOptions={[5, 10, 20]}>
                            <Column field="creator" header="Создатель Карты" sortable={true} filter={true} filterMatchMode="contains"/>
                            <Column field="fio" header="ФИО владельца авто" sortable={true} filter={true} filterMatchMode="contains"/>
                            <Column field="cardCreatedDate" header="Дата создания карты" sortable={true} filter={true} filterMatchMode="contains"/>
                            <Column field="cardNumber" header="Номер карты" sortable={true} filter={true} filterMatchMode="contains"/>
                            <Column field="category" header="Категория авто" sortable={true} filter={true} filterMatchMode="contains"/>
                            <Column field="model" header="Модель авто" sortable={true} filter={true} filterMatchMode="contains"/>
                            <Column field="regNumber" header="Регистрационный номер" sortable={true} filter={true} filterMatchMode="contains"/>
                            <Column field="status" header="Статус" sortable={true} filter={true} filterMatchMode="contains"/>
                            <Column header="Действие" body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
                        </DataTable>
                    </div>
                </div>
            </div>
        );}
}