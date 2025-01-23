import styled from "styled-components";
import colors from "../../../styles/colors";

import MODIFY from '../../../assets/images/cluster/modify.png';
import DELETE from '../../../assets/images/cluster/delete.png';

const EditModalContainer = styled.div`
    width: 9rem;
    height: 6rem;
    background-color: ${colors.mainColor};
    position: absolute;
    right: 0;
    top: 1.5vw;


    padding: 0.7rem;
    // top: ${(props) => (props.position ? `${props.position.top}px` : "0px")}; // px 추가
    // left: ${(props) => (props.position ? `${props.position.left}px` : "0px")}; // px 추가
    z-index: 1000;
    display: flex;
    flex-direction: column;

    border-radius: 3.75px;
    border: 0.75px solid var(--text2, #BBB);
    background: #FFF;
`;


const EditItemContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const EditItemBox = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.7rem;
`;

const ModifySpan = styled.span`
color: ${colors.mainColor};
font-size: 1.4rem;
font-style: normal;
letter-spacing: -0.3px;
`;

const DeleteSpan = styled.span`
color: #FD2D69;
font-size: 1.4rem;
font-style: normal;
line-height: 18px; /* 150% */
letter-spacing: -0.3px;
`;

const EditModal = ({ position }) => {
    console.log("EditModal position:", position); // 위치 값이 제대로 전달되는지 확인

    return (
        <EditModalContainer>
            <EditItemContainer position={position}>
                <EditItemBox>
                    <img src={MODIFY} alt="modify"/>
                    <ModifySpan>수정하기</ModifySpan>
                </EditItemBox>
                <EditItemBox>
                    <img src={DELETE} alt="delete" />
                    <DeleteSpan>삭제하기</DeleteSpan>
                </EditItemBox>
            </EditItemContainer>
        </EditModalContainer>
    )
}

export default EditModal;