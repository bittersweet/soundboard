import * as React from "react";
import Sound from "./sound";

export class Soundboard extends React.Component {
  public render() {
      return (
          <div className="columns">
            <Sound audio="airhorn"></Sound>
          </div>
          );
  }
}
