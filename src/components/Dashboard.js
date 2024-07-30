import styled from "styled-components";
import 'typeface-inter'
import { AiFillAlert } from "react-icons/ai";
import { useState, useEffect } from "react";
import getMain from "../APIs/get/getMain";

export function DashBoard() {

    const DashBoardBack = styled.div`
    width: 350px;
    height: 170px;
    border-radius: 17.772px;
    background: var(--Sub, #E6E6FA);
    display: flex;
    justify-content: space-between;
    align-items: center;
    `
    // 왼쪽영역
    const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    `

    const CalorieTitle = styled.span`
    width: 187.575px;
    height: 15px; 
    color: #3F006C;
    font-size: 15px;
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 20px 0px 8px 27.25px;
    `

    const Calorie = styled.span`
    width: 187.575px;
    height: 31px;
    color: #3F006C;
    font-family: 'Inter',sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 0px 0px 19px 27.25px;
    `

    const DayInfoTitle = styled.span`
    width: 187.575px;
    height: 18px;
    color: #3F006C;
    font-family: 'Inter',sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 0px 0px 8px 27.25px;`

    const DayInfo = styled.span`
    width: 187.575px;
    height: 34px;
    color: #3F006C;
    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 0px 0px 15px 27.25px;
    `

    // 오른쪽 영역 
    const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    `

    const AlertBackGround = styled.div`
    width: 114px;
    height: 130px;
    border-radius: 17px;
    background: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `

    const AlertIcon = styled(AiFillAlert)`
    width: 75px;
    height: 75px;
    flex-shrink: 0;
    color: ${props => props.alertColor};
    `

    const AlertText = styled.div`
    width: 94px;
    height: 31px;
    justify-content: center;
    color: #000;
    text-align: center;
    font-family: "Wavve PADO TTF";
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 5px;
    `


    const [daily_calorie, setDaily_calorie] = useState('');
    const [daily_blood_sugar, setDaily_blood_sugar] = useState('?');
    const [target_blood_sugar, setTarget_blood_sugar] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await getMain();
                setDaily_calorie(response.daily_calorie);
                setDaily_blood_sugar(response.daily_blood_sugar);
                setTarget_blood_sugar(response.target_blood_sugar);

                console.log(response);

            } catch (error) {
                console.error('message:', error.message);
            }
        };

        fetchData();
    }, []);


    const getAlertDetails = () => {
        if (daily_blood_sugar === '?' || target_blood_sugar === '') {
            return {
                color: '#000',
                message: '알 수 없어요'
            };
        }

        const target = parseFloat(target_blood_sugar);
        const bloodSugar = parseFloat(daily_blood_sugar);

        if (target === 140) {
            if (bloodSugar < 54 || bloodSugar > 200) {
                return { color: '#FF4A4A', message: '위험해요!' };
            } else if (bloodSugar >= 54 && bloodSugar <= 70 || bloodSugar > 140 && bloodSugar <= 200) {
                return { color: '#FFAC4A', message: '조심해요!' };
            } else if (bloodSugar > 70 && bloodSugar <= 140) {
                return { color: '#2ADEA1', message: '정상입니다!' };
            }
        } else if (target === 160) {
            if (bloodSugar < 54 || bloodSugar > 200) {
                return { color: '#FF4A4A', message: '위험해요!' };
            } else if (bloodSugar >= 54 && bloodSugar <= 70 || bloodSugar > 160 && bloodSugar <= 200) {
                return { color: '#FFAC4A', message: '조심해요!' };
            } else if (bloodSugar > 70 && bloodSugar <= 160) {
                return { color: '#2ADEA1', message: '정상입니다!' };
            }
        }
        return { color: '#000', message: 'meal당으로 관리해보세요' };
    };

    const { color, message } = getAlertDetails();


    return (
        <DashBoardBack>
            <LeftSection>
                <CalorieTitle> 하루 권장 섭취 열량 </CalorieTitle>
                <Calorie> {daily_calorie} Kcal </Calorie>
                <DayInfoTitle>하루 혈당 수치 / 목표 수치</DayInfoTitle>
                <DayInfo> {daily_blood_sugar} / {target_blood_sugar} </DayInfo>
            </LeftSection>
            <RightSection>
                <AlertBackGround>
                    <AlertIcon alertColor={color} />
                    <AlertText>{message}</AlertText>
                </AlertBackGround>
            </RightSection>
        </DashBoardBack>
    )

}