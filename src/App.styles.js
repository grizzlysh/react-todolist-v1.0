import styled from "styled-components";

export const Container = styled.div`
  display: block;
  /* border-radius: 3px; */
  padding: 0.5rem;
  /* margin: 0.5rem 1rem; */
  /* width: 50vw; */
  background: #ff2797;
  width: 50%;
  margin: auto;
  border: 2px solid white;
`;

export const Card = styled.div`
  display: block;
  /* border-radius: 3px; */
  padding: 0.5rem;
  background-color: #0f8721;
  width: 50%;
  margin: auto;
  border: 2px solid white;
`;

export const Panel = styled.div`
  display: block;
  /* grid: auto; */
  padding: 5px;
  text-align: center;
  width: auto;
  color: #0f2797;
  margin: auto;
`;

export const Lane = styled.div`
  padding: 2px;
  display: grid;
  grid: 50px / auto auto auto;
  grid-gap: 10px;
  width: auto;
  /* color: #0f2797; */
  /* margin: 10px; */
`;

export const SmallLane = styled.div`
  padding: 3px;
  display: flex;
  /* grid: 20px / auto auto; */
  grid-gap: 10px;
  font-size: 14px;
  /* width: auto; */
  /* height: 100%; */
  input,
  textArea {
    height: 100%;
    width: 100%;
    font-size: 14px;
  }
  label {
    width: 15%;
    color: white;
  }
  /* color: #0f2797; */
  /* margin: 10px; */
`;

export const BlockLane = styled.div`
  display: grid;
  grid-gap: 5px;
  margin: auto;
  padding-bottom: 5px;
  width: auto;
  color: #ffffff;
`;
