import styled from 'styled-components';

const RootContainer = styled.div `
  display:flex;
  justify-content:center;
  width: 100%;
`

const Container = styled.div`
width: 960px;
padding-top: 120px;
display: flex;
justify-content:center;
`

const Section = styled.div`
  width: 620px; 
  padding:24px;
  background-color: #e8ecf4;
  display: flex;
  flex-direction : column;
  align-items: center;
  border-radius: 16px;

`;

const h1 = styled.span`
  margin-block-start: 0;
  margin-block:end: 0;
  font-size: 24px;
  font-weight: 700;
`

const Body = styled.span`
font-size: 15px;
font-weight: 400;
line-height: 24px;
color: ##1a1a1c;
`

const Button = styled.button `
  background-color:royalblue;
  color: white;
  font-weight:600;
  font-size: 16px;
  width: 100%;
  height: 48px;
  border:none;
  border-radius:10px;
  padding:6px 11px 6px 12px;
`;



function App() {
    return (
        <RootContainer>
          <Container>
            <Section>
                <Body> 
                  안녕하세요. 구독자님. 가장 주목받는 디자인 도구인 피그마가 AI로 UI를 그리는 기능을 공개했습니다. 
                  주로 그래픽과 관련된 결과물만 보다가 평소에 사용하는 도구에 삽입이 되니 AI가 디자인하는 시대가 더 피부에 와닿게 되었습니다. 
                  AI는 디자이너에게 기회가 될까요 혹은 위기가 될까요? 그럼 이번 레터도 즐겁게 읽어주세요! 
                </Body>
            </Section>
            </Container>
        </RootContainer>
    );
}

export default App;
