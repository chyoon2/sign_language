import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Buttons extends React.Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return <button className='ui button primary'>Submit</button>;
  }
}

export default Buttons;
