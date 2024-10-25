import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'NanumSquareLight'
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1.5em + 0.5vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 0.5vw);
padding: 1rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 1rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Design width={40} height={50} /> Brand Marketer
</Title>
<Description>
<br/>브랜딩의 시작은 브랜드의 '사람들의 머릿속에서 기억될 이름'과 브랜드가 '왜 존재해야하는가'를 정의하는 것이라고 생각합니다. <br/> 그 다음 미션, 컨셉, 전략 등을 바탕으로 브랜드를 관리하고 키워나가는 과정을 통해 Top of Mind가 되어 기업의 영리적인 목적 달성에 기여하게 만들어야된다고 생각합니다.
</Description>
<Description>
<strong>I DO</strong>
<ul>
    <li>
        브랜드 운영관리 및 전략수립
    </li>
    <li>
        ATL & BTL 브랜드 캠페인 운영
    </li>
    <li>
        프로덕트 기획, 개발, 런칭
    </li>
    <li>
        소셜미디어, 프로모션 운영
    </li>
</ul>
</Description>
<Description>
<strong>I AM</strong>
<ul>
       #내꺼라는_주인의식 #하고보는_실행력 #번뜩이는_아이디어 #데이터와_마켓센싱
</ul>
</Description>

            </Main>
            <Main>
<Title>
    <Develope width={40} height={50} /> AI Artist
</Title>
<Description>
<br/>AI가 기존의 업무 방식을 송두리째 바꿀 것이라고 믿습니다. 그리고 AI가 사람을 대체하는 것이 아닌 AI를 잘 활용하는 사람이 그러지 못한 사람을 대체할 것이라고 생각합니다. <br/>비전공자에 개발자도 아니지만 누군가로부터 대체되는게 아닌 누군가를 대체하기 위해서 AI를 적극적으로 활용하고 있습니다. 
</Description>
<Description>
<strong>Projects</strong>
<p>
<ul>
    <li>
        wrtn 프롬프톤 참가
    </li>
    <li>
        ChatGPT 사내강사
    </li>
    <li>
        사내 AI공모전 입상
    </li>
    <li>
        AI활용 컨텐츠 제작
    </li>

</ul>
</p>
</Description>
<Description>
<strong>Tools</strong>
<ul>
ChatGPT & Claude, Photoshop % Illustrator, Runway etc.
</ul>
</Description>

            </Main>

            <BigTitle text="Skills" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
