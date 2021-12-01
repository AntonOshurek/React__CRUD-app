import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Anton', salary: 1800, increase: true, rise: false, id: 1},
        {name: 'viyaleta', salary: 2800, increase: false, rise: false, id: 2},
        {name: 'Maksimilian', salary: 9800, increase: true, rise: false, id: 3},
        {name: 'Adrian', salary: 19800, increase: false, rise: false, id: 4}
      ]
    }
    this.maxId = 5;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  render() {
    return(
      <div className='app'>
        <AppInfo />

        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>

        <EmployersList
            data={this.state.data}
            onDelete={this.deleteItem}/>
        <EmployersAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
