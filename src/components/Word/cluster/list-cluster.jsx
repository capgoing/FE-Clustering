import styled from "styled-components";
import ItemCluster from "./item-cluster";

const ListContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 1.7rem;
    overflow-y: auto;
`;

const ListCluster = ({ data }) => {
    const validData = Array.isArray(data) ? data : data ? [data] : [];
    console.log(validData);

    return (
        <ListContainer>
            {validData.length > 0 && 
                validData.map((item, index) => (
                    <ItemCluster 
                        key={index} 
                        title={item?.title || 'No Title'}  // title이 없으면 'No Title' 출력
                    />
                ))
            }
        </ListContainer>
    )
};

export default ListCluster;
