import React from 'react';
import { Consumer } from './UserContext';

export const Answers = props => {
    console.log(props);
    return (
        <Consumer>
            {
                (click) => {
                    return <label><input onClick={e=>click(e)} name={props.name} type="radio" value={props.option}/><span>{props.answer}</span> </label>
                }
            }
        </Consumer>

    )
}