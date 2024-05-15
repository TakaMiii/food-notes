import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';
import {AutoComplete} from 'primereact/autocomplete';
import {LableDropdown} from '@/src/components/LableDropdown';
import {useState, useMemo} from 'react';
import {getFoodOptionsByFoodLabel} from '@/src/api/mock-api-food';
import {addRecordApi, getRecords} from '@/src/api/mock-records';
import {quantitySm, quantityMd} from '@/src/js/quantity-options';
import {FoodInfo} from "@/src/interfaces";

export function AddRecord(props: { visible: boolean, hideDialog: () => {}, getRecords: (records: any[]) => {} }) {
    const initFoodItem = {
        id: '',
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
        return form.item.unit === '碗' || form.item.unit === '片' || form.item.unit === '個' ? quantityMd as number[] : quantitySm;
    }, [form.item.unit]);

    async function searchOptions(val: string) {
        if (val !== '') {
            const options = await getFoodOptionsByFoodLabel(val);
            setFoodOptions(options);
        }
    }

    function initForm(){
        setForm({item: initFoodItem, quantity: 0});
        setKeyword('');
        setFoodOptions([]);
    }

    async function saveRecord() {
        const result = await addRecordApi(form.item, form.quantity);
        if(result === 'success') {
            props.getRecords(getRecords());
        }
    }

    const footerContent = (
        <div className="grid grid-cols-2 gap-2">
            <Button label="Cancel" icon="pi pi-times"
                    className="!bg-transparent border-4 border-amber !w-full"
                    onClick={() => {props.hideDialog(); initForm()}}
            />
            <Button label="Save" icon="pi pi-check" className="!w-full" onClick={() => saveRecord()}/>
        </div>
    );

    return (
        <Dialog header={'新增紀錄'} visible={props.visible}
                onHide={() => props.hideDialog()}
                className="p-2"
                pt={{header: () => ('text-dark text-2xl m-3')}}
                footer={footerContent}
        >
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
                    }}
                    onSelect={(e) => setForm({...form, item: e.value})}
                    onBlur={() => {
                        const food = foodOptions.find((food) => {
                                return food.label.includes(keyword);
                            }
                        );
                        setForm({...form, item: food || initFoodItem});
                        setKeyword(food ? food.label : '');
                    }}
                    autoFocus
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