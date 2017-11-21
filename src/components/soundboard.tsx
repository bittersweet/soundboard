import * as React from "react";
import Sound from "./sound";

export class Soundboard extends React.Component {
  public render() {
      return (
          <div className="columns">
            <Sound audio="airhorn"></Sound>
            <Sound audio="doitlive"></Sound>
            <Sound audio="alwaysbeclosing"></Sound>
            <Sound audio="badumtss"></Sound>
            <Sound audio="drumroll"></Sound>
            <Sound audio="crickets"></Sound>
            <Sound audio="mariokart"></Sound>
            <Sound audio="damnson"></Sound>
          </div>
          );
  }
}
