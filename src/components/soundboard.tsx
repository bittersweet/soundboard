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
            <div className="columns">
              <Sound audio="bob-geengulden"></Sound>
              <Sound audio="bob-geentyfus"></Sound>
              <Sound audio="bob-heh"></Sound>
              <Sound audio="bob-hersens"></Sound>
            </div>
            <div className="columns">
              <Sound audio="bob-hoedebaashetdoet"></Sound>
              <Sound audio="bob-laugh"></Sound>
              <Sound audio="bob-nooitgeengeld"></Sound>
              <Sound audio="bob-opjemuil"></Sound>
            </div>
            <div className="columns">
              <Sound audio="bob-optyfen"></Sound>
              <Sound audio="bob-stukinjebroek"></Sound>
              <Sound audio="bob-tyfushoer"></Sound>
              <Sound audio="bob-viezetyfuslijer"></Sound>
            </div>
            <div className="columns">
              <Sound audio="bob-vijfeuros"></Sound>
            </div>
          </div>
          );
  }
}
