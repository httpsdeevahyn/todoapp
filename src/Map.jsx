import React from 'react'

export default function Map() {
    const arr = [
        { id: 1, name:"first"},
        { id: 1, name:"second"},
        { id: 1, name:"third"},
        { id: 1, name:"fourth"},

    ];
  return (
    <div>Mapping 
        {arr.map((data,key) => (
           <div key= {key.id}>{data.name}</div>
        ))}
    </div>
  );
}
