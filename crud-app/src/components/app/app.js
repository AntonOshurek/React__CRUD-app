import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';

import './app.css';

function App() {
    return(
        <div className='app'>
            <AppInfo />

        <div className="search-panel">
            <AppFilter/>
        </div>
        </div>
    );
}

export default App;