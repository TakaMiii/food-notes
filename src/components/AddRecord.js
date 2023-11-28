import {Dialog} from 'primereact/dialog';
import {Dropdown} from 'primereact/dropdown';
import {useState, useEffect} from 'react';
import {getFoodOptions} from '@/src/api/mock-api-food';

export function AddRecord(props) {
  const [item, setItem] = useState({
    name: undefined,
    quantity: 0,
    unit: 'ml'
  });
  const [foodOptions, setFoodOptions] = useState([])

  useEffect(() => {
    getFoodOptions(props.group.id).then((res) => {
      setFoodOptions(res)
    })
  }, [props.group.id])

  return (
      <Dialog header={"新增" + props.group.name} visible={props.visible}
              onHide={() => props.hideDialog()}
      pt={{header: 'text-dark text-2xl my-3'}}>
        <div className="my-2">

          <Dropdown value={item.name}
                    onChange={(e) => setItem({...item, name: e.value})}
                    options={foodOptions} optionLabel="label" placeholder="選擇食物" filter
                    className="w-full md:w-14rem"/>
          <p>Add a {props.group.name} item with id {props.group.id}</p>
        </div>
      </Dialog>
  );
}