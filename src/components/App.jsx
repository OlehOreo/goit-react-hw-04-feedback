import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

import { SectionFeedback } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = (feedback, quantity) => {
    this.setState({
      [feedback]: quantity + 1,
    });
  };

  countTotalFeedback = (good, neutral, bad) => {
    const sum = good + neutral + bad;

    return sum;
  };

  countPositiveFeedbackPercentage = (good, total) => {
    const percent = (good / total) * 100;

    return Math.round(percent);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <SectionFeedback>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistic">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </SectionFeedback>
    );
  }
}
