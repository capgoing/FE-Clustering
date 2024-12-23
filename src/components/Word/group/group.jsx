import { useParams } from "react-router-dom";
import navBarData from "../../../utils/NavBar/navBarData";
import styled from "styled-components";
import colors from "../../../styles/colors";
import ListGroup from "./list-group";

const GroupP = styled.p`
    font-size: 1.4rem;
    color: ${colors.black};
    font-weight: 600;
`

const Group = ({ selectedId, onItemClick }) => {
    const { id } = useParams();
    const item = navBarData.find((data) => data.id === parseInt(id));

    return (
        <div className="wordContainer" style={{ height: "40%", padding: "1.7rem 2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <GroupP>{item.name} 포도 품종</GroupP>

            <ListGroup selectedId={selectedId} onItemClick={onItemClick} />
        </div>
    );
};

export default Group;
