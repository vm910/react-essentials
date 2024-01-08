import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

import { useState } from "react";
import TabContent from "./components/TabContent";

const buttons = ["Components", "JSX", "Props", "State"];

function App() {
  const [tabContent, setTabContent] = useState();

  function handleClick(clickedButton) {
    setTabContent(clickedButton);
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {buttons.map((button) => (
              <TabButton
                isSelected={tabContent === button}
                key={button}
                onSelect={() => handleClick(button)}
              >
                {button}
              </TabButton>
            ))}
          </menu>
        </section>
        {!tabContent && <p>Please select a topic</p>}
        {tabContent && <TabContent selectedTopic={tabContent} />}
      </main>
    </>
  );
}

export default App;
