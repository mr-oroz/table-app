import React from 'react';
import {useState} from "react";

const TableFruit = (props) => {
    const {data, valueSort, handleSortingTitle, handleSortingAmount} = props;

    return (data.length > 0 && (
            <table className='table table-bordered'>
                <thead>
                <tr>
                    <th>№</th>
                    <th>
                        Название
                        <select
                            value={valueSort}
                            style={{marginLeft: "10px"}}
                            onChange={(e) => handleSortingTitle(e.target.value)}
                            name="" id="">
                            <option value="default">all</option>
                            <option value="up">up</option>
                            <option value="down">down</option>
                        </select>

                    </th>
                    <th>
                        количество
                        <select
                            onChange={(e) =>handleSortingAmount(e.target.value)}
                            value={valueSort}
                            style={{marginLeft: "10px"}} name="" id="">
                            <option value="default">all</option>
                            <option value="up">up</option>
                            <option value="down">down</option>
                        </select>
                    </th>
                    <th>дата</th>
                </tr>
                </thead>
                <tbody>
                {data.map(element => {
                    return (
                        <tr key={element.id}>
                            <td>{element.id}</td>
                            <td>{element.title}</td>
                            <td>{element.amount}</td>
                            <td>{element.data_table}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    )
        ;
};

export default TableFruit;