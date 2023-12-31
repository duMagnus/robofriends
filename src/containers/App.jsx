import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css'

function App() {

    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('')
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users));
    }, [])

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    const filteredRobots = robots.filter(user => {
        return user.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (!robots.length) ? 
        <h3>Loading...</h3> 
        :
        (
            <div className="tc">
            <h1>RoboFriends</h1>
            <button onClick={ () => {setCount(count + 1)} }>Click me!</button>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
        </div>
        )
}

export default App;
