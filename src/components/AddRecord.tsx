import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';
import {AutoComplete} from 'primereact/autocomplete';
import {LableDropdown} from '@/src/components/LableDropdown';
import {useState, useMemo} from 'react';
import {
    getFoodOptionsByFoodLabel,
} from '@/src/api/mock-api-food';
import {quantitySm, quantityMd} from '@/src/js/quantity-options';
import {FoodInfo} from "@/src/interfaces";

// const footerContent = (
//     <div>
//       <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)}
//               className="p-button-text"/>
//       <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)}
//               autoFocus/>
//     </div>
// );

export function AddRecord(props: { visible: boolean, hideDialog: () => {} }) {
    const initFoodItem = {
        id: null,
        unit: 'ml',
        label: '',
        group: null,
    };

    const [form, setForm] = useState({
        item: initFoodItem as FoodInfo,
        quantity: 0,
    });
    const [keyword, setKeyword] = useState('');
    const [foodOptions, setFoodOptions] = useState([] as FoodInfo[]);

    const quantityOptions: number[] = useMemo(() => {
        if (form.item.unit === '碗' || form.item.unit === '片' || form.item.unit === '個') {
            return quantityMd as number[];
        } else {
            return quantitySm;
        }
    }, [form.item.unit]);

    async function searchOptions(val: string) {
        console.log('找項目：', val);
        if (val !== '') {
            const options = await getFoodOptionsByFoodLabel(val);
            setFoodOptions(options);
        }
    }

    return (
        <Dialog header={'新增紀錄'} visible={props.visible}
                onHide={() => props.hideDialog()}
                pt={{header: () => ('text-dark text-2xl m-3')}}>
            <div className="grid gap-4 my-2 px-2">
                <AutoComplete
                    value={keyword} field="label"
                    suggestions={foodOptions} completeMethod={(e) => searchOptions(e.query)}
                    onChange={(e) => {
                        if (typeof (e.value) === 'string') {
                            setKeyword(e.value);
                        } else {
                            setKeyword(e.value.label);
                        }
                    }
                    }
                    onSelect={(e) => setForm({...form, item: e.value})}
                    onBlur={() => {
                        const food = foodOptions.find((food) => {
                            console.log('food label:', food.label);
                            return food.label.includes(keyword)}
                        );

                        if(food) {
                            setForm({...form, item: food});
                            setKeyword(food.label);
                        }else{
                            setForm({...form, item: initFoodItem});
                            setKeyword('');
                        }
                    }}
                />
                <LableDropdown
                    value={form.quantity}
                    options={quantityOptions}
                    setValue={(val: number) => {
                        setForm({...form, quantity: val});
                    }}
                    label={form.item.unit}
                />
            </div>
        </Dialog>
    );
}