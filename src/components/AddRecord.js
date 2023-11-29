import {Dialog} from 'primereact/dialog';
import {Dropdown} from 'primereact/dropdown';
import { Button } from 'primereact/button';
import {useState, useEffect, useMemo} from 'react';
import {getFoodOptions} from '@/src/api/mock-api-food';
import {quantitySm, quantityMd} from '@/src/js/quantity-options.js';


const footerContent = (
    <div>
      <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
      <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
    </div>
);

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

  const quantityOptions = useMemo(() => {
    if(form.item.unit === '碗' || form.item.unit === '片' || form.item.unit === '個') {
      return quantityMd;
    }else {
      return quantitySm;
    }
  }, [form.item.unit]);

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
            <label htmlFor="quantity" className='relative'><p className='absolute bottom-7 right-8 text-stone-400'>{form.item.unit.toString()}</p></label>
        </div>

      </Dialog>
  );
}