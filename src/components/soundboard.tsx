import * as React from "react";
import Sound from "./sound";

export class Soundboard extends React.Component {
  public render() {
      return (
        <div>
            <div className="columns">
              <Sound audio="airhorn"></Sound>
              <Sound audio="doitlive"></Sound>
              <Sound audio="alwaysbeclosing"></Sound>
              <Sound audio="badumtss"></Sound>
            </div>
            <div className="columns">
              <Sound audio="drumroll"></Sound>
              <Sound audio="crickets"></Sound>
              <Sound audio="mariokart"></Sound>
              <Sound audio="damnson"></Sound>
            </div>
            <div className="columns">
              <Sound audio="quickmaths"></Sound>
              <Sound audio="noketchup"></Sound>
              <Sound audio="rawsauce"></Sound>
              <Sound audio="sbkrap"></Sound>
            </div>
            <div className="columns">
              <Sound audio="mansnothot"></Sound>
            </div>
          </div>
          );
  }
}
