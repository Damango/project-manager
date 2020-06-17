import React from 'react';
import { useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2'
import "./FinanceTool.css";
import Transaction from "./Transaction/Transaction"
import { useSpring, animated } from 'react-spring'

const FinanceTool = (props) => {


    const animateFinance = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 200 } })
    const [transactionData, setTransactionData] = useState(props.financeData.transactionHistory);
    const [totalBalance, setTotalBalance] = useState(props.financeData.totalBalance);
    const [chartNumbers, setChartNumbers] = useState([1200, 2099, 1450, 1920, 2600, totalBalance]);

    const [chartState, setChartState] = useState({
        labels: ['1-25-20', '2-25-20', '3-25-20', '4-26-20', '5-24-20', '6-12-20'],
        datasets: [{
            label: 'Total Balance $',
            data: chartNumbers,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ],
            backgroundColor: "#3498db",
            borderWidth: 5
        }]
    })

    function calculatePayments() {
        let income = 0;
        let expenses = 0;
        let i;

        for (i = 0; i < props.financeData.repeatedPayments.length; i++) {
            if (props.financeData.repeatedPayments[i].income === true) {
                income += Math.floor(props.financeData.repeatedPayments[i].amount);

            }

            else if (props.financeData.repeatedPayments[i].income === false) {
                expenses += Math.floor(props.financeData.repeatedPayments[i].amount)
            }


        }
        return (<div className="income-expense-container">
            <div className="income-container">
                <div className="income-title">Income</div>
                <div className="income-amount">${income}</div>
            </div>
            <div className="expense-container">
                <div className="expense-title">Expenses</div>
                <div className="expense-amount">${expenses}</div>
            </div>
        </div>)
    }

    function depositMoney() {

        let dates = new Date();
        let day = dates.getDate();
        let month = dates.getMonth() + 1;

        let data = JSON.parse(localStorage.getItem('projects'));
        let i;

        for (i = 0; i < data.length; i++) {
            if (data[i].projectID === props.projectID) {
                data[i].financeInformation.totalBalance = totalBalance + 200;
                localStorage.setItem('projects', JSON.stringify(data));
                setTotalBalance(totalBalance + 200);
                setChartNumbers([1200, 2099, 1450, 1920, 2600, totalBalance])
                setChartState({
                    labels: ['1-25-20', '2-25-20', '3-25-20', '4-26-20', '5-24-20', '6-12-20'],
                    datasets: [{
                        label: 'Total Balance $',
                        data: [1200, 2099, 1450, 1920, 2600, totalBalance + 200],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 206, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(153, 102, 255)',
                            'rgb(255, 159, 64)'
                        ],
                        backgroundColor: "#3498db",
                        borderWidth: 5
                    }]
                })
                let newTransaction;
                newTransaction = {
                    title: "Deposit",
                    amount: 200,
                    date: month + "-" + day,
                    income: true
                }
                data[i].financeInformation.transactionHistory.unshift(newTransaction);
                setTransactionData(data[i].financeInformation.transactionHistory);
                localStorage.setItem('projects', JSON.stringify(data));
                props.update(props.updateData + 1);


            }
        }
    }
    function withdrawMoney() {

        let dates = new Date();
        let day = dates.getDate();
        let month = dates.getMonth() + 1;



        let data = JSON.parse(localStorage.getItem('projects'));
        let i;
        for (i = 0; i < data.length; i++) {
            if (data[i].projectID === props.projectID) {
                data[i].financeInformation.totalBalance = totalBalance - 200;
                setTotalBalance(totalBalance - 200);
                setChartNumbers([1200, 2099, 1450, 1920, 2600, totalBalance])
                setChartState({
                    labels: ['1-25-20', '2-25-20', '3-25-20', '4-26-20', '5-24-20', '6-12-20'],
                    datasets: [{
                        label: 'Total Balance $',
                        data: [1200, 2099, 1450, 1920, 2600, totalBalance - 200],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 206, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(153, 102, 255)',
                            'rgb(255, 159, 64)'
                        ],
                        backgroundColor: "#3498db",
                        borderWidth: 5
                    }]
                })
                let newTransaction;
                newTransaction = {
                    title: "Withdraw",
                    amount: 200,
                    date: month + "-" + day,
                    income: false
                }
                data[i].financeInformation.transactionHistory.unshift(newTransaction);
                setTransactionData(data[i].financeInformation.transactionHistory);
                localStorage.setItem('projects', JSON.stringify(data));
                props.update(props.updateData + 1);


            }
        }
    }




    return (<animated.div style={animateFinance} className="finance-container">
        <div className="project-title">{props.projectTitle} - Finances</div>
        <div className="finance-information-container">

            <div className="balance-details">
                <div className="finance-information-settings-button">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <div className="balance-title">Balance Details</div>
                <div className="total-balance-container">
                    <div className="total-balance-heading">Total Balance</div>
                    <div className="total-balance-amount">${totalBalance}</div>
                </div>
                {calculatePayments()}
                <div className="balance-buttons-container">
                    <button className="deposit-button" onClick={depositMoney}>Deposit</button>
                    <button className="withdraw-button" onClick={withdrawMoney}>Withdraw</button>
                </div>
            </div>
        </div>
        <div className="finance-chart-container">
            <Line data={chartState} options={{ maintainAspectRatio: false }} />
        </div>
        <div className="finance-transactions-container">
            <div className="finance-title">Transaction History</div>
            {transactionData.map((data) => <Transaction title={data.title} amount={data.amount} income={data.income} date={data.date} key={Math.floor(Math.random() * 50000)} />)}
        </div>

    </animated.div>);
}

export default FinanceTool;