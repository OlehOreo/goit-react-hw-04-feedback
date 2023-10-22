import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { SectionFeedback } from './App.styled';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const leaveFeedback = (feedback, quantity) => {
    setFeedback(prevState => ({
      ...prevState,
      [feedback]: quantity + 1,
    }));
  };

  const countTotalFeedback = (good, neutral, bad) => {
    const sum = good + neutral + bad;

    return sum;
  };
  const countPositiveFeedbackPercentage = (good, total) => {
    const percent = (good / total) * 100;

    return Math.round(percent);
  };

  return (
    <SectionFeedback>
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedback} onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section title="Statistic">
        <Statistics
          feedback={feedback}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </SectionFeedback>
  );
};
