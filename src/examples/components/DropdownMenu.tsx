import Button from "../../components/button";
import Dropdown from "../../components/dropdown-menu";

function DropdownExample() {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Button>Open dropdown</Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Menu>
          <Dropdown.Item>My Account</Dropdown.Item>
          <Dropdown.Item>Billing</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Keyboard shortcuts</Dropdown.Item>
          <Dropdown.Item>New Team</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Content>
    </Dropdown>
  );
}

export default DropdownExample;
