import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface Props {}

const Index = (props: Props) => {
  const [data, setData] = useState(0);
  const plusElement = useRef<HTMLDivElement>(null);
  const minusElement = useRef<HTMLDivElement>(null);
  const plusTimer = useRef<any>(null);
  const minusTimer = useRef<any>(null);

  const handlePlus = () => {
    setData((prev) => prev + 1);
    const doPlus = () => {
      plusTimer.current = setTimeout(() => {
        setData((prev) => prev + 1);
        doPlus();
      }, 100);
    };
    doPlus();
  };
  const stopPlus = () => {
    if (plusTimer.current !== null) {
      clearTimeout(plusTimer.current);
    }
  };

  const handleMinus = () => {
    setData((prev) => prev - 1);
    const doMinus = () => {
      minusTimer.current = setTimeout(() => {
        setData((prev) => prev - 1);
        doMinus();
      }, 100);
    };
    doMinus();
  };

  const stopMinus = () => {
    if (minusTimer.current !== null) {
      clearTimeout(minusTimer.current);
    }
  };

  return (
    <SD_Container>
      <div>data : {data}</div>
      <SD_ButtonBox
        ref={plusElement}
        onMouseDown={handlePlus}
        onMouseUp={stopPlus}
        onMouseLeave={stopPlus}>
        +
      </SD_ButtonBox>
      <SD_ButtonBox
        ref={minusElement}
        onMouseDown={handleMinus}
        onMouseUp={stopMinus}
        onMouseLeave={stopMinus}>
        -
      </SD_ButtonBox>
    </SD_Container>
  );
};

export default Index;

const SD_Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const SD_ButtonBox = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
`;
