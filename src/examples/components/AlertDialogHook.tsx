import useAlertDialog from "../../components/alert-dialog/useAlertDialog";
import Button from "../../components/button";

function AlertDialogHookExample() {
  const { open, close, AlertDialog } = useAlertDialog();

  return (
    <>
      <Button onClick={() => open!()}>Open</Button>
      <AlertDialog style={{ maxWidth: "500px" }}>
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
          <Button onClick={() => close!()} style={{ marginRight: "0.5rem" }}>
            Cancel
          </Button>
          <Button variant="dark">Continue</Button>
        </AlertDialog.Footer>
      </AlertDialog>
    </>
  );
}

export default AlertDialogHookExample;
