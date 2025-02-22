import styled from "styled-components";
import colors from "../../../styles/colors";
import useFetch from "../../../hooks/useFetch";
import Main from "../../../assets/images/cluster/main.png";
import ListCluster from "./list-cluster";
import { useState, useEffect } from "react";

const TopPContainer = styled.div`
    width: 100%;
    border-bottom: 0.044vw solid ${colors.barColor};
    padding-bottom: 0.85vw;
    margin-bottom: 0.45vw;
`;

const ClusterP = styled.p`
    font-size: 0.75vw;
    font-weight: 600;
    color: ${colors.mainColor};
`;

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

const MainImg = styled.img`
    width: 1.3vw;
    height: 1.3vw;
`;

const InputNewWordBox = styled.div`
    width: 100%;
    height: 2vw;
    border-radius: 0.4vw;
    border: 0.04vw solid ${colors.textColor};  
    display: flex;
    padding: 0 0.55vw;

    &:focus-within {
        border-color: ${colors.mainColor};
    }
`;

const InputNewWord = styled.input`
    width: 100%;
    color: ${colors.textColor};  
    font-size: 0.6vw;
    font-weight: 500;

    &::placeholder {
        color: ${colors.textColor};
    }
`;

const Cluster = ({ selectedId, onItemSelect, clickAddBtn, setIsFocus }) => {
    const [wordsData, setWordsData] = useState([]);
    const { data, loading, error } = useFetch(selectedId ? `/api/words?clusterId=${selectedId}` : null);

    useEffect(() => {
        if (data?.data?.words) {
            setWordsData(data.data.words);
        } else {
            setWordsData([]);
        }
    }, [data, selectedId]);

    const representativeWord = wordsData.find((word) => word.isRepresent);


    const handleItemClick = (id) => {
        console.log("id", id);
        onItemSelect(id);
    };

    const handleChange = (e) => {
        setIsFocus(e.target.value.trim() !== "");
    };
    
    const handleBlur = (text) => {
        if (text.trim() === "") {
            setIsFocus(false);
        }
    };

    return (
        <div className="wordContainer" style={{ height: "50%", padding: "0.85vw 1vw", display: "flex", flexDirection: "column" }}>
            <TopPContainer>
                <ClusterP>대표어휘</ClusterP>
                <MainContainer>
                    <ClusterP style={{ color: colors.black, maxWidth: "90%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {loading || error ? "" : representativeWord?.compositionWord || ""}
                    </ClusterP>
                    {!loading && !error && representativeWord && <MainImg src={Main} alt="main" />}
                </MainContainer>
            </TopPContainer>
            {clickAddBtn ? (
                <InputNewWordBox>
                    <InputNewWord 
                    placeholder="새 어휘를 입력해주세요." 
                    onChange={handleChange} // 입력값 변경 시 focus 상태 업데이트
                    onBlur={(e) => handleBlur(e.target.value)}/>
                </InputNewWordBox>
            ) : (
                <>
                    <ClusterP>구성어휘</ClusterP>
                    <ListCluster data={wordsData} onItemClick={handleItemClick} />
                </>
            )}
        </div>
    );
};

export default Cluster;
