import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { DashBoard } from '../../components/Dashboard'
import { BiSolidPlusCircle } from "react-icons/bi";
import CustomDietModal from './CustomDietModal';
import getMain from '../../APIs/get/getMain';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Greeting = styled.text`
  color: #000;
  font-family: "Wavve PADO TTF";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 16px;
`
const FoodTitle = styled.div`
  color: #000;
  font-family: "Wavve PADO TTF";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-self: flex-start;
  margin: 34px 0px 16px 33px;
`
const FoodContainer = styled.div`
  width: 350px;
  height: 300px;
  border: 2px dashed #6A0DAD;
  background: #FFF;
  margin: 0px 20px 59px 20px;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  `
const Icon = styled(BiSolidPlusCircle)`
  width: 100px;
  height: 100px;
  fill: #6A0DAD;
  justify-content: center;
  cursor: pointer;
`

export default function Main() {

  const [FoodModal, setFoodModal] = useState(false);

  const IconClick = () => {
    setFoodModal(true); 
  };

  const CloseModal = () => {
    setFoodModal(false); 
  };


  const [nickname, setNickname] = useState('닉네임');

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await getMain();
        setNickname(response.nickname);

        console.log("닉네임: ", response.nickname);

      } catch (error) {
        console.error('message:', error.message);
      }
    };

    fetchData();
  }, []);


  return (
    <Container>
      <Greeting>오늘도 반가워요, {nickname}님</Greeting>
      <DashBoard/>
      <FoodTitle>오늘의 추천식단</FoodTitle> 
      <FoodContainer><Icon onClick={IconClick}/></FoodContainer>
      {FoodModal && <CustomDietModal isOpen={IconClick} onClose={CloseModal}/>}
    </Container>
  )
}