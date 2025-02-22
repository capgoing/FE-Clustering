import { useState } from "react";
import { API } from "../../../apis/axios";
import styled from "styled-components";
import colors from "../../../styles/colors";
import Main from "../../../assets/images/cluster/main.png";
import Menu from "../../../assets/images/cluster/menu.png";
import Edit from "../../../assets/images/cluster/edit.png";
import Edit2 from "../../../assets/images/cluster/edit2.png";
import EditModal from "./editModal";

const ItemContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

const TextContainer = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
`;

const ItemInput = styled.input`
    font-size: 0.7vw;
    font-weight: 500;
    color: ${colors.black};
    width: 100%;
    cursor: pointer;
    border: none;
    outline: none;
    background: transparent;
    padding-left: 0;
`;

const ItemP = styled.p`
    font-size: 0.7vw;
    font-weight: 500;
    color: ${colors.black};
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
`;

const MainImg = styled.img`
    width: 1.3vw;
    height: 1.3vw;
`;

const MenuContainer = styled.div`
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

const ItemCluster = ({ id, title, main, onItemClick }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentTitle, setCurrentTitle] = useState(title);

    const handleToggleModal = () => {
        if (!isEditing) {
            setIsModalOpen((prev) => !prev);
        }
    };

    const handleModify = () => {
        setIsEditing(true);
        setIsModalOpen(false);
    };

    const handleChange = (e) => {
        setCurrentTitle(e.target.value);
    };

    const handleConfirmEdit = async () => {
        if (currentTitle.trim() === "") {
            alert("수정할 어휘를 입력해주세요.");
            return;
        }

        try {
            const response = await API.patch(`/api/words/${id}`, {
                word: currentTitle.trim()
            });

            console.log("단어 수정 성공:", response);
            alert("단어가 수정되었습니다.");
            setIsEditing(false);
            window.location.reload();
        } catch (error) {
            console.error("Error", error);
        }
    };

    return (
        <ItemContainer onClick={() => onItemClick(id)}>
            <TextContainer>
                {isEditing ? (
                    <ItemInput type="text" value={currentTitle} onChange={handleChange} autoFocus />
                ) : (
                    <ItemP>{currentTitle}</ItemP>
                )}
                {main && <MainImg src={Main} alt="main" style={{ display: isEditing ? "none" : "block" }} />}
            </TextContainer>

            <MenuContainer>
                {!isEditing ? (
                    <MainImg src={Menu} alt="menu" onClick={handleToggleModal} />
                ) : currentTitle.trim() !== "" ? (
                    <MainImg src={Edit2} alt="edit-done" onClick={handleConfirmEdit} />
                ) : (
                    <MainImg src={Edit} alt="edit" />
                )}
            </MenuContainer>
            
            {isModalOpen && <EditModal onModify={handleModify} id={id} />}
        </ItemContainer>
    );
};

export default ItemCluster;
