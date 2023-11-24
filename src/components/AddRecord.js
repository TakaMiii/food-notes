import {Dialog} from 'primereact/dialog';

export function AddRecord(props) {
  return (
      <Dialog visible={props.visible} onHide={() => props.hideDialog()}>
        <p>Add a {props.group.name} item with id {props.group.id}</p>
      </Dialog>
  );
}