import React from 'react';
import {DataType} from './App';

type TasksType = {
    data: DataType
}

export const Tasks = (props: TasksType) => {
    return (
        <div>
            <h3>{props.data.title}</h3>
            <ul>
                {
                    props.data.tasks.map(el => {
                        return (
                            <li><span>{el.title}</span><input type="checkbox" checked={el.isDone}/></li>
                        );
                    })}
            </ul>
            <ul>
                {props.data.students.map(el => {
                    return (
                        <li>{el}</li>
                    );
                })}
            </ul>
        </div>
    );
};

