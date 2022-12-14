import styled from '@emotion/styled';

const Texto = styled.div`
  background-color: #f7dbe1;
  color: #ee1b49;
  padding: 15px;
  font-size: 22px;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  text-align: center;
`;

const Error = ({children}) => {
  return <Texto>{children}</Texto>;
};

export default Error;
