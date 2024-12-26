import useFetch from "../../../hooks/useFetch";
import styled from "styled-components";
import colors from "../../../styles/colors";
import ListText from "./list-text";

const TextP = styled.p`
    font-size: 1.7rem;
    font-weight: 600;
    color: ${colors.black};
`

const TextBar = styled.div`
    width: 100%;
    height: 0.088rem;
    background-color: ${colors.barColor};
    margin-top: 1.3vw;
`

const Text = ({ selectedItemId }) => {
    // console.log("전달된 id:", selectedItemId);

    const { data, loading, error } = useFetch(`/posts/${selectedItemId}`);

    return (
        <div className="wordContainer" style={{height: "49%", padding: "1.7rem 2rem", display: "flex", flexDirection: "column"}}>
            <TextP>선택된 단어가 사용된 문장 분석</TextP>
            <TextBar />
            {selectedItemId && !loading && !error && <ListText data={data} />}
        </div>
    )
}

export default Text;