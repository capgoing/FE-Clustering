import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import Main from "../../../assets/images/cluster/main.png";
import Menu from "../../../assets/images/cluster/menu.png";
import EditModal from "./editModal";
import ReactDOM from "react-dom";

const ItemContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TextContainer = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
`

const ItemP = styled.p`
    font-size: 1.4rem;
    font-weight: 500;
    color: ${colors.black};
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
`

const MainImg = styled.img`
    width: 2.6rem;
    height: 2.6rem;
`

const MenuContainer = styled.div`
    position: relative;
    cursor: pointer;
`

const ItemCluster = ({ id, title, onItemClick }) => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal 표시 여부
    const menuRef = useRef(null); // 메뉴 위치 참조
    const [modalPosition, setModalPosition] = useState({ top: 320, left: 0 });

    useEffect(() => {
        console.log("초기 modalPosition:", modalPosition);
    }, [modalPosition]); // modalPosition이 변경될 때마다 로그 출력

    const handleClick = () => {
        onItemClick(id);
    };

    const handleMenuClick = () => {
        console.log("menu click");
        if (menuRef.current) {
            const rect = menuRef.current.getBoundingClientRect();
            const newPosition = {
                top: rect.bottom + window.scrollY,
                left: rect.left + window.scrollX
            };
            console.log("newPosition: " + newPosition);
    
            setModalPosition(newPosition);
            setTimeout(() => setIsModalOpen(true), 0); 
        } else {
            setIsModalOpen((prev) => !prev);
            console.log("no");
        }
    };

    useEffect(() => {
        if (modalPosition.top !== 320 && modalPosition.left !== 0) {
            setIsModalOpen(true);
        }
    }, [modalPosition]); // modalPosition이 변경될 때 실행
    
    

    return (
        <ItemContainer>
            <TextContainer onClick={handleClick}>
                <ItemP>{title}</ItemP>
                <MainImg src={Main} alt="main" />
            </TextContainer>

            <MenuContainer ref={menuRef} onClick={handleMenuClick}>
                <MainImg src={Menu} alt="menu"/>
            </MenuContainer>
            {/* {isModalOpen && <EditModal position={modalPosition} />} */}
            {isModalOpen && ReactDOM.createPortal(
    <EditModal position={modalPosition} />,
    document.body
)}
        </ItemContainer>
    )
}

export default ItemCluster;