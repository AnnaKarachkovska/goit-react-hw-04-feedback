import React from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

let total = 0;
class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = value => {
    this.setState(prev => ({ [value]: prev[value] + 1 }));
  };

  countTotalFeedback = (good, neutral, bad) => {
    total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = good => {
    let percentage = ((good / total) * 100).toFixed(0);
    if (percentage.isNaN) {
      return 0;
    } else {
      return percentage;
    }
  };

  render() {
    const options = ['good', 'neutral', 'bad'];
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}

export default App;

