import React from "react";
import Bootstrap from "./bootstrap";
import Inline from "./inline";
import Module from "./Module";
import Styled from "./styled";
// import Plain from "./plain";
// import Sass from "./Sass";

export default class Styling extends React.Component {
  render() {
    return (
      <div>
        {/* <Plain />
        <Sass /> */}
        {/* <Inline />
        <Module /> */}
        {/* <Styled /> */}
        <Bootstrap />
      </div>
    );
  }
}
