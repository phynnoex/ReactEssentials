import {useState} from 'react';
import {EXAMPLES} from './data.js';
import { CORE_CONCEPTS } from "./data.js";
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();


  function handleClick(selectedButton) {
    //selectButton => 'comp','Jsx','props','state'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic)
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleClick('state')}>State</TabButton>
          </menu>
          {!selectedTopic && <p>please select a topic  </p> }
          {selectedTopic &&  
            (<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
            )
          }
          
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
