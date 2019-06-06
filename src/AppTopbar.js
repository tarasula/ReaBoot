import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';
import PropTypes from 'prop-types';
import {Button} from "primereact/components/button/Button";
import {Dialog} from "primereact/components/dialog/Dialog";
import './App.css';

export class AppTopbar extends Component {

    static defaultProps = {
        onToggleMenu: null,
        openSettings: null
    }

    static propTypes = {
        onToggleMenu: PropTypes.func.isRequired,
        // openSettings: PropTypes.func.isRequired
    }

    openSettings = () => {
        alert('test');
    };

    constructor() {
        super();
        this.state = {
            visibleRight: false,
            visible: false
        };
    }


    onClick = (event) => {
        this.setState({visible: true});
    }

    onHide = (event) => {
        this.setState({visible: false});
    }


    render() {

        const footer = (
            <div>
                <Button label="Сохранить" icon="pi pi-check" onClick={this.onHide} />
                <Button label="Отменить" icon="pi pi-times" onClick={this.onHide} className="p-button-secondary" />
            </div>
        );

        return (
            <div className="layout-topbar clearfix">
                <a className="layout-menu-button" onClick={this.props.onToggleMenu}>
                    <span className="pi pi-bars"/>
                </a>
                <div className="layout-topbar-icons">
                    <span className="layout-topbar-search">
                        <InputText type="text" placeholder="Search" />
                        <span className="layout-topbar-search-icon pi pi-search"/>
                    </span>
                    <a>
                        <span className="layout-topbar-item-text">Events</span>
                        <span className="layout-topbar-icon pi pi-calendar"/>
                        <span className="layout-topbar-badge">5</span>
                    </a>
                    <a onClick={() => this.setState({visible:true})}>
                        <span className="layout-topbar-item-text">Settings</span>
                        <span className="layout-topbar-icon pi pi-cog"/>
                    </a>
                    <a onClick={() => this.setState({visible:true})}>
                        <span className="layout-topbar-item-text">User</span>
                        <span className="layout-topbar-icon pi pi-user"/>
                    </a>
                </div>

                <Dialog style={{height: '20vw', width: '40vw'}} header="Редактировать личные данные" visible={this.state.visible} onHide={this.onHide}>
                    <br/>
                    <div className="p-grid p-fluid">
                        <div className="p-lg-12">
                            <div className="card">

                                <div className="p-grid">
                                    <div className="p-col-6">

                                        <h7 style={{fontSize: '16px'}}>ФИО</h7>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <h7 style={{fontSize: '16px'}}>Email</h7>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <h7 style={{fontSize: '16px'}}>Пароль</h7>
                                    </div>

                                    <div className="p-col-6">
                                        <InputText size="30" maxLength="100" id="fioSettings" className={this.props.carModelError} value={this.props.carModel} placeholder="ФИО"/>
                                        <br/>
                                        <br/>
                                        <InputText size="30" maxLength="100" id="emailSettings" className={this.props.carModelError} value={this.props.carModel} placeholder="Email"/>
                                        <br/>
                                        <br/>
                                        <InputText size="30" maxLength="100" type="password" id="passwordSettings" className={this.props.carModelError} value={this.props.carModel} placeholder="Пароль"/>
                                    </div>
                                </div>

                                <br/>
                                <br/>
                                <div className="p-grid">
                                    <div className="p-col-12">
                                        <Button type="button" onClick={(e) => this.setState({visible: false})} label="Сохранить" className="p-button-success"/>
                                        <br/>
                                        <br/>
                                        <Button type="button" onClick={(e) => this.setState({visible: false})} label="Отменить" className="p-button-secondary"/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>



                </Dialog>



            </div>
        );
    }
}