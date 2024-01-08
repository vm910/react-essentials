import { EXAMPLES } from "../data";
export default function TabContent(props) {
  return (
    <div id="tab-content">
      <h3>{EXAMPLES[props.selectedTopic].title}</h3>
      <p>{EXAMPLES[props.selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[props.selectedTopic].code}</code>
      </pre>
    </div>
  );
}
