import useAlertDialog from "../../components/alert-dialog/useAlertDialog";

function AlertDialogHookExample() {
  const { open, close, AlertDialog } = useAlertDialog();

  return (
    <>
      <button onClick={() => open!()}>Open</button>
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
          <button onClick={() => close!()}>Cancel</button>
          <button>Continue</button>
        </AlertDialog.Footer>
      </AlertDialog>
    </>
  );
}

export default AlertDialogHookExample;
