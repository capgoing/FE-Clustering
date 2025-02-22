import useFetch from "../../../hooks/useFetch";
import { useState, useEffect } from "react";
import styled from "styled-components";

const ImageContainer = styled.img`
    width: 100%;
    height: 100%;
`

const Result = () => {
    const [imageUrl, setImageUrl] = useState("");
    const { data } = useFetch("/api/cluster");

    useEffect(() => {
        if (data?.data?.imageUrl) {
            setImageUrl(data.data.imageUrl);
        }
    }, [data]);

    // console.log(imageUrl);

    return (
        <div className="wordContainer" style={{height: "49%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <ImageContainer src={imageUrl} alt="image" />
        </div>
    )
}

export default Result;