import React, { useState, useEffect } from "react";
import styled from "styled-components";
import navBarData from "../../utils/NavBar/navBarData";
import ItemNavBar from "./item-navBar";

const ListContainer = styled.div`
    width: 100%;
    margin: 1.4vw 0;
`

const ListNavBar = () => {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(0);

    useEffect(() => {
        setItems(navBarData);
    }, []);

    const handleItemClick = (id) => {
        setSelectedItem(id);
    };

    return (
        <ListContainer>
            {items.map((item, index) => (
                <ItemNavBar
                    key={index}
                    id={item.id}
                    name={item.name}
                    image1={item.image1}
                    image2={item.image2}
                    isActive={selectedItem === item.id}
                    onClick={handleItemClick}
                />
            ))}
        </ListContainer>
    )
}

export default ListNavBar;