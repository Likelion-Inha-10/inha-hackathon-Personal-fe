import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TextBox, Button, Background, Wrapper } from "../component/Styled";
import styled from "styled-components";
import { FaChevronLeft } from "react-icons/fa";
import Modal from "../component/Modal";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { animate } from "../component/Styled/animate";

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
  width: 45px;
  height: 7px;
  border-radius: 20px;
  background: ${(props) => props.background || "lightgray"};
  float: left;
`;

const GreySmallText = styled.div`
  font-size: 14px;
  color: #a3a3a3;
  display: inline;
`;

const QuestionBox = styled.div`
  height: 75px;
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
        &nbsp;Home
      </TextBox>
      <Modal
        open={modalOpen}
        close={closeModal}
        header="내용이 저장되지 않아요!"
      >
        지금 나가실 경우, 지금까지의 내용들이 저장되지 않고 사라지게 됩니다.
        <br />
        괜찮으시겠어요?
      </Modal>
    </React.Fragment>
  );
};
const ColorQ5 = () => {
  const [buttonState, setButtonState] = useState(0);

  return (
    <>
      <motion.div
        initial={animate.initial}
        animate={animate.animate}
        exit={animate.exit}
      >
        <Wrapper>
          <Background>
            <RestartBtn />

            <StepIconWrapper marginTop="30px" marginLeft="25px">
              <StepIcon background="#A712DF" />
              <StepIcon background="linear-gradient(90deg, #b612df, #df12c7)" />
              <StepIcon background="linear-gradient(90deg, #df12c7, #df2a12)" />
              <StepIcon background="linear-gradient(90deg, #df2a12, #df6112)" />
              <StepIcon background="linear-gradient(90deg, #df6112, #edbd1e)" />
              <StepIcon background="lightgray" />
            </StepIconWrapper>

            <Mainbox>
              <TextBox
                color="#777777"
                fontSize="17px"
                fontWeight="500"
                padding="16px 0 0 16px"
              >
                Q5.
              </TextBox>
              <QuestionBox>
                <TextBox
                  fontSize="17px"
                  fontWeight="600"
                  padding="16px 0 0 16px"
                  lineHeight="1.5"
                >
                  혼자하는 취미<GreySmallText>(독서,연주,감상)</GreySmallText>와
                  <br />
                  함께하는 취미<GreySmallText>
                    (구기 운동,모임)
                  </GreySmallText>{" "}
                  중
                  <br />
                  혼자하는 취미를 더 선호한다.
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

            <NavLink to={"/colorQ4"}>
              <Button
                borderRadius="50%"
                padding="7px 10px 3px 7px"
                margin="35px 0 0 45px"
                fontSize="25px"
                fontWeight="700"
                float="left"
                boxShadow="0 5px 5px rgb(161, 161, 161)"
                backgroundColor="#ebebeb"
                color="black"
                cursor="pointer"
              >
                <IoIosArrowBack />
              </Button>
            </NavLink>

            <NavLink to={buttonState > 0 ? "/colorQ6" : "/colorQ5"}>
              <Button
                borderRadius="50%"
                padding="7px 7px 3px 10px"
                margin="35px 45px 0 30px"
                fontSize="25px"
                fontWeight="700"
                float="right"
                boxShadow="0 5px 5px rgb(161, 161, 161)"
                backgroundColor={
                  buttonState > 0
                    ? "linear-gradient(to right, #f0b6f3, #eb76f1)"
                    : "#e8e8e8"
                }
                color={buttonState > 0 ? "white" : "black"}
                cursor={buttonState > 0 ? "pointer" : "default"}
              >
                <IoIosArrowForward />
              </Button>
            </NavLink>
          </Background>
        </Wrapper>
      </motion.div>
    </>
  );
};

export default ColorQ5;
