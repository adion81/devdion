import React, { Component } from 'react';

export default class Modal extends Component {
    render() {
        const { message, resetGame } = this.props;
        return (
            <div className={message === '' ? 'visable modal' : 'modal'}>
                <h2>
                    {message}
                </h2>
                <button onClick={resetGame}>PLAY AGAIN</button>

            </div>
        );
    }
}