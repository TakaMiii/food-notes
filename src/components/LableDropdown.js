import {Dropdown} from 'primereact/dropdown';

export function LableDropdown(props){
  return (<>
    <Dropdown inputId="quantity" value={props.value}
              options={props.options}
              onChange={(e) => props.setValue(e.value)}/>

    <label htmlFor="quantity" className="relative">{
      <p className="absolute bottom-7 right-8 text-stone-400">
        {props.label ? props.label : ''}
      </p>
    }</label>
  </>)
}