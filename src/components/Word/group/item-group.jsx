import styled from "styled-components";
import colors from "../../../styles/colors";
import radioBox from "../../../assets/images/group/radioBox.png";
import radioBoxClick from "../../../assets/images/group/radioBox-click.png";

const ItemContainer = styled.div`
  width: 100%;
  margin-bottom: 0.75vw;
  display: flex;
  align-items: center;
  gap: 0.5vw;
  cursor: pointer;
`;

const RadioImg = styled.img`
  width: 1.2vw;
  height: 1.2vw;
`;

const ItemP = styled.p`
  font-size: 1.8rem;
  color: ${({ $isSelected }) =>
    $isSelected ? colors.black : colors.textColor};
  font-weight: 600;
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ItemGroup = ({
  id,
  name,
  isSelected,
  onClick,
  clickAddBtn,
  setClickAddBtn,
}) => {
  const handleClick = () => {
    onClick(id);
    if (clickAddBtn) setClickAddBtn(!clickAddBtn);
  };
  return (
    <ItemContainer onClick={handleClick}>
      <RadioImg src={isSelected ? radioBoxClick : radioBox} alt="radio" />
      <ItemP $isSelected={isSelected}>{name}</ItemP>
    </ItemContainer>
  );
};

export default ItemGroup;
