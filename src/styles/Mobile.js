import { Link, Outlet, matchRoutes, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import routes from '../routes.js';
import classNames from 'classnames';
import { BiChevronLeft } from "react-icons/bi";
import { FaMapMarkerAlt, FaMedal } from "react-icons/fa";
import { MdWaterDrop, MdFoodBank } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
`;

const Content = styled.div`
    width: 100%;
    max-width: 390px;
    min-height: 100vh;
    padding-bottom: 110px;
    overflow: auto;
    box-shadow: 0px 0px 32px #0000002f;
    background-color: #ffffff;

    &.map-page {
        padding-bottom: 0px;
    }

    scrollbar-width: none;
    .scroll::-webkit-scrollbar {
        display: none;
    }
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    padding: 16px 0px;
    position: relative;
`;

const Logo = styled.img`
    width: 140px;
    height: 50px;
    cursor: pointer;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    &.hidden {
        visibility: hidden;
    }
`;

const BackButton = styled.button`
    width: 54px;
    height: 54px;
    border: none;
    color: #B8B6B4;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 18px;

    cursor: pointer;

    & > svg {
        width: 100%;
        height: 100%;
    }

    &.hidden {
        visibility: hidden;
    }
`;

const Footer = styled.div`
    position: fixed;
    max-width: 390px;
    width: 100%;
    height: 90px;
    bottom: 0;
    border-radius: 10px 10px 0 0;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #FFFFFF;
    z-index: 1;

    &.hidden {
        display: none;
    }
`;

const ButtonContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    gap: 1.4vh;
    color: ${(props) => (props.active === 'true' ? '#6A0DAD' : '#D6D6D6')};
    .icon {
        width: 32px;
        height: 32px;
    }
    .icon2 {
        width: 38px;
        height: 38px;
    }
    .icon4 {
        width: 30px;
        height: 30px;
        padding-top: 2px;
    }
`;

const ButtonText = styled.div`
    font-size: 14px;
    font-weight: 500;
`;

const ButtonContainer2 = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    gap: 1.2vh;
    color: ${(props) => (props.active === 'true' ? '#6A0DAD' : '#D6D6D6')};
    .icon2 {
        width: 38px;
        height: 38px;
    }
    .icon3 {
        width: 42px;
        height: 42px;
    }
    .icon5 {
        width: 40px;
        height: 40px;
    }
`;

const ButtonText2 = styled.div`
    font-size: 14px;
    font-weight: 500;
`;

const LOGO_DEFAULT = true;
const FOOTER_DEFAULT = true;
const BACKWARD_DEFAULT = '/';

const MAIN_GROUP = ['/main', '/aftermain', '/aftermain/foodDetail'];
const DIETHON_GROUP = ['/diethon', '/diethondetail/', '/foodregistration'];
const MYPAGE_GROUP = ['/mypage', '/myinfo', '/myfoodexchangelist', '/foodbookmark', '/grapeexchange', '/grapeuse', '/favoritefooddetail/'];

const Mobile = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [showLogo, setLogo] = useState(LOGO_DEFAULT);
    const [showFooter, setFooter] = useState(FOOTER_DEFAULT);
    const [backwardUrl, setBackwardUrl] = useState(BACKWARD_DEFAULT);

    useEffect(() => {
        const result = matchRoutes(routes, location.pathname);

        if (!result || result.length < 1) {
            return;
        }

        const { route } = result[0];

        if (route) {
            setLogo(route.logo ?? LOGO_DEFAULT);
            setFooter(route.footer ?? FOOTER_DEFAULT);
            setBackwardUrl(route.previous ?? BACKWARD_DEFAULT);
        } else {
            setLogo(LOGO_DEFAULT);
            setFooter(FOOTER_DEFAULT);
            setBackwardUrl(BACKWARD_DEFAULT);
        }
    }, [location]);

    const onBackButtonClick = (event) => {
        navigate(backwardUrl);
    };
    
    const isActive = (path, group) => {
        if (group === DIETHON_GROUP) {
            const dynamicPath = '/diethondetail/';
            return location.pathname.startsWith(dynamicPath) || group.includes(location.pathname) || location.pathname === path;
        }

        if (group === MYPAGE_GROUP) {
            const dynamicPath = '/favoritefooddetail/';
            return location.pathname.startsWith(dynamicPath) || group.includes(location.pathname) || location.pathname === path;
        }

        return group.includes(location.pathname) || location.pathname === path;
    };

    const isMapPage = location.pathname === '/map';

    return (
        <>
            <Container>
                <Content className={classNames({ 'map-page': isMapPage })}>
                    <Header>
                        <BackButton
                            onClick={onBackButtonClick}
                            className={classNames({
                                hidden: backwardUrl === false,
                            })}
                        >
                            <BiChevronLeft />
                        </BackButton>
                        <Logo
                            src='/images/mealdangHeaderLogo.png'
                            alt="mealdang"
                            className={classNames({
                                hidden: !showLogo,
                            })}
                            onClick={() => navigate('/main')}
                        />
                    </Header>
                    <Outlet />
                </Content>
                <Footer className={classNames({ hidden: !showFooter })}>
                    <ButtonContainer to="/map" active={isActive('/map', []).toString()}>
                        <FaMapMarkerAlt className='icon' />
                        <ButtonText>밀당 맵</ButtonText>
                    </ButtonContainer>
                    <ButtonContainer2 style={{ paddingBottom: "4px" }} to="/bloodsugar" active={isActive('/bloodsugar', []).toString()}>
                        <MdWaterDrop className='icon2' />
                        <ButtonText2>혈당 관리</ButtonText2>
                    </ButtonContainer2>
                    <ButtonContainer2 to="/main" style={{ paddingBottom: "9px" }} active={isActive('/main', MAIN_GROUP).toString()}>
                        <MdFoodBank className='icon3' />
                        <ButtonText2>홈</ButtonText2>
                    </ButtonContainer2>
                    <ButtonContainer to="/diethon" active={isActive('/diethon', DIETHON_GROUP).toString()}>
                        <FaMedal className='icon4' />
                        <ButtonText>식단톤</ButtonText>
                    </ButtonContainer>
                    <ButtonContainer2 style={{ paddingBottom: "7px" }} to="/mypage" active={isActive('/mypage', MYPAGE_GROUP).toString()}>
                        <BsFillPersonFill className='icon5' />
                        <ButtonText2>마이페이지</ButtonText2>
                    </ButtonContainer2>
                </Footer>
            </Container>
        </>
    );
};

export default Mobile;
