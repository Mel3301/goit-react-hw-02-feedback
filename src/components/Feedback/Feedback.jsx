import { Component } from "react";
import styled from "styled-components";
import FeedbackStatistics from "./FeedbackStatistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";

class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;

        return good + bad + neutral;
    };

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        
        return total ? ((this.state.good / total) * 100).toFixed(2) : 0;
    };

    handleLeaveFeedback = (text) => {
        this.setState((prevState) => ({
        [text.toLowerCase()]: prevState[text.toLowerCase()] + 1,
        }));
    };



     render() {
        const feedbackOptions = [
        { id: 1, text: "Good" },
        { id: 2, text: "Neutral" },
        { id: 3, text: "Bad" },
    ];

    return (
      <FeedbackContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <FeedbackStatistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </FeedbackContainer>
    );
  }
}




/* Styles */


const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  gap: 20px;
`;


export default Feedback;