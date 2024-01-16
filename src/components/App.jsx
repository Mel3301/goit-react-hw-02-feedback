import Feedback from "./Feedback/Feedback";
import buttomItems from 'data/data.json'

export const App = () => {
  return (
    <div>
      <Feedback items={ buttomItems } />
    </div>
  );
};
