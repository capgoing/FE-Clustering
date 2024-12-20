import styled from "styled-components";
import colors from "../../styles/colors";
import { useNavigate } from "react-router-dom";

const NotFoundLayout = styled.div`
width: 100%;
height: 100%;
background-color: ${colors.backgroundColor};
display:flex;
justify-content: center;
align-items: center;
`;

const NotFoundContainer = styled.div`
width: 90%;
height: 88%;
background-color: ${colors.white};
display:flex;
justify-content: center;
align-items: center;
`;

const NotFoundContentContainer = styled.div`

`;

const TextBold = styled.div`
color: ${colors.black};
font-size: 4rem;
font-style: normal;
font-weight: 600;
line-height: 50px;
margin-bottom: 2.96vw;
`;

const TextLight = styled.div`
color: ${colors.black};
font-size: 2rem;
font-style: normal;
font-weight: 600;
line-height: 30px;
margin-bottom: 5.63vw;
`;

const BackButton = styled.button`
width: 300px;
height: 60px;
flex-shrink: 0;
border-radius: 10px;
background-color: ${colors.mainColor};
color: ${colors.white};
font-size: 2rem;
`;

const NotFound = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1); // 이전 페이지로 이동
    };

    return (
        <NotFoundLayout>
            <NotFoundContainer>
                <NotFoundContentContainer>
                    <TextBold>죄송합니다<br/>페이지를 찾을 수 없습니다</TextBold>
                    <TextLight>페이지가 존재하지 않거나, 사용할 수 없는 페이지 입니다.<br/>
                    입력하신 주소가 정확한지 다시 한 번 확인해주세요.</TextLight>
                    <BackButton onClick={handleGoBack}>이전 페이지로 가기</BackButton>
                </NotFoundContentContainer>
            </NotFoundContainer>
        </NotFoundLayout>
    )
}

export default NotFound;