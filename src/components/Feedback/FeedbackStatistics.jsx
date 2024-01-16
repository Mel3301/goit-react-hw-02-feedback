import Notification from "./Notification";

const FeedbackStatistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const markup = <ul>
      <li><p>Good: {good}</p></li>
      <li><p>Neutral: {neutral}</p></li>
      <li><p>Bad: {bad}</p></li>
      <li><p>Total: {total}</p></li>
      <li><p>Positive feedback: {positivePercentage}%</p></li>
  </ul>
  
  return total > 0 ? markup : <Notification message="There is no feedback" />;
};

export default FeedbackStatistics;