import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Buttons extends React.Component {
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(value) => (value === "english" ? "Submit" : "Voorleggen")}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Buttons;

//THIs IS HOW YOU GET DATA WITH CONTEXT.TYPE
// import React from "react";
// import LanguageContext from "../contexts/LanguageContext";

// class Buttons extends React.Component {
//   static contextType = LanguageContext;

//   render() {
//     const text = this.context === "english" ? "Submit" : "Voorleggen";
//     return <button className='ui button primary'>{text}</button>;
//   }
// }

// export default Buttons;
