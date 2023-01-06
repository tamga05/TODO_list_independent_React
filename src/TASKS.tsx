import React from 'react';


type StudentsType = Array<string>

type TasksType = Array<TaskType>

type TaskType = {
    taskId: number,
    title: string,
    isDone: boolean
}

type DataType = {
    title: string,
    tasks: TasksType,
    students: StudentsType
}

type TASKSPropsType = {
    data: DataType
}


export const TASKS = (props: TASKSPropsType) => {
    return (
        <div>
            <h3>{props.data.title}</h3>


        </div>
    );
};

