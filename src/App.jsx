import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

import { useState } from "react";

const buttons = ["Components", "JSX", "Props", "State"];

function App() {
  const [tabContent, setTabContent] = useState("Please click a button");

  function handleClick(clickedButton) {
    setTabContent(clickedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {buttons.map((button) => (
              <TabButton key={button} onSelect={() => handleClick(button)}>
                {button}
              </TabButton>
            ))}
          </menu>
        </section>
        {tabContent}
      </main>
    </div>
  );
}

export default App;
