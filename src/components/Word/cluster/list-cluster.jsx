import styled from "styled-components";
import ItemCluster from "./item-cluster";

const ListContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 1.7rem;
    overflow-y: auto;
`;

const ListCluster = ({ data, onItemClick }) => {
    const validData = Array.isArray(data) ? data : data ? [data] : [];
    console.log(validData);

    return (
        <ListContainer>
            {validData.length > 0 && 
                validData.map((item, index) => (
                    <ItemCluster 
                        key={index}
                        id={item.id}
                        title={item?.title || ''}
                        onItemClick={onItemClick}
                    />
                ))
            }
        </ListContainer>
    )
};

export default ListCluster;
