import styled from "styled-components";


const Section = ({ title, children }) => (
  <div>
    <TitleWrapper>{title}</TitleWrapper>
    {children}
  </div>
);

const TitleWrapper = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
`


export default Section;