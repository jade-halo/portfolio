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
height: 85vh;
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
<br/>저는 대학생 시절의 사업경험을 살려 동원그룹의 핵심 브랜드인 동원참치를 담당했고 이때의 성과를 인정받아 최연소로 리챔 브랜드를 맡아서 이끌어 가고 있습니다.<br/>이처럼 비슷하지만 완전히 다른 2개의 브랜드를 경험하면서 다양한 일을 주도적으로 수행하고 경험할 수 있었습니다.<br/>산업은 달라도 브랜딩의 본질은 변하지 않기에 그 어떤 분야에서도 업무를 수행할 역량이 있다고 생각합니다. 
</Description>
<Description>
<strong>성과를 낼 수 있는 업무</strong>
<p>
<ul>
    <li>
    브랜드 스토리를 기반으로 고객과 시장 중심의 브랜드 관리 및 전략 수립
    </li>
    <li>
    브랜드와 연관된 모든 이해관계자들을 한 방향으로 이끄는 커뮤니케이션
    </li>
    <li>
    IMC 차원의 ATL&BTL 브랜드 캠페인 Plan(기획)-Do(실행)-See(점검) 진행
    </li>
    <li>
    데이터에 기반한 NPD 프로세스를 통한 신제품 개발, 런칭 및 사후관리
    </li>
    <li>
    BOM부터 SKU까지의 제품 포트폴리오 관리와 문제발생시 이슈 해결
    </li>
    <li>
    Win-Win 전략기반의 이종업종간의 콜라보레이션 제안부터 기획 및 실행
    </li>
    <li>
    ROI 분석 관점의 효율적인 온오프라인 프로모션 및 디지털 마케팅 실행
    </li>
</ul>
</p>
</Description>
<Description>
<strong>일에 몰입하는 방식</strong>
<ul>
       #사명감_브랜드는 내 얼굴이다 #진취형_나아가야 나아진다
</ul>
<ul>
       #창조적_생각말고 사고하자 #감지력_숫자에서 느끼자
</ul>
<ul>
       #호혜성_가는 일이 고와야 오는 일도 곱다
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
        국내 최초 프롬프트 엔지니어링 경진대회 wrtn 참가
    </li>
    <li>
        전임직원 대상으로 ChatGPT 교육 사내강사 활동
    </li>
    <li>
        사내 AI공모전 입상(이미지 제작, 서비스 기획)
    </li>
    <li>
        생성형 AI를 활용한 브랜드 필름 영상 제작
    </li>
    <li>
        AI tool을 활용한 웹사이트 개발 및 배포 
    </li>

</ul>
</p>
</Description>
<Description>
<strong>Tools</strong>
<ul>
#ChatGPT #Photoshop #Illustrator #Runway #Notion #Figma 
</ul>
</Description>

            </Main>

            <BigTitle text="Skills" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
