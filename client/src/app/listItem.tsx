import React from "react";

export type TListNameItem = {
    name: string,
    lastName: string
};

const ListNameItem = (props:{
    item: TListNameItem
}) => {
    const showAlert = (item: TListNameItem) => {
        alert(item.name);
    };

    return (<div className="flex items-center space-x-2">
                <span>{props.item.name}</span>
                <span>{props.item.lastName}</span>
                <button
                    onClick={() => showAlert(props.item)}
                    className="px-3 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    style={{ cursor: "pointer" }}>
                    Show Content
                </button>
            </div>)
};

export default ListNameItem;