'use client';
import React, { useEffect, useState } from "react";
import CompList from "./list";
import ListNameItem, { TListNameItem } from "./listItem";
import { useGetTodosQuery } from "./services/todo";

const Welcome = () => {
    const { data } = useGetTodosQuery('')
    const [list, setList] = useState<TListNameItem[]>(data ?? []);
 
    // Temporal until BE server add/removes element from list.
    // Read: https://react.dev/reference/react/useEffect !! Reactive programming.
    useEffect(() => {
      setList(data ?? []);
    }, [data]);
 
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