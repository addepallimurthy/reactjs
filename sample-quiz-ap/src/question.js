import React from 'react';
import { Answers } from './answers'

export const Question = props => {
    console.log("child component", props);
    return (

        <div className="question-wrapper">
            <ul className="question">
                <li>{props.id}) {props.question}</li>
                <div className="answers">
                    {
                        Object.keys(props.answers).map((key) => {
                            return props.answers[key] ?
                                <div key={key}><Answers name={props.id} answer={props.answers[key]} option={key} /></div> : null
                        })
                    }
                </div>
            </ul>
        </div>
    )
}