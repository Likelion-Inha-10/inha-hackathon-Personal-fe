import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  TextBox,
  Button,
  Background,
  ButtonWrapper2,
} from "../component/Styled";
import styled from "styled-components";
import { FaChevronLeft } from "react-icons/fa";
import Modal from "../component/Modal";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Mainbox = styled.div`
  width: 272px;
  height: 307px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 150px;
  border-radius: 5px;
  border: none;
  box-shadow: 2px 5px 5px rgb(161, 161, 161);
  background-color: #ffffff;
`;

const StepIconWrapper = styled.div`
  float: left;
  text-align: center;
  width: 100%;
  margin-top: ${(props) => props.marginTop || "0"};
  margin-left: ${(props) => props.marginLeft || "0"};
`;

const StepIcon = styled.div`
  width: 34px;
  height: 7px;
  border-radius: 20px;
  background: ${(props) => props.background || "lightgray"};
  float: left;
`;

const QuestionBox = styled.div`
  height: 75px;
`;

const ResultText = styled.div`
  font-size: 15px;
`;

const ResultTextWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const RestartBtn = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <TextBox
        onClick={openModal}
        padding="33px 0 0 20px"
        fontSize="21px"
        fontWeight="bold"
        float="left"
      >
        <FaChevronLeft cursor="pointer" />
        Home
      </TextBox>
      <Modal
        open={modalOpen}
        close={closeModal}
        header="내용이 저장되지 않아요"
      >
        지금 나가실 경우, 지금까지의 내용들이 저장되지 않고 사라지게 됩니다.
        <br />
        괜찮으시겠어요?
      </Modal>
    </React.Fragment>
  );
};
const ColorQ8 = () => {
  const [buttonState, setButtonState] = useState(0);

  return (
    <>
      <Background>
        <RestartBtn />

        <StepIconWrapper marginTop="30px" marginLeft="25px">
          <StepIcon background="#A712DF" />
          <StepIcon background="linear-gradient(90deg, #A712DF, #df12c7)" />
          <StepIcon background="#df12c7" />
          <StepIcon background="linear-gradient(90deg, #df12c7, #df2a12)" />
          <StepIcon background="linear-gradient(90deg, #df2a12, #df6112)" />
          <StepIcon background="#df6112" />
          <StepIcon background="linear-gradient(90deg, #df6112, #EDC21E)" />
          <StepIcon background="#EDC21E" />
        </StepIconWrapper>

        <Mainbox>
          <TextBox
            color="#777777"
            fontSize="17px"
            fontWeight="500"
            padding="16px 0 0 16px"
          >
            Q8.
          </TextBox>
          <QuestionBox>
            <TextBox fontSize="17px" fontWeight="600" padding="16px 0 0 16px">
              10명 중에 자신을 순위로
              <br />
              매겨본다면 상위권인가요?
            </TextBox>
          </QuestionBox>

          <TextBox
            color="#A3A3A3"
            fontSize="14px"
            fontWeight="600"
            padding="41px 0 0 16px"
          >
            NO
          </TextBox>
          <StepIconWrapper marginTop="8px">
            <Button
              padding="32px 23px 32px 23px"
              margin="1px"
              onClick={() => setButtonState(1)}
              backgroundColor={buttonState >= 1 ? "#eb76f1" : "#e8e8e8"}
            />
            <Button
              padding="32px 23px 32px 23px"
              margin="1px"
              onClick={() => setButtonState(2)}
              backgroundColor={buttonState >= 2 ? "#eb76f1" : "#e8e8e8"}
            />
            <Button
              padding="32px 23px 32px 23px"
              margin="1px"
              onClick={() => setButtonState(3)}
              backgroundColor={buttonState >= 3 ? "#eb76f1" : "#e8e8e8"}
            />
            <Button
              padding="32px 23px 32px 23px"
              margin="1px"
              onClick={() => setButtonState(4)}
              backgroundColor={buttonState >= 4 ? "#eb76f1" : "#e8e8e8"}
            />
            <Button
              padding="32px 23px 32px 23px"
              margin="1px"
              onClick={() => setButtonState(5)}
              backgroundColor={buttonState >= 5 ? "#eb76f1" : "#e8e8e8"}
            />
          </StepIconWrapper>
          <TextBox
            color="#A3A3A3"
            fontSize="14px"
            fontWeight="600"
            float="right"
            padding="5px 16px 0 0"
          >
            YES
          </TextBox>
        </Mainbox>
        <ButtonWrapper2>
          <NavLink to={"/colorQ7"}>
            <Button
              borderRadius="100%"
              padding="10px 13px 6px 10px"
              margin="20px 30px 0 12px"
              fontSize="25px"
              fontWeight="700"
              float="right"
              boxShadow="0 5px 5px rgb(161, 161, 161)"
              backgroundColor={"linear-gradient(to right, #f0b6f3, #eb76f1)"}
              color={"white"}
              cursor={buttonState > 0 ? "pointer" : "default"}
            >
              <IoIosArrowBack />
            </Button>
          </NavLink>

          <NavLink to={buttonState > 0 ? "/colorResult" : "/colorQ8"}>
            <Button
              padding="12px 3px 8px 13px"
              margin="20px 0 0 30px"
              fontSize="25px"
              fontWeight="700"
              float="right"
              boxShadow="0 5px 5px rgb(161, 161, 161)"
              width="86px"
              backgroundColor={
                buttonState > 0
                  ? "linear-gradient(to right, #f0b6f3, #eb76f1)"
                  : "#e8e8e8"
              }
              color={buttonState > 0 ? "white" : "black"}
              cursor={buttonState > 0 ? "pointer" : "default"}
            >
              <ResultTextWrapper>
                <ResultText>결과</ResultText>
                <IoIosArrowForward />
              </ResultTextWrapper>
            </Button>
          </NavLink>
        </ButtonWrapper2>
      </Background>
    </>
  );
};

export default ColorQ8;
