import './app-info.css';

const companyName = 'OshurekWeb';
const usersNumber = 4;

const AppInfo = () => {
  return (
    <div className="app-info">
      <h1>Учёт сотрудников в компании {companyName}</h1>
      <h2>Общее число сотрудников: {usersNumber}</h2>
      <h2>Премию получат: </h2>
    </div>
  )
}

export default AppInfo;
