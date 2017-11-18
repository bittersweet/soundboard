import * as React from "react";

export class Soundboard extends React.Component {
  public render() {
      return (
          <div className="columns">
            <div className="column">
              <a className="button is-large is-primary" onClick={e => this.onClick(e)}>
                <span className="icon is-large">
                  <i className="fa fa-music"></i>
                </span>
              </a>
            </div>
          </div>
          );
  }

  private onClick(e: any) {
      const audio = document.getElementById("airhorn") as HTMLAudioElement;
      audio.currentTime = 0;
      audio.play();
  }
}
