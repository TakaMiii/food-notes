import {Dialog} from 'primereact/dialog';
// import {Dropdown} from 'primereact/dropdown';
import {Button} from 'primereact/button';
import {AutoComplete} from 'primereact/autocomplete';
import {LableDropdown} from '@/src/components/LableDropdown';
import {useState, useEffect, useMemo} from 'react';
import {
  getFoodOptionsByFoodGroup,
  getFoodOptionsByFoodLabel,
} from '@/src/api/mock-api-food';
import {quantitySm, quantityMd} from '@/src/js/quantity-options.js';

const footerContent = (
    <div>
      <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)}
              className="p-button-text"/>
      <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)}
              autoFocus/>
    </div>
);

export function AddRecord(props) {
  const [form, setForm] = useState({
    item: {
      id: undefined, unit: 'ml', label: '', group: null,
    },
    quantity: 0,
  });
  const [foodOptions, setFoodOptions] = useState([]);
  const search = (event) => {
    getFoodOptionsByFoodLabel(event.query).then((res) => {
      setFoodOptions(res);
    });
  };

  const quantityOptions = useMemo(() => {
    if (form.item.unit === '碗' || form.item.unit === '片' || form.item.unit ===
        '個') {
      return quantityMd;
    } else {
      return quantitySm;
    }
  }, [form.item.unit]);

  return (
      <Dialog header={'新增紀錄'} visible={props.visible}
              onHide={() => props.hideDialog()}
              pt={{header: 'text-dark text-2xl m-3'}}>
        <div className="grid gap-4 my-2 px-2">
          <AutoComplete field="label" value={form.item}
                        suggestions={foodOptions} completeMethod={search}
                        onChange={(e) => {setForm({...form, item: e.value});}}/>
          <LableDropdown
              value={form.quantity}
              options={quantityOptions}
              setValue={(val) => {setForm({...form, quantity: val})}}
              label={form.item.unit}
          />
        </div>

      </Dialog>
  );
}