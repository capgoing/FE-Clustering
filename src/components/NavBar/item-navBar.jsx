import styled from "styled-components";
import colors from "../../styles/colors";
import { useNavigate, useLocation } from "react-router-dom";

const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1vw 0;
  cursor: pointer;
  border-right: ${({ $isActive }) =>
    $isActive ? `0.15vw solid ${colors.mainColor}` : "none"};
`;

const InnerContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ImgLogo = styled.img`
  width: 2.6rem;
  height: 2.6rem;
`;

const ItemP = styled.p`
  width: 100%;
  font-size: 1.7rem;
  font-weight: 600;
  color: ${({ $isActive }) =>
    $isActive ? colors.mainColor : colors.textColor};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ItemNavBar = ({ id, name, image1, image2, onClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === `/${id}`;

  const handleClick = () => {
    onClick(id);
  };

  const handlePathClick = () => {
    navigate(`/${id}`);
  };

  return (
    <ItemContainer $isActive={isActive} onClick={handlePathClick}>
      <InnerContainer onClick={handleClick}>
        <ImgLogo src={isActive ? image2 : image1} alt={name} />
        <ItemP $isActive={isActive}>{name}</ItemP>
      </InnerContainer>
    </ItemContainer>
  );
};

export default ItemNavBar;
