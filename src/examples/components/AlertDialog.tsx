import { useRef } from "react";
import AlertDialog, {
  type AlertDialogHandle,
} from "../../components/alert-dialog";
import Button from "../../components/button";

function AlertDialogExample() {
  const ref = useRef<AlertDialogHandle>(null);

  return (
    <>
      <Button onClick={() => ref.current?.open!()}>Open</Button>
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
          <Button
            onClick={() => ref.current?.close!()}
            style={{ marginRight: "0.5rem" }}
          >
            Cancel
          </Button>
          <Button variant="dark">Continue</Button>
        </AlertDialog.Footer>
      </AlertDialog>
    </>
  );
}

export default AlertDialogExample;
