import Accordion from "../components/accordian";

function AccordionExample() {
  return (
    <Accordion>
      <Accordion.Item itemId={1}>
        <Accordion.Header>Header 1</Accordion.Header>
        <Accordion.Content />
      </Accordion.Item>
      <Accordion.Item itemId={2}>
        <Accordion.Header>Header 2</Accordion.Header>
        <Accordion.Content />
      </Accordion.Item>
      <Accordion.Item itemId={3}>
        <Accordion.Header>Header 3</Accordion.Header>
        <Accordion.Content />
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionExample;
