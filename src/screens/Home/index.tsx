import styled from "styled-components";

import BottomControl from "./BottomControl";
import Hints from "./store";
import TopControls from "./TopControls";

const first = new Hints();
const second = new Hints();

const Home = () => {
  return (
    <>
      <div className="container mx-auto my-4">
        <TopControls />
      </div>
      <Divider />
      <div className="container mx-auto my-4">
        <BottomControl countOfHint={3} hints={first} />
        <BottomControl className="mt-4" countOfHint={18} hints={second} />
      </div>
    </>
  );
};

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: gray;
`;

export default Home;
