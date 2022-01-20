import styled from 'styled-components';

interface Props {}

const Index = (props: Props) => {
  return <SD_Container>Index 페이지 입니다.</SD_Container>;
};

export default Index;

const SD_Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
