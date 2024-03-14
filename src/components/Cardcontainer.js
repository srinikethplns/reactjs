import React from "react";
import Card from "./Card";
const Cardcontainer = ( {data})=>{
    return(
        <div className="filter-container">
        <div className='cards'>
            {
                data.map((items) => (
                    <Card key={items.id} {...items}></Card>
                ))
            }
        </div>

        </div>
    )
}
export default Cardcontainer;