import React from 'react';

const List = function (props) {
    let items = props.list;
    return (
        <div className="list m-3">
            <ul className="list-group">
                {items.map((item) => {
                    return (<li className="list-group-item" key={item.key} onClick={()=>{props.del(item.key)}}>{item.content}</li>);
                })}
            </ul>
        </div>
    )
} 

export default List;