import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 1px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 65vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.7rem + 0.5vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 9rem;
  font-family: 'NanumSquareLight'
  font-style: italic;
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
        안녕하세요. 브랜드 마케팅을 하고있는 최진혁입니다.
<br /> <br/>
온라인 커머스에 관심을 가지고 조그맣게 사업을 하다가 현 직장에서 브랜딩을 하면서 찾을 수 있었습니다. 제 '인생업무'를 말이죠. 보통 평생 간직하고 싶은 사진을 찍으면 '인생사진'이라고 하잖아요. 그렇게 브랜드를 살아숨쉬게 만드는 브랜딩은 제가 평생 하고싶은 업무가 되었고 브랜드가 우리들의 생각과 행동에 끼치는 영향력을 매일 실감하고 있습니다.
<br/> <br/>
그리고 2007년 제가 중학생 때 출시된 iPhone은 많은 사람들에게 엄청난 충격을 줬다고하는데 어렸을때라 그런지 잘 와닿진 않았어요. 하지만 15년이 지난 2023년 ChatGPT가 등장했을때 저는 알 수 있었습니다. 기술이 주는 엄청난 충격이 무엇인지를요. 그래서 AI에 관심을 가지기 시작했고 보고계신 이 페이지도 다양한 AI tool을 사용해서 만든 결과물입니다.
<br/> <br/>
마지막으로 왼쪽 상단에 보이시는 music 옆의 사운드바를 클릭하시면 노래가 나올거에요. 신나는 노래와 함께 제 포트폴리오 잘 봐주시면 감사드리겠습니다. 
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
