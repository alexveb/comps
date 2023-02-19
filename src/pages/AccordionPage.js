import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "sadaa",
      label: "can i use react on a project?",
      content: "You can use react on any project you want",
    },
    {
      id: "dfdsfs",
      label: "can i use javascript on a project?",
      content: "You can use javascript on any project you want",
    },
    {
      id: "5fdgdfd",
      label: "can i use css on a project?",
      content: "You can use javascript on any project you want",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
