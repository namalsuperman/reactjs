import React  from "react";
import moment from "moment";
import { Link } from 'react-router-dom';
function NameListItem(props) {
     
     return  <React.Fragment>
      <div className="col">
      <div className="card  shadow mb-2" style={{width: "12rem"}}>
         <img className="card-img-top" src={props.avatar} alt={props.name}/>
            <div className="card-body">
               <h5 className="card-title">Name - {props.name}  </h5>
               <p className="card-text">City:- {props.city}</p>
               <p className="card-text">Birthday :- {moment(props.birthday).format("DD-MM-YY")}</p>
         
         </div>
       </div>
       </div>
       </React.Fragment>
}
export default NameListItem;