import { Notification } from 'components/Notification/Notification';
import { StatInfo, Feedback } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const sum = total(good, neutral, bad);

  if (sum === 0) {
    return <Notification message="There is no feedback" />;
  }
  return (
    <StatInfo>
      <span>
        Good: <Feedback>{good}</Feedback>{' '}
      </span>
      <span>
        Neutral: <Feedback>{neutral}</Feedback>
      </span>
      <span>
        Bad: <Feedback>{bad}</Feedback>
      </span>
      <span>
        Total: <Feedback>{total(good, neutral, bad)}</Feedback>
      </span>
      <span>
        Positive feedback:
        <Feedback> {positivePercentage(good, sum)} %</Feedback>
      </span>
    </StatInfo>
  );
};
