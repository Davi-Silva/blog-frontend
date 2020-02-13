import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.h5`
  color: #0058e4;
`;

export const ExternalEpisodesUrl = styled.div`
  ul {
    li {
      list-style: none;
      ul {
        li {
          display: inline-block;
          svg {
            margin-right: 10px;
            font-size: 21px;
          }
        }
      }
    }
  }
`;

export const Input = styled.input`
  border: none;
  transition: all 0.25s ease-in-out;
  transition-delay: .15s;
  :focus {
    border-bottom: none;
    outline: none;
    background: #f5f5f5;
  }
  :hover {
    background: #f5f5f5;
  }
  ::placeholder {
    color: #333;
  }
`;

export const Select = styled.select`
  border: 1px solid #000;
  background: #000;
  color: #ffcd2b;
  padding: 5px 7px;
  margin-bottom: 15px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
  :focus {
    outline: none;
  }
  :hover {
    background: #ffcd2b;
    color: #000;
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 250px;
  padding: 10px 15px;
  margin: 3px 0px;
  color: #a9a7ad;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.05);
  transition: all 0.15s ease-in-out;
  resize: none;
  :focus {
    border: 1px solid #0062ff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    outline: none;
  }
  ::placeholder {
    color: #a9a7ad;
  }
`;

export const Button = styled.button`
  border: 1px solid #000;
  color: #ffcd2b;
  background: #000;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
  margin: 25px auto 45px auto;
  font-weight: 900;
  display: table;
  padding: 4px 7px;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
    font-size: 16px;
  :focus {
    outline: none;
  }
  :hover {
    color: #000;
    background: #ffcd2b;
    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
  }
  :active {
    transform: scale(0.95);
  }
`;

export const P = styled.p`
  font-size: 14px;
`;

export const A = styled(Link)`
  color: #0058e4;
  :hover {
    color: #a9a7ad;
  }
`;

export const Alert = styled.div`
  display: none;
`;

export const Warning = styled.div`
  border: 1px solid #d42626;
  border-radius: 3px;
  padding: 5px 10px;
  color: #d42626;
  font-size: 12px;
  margin: 7px auto;
  display: table;
  cursor: default;
  background: #d426260f;
  text-transform: uppercase;
`;

export const BlogPostCoverUploaderPlaceholder = styled.div`
  margin-top: 5px;
  margin-left: 6px;
  border: 1px dashed #000;
  border-radius: 4px;
  width: 99%;
  height: 300px;
  display: table;
  z-index: 99999;
  cursor: pointer;

  p {
    display: table;
    margin: 15px auto;
    color: #000;
    font-size: 16px;
    text-align: center;
  }
`;

export const PodcastCoverUploaderPlaceholder = styled.div`
  border: 1px dashed #000;
  border-radius: 4px;
  height: 250px;
  width: 250px;
  padding: 15px;
  display: table;
  margin: 0 auto;
  z-index: 99999;
  cursor: pointer;

  p {
    display: table;
    margin: 0 auto;
    color: #000;
    font-size: 16px;
    text-align: center;
  }
`;

export const DivAside = styled.div`
  @media (max-width: 768px) {
    height: 255px;
  }
`;


export const PodcastAudioFileUploaderPlaceholder = styled.div`
  border: 1px dashed #000;
  border-radius: 4px;
  height: 72px;
  width: 100%;
  padding: 15px;
  display: table;
  margin: 0 auto;
  z-index: 99999;
  p {
    display: table;
    margin: 0 auto;
    color: #000;
    font-size: 16px;
    text-align: center;
  }
`;
