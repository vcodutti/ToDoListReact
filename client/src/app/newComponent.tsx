'use client';
import React, { useState } from "react";
import CompList from "./list";
import ListNameItem, { TListNameItem } from "./listItem";

const Welcome = () => {
    const [list, setList] = useState<TListNameItem[]>([]);

    const addComponent = () => {
       setList((compList) => [...compList, {name: `Valentina ${list.length + 1}`, lastName: "Codutti"}]);
    };

    const deleteComponent = (index: number) => {
        setList((compList) => compList.filter((_, i) => i !== index));
    };
    
    return (
        <div className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          <button onClick={addComponent} className="px-4 py-2 bg-blue-500 text-white rounded">
            Add Component
          </button>
          <CompList onDeleteComponent={deleteComponent}>
            {list.map((item, index) => (
              <ListNameItem key={index} item={item} />
            ))}
          </CompList>
        </div>
    );
};

export default Welcome;