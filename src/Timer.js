import React from 'react';

const midterms = new Date("Thu Nov 06 2018 00:00:00 GMT-0500 (EST)");
const singleDay = 1000 * 60 * 60 * 24;
const getDaysLeft = () => Math.floor(
  (midterms.getTime() - new Date().getTime()) / singleDay
);

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      daysLeft: getDaysLeft(),
    };

    this.updateTimer = this.updateTimer.bind(this);
  }

  componentDidMount() {
    setInterval(this.updateTimer, 1000);
  }

  updateTimer() {
    this.setState = ({
      daysLeft: getDaysLeft(),
    });
  }

  render() {
    return (
      <this.props.presentation>
        {this.state.daysLeft}
      </this.props.presentation>
    );
  }
}

export default Timer;
