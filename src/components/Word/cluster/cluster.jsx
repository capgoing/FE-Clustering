import styled from "styled-components";
import colors from "../../../styles/colors";
import useFetch from "../../../hooks/useFetch";
import Main from "../../../assets/images/cluster/main.png";
import ListCluster from "./list-cluster";
import { useEffect, useState } from "react";

const TopPContainer = styled.div`
    width: 100%;
    border-bottom: 0.088rem solid ${colors.barColor};
    padding-bottom: 1.7rem;
    margin-bottom: 0.9rem;
`

const ClusterP = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${colors.mainColor};
`

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

const MainImg = styled.img`
    width: 2.6rem;
    height: 2.6rem;
`

const InputNewWordBox = styled.div`
    width: 100%;
    height: 4rem;
    flex-shrink: 0;
    border-radius: 8.689px;
    border: 0.869px solid ${colors.textColor};  
    display: flex;
    padding: 0 1.1rem;

    &:focus-within {
        border-color: ${colors.mainColor};
    }
`;

const InputNewWord = styled.input`
    width: 100%;
    color: ${colors.textColor};  
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 20.854px; /* 150% */
    letter-spacing: -0.348px;

    &::placeholder {
        color: ${colors.textColor};
    }
`;

const Cluster = ({ selectedId, onItemSelect, clickAddBtn, setIsFocus, isFocus }) => {
    const [users, setUsers] = useState(null);
    const { data, loading, error } = useFetch(`/posts/${selectedId}`);

    useEffect(() => {
        setUsers(null);
    }, [selectedId]);

    useEffect(() => {
        if (data) {
            setUsers(data);
        }
    }, [data]);

    const handleItemClick = (id) => {
        onItemSelect(id);
    };

    const handleBlur = (text) => {
        // 입력된 텍스가 빈 문자열일 경우에만 포커싱을 false로 설정한다 -> 단어 추가하기 버튼 비활성화
        if(text === "") {
            setIsFocus(false);
        }
    }

    return (
        <div className="wordContainer" style={{ height: "50%", padding: "1.7rem 2rem", display: "flex", flexDirection: "column" }}>
            <TopPContainer>
                <ClusterP>대표어휘</ClusterP>
                <MainContainer>
                    <ClusterP style={{ color: colors.black, maxWidth: "90%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{loading || error ? "" : users?.title || ""}</ClusterP>
                    {!loading && !error && <MainImg src={Main} alt="main" />}
                </MainContainer>
            </TopPContainer>
            {clickAddBtn ? (
                <>
                <InputNewWordBox>
                    <InputNewWord 
                    placeholder="새 어휘를 입력해주세요."
                    onFocus={() => setIsFocus(true)}
                    onBlur={(e) => handleBlur(e.target.value)}
                    />
                </InputNewWordBox>
                </>
            ) : (
                <>
                    <ClusterP>구성어휘</ClusterP>
                    <ListCluster data={users} onItemClick={handleItemClick} />

                </>
            )}
        </div>
    )
}

export default Cluster;