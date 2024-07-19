import styled from "styled-components";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PrivacyTermsModal from './PrivacyTermsModal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
`

const Title = styled.h2`
  font-family: 'WavvePADO-Regular';
  font-size: 30px;
  text-align: center;
  margin: 11px 0 25px 0;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FormItem = styled.div`
  margin-bottom: 41px;
`

const ItemLabel = styled.label`
  font-family: 'WavvePADO-Regular';
  font-size: 25px;
  color: #737373;
`

const RequireSpan = styled.span`
  color: red;
`

const InputField = styled.input`
  width: 350px;
  height: 56px;
  border: 1px solid #737373;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px #B7B7B7;
  margin: 8px auto;
  font-size: 30px;
  font-weight: 400;
  font-family: 'WavvePADO-Regular';
  text-align: center;
`

const Explanation = styled.div`
  font-size: 13px;
  font-family: 'WavvePADO-Regular';
  color: #737373;
`

const AgreeLabel = styled.label`
  font-size: 20px;
  font-weight: 400;
  color: #737373;
`

const AgreeInfo = styled.input`
  align-items: center;
  justify-content: center;
  font-size: 18px;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #737373;
  border-radius: 4px;
  vertical-align: middle;
  margin: 0 10px 2px 0;

  &:checked {
    background-color: #737373;

    &::before {
      content: '\u2713';
      display: block;
      text-align: center;
      line-height: 18px;
      color: white;
      font-size: 25px;
    }
  }
`;

const SubmitButton = styled.button`
  width: 280px;
  height: 56px;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px #B7B7B7;
  background-color: #6A0DAD;
  margin: 26.5px 35px 18px 35px;
  font-size: 30px;
  font-weight: 400;
  font-family: 'WavvePADO-Regular';
  color: #ffffff;
  text-align: center;
`

const Join = () => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [member_id, setMember_id] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [doubleCheckResult, setDoubleCheckResult] = useState('');

  const [agree, setAgree] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState('회원가입'); 


  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  }

  const handleMember_idChange = (e) => {
    setMember_id(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }


  const handleAgree = (e) => {
    setAgree(e.target.checked);
  };

  const handleJoin = (e) => {
    e.preventDefault();

    if (!nickname || !member_id || !password || !email) {
      alert('모든 필수 항목을 입력해주세요.');
      return;
    }
    if (!agree) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      setModalOpen(true); // 개인정보 수집 동의 안되어있으면 모달 열기
      return;
    }
    console.log('회원가입이 완료되었습니다.');
    navigate('/joinSuccess');

  };


  // 아이디 중복 체크 확인하는 코드
  const handleDoubleCheck = async () => {
    try {
      const response = await fetch(`/api/user/id/check/?member_id=${member_id}`);
      const data = await response.json();

      if (data.available) {
        setDoubleCheckResult('사용할 수 있는 아이디입니다.');
      } else {
        setDoubleCheckResult('해당 ID는 사용할 수 없습니다.');
      }
    } catch (error) {
      console.error('Error checking username availability:', error);
    }
  };


  const handlePrivacyAgree = () => {
    setAgree(true);
    setModalOpen(false);
  };

  const handleModalClose = () => {
    setModalOpen(false); // 동의 안하고 모달 닫기
    setTitle('회원가입');
  };

  const handleModalOpen = () => {
    setModalOpen(true);
    setTitle('약관동의');
  };


  return (
    <Container>
      <Title>{title}</Title>
      <Form>
        <FormItem>
          <ItemLabel htmlFor='nickname'>닉네임<RequireSpan>*</RequireSpan></ItemLabel>
          <Explanation />
          <InputField
            type='text'
            id='nickname'
            value={nickname}
            onChange={handleNicknameChange}
            required />
        </FormItem>
        <FormItem>
          <ItemLabel htmlFor='member_id'>아이디<RequireSpan>*</RequireSpan></ItemLabel>
          <Explanation />
          <InputField
            type='text'
            id='member_id'
            value={member_id}
            onChange={handleMember_idChange}
            onBlur={handleDoubleCheck} //ID 입력 후 포커스를 벗어나면 중복 체크
            required />
            {doubleCheckResult && <Explanation>{doubleCheckResult}</Explanation>} 
        </FormItem>
        <FormItem>
          <ItemLabel htmlFor='password'>비밀번호<RequireSpan>*</RequireSpan></ItemLabel>
          <Explanation>대/소문자, 숫자, 특수문자 중 2가지 이상의 조합으로 10자 이상</Explanation>
          <InputField
            type='text'
            id='password'
            value={password}
            onChange={handlePasswordChange}
            required />
        </FormItem>
        <FormItem>
          <ItemLabel htmlFor='email'>이메일<RequireSpan>*</RequireSpan></ItemLabel>
          <Explanation />
          <InputField
            type='email'
            id='email'
            value={email}
            onChange={handleEmailChange}
            required />
        </FormItem>
        <SubmitButton type='submit' onClick={handleJoin}>회원가입하기</SubmitButton>
        <FormItem>
          <AgreeLabel>
            <AgreeInfo
              type="checkbox"
              checked={agree}
              onChange={handleModalOpen}
              required />개인정보 수집 동의하기
          </AgreeLabel>
        </FormItem>
      </Form>

      {modalOpen && <PrivacyTermsModal isOpen={modalOpen} onClose={handleModalClose} onAgree={handlePrivacyAgree} />}

    </Container>
  )
}

export default Join;
