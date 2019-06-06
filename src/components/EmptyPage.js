import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {increment} from '../actions/test-action';
import {connect} from 'react-redux';
import bindActionCreators from "redux/src/bindActionCreators";
import Type from 'prop-types';


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        increment
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        message: state.message,
        inc: state.inc
    };
}
@connect(mapStateToProps, mapDispatchToProps)
export class EmptyPage extends Component {

    static propTypes = {
        increment: Type.func.isRequired,
    };

    // constructor() {
    //     super();
    //     // this.state = {
    //     //     persons: null
    //     // };
    // }

    componentDidMount() {
        console.log('Hello from componentDidMount');
       increment();
    }


    render() {
        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <h1>Поиск по номеру VIN</h1>
                        <br/>
                        <span className="p-float-label">
                            <InputText id="float-input" type="text" size="30" />
                            <label htmlFor="float-input">VIN номер</label>
                        </span>
                        <br/>
                        <span className="test-button">
                           <Button label="Click" onClick={this.props.increment} />
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}


