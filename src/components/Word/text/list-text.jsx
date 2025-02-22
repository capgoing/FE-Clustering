import styled from "styled-components";
import ItemText from "./item-text";

const ListContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0.45vw 0;
    display: flex;
    flex-direction: column;
    gap: 1vw;
    overflow-y: auto;
`;

const ListText = ({ data }) => {
    const dataList = data ? (Array.isArray(data) ? data : [data]) : [];

    // console.log(data);

    return (
        <ListContainer>
            {dataList.map((item, index) => (
                <ItemText 
                    key={index} 
                    title={item|| ""} 
                />
            ))}
        </ListContainer>
    );
};

export default ListText;
