import { useRef } from "react";
import AlertDialog, {
  type AlertDialogHandle,
} from "../../components/alert-dialog";

function AlertDialogExample() {
  const ref = useRef<AlertDialogHandle>(null);

  return (
    <>
      <button onClick={() => ref.current?.open!()}>Open</button>
      <AlertDialog style={{ maxWidth: "500px" }} ref={ref}>
        <AlertDialog.Header>
          Are you sure you want to delete?
        </AlertDialog.Header>
        <AlertDialog.Content>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.This action cannot be
          undone. This will permanently delete your account and remove your data
          from our servers.
        </AlertDialog.Content>
        <AlertDialog.Footer>
          <button onClick={() => ref.current?.close!()}>Cancel</button>
          <button>Continue</button>
        </AlertDialog.Footer>
      </AlertDialog>
    </>
  );
}

export default AlertDialogExample;
