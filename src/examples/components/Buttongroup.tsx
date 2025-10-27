import Button from "../../components/button";
import ButtonGroup from "../../components/button-group";
import ButtonGroupSeparator from "../../components/button-group/ButtonGroupSeparator";

function ButtonGroupExample() {
  return (
    <>
      <div>
        <ButtonGroup>
          <Button>&lt;</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>&gt;</Button>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup>
          <Button variant="secondary">Continue</Button>
          <ButtonGroupSeparator color="gray" />
          <Button variant="secondary">Cancel</Button>
        </ButtonGroup>
      </div>
    </>
  );
}

export default ButtonGroupExample;
