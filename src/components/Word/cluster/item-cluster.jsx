import { useState } from "react";
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
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    border: none;
    outline: none;
    background: transparent;
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
`;

const ItemCluster = ({ id, title, onItemClick }) => {
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

    const handleBlur = () => {
        setTimeout(() => {
            if (currentTitle.trim() !== "") {
                setIsEditing(false);
                setIsModalOpen(false);
            }
        }, 100);
    };

    return (
        <ItemContainer>
            <TextContainer>
                {isEditing ? (
                    <ItemInput type="text" value={currentTitle} onChange={handleChange} onBlur={handleBlur} autoFocus />
                ) : (
                    <ItemP>{currentTitle}</ItemP>
                )}
                <MainImg src={Main} alt="main" style={{ display: isEditing ? "none" : "block" }} />
            </TextContainer>

            <MenuContainer onClick={handleToggleModal}>
                <MainImg src={isEditing ? (currentTitle.trim() === "" ? Edit : Edit2) : Menu} alt="menu"/>
            </MenuContainer>
            
            {isModalOpen && <EditModal onModify={handleModify} />}
        </ItemContainer>
    );
};

export default ItemCluster;
