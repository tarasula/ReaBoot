import React, {Component} from 'react';
import {InputText} from "primereact/components/inputtext/InputText";
import {Button} from "primereact/components/button/Button";
import {Messages} from 'primereact/messages';
import './login.css';
import {Message} from "primereact/components/message/Message";
import {checkLogin, getUsers, postMethod, setLogin, updateData} from "../../actions/login/login-action";
import {connect} from "react-redux";
import bindActionCreators from "redux/src/bindActionCreators";
import Type from 'prop-types';
import {DataTable} from 'primereact/datatable';
import {Column} from "primereact/components/column/Column";


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUsers,
        updateData,
        postMethod,
        checkLogin,
        setLogin
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        message: state.login.message,
        userName: state.login.userName,
        email: state.login.email
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export class Login extends Component {

    static propTypes = {
        getUsers: Type.func,
        updateData: Type.func
    };

    showError = () => {
        this.messages.show({severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
    };

    emailEditor = (props) => {
        return this.inputTextEditor(props, 'email');
    };

    userNameEditor = (props) => {
        return this.inputTextEditor(props, 'username');
    };

    nameEditor = (props) => {
        return this.inputTextEditor(props, 'name');
    };

    inputTextEditor = (props, field) => {
        return <InputText type="text" value={this.props.email} onChange={(e) => this.onEditorValueChange(props, e.target.value)} />;
    };

    onEditorValueChange = (props, value) => {
        let updatedData = props.value;
        updatedData[props.rowIndex][props.field] = value;
        this.props.updateData(updatedData)
    };

    componentDidMount() {
        this.messages.show({severity: 'info',/* summary: 'Info Message',*/ detail: 'Авторизируйтесь!'});
        this.props.getUsers();
    }


    render() {
        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <h1 id="mainHeader">Добро пожаловать в ReaBoot</h1>
                        <br/>
                        <Messages ref={(el) => this.messages = el} />
                        <div className="authMessage">
                            <Message severity="info" text="Авторизируйтесь!"/>
                        </div>

                        <DataTable value={this.props.users} editable={true}>
                            <Column field="name" header="Name" editor={this.nameEditor} style={{height: '3.5em'}}/>
                            <Column field="username" header="User name" editor={this.userNameEditor} style={{height: '3.5em'}}/>
                            <Column field="email" header="Email" editor={this.emailEditor} style={{height: '3.5em'}}/>
                        </DataTable>
                        <br/>
                        <span className="p-float-label">
                            <InputText id="userName" type="text" size="30" onClick={(e) => this.props.setLogin({value: e.value})}/>
                            <label htmlFor="userName">Имя пользователя</label>
                        </span>
                        <br/>
                        <span className="p-float-label">
                            <InputText id="pswrd" type="password" size="30" />
                            <label htmlFor="pswrd">Пароль</label>
                        </span>
                        <br/>
                        <span className=" loginButton">
                           <Button onClick={this.props.checkLogin} label="Вход"/>
                        </span>
                    </div>
                </div>
            </div>
        );
    }

}