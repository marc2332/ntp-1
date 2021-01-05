import React from "react";
import { StyledTime } from "./style";

class Time extends React.Component {
    public state = { time: "" }

    private tick() {
        const d = new Date();

        this.setState({ time: `${d.getHours()}:${d.getMinutes()}` })
    }

    componentDidMount() {
        this.tick();

        setInterval(() => {
            const d = new Date();

            this.setState({ time: `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}` })
        }, 500)
    }

    render() {
        return (
            <StyledTime>{this.state.time}</StyledTime>
        )
    }
}

export default Time;