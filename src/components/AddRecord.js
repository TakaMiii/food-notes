import {Dialog} from 'primereact/dialog';
import {Dropdown} from 'primereact/dropdown';
import {useState, useEffect} from 'react';
import {getGrains} from '@/src/api/mock-api-food';

export function AddRecord(props) {
  const [item, setItem] = useState({
    name: undefined,
    quantity: 0,
    unit: 'ml'
  });
  const [foodOptions, setFoodOptions] = useState([])
  
  useEffect(() => {
    getGrains().then((res) => {
      setFoodOptions(res)
    })
  }, [foodOptions])

  return (
      <Dialog header={"新增" + props.group.name} visible={props.visible}
              onHide={() => props.hideDialog()}>
        <Dropdown value={item.name}
                  onChange={(e) => setItem({...item, name: e.value})}
                  options={foodOptions} optionLabel="label" placeholder="選擇食物"
                  className="w-full md:w-14rem"/>
        <p>Add a {props.group.name} item with id {props.group.id}</p>
      </Dialog>
  );
}