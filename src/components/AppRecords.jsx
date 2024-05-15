'use client'
import {useState} from 'react';
import {getRecords} from '@/src/api/mock-records';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function Table({items}) {
    return (
        <DataTable className='mx-2 my-4 text-off-white' value={items}>
            <Column field="label" header="名稱" className='w-1/2'></Column>
            <Column field="quantity" header="數量"></Column>
            <Column field="unit" header="單位"></Column>
        </DataTable>
    )
}


export default function AppRecords() {
  let data = getRecords();
  // const [data, setData] = useState(getRecords);

  return (
      <div>
        <Table items={data} />
      </div>
  );
}