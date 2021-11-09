import EmployersListItem from "../employers-list-item/employers-list-item";

import './employers-list.css';

const EmployersList = () => {

  return (
    <ul className="app-list list-group">
      <EmployersListItem name='Anton' salary={800}/>
      <EmployersListItem name='Viyaleta' salary={800}/>
      <EmployersListItem name='Maksymylian' salary={800}/>
    </ul>
  )
}

export default EmployersList;
