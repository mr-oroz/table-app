import React from 'react';

const TableFilter = (props) => {
    return (
        <div className='d-flex'>
            <input
                onChange={props.handleChange}
                value={props.input}
                className='form-control'
                type="text"
                placeholder='search'/>
            <button
                onClick={props.handleClickSearch}
                className='btn btn-danger'>search</button>
            <button
                onClick={props.handleUpdate}
                className='btn btn-success'>update</button>
        </div>
    );
};

export default TableFilter;