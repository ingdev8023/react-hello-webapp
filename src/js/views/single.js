import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const correctStore = params.type === 'people' ? store.detailedPeople : params.type === 'planet'? store.detailedPlanets : store.detailedVehicles
	const intParams =  parseInt(params.id)
	const correctInfo = correctStore[intParams]
	const finalInfo = correctInfo.result.properties
	const infoKeys = Object.keys(finalInfo)

return (
		<div className="container mb-3 bg-dark">
			<>
            <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src= {correctInfo.img} className="img-fluid rounded-start"/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{correctInfo.result.properties.name}</h5>
                  <p className="card-text">{correctInfo.result.description}</p>
                  </div>
              </div>
            </div>
          </div>      
	  <div className="row mb-3">
		<div className="col-sm-3">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">{infoKeys[0]}</h5>
						<p className="card-text">{finalInfo[infoKeys[0]]}</p>
						</div>
			</div>
		</div>
		<div className="col-sm-3">
				<div className="card">
				<div className="card-body">
						<h5 className="card-title">{infoKeys[1]}</h5>
						<p className="card-text">{finalInfo[infoKeys[1]]}</p>
					</div>
			</div>
		</div>
		<div className="col-sm-3">
				<div className="card">
				<div className="card-body">
						<h5 className="card-title">{infoKeys[2]}</h5>
						<p className="card-text">{finalInfo[infoKeys[2]]}</p>
					</div>
			</div>
		</div>
		<div className="col-sm-3">
				<div className="card">
				<div className="card-body">
				<h5 className="card-title">{infoKeys[3]}</h5>
						<p className="card-text">{finalInfo[infoKeys[3]]}</p>
					</div>
			</div>
		</div>
	  </div>
     


    </>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
