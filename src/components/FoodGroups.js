'use client';
import {useState} from 'react';
import {Button} from 'primereact/button';
import {AddRecord} from '@/src/components/AddRecord';

const foodGroup = [
  {
    id: 1,
    name: '五穀根莖',
    bgColor: 'bg-amber'
  },
  {
    id: 2,
    name: '蛋白質',
    bgColor: 'bg-red'
  },
  {
    id: 3,
    name:'蔬菜',
    bgColor: 'bg-green'
  },
  {
    id: 4,
    name: '水果',
    bgColor: 'bg-yellow'
  },
  {
    id: 5,
    name: '奶、乳製品',
    bgColor: 'bg-off-white'
  },
  {
    id: 6,
    name:'零食',
    bgColor: 'bg-purple'
  }
]

export default function FoodGroup() {
  const [dialogOn, setDialogOn] = useState(false);
  const [currentGroup, setCurrentGroup] = useState({id: null, name: null});

  function turnOnDialog(id, name){
    setCurrentGroup({id: id, name: name});
    setDialogOn(true);
  }

  function turnOffDialog() {
    setCurrentGroup({id: null, name: null});
    setDialogOn(false);
  }

  function FoodBtn(props) {
    return(<Button className={`${props.color}`}  label={props.name} onClick={() => turnOnDialog(props.id, props.name)} />)
  }

  const groupBtns = foodGroup.map(group => <FoodBtn key={group.id} name={group.name} id={group.id} color={group.bgColor} />);

  return(
      <div>
        <div className="grid grid-cols-2 bg-amber-200">{groupBtns}</div>
        <AddRecord visible={dialogOn} group={currentGroup} hideDialog={turnOffDialog} />
      </div>
  )
}