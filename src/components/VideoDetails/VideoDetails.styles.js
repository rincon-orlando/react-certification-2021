import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background: ${(props) => (props.darkTheme ? 'black' : 'white')};
  color: ${(props) => (props.darkTheme ? 'white' : 'black')};
`;

export const LeftPane = styled.div`
  width: 70%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const RightPane = styled.div`
  width: 30%;
  height: 100%;
  overflow: scroll;
  margin-left: 10px;
`;

export const VideoPlayer = styled.iframe`
  width: 100%;
  height: 500px;
`;

export const Title = styled.div`
  font-weight: 700;
`;

export const Description = styled.p``;
