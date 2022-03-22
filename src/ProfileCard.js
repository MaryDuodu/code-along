import React from "react";
import writers from "./writers";

export const ProfileCard = ({writer}) => {
    return(
     <div className="card">
        <img src={`/images/${writers.avatar}.png`} width="300px" height="300" alt="" />
        <div className="textGroup">
            <h3>writer.name</h3>
            <p>writer.email</p>
            <p>writer.phone number</p>
         </div>
      </div>
    )
}
        