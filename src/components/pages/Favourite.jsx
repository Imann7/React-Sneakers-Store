import React from "react";
import Card from "../Card";

const Favourite = ({items}) => {


    return(<div className="content  ">



      <div className="d-flex  align-center ">

        <h2>Favourites</h2>
        </div>
 <div className=" d-flex flex-wrap">

        {items.map((obj, index) => (
      <Card
        key={index}
        name={obj.name}
        sex={obj.sex}
        price={obj.price}
        imageUrl={obj.imageUrl}
      
      />
    ))}


      </div>
        
      </div>

        

    

    )
}
export default Favourite;