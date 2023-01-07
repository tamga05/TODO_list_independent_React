import React from 'react';
import {DataType} from './App';

type TasksType = {
    data: DataType
}

export const Tasks = (propps: TasksType) => {
    return (
        <div>
            <h3>{propps.data.title}</h3>
            <ul>
                {propps.data.tasks.map(el => {
                    return (
                        <li>{<span>{el.title}</span>}<input type="checkbox" checked={el.isDone}/></li>
                    );
                })}
            </ul>
            <ul>
                {propps.data.students.map(el => {
                    return (
                        <li>{el}</li>
                    );
                })}
            </ul>
        </div>
    );
};

