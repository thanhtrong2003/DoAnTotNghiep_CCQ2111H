import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: {}, seconds: props.seconds };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  componentDidUpdate(prevProps) {
    if (this.props.seconds !== prevProps.seconds) {
      clearInterval(this.timer);
      this.setState({ seconds: this.props.seconds });
      this.startTimer();
    }
  }

  startTimer() {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div>
        m: {this.state.time.m} s: {this.state.time.s}
      </div>
    );
  }
}

export default Timer;
