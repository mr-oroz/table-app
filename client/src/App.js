import React, {useEffect, useState} from "react";
import './App.css';
import {getData} from "./services/services";
import TableFruit from "./components/table-fruit";
import PaginationTable from "./components/pagination-table";
import TableFilter from "./components/table-filter";

function App() {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [tablePage] = useState(10);
    const [valueSort, setValueSort] = useState('default');
    const [input, setInput] = useState('');
    const [active, setActive] = useState(null);
    const fetchTable = async () => {
        const response = await getData()
        setData(response.data)
    }
    useEffect(() => {
        //запрос получаем данных от сервера
        fetchTable()
    }, [])

    const handleUpdate =() => {
        // обновить таблицу заново
        fetchTable()
    }
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleClickTable =(param) => {
        // выбор колонки либо название либо количество
        setActive(param)
    }

    const handleClickSearch = () => {
        // филтрация поиск данных
        let filterData = []
        if(input !== '' && active !== null) {
            if(active === "title") {
                filterData = data.filter(elem => {
                    return elem.title.includes(input)
                })
            } else if (active === 'amount') {
                filterData = data.filter(elem => {
                    return elem.amount.includes(input)
                })
            }
            setData(filterData)
            setInput('')
        }
    }

    // логика пагинация
    const indexOfLastPage = currentPage * tablePage; // получаем 10 й индекс
    const indexOfFirstPage = indexOfLastPage - tablePage; // получаем длинна массива
    const currentTables = data.slice(indexOfFirstPage, indexOfLastPage); // получаем новый массив с помощю метод slice

    const paginate = (number) => setCurrentPage(number);

    const handleSortingTitle = (value) => {
         // метод сортировка алфавита
        const sorting = value;
        const sortData = data.sort((a, b) => {
            if (sorting === 'default') {
                return  a.id - b.id // сортировка номера
            }
            if (sorting === 'up') {
                return a.title > b.title ? 1 : -1 // сортировка алфавита от А до Я
            }
            if (sorting === 'down') {
                return a.title < b.title ? 1 : -1 // обротная сортировка алфавита
            }
        })
        setValueSort(sorting) // после измение сортировка меняем нашего состояние
        setData(sortData) // тут тоже меняем состояние
    }

    const handleSortingAmount = (value) => {
        // сортировка количество
        const sorting = value;
        const sortData = data.sort((a, b) => {
            if (sorting === 'default') {
                return a.id - b.id
            }
            if (sorting === 'up') {
                return a.amount - b.amount
            }
            if (sorting === 'down') {
                return b.amount - a.amount
            }
        })
        setValueSort(sorting) // после измение сортировка меняем нашего состояние
        setData(sortData) // тут тоже меняем состояние
    }

    // через пропс передаем нащего компонента состояние и методы
    return (
        <div className="app">
            <div className="container ">
                <h1 style={{textAlign: 'center'}}>Фрукты</h1>
                <TableFilter
                    handleUpdate={handleUpdate}
                    handleClickSearch={handleClickSearch}
                    handleChange={handleChange}
                    input={input}
                />
                <TableFruit
                    active={active}
                    handleClickTable={handleClickTable}
                    handleSortingAmount={handleSortingAmount}
                    handleSortingTitle={handleSortingTitle}
                    valueSort={valueSort}
                    data={currentTables}/>
                <PaginationTable
                    tablePage={tablePage}
                    totalPage={data.length}
                    paginate={paginate}
                />
            </div>
        </div>
    );
}

export default App;
