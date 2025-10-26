import Button from "../../components/button";

function ButtonExample() {
  return (
    <>
      <div>
        <Button
          onClick={() => {
            console.log("hi");
          }}
        >
          Outline
        </Button>
        <Button variant="dark">Destructive</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
      <div>
        <Button size="sm">Outline</Button>
        <Button size="md">Outline</Button>
        <Button size="lg">Outline</Button>
      </div>
    </>
  );
}

export default ButtonExample;
