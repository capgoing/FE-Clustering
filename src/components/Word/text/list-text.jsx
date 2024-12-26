import styled from "styled-components";
import ItemText from "./item-text";

const ListContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0.9rem 0;
    overflow-y: auto;
`;

const ListText = ({ data }) => {
    // console.log("전달받은 데이터:", data);
    const dataList = data ? (Array.isArray(data) ? data : [data]) : [];

    return (
        <ListContainer>
            {dataList.map((item, index) => (
                <ItemText 
                    key={index} 
                    title={item.title|| ""} 
                />
            ))}
        </ListContainer>
    );
};

export default ListText;
