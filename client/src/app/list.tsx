import React from "react";

const CompList = (props : {
    children: JSX.Element[],
    onDeleteComponent: (index: number) => void
}) => {

    return (
        <div className="mt-4 space-y-2">
            {props.children.map((child, index) => {
                return <div key={index}>
                        {child}
                        <button
                            onClick={() => props.onDeleteComponent(index)}
                            className="px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                            style={{ cursor: "pointer" }}>
                            x
                        </button>
                    </div>
            })}
        </div>
    )
};

export default CompList;