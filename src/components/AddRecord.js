import {Dialog} from 'primereact/dialog';
import {Dropdown} from 'primereact/dropdown';
import {useState, useEffect} from 'react';
import {getFoodOptions} from '@/src/api/mock-api-food';

export function AddRecord(props) {
  const [form, setForm] = useState({
    item: {id: undefined, unit: 'ml'},
    quantity: 0
  });
  const [foodOptions, setFoodOptions] = useState([])

  useEffect(() => {
    getFoodOptions(props.group.id).then((res) => {
      setFoodOptions(res)
    })
  }, [props.group.id])

  const quantityOptions = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5];
  return (
      <Dialog header={"新增" + props.group.name + "食物"} visible={props.visible}
              onHide={() => props.hideDialog()}
      pt={{header: 'text-dark text-2xl my-3'}}>
        <div className="grid gap-4 my-2">
          <Dropdown value={form.item}
                    onChange={(e) => setForm({...form, item: e.value })}
                    options={foodOptions} optionLabel="label" placeholder="選擇食物" filter
                    className="w-full md:w-14rem"/>
          <Dropdown inputId="quantity" value={form.quantity} options={quantityOptions} onChange={(e) => setForm({...form, quantity: e.value})} />
          <label htmlFor="quantity"><span>{form.item.unit.toString()}</span></label>
        </div>
      </Dialog>
  );
}