import styled from "styled-components";
import ItemCluster from "./item-cluster";

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 0.85vw;
  overflow-y: auto;
`;

const ListCluster = ({ data, onItemClick, selectedItemId }) => {
  const validData = Array.isArray(data) ? data : data ? [data] : [];
  // console.log(validData);

  return (
    <ListContainer>
      {validData.length > 0 &&
        validData.map((item, index) => (
          <ItemCluster
            key={index}
            id={item.wordId}
            title={item.compositionWord || ""}
            main={item.isRepresent}
            onItemClick={onItemClick}
            selectedItemId={selectedItemId}
          />
        ))}
    </ListContainer>
  );
};

export default ListCluster;
