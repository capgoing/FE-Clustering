import styled from "styled-components";
import colors from "../../../styles/colors";
import MODIFY from '../../../assets/images/cluster/modify.png';
import DELETE from '../../../assets/images/cluster/delete.png';

const EditModalContainer = styled.div`
    width: 4.5vw;
    height: 3vw;
    background-color: ${colors.mainColor};
    position: absolute;
    right: 0;
    top: 2vw;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.1875vw;
    border: 0.0375vw solid ${colors.textColor};
    background: ${colors.white};
`;

const EditItemContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.45vw;
`;

const EditItemBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    gap: 0.45vw;
`;

const ModifyP = styled.p`
    color: ${colors.mainColor};
    font-size: 0.6vw;
`;

const DeleteP = styled.p`
    color: ${colors.textColor2};
    font-size: 0.6vw;
`;

const EditItemImg = styled.img`
    width: 0.675vw;
    height: auto;
`;

const EditModal = ({ onModify }) => {
    return (
        <EditModalContainer>
            <EditItemContainer>
                <EditItemBox onClick={onModify}>
                    <EditItemImg src={MODIFY} alt="modify"/>
                    <ModifyP>수정하기</ModifyP>
                </EditItemBox>
                <EditItemBox>
                    <EditItemImg src={DELETE} alt="delete" />
                    <DeleteP>삭제하기</DeleteP>
                </EditItemBox>
            </EditItemContainer>
        </EditModalContainer>
    );
};

export default EditModal;
