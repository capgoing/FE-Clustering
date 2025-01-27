import { useParams } from "react-router-dom";
import navBarData from "../../../utils/NavBar/navBarData";
import styled from "styled-components";
import colors from "../../../styles/colors";
import ListGroup from "./list-group";

const GroupP = styled.p`
    font-size: 0.7vw;
    color: ${colors.black};
    font-weight: 600;
`

const Group = ({ selectedId, onItemClick }) => {
    const { id } = useParams();
    const item = navBarData.find((data) => data.id === parseInt(id));

    return (
        <div className="wordContainer" style={{ height: "40%", padding: "0.85vw 1vw", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <GroupP>{item.name} 표기 변형</GroupP>

            <ListGroup selectedId={selectedId} onItemClick={onItemClick} />
        </div>
    );
};

export default Group;
