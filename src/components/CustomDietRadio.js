import styled from 'styled-components';
import React, { useState } from 'react';
import { BiRadioCircle, BiRadioCircleMarked } from 'react-icons/bi';


const RadioContainer = styled.div`
font-family: 'Do Hyeon', sans-serif;
  font-size: 23px;
  color: #F74A25;
  margin-bottom: 10px;
`

const RadioLabel = styled.label`
  display: flex;
  flex-direction: row;
  margin: 4.5px 4px 4.5px 12px;
  cursor: pointer; 
`

const RadioInput = styled.input`
  display: none;
`

const Text = styled.span`
  margin-left: 6px;
`

const CustomRadio = ({ value, checked, onChange, label }) => {

  return (
    <RadioContainer>
      <RadioLabel>
        <RadioInput
          type="radio"
          name="diet_combination"
          value={value}
          checked={checked}
          onChange={onChange}/>
        {checked ? <BiRadioCircleMarked size={23}/> : <BiRadioCircle size={23}/>}
        <Text>{label}</Text>
      </RadioLabel>
    </RadioContainer>
  );
};

export default CustomRadio;