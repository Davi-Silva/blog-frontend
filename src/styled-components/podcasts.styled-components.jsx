import styled from "styled-components";

import { Link } from "react-router-dom";

export const Wrapper = styled(Link)`
  border-radius: 7px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
  margin: 20px auto;
  display: block;
  overflow: hidden;
  &:hover {
    text-decoration: none;
  }
`;

export const Cover = styled.div`
  height: 150px;
  width: 100%;
  background-position: center !important;
  background-size: cover !important;
  display: block;
`;

export const Description = styled.div`
  color: #999;
  text-align: justify;
`;

export const UploadedOn = styled.p`
  color: #999;
  margin-bottom: 0px;
`;

export const Category = styled.b`
  color: #999;
  margin-bottom: 0px;
  float: left;
  font-size: 14px;
  line-height: 24px;
`;
