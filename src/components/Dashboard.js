
import React, { Component } from 'react';
import {CarService} from '../service/CarService';
import {Panel} from 'primereact/panel';
import {Checkbox} from 'primereact/checkbox';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import {Chart} from 'primereact/chart';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Schedule} from 'primereact/schedule';
import {ProgressSpinner} from 'primereact/progressspinner';

export class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            tasks: [],
            city: null,
            selectedCar: null,
            lineData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Колличество созданных ДК',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderColor: '#000000',
                        backgroundColor: '#78c3cc'
                    }
                ]
            }
        };

        this.onTaskChange = this.onTaskChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.carservice = new CarService();
    }

    onTaskChange(e) {
        let selectedTasks = [...this.state.tasks];
        if(e.checked)
            selectedTasks.push(e.value);
        else
            selectedTasks.splice(selectedTasks.indexOf(e.value), 1);

        this.setState({tasks: selectedTasks});
    }

    onCityChange(e) {
        this.setState({city: e.value});
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        let cities = [
            {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
            {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
            {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
            {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
            {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
        ];

        let scheduleHeader = {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		};

        let events = [
			{
				"id": 1,
				"title": "All Day Event",
				"start": "2017-02-01"
			},
			{
				"id": 2,
				"title": "Long Event",
				"start": "2017-02-07",
				"end": "2017-02-10"
			},
			{
				"id": 3,
				"title": "Repeating Event",
				"start": "2017-02-09T16:00:00"
			},
			{
				"id": 4,
				"title": "Repeating Event",
				"start": "2017-02-16T16:00:00"
			},
			{
				"id": 5,
				"title": "Conference",
				"start": "2017-02-11",
				"end": "2017-02-13"
			},
			{
				"id": 6,
				"title": "Meeting",
				"start": "2017-02-12T10:30:00",
				"end": "2017-02-12T12:30:00"
			},
			{
				"id": 7,
				"title": "Lunch",
				"start": "2017-02-12T12:00:00"
			},
			{
				"id": 8,
				"title": "Meeting",
				"start": "2017-02-12T14:30:00"
			},
			{
				"id": 9,
				"title": "Happy Hour",
				"start": "2017-02-12T17:30:00"
			},
			{
				"id": 10,
				"title": "Dinner",
				"start": "2017-02-12T20:00:00"
			},
			{
				"id": 11,
				"title": "Birthday Party",
				"start": "2017-02-13T07:00:00"
			},
			{
				"id": 12,
				"title": "Click for Google",
				"url": "http://google.com/",
				"start": "2017-02-28"
			}
        ];
        
        return (
            <div className="p-grid p-fluid dashboard">

                <div className="p-col-12 p-lg-6">
                    <div className="highlight-box">
                        <div className="initials" style={{backgroundColor: 'rgb(0, 123, 229)', color: 'rgb(0, 68, 143)'}}>
                            <span>Бонусы</span>
                        </div>
                        <div className="highlight-details ">

                            <span>За создание карт</span>
                            <span className="count">523</span>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-lg-6">
                    <div className="highlight-box">
                        <div className="initials" style={{backgroundColor: 'rgb(0, 123, 229)', color: 'rgb(0, 68, 143)'}}>
                            <span>Бонусы</span>
                        </div>
                        <div className="highlight-details ">

                            <span>За запись на ТО</span>
                            <span className="count">122</span>
                        </div>
                    </div>
                </div>

                <br/>

                <div className="p-col-12 p-lg-4">
                    <div className="card summary">
                        <span className="title">Еще что то</span>
                        <span className="detail">За месяц</span>
                        <span className="count visitors">12</span>
                    </div>
                </div>
                <div className="p-col-12 p-lg-4">
                    <div className="card summary">
                        <span className="title">Колличество ДК</span>
                        <span className="detail">За месяц</span>
                        <span className="count purchases">534</span>
                    </div>
                </div>
                <div className="p-col-12 p-lg-4">
                    <div className="card summary">
                        <span className="title">Сумма созданных ДК</span>
                        <span className="detail">За месяц</span>
                        <span className="count revenue">$3,200</span>
                    </div>
                </div>


                <div className="p-col-12 p-md-6 p-lg-4">
                    <Panel header="Tasks" style={{height: '100%'}}>
                        <ul className='task-list'>
                            <li>
                                <Checkbox value="task1" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task1') > -1 ? true : false}/>
                                <span className="task-name">Sales Reports</span>
                                <Button icon="pi pi-check"/>
                            </li>
                            <li>
                                <Checkbox value="task2" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task2') > -1 ? true : false}/>
                                <span className="task-name">Pay Invoices</span>
                                <Button icon="pi pi-check"/>
                            </li>
                            <li>
                                <Checkbox value="task3" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task3') > -1 ? true : false}/>
                                <span className="task-name">Dinner with Tony</span>
                                <Button icon="pi pi-check"/>
                            </li>
                            <li>
                                <Checkbox value="task4" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task4') > -1 ? true : false}/>
                                <span className="task-name">Client Meeting</span>
                                <Button icon="pi pi-check"/>
                            </li>
                            <li>
                                <Checkbox value="task5" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task5') > -1 ? true : false}/>
                                <span className="task-name">New Theme</span>
                                <Button icon="pi pi-check"/>
                            </li>
                            <li>
                                <Checkbox value="task6" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task6') > -1 ? true : false}/>
                                <span className="task-name">Flight Ticket</span>
                                <Button icon="pi pi-check"/>
                            </li>
                        </ul>
                    </Panel>
                </div>
                <div className="p-col-12 p-md-6 p-lg-4 p-fluid contact-form">
                    <Panel header="Связаться с нами">
                        <div className="p-grid">
                            <div className="p-col-12">
                                <InputText type="text" placeholder="Имя" />
                            </div>
                            <div className="p-col-12">
                                <InputText type="text" placeholder="Фамилия" />
                            </div>
                            <div className="p-col-12">
                                <InputText type="text" placeholder="Сообщение" />
                            </div>
                            <div className="p-col-12">
                                <Button type="button" label="Отправить" icon="fa-send"/>
                            </div>
                        </div>
                    </Panel>
                </div>

                <div className="p-col-12 p-lg-4 contacts">
                    <Panel header="Контакты">
                        <ul>
                            <li>
                                <a>
                                    <img src="assets/layout/images/avatar_1.png" width="35" alt="avatar1"/>
                                    <span className="name">Марина Очькина</span>
                                    <span className="email">909-667-45-13</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="assets/layout/images/avatar_2.png" width="35" alt="avatar2"/>
                                    <span className="name">Семен Булкин</span>
                                    <span className="email">jason@pf-sigma.com</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="assets/layout/images/avatar_3.png" width="35" alt="avatar3"/>
                                    <span className="name">Оксана Пенькина</span>
                                    <span className="email">jane@pf-sigma.com</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="assets/layout/images/avatar_4.png" width="35" alt="avatar4"/>
                                    <span className="name">Егор Кункин</span>
                                    <span className="email">962-54-22-12</span>
                                </a>
                            </li>
                        </ul>
                    </Panel>
                </div>
                <div className="p-col-12 p-lg-6">
                    <div className="card">
                        <h1 style={{fontSize:'16px'}}>Recent Sales</h1>
                        <DataTable value={this.state.cars}  style={{marginBottom: '20px'}} responsive={true}
                                selectionMode="single" selection={this.state.selectedCar} onSelectionChange={(e) => this.setState({selectedCar: e.data})}>
                            <Column field="vin" header="Vin" sortable={true} />
                            <Column field="year" header="Year" sortable={true} />
                            <Column field="brand" header="Brand" sortable={true} />
                            <Column field="color" header="Color" sortable={true} />
                        </DataTable>
                    </div>
                </div>
                <div className="p-col-12 p-lg-6">
                    <div className="card">
                        <Chart type="bar" data={this.state.lineData}/>
                    </div>
                </div>
                <div className="p-col-12 p-lg-8">
                    <Panel header="Календарь" style={{height: '100%'}}>
                        <Schedule events={events} header={scheduleHeader} defaultDate="2017-02-01" eventLimit={4}/>
                    </Panel>
                </div>
                <ProgressSpinner/>
            </div>
        );
    }
}