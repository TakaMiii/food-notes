import {FoodInfo} from "@/src/interfaces";
import {it} from "node:test";
class Record {
    foodId: number;
    unit: string;
    quantity: number;

    constructor(id: number, unit: string, quantity: number) {
        this.foodId = id;
        this.unit = unit;
        this.quantity = quantity;
    }
}

const records = [];

function addRecordApi(item: FoodInfo, quantity: number) {
    console.log('in addRecord api, item:', item, 'quantity:', quantity)
    const mockApi = new Promise((resolve, reject) => setTimeout(() => resolve({result: 'success'}), 3000));
    mockApi.then(() => {
        records.push({itemName: item.id, quantity: quantity});
      }
    )
}

export {addRecordApi};
