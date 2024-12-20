import styled from "styled-components";
import Group from "../../components/Word/group/group";
import Cluster from "../../components/Word/cluster/cluster";
import Add from "../../components/Word/add/add";
import Result from "../../components/Word/result/result";
import Text from "../../components/Word/text/text";

const WordContainer = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Word = () => {
    return (
        <div className="outletContainer">
            <WordContainer>
                <Group />
                <Cluster />
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