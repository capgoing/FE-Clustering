import useFetch from "../../../hooks/useFetch";
import { useState, useEffect} from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import ListText from "./list-text";

const TextP = styled.p`
    font-size: 0.85vw;
    font-weight: 600;
    color: ${colors.black};
`;

const TextBar = styled.div`
    width: 100%;
    height: 0.044vw;
    background-color: ${colors.barColor};
    margin-top: 1.3vw;
`;

const Text = ({ selectedItemId }) => {
    const { data, loading, error } = useFetch(selectedItemId ? `/api/sentence/${selectedItemId}` : null);
    const [textData, setTextData] = useState([]);

    useEffect(() => {
        if (data?.data) {
            setTextData(data.data);
        } else {
            setTextData([]);
        }
    }, [data, selectedItemId]);

    // console.log(textData);

    return (
        <div className="wordContainer" style={{ height: "49%", padding: "0.85vw 1vw", display: "flex", flexDirection: "column" }}>
            <TextP>선택된 단어가 사용된 문장 분석</TextP>
            <TextBar />
            {selectedItemId && !loading && !error && <ListText data={textData} />}
        </div>
    );
};

export default Text;
