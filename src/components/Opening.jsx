import React from 'react';
import Baffle from "baffle-react";
import '../Styles/Opening.css'

class Opening extends React.Component {
  constructor (props) {
    super()
    this.state = {
      update: true,
      obfuscate: false
    };  
  }
  render () {
    const { update, obfuscate } = this.state;

    return (
      <div>
        <div className="opening">
          <h1 className="opening-hero">
              <Baffle
                  speed={50}
                  characters="01"
                  exclude={[" ", "!"]}
                  obfuscate={obfuscate}
                  update={update}
                  revealDuration={1000}
                  revealDelay={1000}
                > New Ideas
              </Baffle>
            </h1>        
        </div>
        <div>
          <h1 className="opening-hero-two">
              <Baffle
                  speed={50}
                  characters="01"
                  exclude={[" ", "!"]}
                  obfuscate={obfuscate}
                  update={update}
                  revealDuration={1000}
                  revealDelay={1500}
                > New Solutions
              </Baffle>
          </h1>
      </div>
      </div>
    )
  }
}

export default Opening;
