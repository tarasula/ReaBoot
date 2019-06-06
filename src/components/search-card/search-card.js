import React, {Component} from 'react';
import {connect} from "react-redux";
import "./search-card.css"
import bindActionCreators from "redux/src/bindActionCreators";
import {InputMask} from "primereact/components/inputmask/InputMask";
import {Button} from "primereact/components/button/Button";
import {getCard} from "../../actions/serach-card/search-card-action";
import Type from "prop-types";
import {Card} from 'primereact/card';


function mapDispatchToProps(dispatch) {
    return bindActionCreators({getCard}, dispatch);
}

function mapStateToProps(state) {
    return {
        // message: state.message,
        // users: state.users,
        // email: state.email
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export class SearchCard extends Component {

    static propTypes = {
        getCard: Type.func
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
                            <h1 style={{fontSize: '20px'}}>Поиск диагностических карт</h1>


                        <br/>
                        <div className="p-float-label">
                            <InputMask mask="a999aa999" required={true} maxLength="9" id="registerId" value={this.props.registerId} validateOnly={true}/>
                            <label htmlFor="registerId">VIN номер автомобиля</label>
                        </div>
                        <br/>
                        <div className="p-float-label">
                            <InputMask mask="a999aa999" required={true} maxLength="9" id="registerId" value={this.props.registerId} validateOnly={true}/>
                            <label htmlFor="registerId">Регистрационный знак автомобиля</label>
                        </div>

                        <br/>
                        <div className="p-float-label">
                            <InputMask mask="a999aa999" required={true} maxLength="9" id="registerId" value={this.props.registerId} validateOnly={true} />
                            <label htmlFor="registerId">Номер кузова</label>
                        </div>

                        <br/>
                        <div className="p-float-label">
                            <InputMask mask="a999aa999" required={true} maxLength="9" id="registerId" value={this.props.registerId} validateOnly={true} />
                            <label htmlFor="registerId">Номер рамы</label>
                        </div>

                        <br/>
                        <div className="p-float-label">
                            <InputMask mask="a999aa999" required={true} maxLength="9" id="registerId" value={this.props.registerId} validateOnly={true} />
                            <label htmlFor="registerId">Номер Диагностической карты</label>
                        </div>

                        <br/>
                        <div className="p-float-label">
                            <Button style={{height: '50px', backgroundColor: '#39b6cd'}} label="Проверить" type='submit' onClick={this.props.getCard}/>
                        </div>
                    </div>

                    <div className="searchCard">
                        <Card title="Title" subTitle="SubTitle">
                            Можно использовать компонент Accordion
                        </Card>
                        <br/>
                        <Card title="Title" subTitle="SubTitle">
                            Content
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}