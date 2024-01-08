import TabContent from "./TabContent";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

import { useState } from "react";

const buttons = ["Components", "JSX", "Props", "State"];

export default function Examples() {
  const [tabContent, setTabContent] = useState();

  function handleClick(clickedButton) {
    setTabContent(clickedButton);
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={buttons.map((button) => (
          <TabButton
            isSelected={tabContent === button}
            key={button}
            onClick={() => handleClick(button)}
          >
            {button}
          </TabButton>
        ))}
      >
        {!tabContent && <p>Please select a topic</p>}
        {tabContent && <TabContent selectedTopic={tabContent} />}
      </Tabs>
    </Section>
  );
}
