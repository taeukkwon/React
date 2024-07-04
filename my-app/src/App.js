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

const H1 = styled.span`
  font-size: 24px;
  font-weight: 700;
`

const Body = styled.span`
font-size: 15px;
font-weight: 400;
line-height: 24px;
color: ##1a1a1c;
`

const Img = styled.img`
  width : ${props => props.width || "auto"};
  height : ${props => props.height || "auto"};
  src : ${props => props.src};
`

const Gap = styled.div`
  height : ${props => props.height};
  width: 100%;

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
              <Gap height = "16px" />
              <Img width = "40px" src ="https://ci3.googleusercontent.com/meips/ADKq_NbdDz3_9aTXAEu3DY4crt71_FDJwW1_HKj-K6bUfb_XrsNlRWGG8xxM5apkwgPQGkrnGEdg0tuG7pdEVKWhoSe89yf2ZlNKhUUP9d5UWIfygS3FHc2ikbjDbbEx8I5b9ymjGmdV2gCBxJwH=s0-d-e1-ft#https://designcompass.org/wp-content/uploads/2023/07/designcompass-symbol-black-1.png" />
                <Gap height = "24px" />
                <H1>케이의 나침반 뉴스레터</H1>
                <Gap height = "24px" />
                <Body> 
                  안녕하세요. 구독자님. 가장 주목받는 디자인 도구인 피그마가 AI로 UI를 그리는 기능을 공개했습니다. 
                  주로 그래픽과 관련된 결과물만 보다가 평소에 사용하는 도구에 삽입이 되니 AI가 디자인하는 시대가 더 피부에 와닿게 되었습니다. 
                  AI는 디자이너에게 기회가 될까요 혹은 위기가 될까요? 그럼 이번 레터도 즐겁게 읽어주세요! 
                </Body>
                <Gap height = "20px" />
                <Button>지금 확인하기</Button>
            </Section>
            </Container>
        </RootContainer>
    );
}

export default App;
