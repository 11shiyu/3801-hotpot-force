import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../css/Styles.css';
import { Adobo, Sushi, RicePaperRolls, PizzaMargherita } from '../data/ingredient';

import SearchImg from '../img/filter.png';
import HomeImg from '../img/home.png';
import ShareImg from '../img/share.png';
import ShopImg from '../img/hot.png';
import MeImg from '../img/me.png';


const initialTodos = [
    { task: "Low Flour", completed: false },
    { task: "Sugar", completed: true },
    { task: "Unsalted Butter", completed: false },
    { task: "Egg Yolk", completed: false },
    { task: "Milk Powder", completed: false },
];

export default function CheckList() {
    const user = useLocation().state;
    console.log(user);

    const navigate= useNavigate();
    function NavBar() {
        console.log(user);
        const toMe= () => {
            navigate('/me', {state: user})
        }
        const toHome= () => {
            navigate('/Home', {state: user})
        }
        const toCreate= () => {
            navigate('/Create', {state: user})
        }
        const toSearch= () => {
            navigate('/Search', {state: user})
        }
        const toChecklist= () => {
            navigate('/Checklist', {state: user})
        }
        
        return (
            <div className='navigation-bar'>
            <button onClick={toSearch} className='searchBtn'><img src={SearchImg} className='search-img' />Search</button>
            <button onClick={toHome} className='homeBtn'><img src={HomeImg} className='home-img' />Home</button>
            <button onClick={toCreate} className='createBtn'><img src={ShareImg} className='share-img' /></button>
            <button onClick={toChecklist} className='checklistBtn'><img src={ShopImg} className='shop-img' />CheckList</button>
            <button onClick={toMe} className='meBtn'><img src={MeImg} className='me-img' />Me</button>
            </div>
        )
    }


    const [todos, setTodos] = useState(initialTodos);

    //todo 参数
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (todo) => {
        setTodos(todos.filter((_todo) => _todo.task !== todo.task));
    };
    
    const toggleCompleted = (todo) => {
        let result = todos.filter((_todo) => _todo.task !== todo.task);
        setTodos([...result, { ...todo, completed: !todo.completed }]);
    };

    const sortTodos = (todo, otherTodo) => {
        if (todo.task < otherTodo.task) {
            return -1;
        }
        if (todo.task > otherTodo.task) {
            return 1;
        }
        return 0;
    };

    return (
        <>
        <div style={{minHeight:'565pt', backgroundColor:'rgb(234,144,48)'}}>
            <div style={{height:'1pt'}}/>
            <div className='check-body'>
                <header className='check-title'>
                    <h1>CheckList</h1>
                </header>
                <TodoCreator addTodo={addTodo} />
                <hr />
                <main className='check-list'>
                    <h2>List of Ingredient</h2>
                    {todos.sort(sortTodos).map((todo) => (
                        <Todo
                        key={todo.task}
                        {...todo}
                        toggleCompleted={() => toggleCompleted(todo)}
                        deleteTodo={() => deleteTodo(todo)} // 每次render都会检查 
                        />
                    ))}
                </main>
            </div>
        </div>
        {NavBar()}
        </>
    );
}

function TodoCreator({ addTodo }) {
    
    const [todo, setTodo] = useState({ task: "", completed: false });

    const handleChangeTask = (event) => {
        setTodo({ ...todo, task: event.target.value });
    };
    
    // event参数 点击时传参 处理事件
    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(todo);
    };
    
    return (
        <form onSubmit={handleSubmit} className='check-add'>
            <h2>Add Your Ingredient</h2>
            <label>
                <input
                type="text"
                name="task"
                placeholder='Add your ingredient'
                value={todo.task}
                onChange={handleChangeTask} // 处理 传参有改变时
                className='add-ingredient'
                />
            </label>
            <button type="submit" className='add-button'>Add</button>
        </form>
    );

}

function Todo({ task, completed, toggleCompleted, deleteTodo }) {
    
    const taskStyle = () => {
        let result = { display: "inline-block" };
        if (completed) {
            result["text-decoration"] = "line-through";
        }
        return result;
    };
    
    return (
        <>
        <section className='check-section'>
            <input type="checkbox" checked={completed} onChange={toggleCompleted} className='check-box' />
            <p style={taskStyle()}>
                {task}
            </p>
            <button onClick={deleteTodo} className='check-delete'>Delete</button>
        </section>
        </>
    );

}