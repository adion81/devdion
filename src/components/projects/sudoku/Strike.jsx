import React, {Component} from 'react';

export default class Strike extends Component {
    createStrikes() {
        return this.props.strikes.map(function (row){
            return <tr>{row.map(function (cell,idx){
                return<td key={idx} >{cell.made === true ? 'X': ''}</td>
            }, this)}</tr>
        }, this)
    };
    render() {
        return (
            <div className="strike-box mx-auto xsm:w-4/4 sm:w-3/4">
                <h2 className="sm:text-2xl">Strikes</h2>
                <table className="strike-table">
                    <tbody>
                        {this.createStrikes()}
                    </tbody>
                </table>

            </div>
        );
    }
}