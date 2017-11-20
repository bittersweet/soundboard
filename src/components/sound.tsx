import * as React from "react";

interface SoundProps {
    audio: string
}

export default class Sound extends React.Component<SoundProps> {
    constructor(props: SoundProps) {
        super(props);
    }

    public render() {
        return (
            <div className="column">
                <a className="button is-large is-primary" onClick={e => this.onClick(e)}>
                    <span className="icon is-large">
                        <i className="fa fa-music"></i>
                    </span>
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
