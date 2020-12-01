import React, { Component } from 'react';
import {robots} from '../components/Robots';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';


class App extends Component {

constructor () {
  super()
  this.state = {
    robots: robots,
    searchfield: ''
  }
}

onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
}
  render(){

    const filterRobots = this.state.robots.filter( robots => {
    return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    return (
      <div className='tc'>            
        <h1 className='f1'>ROBOFRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filterRobots} />
        </Scroll>
      </div>
    );
  } 
}

export default App;
