import React from 'react';
import "./BuildModal.css"

const BuildModal = (props) => {


    function closeModal() {
        { props.closeModal(1) }
    }


    function createProject() {
        let title = document.querySelector('.project-title-input').value;
        let description = document.querySelector('.project-description-input').value;
        let deadline = document.querySelector('.deadline').value;
        let newData;
        let data = JSON.parse(localStorage.getItem('projects'));
        data.push({
            projectTitle: title,
            projectDeadline: deadline,
            projectTeam: ["Justin Kessler"],
            projectDescription: description,
            projectTaskProgress: 70,
            projectID: Math.floor(Math.random() * 100000),
            project_todos: [
            ],
            project_inProgress: [
            ],
            project_stuck: [
            ],
            project_complete: [

            ],
            financeInformation: {
                totalBalance: 0.00,
                income: 0.00,
                expenses: 0.00,
                transactionHistory: [{
                    title: "Netflix",
                    amount: 12.99,
                    income: false,
                    date: '6-20'
                }, {
                    title: "Monday.com",
                    amount: 44.99,
                    date: '6-29',
                    income: false
                }],
                repeatedPayments: [{
                    title: "Hulu+",
                    amount: 12.99,
                    paymentDate: 26,
                    income: false
                }, {
                    title: "Monday.com",
                    amount: 44.99,
                    paymentDate: 12,
                    income: false
                },
                {
                    title: "Microsoft Azure",
                    amount: 450.00,
                    paymentDate: 8,
                    income: false
                },
                {
                    title: "Amazon Prime",
                    amount: 6.99,
                    paymentDate: 19,
                    income: false
                },
                {
                    title: "Boeing",
                    amount: 1299,
                    paymentDate: 15,
                    income: true
                },
                {
                    title: "SpaceX",
                    amount: 2567.65,
                    paymentDate: 15,
                    income: true
                }, {
                    title: "US Militray Air Force",
                    amount: 12459.55,
                    paymentDate: 5,
                    income: true
                },
                {
                    title: "Microsoft",
                    amount: 1078.00,
                    paymentDate: 10,
                    income: true
                }
                ]

            },
            teamMembers: {
                admins: [],
                designers: [],
                engineers: [],
                developers: []
            }
        })
        newData = data;
        localStorage.setItem('projects', JSON.stringify(newData));
        props.createProject();
        props.closeModal(1)
    }

    return (
        <div className="build-modal-container">
            <div className="modal-closer" onClick={closeModal}>X</div>
            <div className="modal-inputs-container">
                <div className="modal-top-divide">
                    <div className="form-project-title">
                        <input className="project-title-input" />
                        <span>Project Name:</span>
                    </div>
                    <div className="form-project-title">
                        <input className="project-title-input deadline" />
                        <span>Project Deadline:</span>
                    </div>
                </div>
                <div className="form-project-description">
                    <textarea className="project-description-input" />
                    <span>Project Description:</span>
                </div>
                <div className="modal-bottom-divide">
                    <div className="team-container"></div>
                    <div className="color-selector"></div>
                </div>
            </div>
            <button className="create-button" onClick={createProject}>Create</button>

        </div>
    );
}

export default BuildModal;