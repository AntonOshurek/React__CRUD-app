import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

function App() {

  const data = [
    {name: 'Anton', salary: 1800, increase: false},
    {name: 'viyaleta', salary: 2800, increase: false},
    {name: 'Maksmilian', salary: 9800, increase: true},
    {name: 'Adrian', salary: 19800, increase: false}
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
