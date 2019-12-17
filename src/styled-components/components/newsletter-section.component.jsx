import styled from 'styled-components';

export const Newsletter = styled.div`
  width: 100%;
  background: #353535;
  padding: 25px 0;
`;

export const NewsletterDiv = styled.div`
  width: 100%;
  margin: 50px 0;
`;

export const NewsletterTitle = styled.h3`
  color: #fff;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 2px;
  text-align: center;
`;

export const NewsletterP = styled.p`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;

export const NewsletterInput = styled.span`
  background: #fff;
  color: #999;
  padding: 10px;
  font-size: 18px;
  border-radius: 2px;
  display: table;
  margin: 5px auto;
  border: none;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  input {
    border: none;
    &:focus {
      outline: none;
      color: #999;
    }
    &::placeholder {
      color: #999;
      font-size: 18px;
      font-weight: 200px;
    }
  }
  svg {
    margin: 0 4px 0px 18px;
  }
`;
