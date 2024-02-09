import React, { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";



export const Card = (props) => {
      
    return (
        <div className="card m-2 col-2 border-primary">
            <img src={props.img} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{props.name ? 'Name: ' + props.name : props.planetName ? 'Name: ' + props.planetName : 'Name: ' + props.vehicleName }</h5>
                <p className="card-text">{props.gender ? 'Gender: ' + props.gender : props.population ? 'Population: ' + props.pouplation : 'Model: ' + props.model }</p>
                <p className="card-text">{props.hairColor  ? 'Hair color: ' + props.hairColor : props.climate ? 'Climate: ' + props.climate : 'Cargo capacity: ' + props.capacity }</p>
                <p className="card-text">{props.height? 'Height: ' + props.height : props.terrain? 'Terrain: ' + props.terrain : 'Cost: ' + props.cost }</p>
                <div className="d-flex justify-content-between row">
                    <Link to= {'/single/'+ props.type + '/' + props.id} className="btn btn-primary col-6" >Learn More</Link>
                    <button type="button" className="btn btn-warning col-3" onClick={()=>props.onSaveFav(props.id, props.type)}><i className="fa-regular fa-heart" ></i></button>
                </div>    
            </div>
        </div>
    )
}

