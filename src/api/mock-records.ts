import {FoodInfo} from "@/src/interfaces";
import * as foods from './mock-api-food'

class Record {
    foodId: string;
    unit: string;
    quantity: number;

    constructor(id: string, unit: string, quantity: number) {
        this.foodId = id;
        this.unit = unit;
        this.quantity = quantity;
    }
}

 let records:Record[] = [
     new Record('rice', '碗', 1),
     new Record('beef', 'g', 25),
     new Record('banana', '個', 1)
 ];

function addRecordApi(item: FoodInfo, quantity: number): Promise<string> {
    return new Promise((resolve) => {
        records.push(new Record(item.id, item.unit, quantity));
        setTimeout(() => resolve( 'success'), 3000);
    });
}

function getRecords() {
    return records.map((record) => {
      const food = foods.data.find(food => food.id === record.foodId);
      return {...record, label: food?.label, group: food?.group};
    });
}

export {getRecords, addRecordApi};
