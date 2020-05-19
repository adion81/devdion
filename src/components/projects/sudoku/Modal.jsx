import React, { Component } from 'react';

export default class Modal extends Component {
    render() {
        const { message, resetGame } = this.props;
        return (
            <div className={message === '' ? 'visable modal xsm:w-4/4 xsm:mx-auto md:w-2/4' : 'modal xsm:w-4/4 xsm:mx-auto md:w-2/4'}>
                <h2>
                    {message}
                </h2>
                <button onClick={resetGame}>PLAY AGAIN</button>

            </div>
        );
    }
}