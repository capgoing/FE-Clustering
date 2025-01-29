import styled from "styled-components";
import useFetch from "../../../hooks/useFetch";
import ItemGroup from "./item-group";
import colors from "../../../styles/colors";

const ListContainer = styled.div`
    width: 100%;
    height: 92%;
    overflow-y: auto;
`;

const ListP = styled.p`
    font-size: 0.7vw;
    font-weight: 600;
    color: ${colors.black};
`

const ListGroup = ({ selectedId, onItemClick, clickAddBtn, setClickAddBtn }) => {
    const { data: users, loading, error } = useFetch("/posts");

    return (
        <ListContainer>
            {loading ? (
                <ListP>Loading...</ListP>
            ) : error ? (
                <ListP>Error</ListP>
            ) : (
                users?.map((user) => (
                    <ItemGroup
                        key={user.id}
                        id={user.id}
                        name={user.title}
                        isSelected={user.id === selectedId}
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