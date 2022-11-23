import React from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FunctionalComponent, {
  Paragraf,
} from "./pembahasan/FunctionalComponent";

export default class Komponen extends React.Component {
  render() {
    return (
      <div>
        <ClassComponent nama="Farhan Rio" />
        <FunctionalComponent nama="Lionel Messi" />
      </div>
    );
  }
}
