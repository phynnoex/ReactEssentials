import Section from "./Section.jsx";
import TabButton from "./TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "../data";

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();


    function handleClick(selectedButton) {
      //selectButton => 'comp','Jsx','props','state'
      setSelectedTopic(selectedButton);
      console.log(selectedTopic)
    }
    return(
        <Section title="Examples" id="examples">
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
          
        </Section>
    )
}