import React, {Component} from 'react';
import {connect} from "react-redux";
import "./order-blanks.css"
import bindActionCreators from "redux/src/bindActionCreators";


function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

function mapStateToProps(state) {
    return {};
}

@connect(mapStateToProps, mapDispatchToProps)
export class OrderBlanks extends Component {

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
                        <p>Заказ бланков</p>
                    </div>
                </div>
            </div>
        );
    }
}
