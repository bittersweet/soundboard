import * as React from "react";

interface ISoundProps {
    audio: string;
}

export default class Sound extends React.Component<ISoundProps> {
    constructor(props: ISoundProps) {
        super(props);
    }

    public render() {
        return (
            <div className="column">
                <a className="button is-large is-primary" onClick={(e) => this.onClick(e)}>
                    { this.props.audio }
                </a>
            </div>
        );
    }

    private onClick(e: any) {
        const audio = document.getElementById(this.props.audio) as HTMLAudioElement;
        audio.currentTime = 0;
        audio.play();
    }
}
