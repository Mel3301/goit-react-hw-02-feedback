import styled from 'styled-components'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonWrapper>
    {options.map(({ id, text }) => (
      <button key={id} onClick={() => onLeaveFeedback(text)}>{text}</button>
    ))}
  </ButtonWrapper>
);

const ButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 16px;

        button{
            cursor: pointer;
            background-color: #e9d9f8;
            width: 68px;
            border-radius: 35px;
            border-color: purple
        }
`

export default FeedbackOptions;