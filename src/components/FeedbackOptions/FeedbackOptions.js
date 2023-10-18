import { BtnFeedback, WrapperBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  options: { good, neutral, bad },
  onLeaveFeedback,
}) => {
  return (
    <WrapperBtn>
      <BtnFeedback
        type="button"
        onClick={evt => {
          onLeaveFeedback('good', good);
        }}
      >
        Good
      </BtnFeedback>

      <BtnFeedback
        type="button"
        onClick={evt => {
          onLeaveFeedback('neutral', neutral);
        }}
      >
        Neutral
      </BtnFeedback>

      <BtnFeedback
        type="button"
        onClick={evt => {
          onLeaveFeedback('bad', bad);
        }}
      >
        Bad
      </BtnFeedback>
    </WrapperBtn>
  );
};
