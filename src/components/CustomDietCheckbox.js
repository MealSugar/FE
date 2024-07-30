import styled from 'styled-components';
import React from 'react';
import { BiCheckbox, BiSolidCheckboxChecked } from 'react-icons/bi';

const CheckboxContainer = styled.div`
  font-family: 'WavvePADO-Regular';
  font-size: 20px;
  color: #F74A25;
  margin: 0 0 15px 10px;
`;

const Title = styled.div`
  margin-bottom: 10px;
  display: flex;
  vertical-align: middle;
`;

const TitleItem = styled.div`
  margin-right: 5px;
`;

const CheckboxItems = styled.div`
  display: flex;
`;

const CheckboxLabel = styled.label`
  display: flex;
  flex-direction: row;
  margin: 4.5px 4px 4.5px 12px;
  cursor: pointer; 
`;

const CheckboxInput = styled.input`
  display: none;
`;

const Text = styled.span`
  margin-left: 1.5px;
`;

const CustomCheckbox = ({ icon, time, selectedValues, onChange }) => {
  const handleCheckboxChange = (e) => {
    onChange(time, e.target.name, e.target.checked);
  };

  return (
    <CheckboxContainer>
      <Title><TitleItem>{icon}</TitleItem><TitleItem>{time}</TitleItem></Title>
      <CheckboxItems>
        <CheckboxLabel>
          <CheckboxInput
            type="checkbox"
            name="korean"
            checked={selectedValues.korean}
            onChange={handleCheckboxChange} />
          {selectedValues.korean ? <BiSolidCheckboxChecked /> : <BiCheckbox />}
          <Text>한식</Text>
        </CheckboxLabel>
        <CheckboxLabel>
          <CheckboxInput
            type="checkbox"
            name="chinese"
            checked={selectedValues.chinese}
            onChange={handleCheckboxChange} />
          {selectedValues.chinese ? <BiSolidCheckboxChecked /> : <BiCheckbox />}
          <Text>중식</Text>
        </CheckboxLabel>
        <CheckboxLabel>
          <CheckboxInput
            type="checkbox"
            name="japanese"
            checked={selectedValues.japanese}
            onChange={handleCheckboxChange} />
          {selectedValues.japanese ? <BiSolidCheckboxChecked /> : <BiCheckbox />}
          <Text>일식</Text>
        </CheckboxLabel>
        <CheckboxLabel>
          <CheckboxInput
            type="checkbox"
            name="western"
            checked={selectedValues.western}
            onChange={handleCheckboxChange} />
          {selectedValues.western ? <BiSolidCheckboxChecked /> : <BiCheckbox />}
          <Text>양식</Text>
        </CheckboxLabel>
      </CheckboxItems>
    </CheckboxContainer>
  );
};

export default CustomCheckbox;