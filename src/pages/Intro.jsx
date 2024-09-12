import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsArrowDownCircleFill, BsEmojiLaughingFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import ProcessTitle from '../components/ProcessTitle';
import ImageSliding from '../components/ImgSliding';
import DolLogo from '../images/DoL-Logo.png';
import TextLogoImg from '../images/smallLogo.png';
import img1 from '../images/service00.png';
import img2 from '../images/service01.png';
import img3 from '../images/service02.png';
import img4 from '../images/service03.png';
import img7 from '../images/service06.png';
import img8 from '../images/service08.png';
import img9 from '../images/service09.png';
import img10 from '../images/service10.png';
import img11 from '../images/service11.png';
import img12 from '../images/service12.png';
import img13 from '../images/service13.png';
import img14 from '../images/service14.png';

const Scroll = styled.div`
  position: relative;
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 40px;
`;

const LogoImage = styled.img`
    width: 210px;
    height: 210px;
`;

const TextLogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

const Title = styled.div`
    color: #540090;
`;

const Text1 = styled.div`
    font-weight: 700;
    font-size: 20px;
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

const Text3 = styled.div`
    font-weight: 500;
    font-size: 12px;
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

const GraContainer1 = styled.div`
    background: linear-gradient(
        to bottom,
        #fff 0%,
        #E6E6FA 30%,
        #fff 100%
    );
    height: 500px;
`;

const Container = styled.div`
    margin-top: 40px;
`;

const ImageSlidingContainer1 = styled.div`
    img {
        height: 255px !important;
        object-fit: cover;
    }
`;

const ImageSlidingContainer2 = styled.div`
    img {
        height: 165px !important;
        object-fit: cover;
    }
`;

const ImgDiv1 = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 290px;
    height: 400px;
`;

const ImgDiv2 = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 250px;
    height: 50px;
`;

const Text4 = styled.div`
    font-weight: 400;
    font-size: 18px;
    display: flex;
    justify-content: center;
    margin-top: 70px;
    color: #540090;
`;

const Text5 = styled.div`
    font-weight: 700;
    font-size: 18px;
    display: flex;
    justify-content: center;
    color: #540090;
    margin-bottom: 70px;
`;

const Buttondiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CreateButton = styled.button`
    width: 329px;
    height: 50px;
    border: none;
    border-radius: 8px;
    background-color: #6A0DAD;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.1s;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`;

const ArrowContainer = styled.div`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: ${props => (props.visible ? 'block' : 'none')};
    z-index: 10;
    text-align: center;
    /* cursor: pointer; */
`;

const ArrowText = styled.div`
    font-size: 16px;
    color: #540090;
    margin-top: 8px;
`;

function Intro() {
    const images1 = [img1, img2, img3];
    const images2 = [img8, img9, img10];
    const images3 = [img11, img12, img13, img14];
    const navigate = useNavigate();

    const [arrowVisible, setArrowVisible] = useState(true);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        setArrowVisible(scrollY <= 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Scroll>
            <LogoContainer>
                <LogoImage src={DolLogo} />
            </LogoContainer>

            <Title>
                <Text1>식단으로 혈당과 밀당하는</Text1>

                <TextLogoContainer>
                    <img
                        src={TextLogoImg}
                        alt="TextLogoImg"
                        style={{ width: '135px' }}
                    />
                </TextLogoContainer>

                <Text3>식품교환표를 통한 AI기반 맞춤형 식단 제공 서비스</Text3>
            </Title>

            <Container style={{height: '280px'}}>
                <ProcessTitle
                    num="1"
                    title="대시보드로 매일매일 혈당관리"
                    text="대시보드로 혈당상태를 직관적으로 확인하며 관리할 수 있어요!"
                />
                <ImageSlidingContainer2>
                    <ImageSliding images={images1} />
                </ImageSlidingContainer2>
            </Container>

            <ArrowContainer visible={arrowVisible}>
                <BsArrowDownCircleFill size="28px" color="#540090" />
                <ArrowText>스크롤해주세요</ArrowText>
            </ArrowContainer>

            <GraContainer1>
                <Container>
                    <ProcessTitle
                        num="2"
                        title="개인별 맞춤 식품교환표 생성"
                        text="최초 로그인 시 키와 몸무게를 입력하면 개인별 맞춤 식품교환표가 생성돼요!"
                    />
                    <ImgDiv1>
                        <img src={img4} />
                    </ImgDiv1>
                </Container>
            </GraContainer1>

            <Container style={{height: '340px'}}>
                <ProcessTitle
                    num="3"
                    title="1일 최대 15개 식단 제공"
                    text="AI가 퍼스널 식품교환표를 기준으로 균형있는 식단을 제공해줘요!"
                />
                <ImageSlidingContainer1>
                    <ImageSliding images={images3} />
                </ImageSlidingContainer1>
            </Container>

            <GraContainer1>
                <Container>
                    <ProcessTitle
                        num="4"
                        title="외식할 땐, 밀당 맵으로 혈당 관리!"
                        text="혈당 고민 없이 즐길 수 있는 식당 / 카페를 확인할 수 있어요!"
                    />
                    <ImgDiv1>
                        <img src={img7} alt="이달의 명예의 전당 사진" />
                    </ImgDiv1>
                </Container>
            </GraContainer1>

            <Container>
                <ProcessTitle
                    num="5"
                    title="식단톤을 통한 나만의 레시피 공유"
                    text="식단톤에 출전해서 나만의 혈당 레시피를 공유하고 리워드를 받아요!"
                />
                <ImageSlidingContainer2>
                    <ImageSliding images={images2} />
                </ImageSlidingContainer2>
            </Container>

            <Text4>로그인 후 무료로 이용이 가능합니다!!</Text4>
            <Text5>밀당으로 혈당을 관리하러 가볼까요??</Text5>
            <Buttondiv>
                <CreateButton onClick={() => navigate('/login')}>
                    <BsEmojiLaughingFill size="24px" style={{ marginRight: '10px' }} />
                    서비스 이용하러 가기!!
                </CreateButton>
            </Buttondiv>
        </Scroll>
    );
}

export default Intro;
