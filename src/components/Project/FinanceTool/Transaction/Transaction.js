import React from 'react';
import "./Transaction.css"
import { animated, useSpring } from 'react-spring'

const Transaction = (props) => {

    const animateTransaction = useSpring({ from: { opacity: 0, left: -20 }, to: { opacity: 1, left: 0 }, config: { duration: 200 } })

    function transactionType() {
        if (props.income === true) {
            return "transaction-bar bar-positive"
        }
        else {
            return "transaction-bar bar-negative"
        }
    }




    return (<animated.div className="transaction-container">
        <div className={transactionType()}></div>
        <div className="transaction-title">{props.title}</div>
        <div className="transaction-date">{props.date}</div>
        <div className="transaction-amount">${props.amount}</div>


    </animated.div>);
}

export default Transaction;

