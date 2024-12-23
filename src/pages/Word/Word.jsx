import styled from "styled-components";
import Group from "../../components/Word/group/group";
import Cluster from "../../components/Word/cluster/cluster";
import Add from "../../components/Word/add/add";
import Result from "../../components/Word/result/result";
import Text from "../../components/Word/text/text";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const WordContainer = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Word = () => {
    const { id } = useParams();
    const [selectedId, setSelectedId] = useState(null);

    const handleItemClick = (id) => {
        setSelectedId(id);
        // console.log("선택된 항목: ", id);
    };

    useEffect(() => {
        setSelectedId(null);
    }, [id]); 

    return (
        <div className="outletContainer">
            <WordContainer>
                <Group selectedId={selectedId} onItemClick={handleItemClick} />
                <Cluster selectedId={selectedId} />
                <Add />
            </WordContainer>

            <WordContainer style={{width: "66%"}}>
                <Result />
                <Text />
            </WordContainer>
        </div>
    )
}

export default Word;