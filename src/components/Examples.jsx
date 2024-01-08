import TabButton from "./TabButton";
import TabContent from "./TabContent";
import Section from "./Section";

import { useState } from "react";

const buttons = ["Components", "JSX", "Props", "State"];

export default function Examples() {
  const [tabContent, setTabContent] = useState();

  function handleClick(clickedButton) {
    setTabContent(clickedButton);
  }

  return (
    <Section id="examples">
      <h2>Examples</h2>
      <menu>
        {buttons.map((button) => (
          <TabButton
            isSelected={tabContent === button}
            key={button}
            onClick={() => handleClick(button)}
          >
            {button}
          </TabButton>
        ))}
      </menu>
      {!tabContent && <p>Please select a topic</p>}
      {tabContent && <TabContent selectedTopic={tabContent} />}
    </Section>
  );
}
