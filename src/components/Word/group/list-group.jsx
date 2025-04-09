import styled from "styled-components";
import useFetch from "../../../hooks/useFetch";
import ItemGroup from "./item-group";
import colors from "../../../styles/colors";
import { useEffect, useState } from "react";

const ListContainer = styled.div`
  width: 100%;
  height: 92%;
  overflow-y: auto;
`;

const ListP = styled.p`
  font-size: 0.7vw;
  font-weight: 600;
  color: ${colors.black};
`;

const ListGroup = ({
  selectedId,
  onItemClick,
  clickAddBtn,
  setClickAddBtn,
}) => {
  const { data, loading, error } = useFetch("/api/cluster");
  const [groupData, setGroupData] = useState([]);

  useEffect(() => {
    if (data?.data?.cluster) {
      setGroupData(data.data.cluster);
      console.log("단어 목록:", data.data.cluster);
    }
  }, [data]);

  // console.log(data);

  return (
    <ListContainer>
      {loading ? (
        <ListP>Loading...</ListP>
      ) : error ? (
        <ListP>Error</ListP>
      ) : (
        groupData.map((item) => (
          <ItemGroup
            key={item.clusterId}
            id={item.clusterId}
            name={item.representWord}
            isSelected={item.clusterId === selectedId}
            onClick={onItemClick}
            clickAddBtn={clickAddBtn}
            setClickAddBtn={setClickAddBtn}
          />
        ))
      )}
    </ListContainer>
  );
};

export default ListGroup;
