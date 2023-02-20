import React from 'react';
import {DataType} from './App';

type TasksType = {
    data: DataType
};

const Tasks = (props: TasksType) => {
    return (
        <div>
            <h3>{props.data.title}</h3>
        </div>
    );
};

export default Tasks;
