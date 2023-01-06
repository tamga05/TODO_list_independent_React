import React from 'react';


export type StudentsType = Array<string>

export type TaskType = {
    taskId: number,
    title: string,
    isDone: boolean
}

export type TasksType = Array<TaskType>

export type DataType = {
    title: string,
    tasks: TasksType,
    students: StudentsType
}

export type TASKSType = {
    data: DataType
}


export const TASKS = (props: TASKSType) => {
    return (
        <div>
            <h3>{props.data.title}</h3>
            <ul>
                {props.data.tasks.map((el) => {
                    return (
                        <li>
                            <span>{el.title}</span>
                            <input type={'checkbox'} checked={el.isDone}/>
                        </li>
                    );
                })}
            </ul>
            <ul>
                <li>{props.data.students.map(el => {
                    return (
                        <li>{el}</li>
                    );
                })}
                </li>
            </ul>
        </div>
    );
};
