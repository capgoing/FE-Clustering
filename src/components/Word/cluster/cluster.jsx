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

const Cluster = ({ selectedId, onItemSelect }) => {
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

    return (
        <div className="wordContainer" style={{height: "50%", padding: "1.7rem 2rem", display: "flex", flexDirection: "column"}}>
            <TopPContainer>
                <ClusterP>대표어휘</ClusterP>
                <MainContainer>
                    <ClusterP style={{color: colors.black, maxWidth: "90%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{loading || error ? "" : users?.title || ""}</ClusterP>
                    {!loading && !error && <MainImg src={Main} alt="main" />}
                </MainContainer>
            </TopPContainer>

            <ClusterP>구성어휘</ClusterP>
            <ListCluster data={users} onItemClick={handleItemClick} />
        </div>
    )
}

export default Cluster;