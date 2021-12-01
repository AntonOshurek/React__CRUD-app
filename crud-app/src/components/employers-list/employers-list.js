import EmployersListItem from "../employers-list-item/employers-list-item";

import './employers-list.css';

const EmployersList = ({data, onDelete}) => {

  const elements = data.map((item, i) => { //если с бэка не пришли id то можно поставить индекс
    const {id, ...itemProps} = item; //если с бэка пришли, то деструкруризовать и назначить в атрибут key
    return (
      <EmployersListItem
            key={id}
            {...itemProps} //name={item.name} salary={item.salary} <= тоже самое!!!
            onDelete={() => onDelete(id)}
      />
    )
  });

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployersList;
