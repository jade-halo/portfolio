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
height:110vh;
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
height: 75vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'GcbRegular';
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
font-family: 'GcbBold', sans-serif;

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
font-family: 'GcbRegular';


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
<br/>브랜딩의 시작은 '사람들의 머릿속에서 기억될 이름'과 '왜 존재해야 하는가'를 정의하는 것이라고 생각합니다. <br/> 그 다음 전략, 제품, 광고 등 다양한 마케팅을 바탕으로 브랜드를 관리하고 키워나가는 과정을 통해 해당 카테고리의 Top of Mind로 만드는 것이 브랜딩이라고 생각합니다. <br/> 이러한 생각을 가지고 저는 다음과 같은 업무를 수행할 수 있습니다.
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
        프로덕트 기획 및 개발
    </li>
    <li>
        소셜미디어 운영, 제휴 마케팅
    </li>
</ul>
</Description>
<Description>
<strong>I AM</strong>
<ul>
       #내꺼라는_주인의식 #하고보는_도전정신 #번뜩이는_아이디어 #데이터와_인사이트
</ul>
</Description>

            </Main>
            <Main>
<Title>
    <Develope width={40} height={50} /> AI Associate
</Title>
<Description>
<br/>AI가 기존의 업무 방식을 송두리째 바꿀 것이라고 믿습니다. 그리고 AI가 사람을 대체하는 것이 아닌 AI를 잘 활용하는 사람이 그러지 못한 사람을 대체할 것이라고 생각합니다. <br/>비전공자에 개발자도 아니지만 누군가로부터 대체되는게 아닌 누군가를 대체하기 위해서 AI를 적극적으로 활용하고 있습니다. <br/> 이러한 생각을 가지고 저는 다음과 같은 프로젝트를 진행했습니다.
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
        생성형AI 컨텐츠 제작
    </li>

</ul>
</p>
</Description>
<Description>
<strong>Tools</strong>
<ul>
Prompting, Generative AI, Photoshop & Illustrator and more.
</ul>
</Description>

            </Main>

            <BigTitle text="Skills" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
