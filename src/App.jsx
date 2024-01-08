import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

const buttons = ["Components", "JSX", "Props", "State"];

function App() {
  function handleClick(clickedButton) {
    console.log(`clicked ${clickedButton}`);
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
      </main>
    </div>
  );
}

export default App;
