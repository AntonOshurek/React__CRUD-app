import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

function App() {

  const data = [
    {name: 'Anton', salary: 1800, increase: true, rise: false, id: 1},
    {name: 'viyaleta', salary: 2800, increase: false, rise: false, id: 2},
    {name: 'Maksimilian', salary: 9800, increase: true, rise: false, id: 3},
    {name: 'Adrian', salary: 19800, increase: false, rise: false, id: 4}
  ];

  return(
    <div className='app'>
      <AppInfo />

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
      <EmployersList data={data}/>
      <EmployersAddForm/>
    </div>
  );
}

export default App;
