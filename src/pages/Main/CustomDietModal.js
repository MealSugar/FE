import React, { useState } from 'react';
import styled from 'styled-components';
import CustomCheckbox from '../../components/CustomDietCheckbox';
import CustomRadio from '../../components/CustomDietRadio';
import { BsGeoFill, BsSunFill, BsSun, BsQuestionCircleFill } from 'react-icons/bs';
import { BiSolidMoon } from 'react-icons/bi';
import postFoodRecommend from '../../APIs/post/postFoodRecommend';


const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width:390px;
  height: 100vh;
  background-color: rgba(133,133,133,0.25);
  backdrop-filter: blur(6px);
  margin-top: 72px;
  font-family: 'WavvePADO-Regular';
  place-items: center;
`;

const ModalContent = styled.div`
  background-color: #ffffff;
  width: 320px;
  height: 707px;
  padding: 20px;
  border-radius: 15px;
  border: none;
  box-shadow: 0px 4px 4px #B7B7B7;
  margin-top: 20px;
  margin-left: 0px;
  padding-left: 19px;
  overflow-y: auto; 
      &::-webkit-scrollbar{
      width: 2px;
    }
`;

const Title = styled.div`
  font-size: 30px;
  color: #F74A25;
  border-bottom: 3px solid #F74A25;
  margin-bottom: 13px; 
  padding-bottom: 3px;
`

const Title2 = styled.div`
  font-size: 24px;
  color: #F74A25;
  border-bottom: 3px solid #F74A25;
  margin-bottom: 13px; 
  padding-bottom: 3px;
`

const DetailSpan = styled.span`
  font-size: 16px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FormItem = styled.div`
  margin-bottom: 10px;
`

const Input = styled.input`
  width: 300px;
  height: 40px;
  border: 1px solid #F74A25;
  border-radius: 10px;
  margin: 3.5px 10px;
`

const Warning = styled.div`
  position: absolute;
  top: 542px;
  margin: 0 25px;
  width: 280px;
  height: 116px;
  background-color: #FFE3C4;
  border-radius: 10px;
  color: #F74A25;
  font-size: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


const CustomButton = styled.button`
  width: 200px;
  height: 50px;
  box-sizing: border-box;
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: #FF6A4A;
  font-family: 'WavvePADO-Regular';
  font-size: 20px;
  color: #ffffff;
  margin: auto 60px;
  cursor: pointer; 
`


const CustomDietModal = ({ isOpen, onClose }) => {

  const [diet_combination, setDiet_combination] = useState('type2');
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);


  const handleRadioChange = (e) => {
    setDiet_combination(e.target.value);
  };

  const handleCheckboxChange = (time, type, checked) => {
    const updateValues = (values) => ({
      ...values,
      [type]: checked
    });

    if (time === '아침') {
      setBreakfast(updateValues(breakfast));
    } else if (time === '점심') {
      setLunch(updateValues(lunch));
    } else if (time === '저녁') {
      setDinner(updateValues(dinner));
    }
  };

  const handleClick = async () => {
    try {
      const response = await postFoodRecommend(
        diet_combination,
        Object.keys(breakfast).filter(key => breakfast[key]).join(', '),
        Object.keys(lunch).filter(key => lunch[key]).join(', '),
        Object.keys(dinner).filter(key => dinner[key]).join(', '),
        null,
        null,
        null
      );
      console.log(response);
      onClose();
    } catch (error) {
      console.error('식단 커스텀 요청 실패:', error);
      alert('식단 커스텀에 실패하였습니다.')
    }
  };


  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <Title><BsGeoFill size={24} color="#F74A25" /> 식단 조합 선택 </Title>
        <Form>
          <FormItem>
            <CustomRadio value="type1" checked={diet_combination === 'type1'} onChange={handleRadioChange} label="식사 3" />
            <CustomRadio value="type2" checked={diet_combination === 'type2'} onChange={handleRadioChange} label="식사 3 + 간식 1" />
            <CustomRadio value="type3" checked={diet_combination === 'type3'} onChange={handleRadioChange} label="식사 3 + 간식 2" />
          </FormItem>
          <FormItem>
            <CustomCheckbox icon={<BsSunFill size={20} color="#F74A25" />} time="아침" selectedValues={breakfast} onChange={handleCheckboxChange} />
            <CustomCheckbox icon={<BsSun size={20} color="#F74A25" />} time="점심" selectedValues={lunch} onChange={handleCheckboxChange} />
            <CustomCheckbox icon={<BiSolidMoon size={20} color="#F74A25" />} time="저녁" selectedValues={dinner} onChange={handleCheckboxChange} />
          </FormItem>
        </Form>
        <Title2><BsQuestionCircleFill size={24} color="#F74A25" /> 사용하고 싶은 재료 <DetailSpan>(최대 3개)</DetailSpan> </Title2>
        <Form>
          <FormItem>
            <Input disabled />
            <Input disabled />
            <Input disabled />
          </FormItem>
          <FormItem>
            <Warning>재료 입력은 프리미엄 구독 시 <br /> 사용할 수 있습니다 </Warning>
          </FormItem>
        </Form>
        <CustomButton onClick={handleClick}>이대로 식단 추천받기!</CustomButton>
      </ModalContent>
    </ModalContainer>

  );
};

export default CustomDietModal;
