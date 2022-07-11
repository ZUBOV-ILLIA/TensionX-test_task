import React from "react";
import styled from "styled-components";
export const AddQuestion = () => {
  const ButtonsFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const ButtonMain2Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <QuestionTYPEMultipleChoiceRoot>
      <Sidebar>
        <WhiteFlexColumn>
          <MainMenu margin={"0px 0px 212px 0px"}>
            <MainMenuMaster margin={"0"}>
              <MainMenuItem gap={"10px"}>
                <FlexRow backgroundColor={"transparent"}>
                  <Lsgraph
                    src={"https://file.rendit.io/n/sFOWXuXgzTDVWlRSb3nY.svg"}
                  />
                </FlexRow>
              </MainMenuItem>
              <MainMenuItem gap={"10px"}>
                <FlexRow backgroundColor={"transparent"}>
                  <Lsgraph
                    src={"https://file.rendit.io/n/L8ycGxlhJYWC6u7IyI8y.svg"}
                  />
                </FlexRow>
              </MainMenuItem>
              <MainMenuItem gap={"10px"}>
                <FlexRow backgroundColor={"transparent"}>
                  <Lsgraph
                    src={"https://file.rendit.io/n/tr9DNsiov4ESIjgRulTb.svg"}
                  />
                </FlexRow>
              </MainMenuItem>
              <MainMenuItem gap={"10px"}>
                <FlexRow backgroundColor={"transparent"}>
                  <Lsgraph
                    src={"https://file.rendit.io/n/xVf5HK6SQbOFfEegqN0W.svg"}
                  />
                </FlexRow>
              </MainMenuItem>
              <MainMenuItem gap={"10px"}>
                <FlexRow backgroundColor={"transparent"}>
                  <Lsgraph
                    src={"https://file.rendit.io/n/tbwmNcO8KdbvVJb1dXQJ.svg"}
                  />
                </FlexRow>
              </MainMenuItem>
              <MainMenuItem gap={"10px"}>
                <FlexRow backgroundColor={"#4282aa"}>
                  <Lsgraph
                    src={"https://file.rendit.io/n/wPMDGYusgCUfsBWVJqGz.svg"}
                  />
                </FlexRow>
              </MainMenuItem>
              <MainMenuItem gap={"10px"}>
                <FlexRow backgroundColor={"transparent"}>
                  <Lsgraph
                    src={"https://file.rendit.io/n/vhdQSV7UASh50pa45GK7.svg"}
                  />
                </FlexRow>
              </MainMenuItem>
            </MainMenuMaster>
          </MainMenu>
          <MainMenuMaster margin={"0px 0px 24px 0px"}>
            <MainMenuItem gap={"10px"}>
              <FlexRow6>
                <Lsgraph
                  src={"https://file.rendit.io/n/TJvLMSO3UkCsBSUgkmkX.svg"}
                />
              </FlexRow6>
            </MainMenuItem>
            <MainMenuItem gap={"10px"}>
              <FlexRow backgroundColor={"transparent"}>
                <Lsgraph
                  src={"https://file.rendit.io/n/llsyJKBW50LLF1QZGVP4.svg"}
                />
              </FlexRow>
            </MainMenuItem>
          </MainMenuMaster>
          <UserMenu>
            <MainMenuItem gap={"10px"}>
              <FlexRow8 />
            </MainMenuItem>
          </UserMenu>
        </WhiteFlexColumn>
      </Sidebar>
      <MainContent>
        <MainMenuItem gap={"0px"}>
          <PageHeader>
            <Header>
              <FlexColumn gap={"8px"}>
                <MainMenuItem gap={"8px"}>
                  <FlexRow9 gap={"8px"}>
                    <Image9
                      src={"https://file.rendit.io/n/1O7l0lByevTUVSB2emOz.svg"}
                    />
                    <Title>Exams</Title>
                  </FlexRow9>
                  <Image9
                    src={"https://file.rendit.io/n/Ji2Jkf0JdV3Wd4VgrfrT.svg"}
                  />
                  <Title1>New Exam Title here</Title1>
                  <Image9
                    src={"https://file.rendit.io/n/Ji2Jkf0JdV3Wd4VgrfrT.svg"}
                  />
                  <Title1>New Question</Title1>
                </MainMenuItem>
                <FlexRow10 gap={"16px"}>
                  <FlexRow10 gap={"12px"}>
                    <StudentName>Add Question</StudentName>
                  </FlexRow10>
                </FlexRow10>
              </FlexColumn>
              <Buttons
                onClick={(e) => ButtonsFunction(e, "Buttons")}
                gap={"24px"}
              >
                <FlexColumn gap={"10px"}>
                  <MasterButton>
                    <Clear
                      src={"https://file.rendit.io/n/yC4Y0OrZ9LV3ATHkkldE.svg"}
                    />
                    <Title3 color={"#777777"}>Delete Question</Title3>
                  </MasterButton>
                </FlexColumn>
                <FlexColumn gap={"10px"}>
                  <MasterButton1 backgroundColor={"#4282aa"}>
                    <Clear
                      src={"https://file.rendit.io/n/HvgJStGkhmWqm37JsI2r.svg"}
                    />
                    <Title3 color={"#ffffff"}>Save Question</Title3>
                  </MasterButton1>
                </FlexColumn>
              </Buttons>
            </Header>
          </PageHeader>
        </MainMenuItem>
        <FlexColumn gap={"24px"}>
          <Element2>
            <Text8>1. Question Type</Text8>
            <FlexColumn gap={"4px"}>
              <MainMenuItem gap={"0px"}>
                <DropdownMaster>
                  <FlexRow9 gap={"12px"}>
                    <Graduationcapf
                      src={"https://file.rendit.io/n/8G3w6JeLP2WwbIz5D9MI.png"}
                    />
                    <MainMenuItem gap={"0px"}>
                      <MainMenu margin={"0"}>
                        <Title5>Multiple choice</Title5>
                      </MainMenu>
                    </MainMenuItem>
                  </FlexRow9>
                  <Clear
                    src={"https://file.rendit.io/n/iYjIdf45xuzSAwkVmeU3.svg"}
                  />
                </DropdownMaster>
              </MainMenuItem>
            </FlexColumn>
          </Element2>
          <Element2>
            <Text8>2. Question</Text8>
            <QuestionArea height={"auto"}>
              <TextArea2>
                <FlexRow9 gap={"12px"}>
                  <Graduationcapf1
                    src={"https://file.rendit.io/n/AHBju6Ttpk8zomOjFJwm.png"}
                  />
                  <Text10>Question Text...</Text10>
                </FlexRow9>
                <Image10 src={""} />
                <FlexRow9 gap={"16px"}>
                  <Buttons
                    onClick={(e) => ButtonsFunction(e, "ButtonIconBg")}
                    gap={"0px"}
                  >
                    <CollapseButton>
                      <Image1
                        src={
                          "https://file.rendit.io/n/q3AtKGRkbHOKoUcy8oyf.svg"
                        }
                      />
                    </CollapseButton>
                  </Buttons>
                </FlexRow9>
              </TextArea2>
            </QuestionArea>
          </Element2>
          <Element2>
            <FlexRow10 gap={"12px"}>
              <Text8>3. Answers</Text8>
              <Text12>(please tick the correct answers)</Text12>
            </FlexRow10>
            <MainMenuItem gap={"12px"}>
              <AnswerArea>
                <TextArea4>
                  <TextArea3>
                    <CheckBox1>
                      <Clear
                        src={
                          "https://file.rendit.io/n/QlHM9PNe7WISQg8uGKWM.svg"
                        }
                      />
                    </CheckBox1>
                    <MainMenuItem gap={"10px"}>
                      <Text13>Answer Text...</Text13>
                    </MainMenuItem>
                  </TextArea3>
                  <FlexRow9 gap={"16px"}>
                    <Buttons
                      onClick={(e) => ButtonsFunction(e, "ButtonIconBg1")}
                      gap={"0px"}
                    >
                      <CollapseButton1>
                        <Image1
                          src={
                            "https://file.rendit.io/n/q3AtKGRkbHOKoUcy8oyf.svg"
                          }
                        />
                      </CollapseButton1>
                    </Buttons>
                  </FlexRow9>
                </TextArea4>
              </AnswerArea>
            </MainMenuItem>
            <MainMenuItem gap={"12px"}>
              <AnswerArea>
                <TextArea4>
                  <TextArea3>
                    <CheckBox1>
                      <Clear
                        src={
                          "https://file.rendit.io/n/QlHM9PNe7WISQg8uGKWM.svg"
                        }
                      />
                    </CheckBox1>
                    <MainMenuItem gap={"10px"}>
                      <Text13>Answer Text...</Text13>
                    </MainMenuItem>
                  </TextArea3>
                  <FlexRow9 gap={"16px"}>
                    <Buttons
                      onClick={(e) => ButtonsFunction(e, "ButtonIconBg2")}
                      gap={"0px"}
                    >
                      <CollapseButton1>
                        <Image1
                          src={
                            "https://file.rendit.io/n/q3AtKGRkbHOKoUcy8oyf.svg"
                          }
                        />
                      </CollapseButton1>
                    </Buttons>
                  </FlexRow9>
                </TextArea4>
              </AnswerArea>
            </MainMenuItem>
            <MainMenuItem gap={"12px"}>
              <AnswerArea>
                <TextArea4>
                  <TextArea3>
                    <CheckBox1>
                      <Clear
                        src={
                          "https://file.rendit.io/n/QlHM9PNe7WISQg8uGKWM.svg"
                        }
                      />
                    </CheckBox1>
                    <MainMenuItem gap={"10px"}>
                      <Text13>Answer Text...</Text13>
                    </MainMenuItem>
                  </TextArea3>
                  <FlexRow9 gap={"16px"}>
                    <Buttons
                      onClick={(e) => ButtonsFunction(e, "ButtonIconBg3")}
                      gap={"0px"}
                    >
                      <CollapseButton1>
                        <Image1
                          src={
                            "https://file.rendit.io/n/q3AtKGRkbHOKoUcy8oyf.svg"
                          }
                        />
                      </CollapseButton1>
                    </Buttons>
                  </FlexRow9>
                </TextArea4>
              </AnswerArea>
            </MainMenuItem>
            <MainMenuItem gap={"12px"}>
              <AnswerArea>
                <TextArea4>
                  <TextArea3>
                    <CheckBox1>
                      <Clear
                        src={
                          "https://file.rendit.io/n/QlHM9PNe7WISQg8uGKWM.svg"
                        }
                      />
                    </CheckBox1>
                    <MainMenuItem gap={"10px"}>
                      <Text13>Answer Text...</Text13>
                    </MainMenuItem>
                  </TextArea3>
                  <FlexRow9 gap={"16px"}>
                    <Buttons
                      onClick={(e) => ButtonsFunction(e, "ButtonIconBg4")}
                      gap={"0px"}
                    >
                      <CollapseButton1>
                        <Image1
                          src={
                            "https://file.rendit.io/n/q3AtKGRkbHOKoUcy8oyf.svg"
                          }
                        />
                      </CollapseButton1>
                    </Buttons>
                  </FlexRow9>
                </TextArea4>
              </AnswerArea>
            </MainMenuItem>
            <ButtonMain2 onClick={(e) => ButtonMain2Function(e, "ButtonMain2")}>
              <MasterButton1 backgroundColor={"transparent"}>
                <Clear
                  src={"https://file.rendit.io/n/gcrHXSEFyIBVS9RwbbNm.svg"}
                />
                <Title3 color={"#4282aa"}>Add Answer</Title3>
              </MasterButton1>
            </ButtonMain2>
          </Element2>
          <Element2>
            <Text8>4. Points</Text8>
            <TextArea11>
              <FlexRow9 gap={"8px"}>
                <Graduationcapf
                  src={"https://file.rendit.io/n/TkTGXIn3B7JkUXIIbslV.png"}
                />
                <Text18>point for the right answer</Text18>
              </FlexRow9>
            </TextArea11>
            <ButtonMain2 onClick={(e) => ButtonMain2Function(e, "ButtonMain3")}>
              <MasterButton1 backgroundColor={"transparent"}>
                <Clear
                  src={"https://file.rendit.io/n/RuXLBLfpFJ04DlmCU4xo.svg"}
                />
                <Title3 color={"#4282aa"}>Change</Title3>
              </MasterButton1>
            </ButtonMain2>
          </Element2>
          <Element2>
            <Text8>5. Comments</Text8>
            <QuestionArea height={"86px"}>
              <TextArea2>
                <FlexRow9 gap={"10px"}>
                  <Graduationcapf3
                    src={"https://file.rendit.io/n/2o3pimEBNjViwN62wFD6.png"}
                  />
                  <Text10>Teacher comment...</Text10>
                </FlexRow9>
                <Image14 src={""} />
              </TextArea2>
            </QuestionArea>
          </Element2>
        </FlexColumn>
      </MainContent>
    </QuestionTYPEMultipleChoiceRoot>
  );
};
const QuestionTYPEMultipleChoiceRoot = styled.div`
  height: 1114px;
  background-color: #f6f9fb;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 1px;
  justify-content: flex-start;
  align-items: flex-start;
  margin: auto;
  min-width: 1440px;
`;
const Sidebar = styled.div`
  border-width: 1px;
  border-color: #d0e7ef;
  border-style: solid;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
`;
const WhiteFlexColumn = styled.div`
  width: 48px;
  height: 772px;
  background-color: #ffffff;
  display: flex;
  align-self: stretch;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  padding: 72px 10px 56px 10px;
`;
const FlexRow6 = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
const UserMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;
const FlexRow8 = styled.div`
  border-width: 2px;
  border-color: #b2b7c1;
  border-style: solid;
  width: 44px;
  height: 44px;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 48px;
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
`;
const PageHeader = styled.div`
  width: 1371px;
  background-color: #f6f9fb;
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  flex-grow: 1;
`;
const Header = styled.div`
  width: 1323px;
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  flex-grow: 1;
  padding: 24px;
`;
const Title = styled.div`
  font-size: 10px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 14px;
  color: #717782;
`;
const StudentName = styled.div`
  text-align: center;
  display: flex;
  font-size: 30px;
  font-family: Poppins;
  font-weight: 700;
  line-height: 36px;
  color: #4282aa;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const MasterButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 8px 16px;
`;
const DropdownMaster = styled.div`
  border-width: 1px;
  border-color: #d0e7ef;
  border-style: solid;
  width: 698px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  border-radius: 8px;
  padding: 16px 24px 16px 16px;
`;
const Title5 = styled.div`
  display: flex;
  font-size: 16px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
  color: #4282aa;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
const Graduationcapf1 = styled.img`
  width: 31px;
  height: 30px;
`;
const Image10 = styled.img`
  width: 88px;
  height: 30px;
`;
const CollapseButton = styled.div`
  width: 31px;
  height: 30px;
  background-color: #f5f7fa;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
const Text12 = styled.div`
  text-align: center;
  display: flex;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 21px;
  color: #777777;
  flex-direction: row;
  gap: 6px;
  justify-content: flex-start;
  align-items: flex-start;
`;
const TextArea11 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  min-width: 700px;
`;
const Text18 = styled.div`
  font-size: 16px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 24px;
  color: #777777;
`;
const Graduationcapf3 = styled.img`
  width: 31px;
  height: 31px;
`;
const Image14 = styled.img`
  width: 87px;
  height: 46px;
`;
const MainMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: ${(props) => props.margin};
`;
const MainMenuMaster = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: flex-start;
  margin: ${(props) => props.margin};
`;
const MainMenuItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${(props) => props.gap};
`;
const FlexRow = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  flex-grow: 1;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
`;
const Lsgraph = styled.img`
  width: 28px;
  height: 28px;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${(props) => props.gap};
`;
const FlexRow9 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${(props) => props.gap};
`;
const Image9 = styled.img`
  width: 16px;
  height: 16px;
`;
const Title1 = styled.div`
  display: flex;
  font-size: 10px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 14px;
  color: #717782;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;
const FlexRow10 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  gap: ${(props) => props.gap};
`;
const Buttons = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
  border-width: 0px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    opacity: 70%;
  }
  gap: ${(props) => props.gap};
`;
const Clear = styled.img`
  width: 20px;
  height: 20px;
`;
const Title3 = styled.div`
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 19.6px;
  color: ${(props) => props.color};
`;
const MasterButton1 = styled.div`
  border-width: 1px;
  border-color: #4282aa;
  border-style: solid;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 8px 16px;
  background-color: ${(props) => props.backgroundColor};
`;
const Element2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  min-width: 700px;
`;
const Text8 = styled.div`
  text-align: center;
  font-size: 16px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
  color: #777777;
`;
const Graduationcapf = styled.img`
  width: 32px;
  height: 32px;
`;
const QuestionArea = styled.div`
  border-width: 1px;
  border-color: #d0e7ef;
  border-style: solid;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 4px;
  padding: 16px;
  height: ${(props) => props.height};
`;
const TextArea2 = styled.div`
  width: 666px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  align-items: flex-start;
  flex-grow: 1;
`;
const Text10 = styled.div`
  font-size: 16px;
  font-family: Poppins;
  line-height: 19.2px;
  color: #777777;
`;
const Image1 = styled.img`
  width: 24px;
  height: 24px;
`;
const AnswerArea = styled.div`
  border-width: 1px;
  border-color: #d0e7ef;
  border-style: solid;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 4px;
  padding: 16px;
`;
const TextArea4 = styled.div`
  width: 668px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  align-items: flex-start;
`;
const TextArea3 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 4px 0px 0px 8px;
`;
const CheckBox1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2px 0px 0px 0px;
`;
const Text13 = styled.div`
  width: 499px;
  font-size: 16px;
  font-family: Poppins;
  line-height: 24px;
  color: #777777;
`;
const CollapseButton1 = styled.div`
  width: 32px;
  height: 32px;
  background-color: #f5f7fa;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
const ButtonMain2 = styled.button`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
  border-width: 0px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    opacity: 70%;
  }
`;
