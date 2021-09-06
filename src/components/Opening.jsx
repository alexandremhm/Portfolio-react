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
                  characters="!@#$%^&*"
                  exclude={[" ", "!"]}
                  obfuscate={obfuscate}
                  update={update}
                  revealDuration={10000}
                  revealDelay={1000}
                > New Ideas
              </Baffle>
            </h1>        
        </div>
        <div>
          <h1 className="opening-hero-two">
              <Baffle
                  speed={50}
                  characters="!@#$%^&*"
                  exclude={[" ", "!"]}
                  obfuscate={obfuscate}
                  update={update}
                  revealDuration={1500}
                  revealDelay={2000}
                > New Solutions
              </Baffle>
          </h1>
      </div>
      </div>
    )
  }
}

export default Opening;
