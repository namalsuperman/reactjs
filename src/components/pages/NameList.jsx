import React, { useEffect }  from "react";
import NameListItem from "../NameListItems";
import "../NameListItem.css";
import { useState } from "react";
  
function NameList(props){
    const [loadData,setLoadData]=useState(new Date());
    const [nameList,setNameList]=useState([
            {"gender":"male","name":
        {"title":"Mr","first":"Bjørn","last":"Gabrielsen"},
        "location":{"street":{"number":5959,"name":"Skoleveien"},
        "city":"Eikefjord","state":"Oslo","country":"Norway","postcode":"5209",
        "coordinates":{"latitude":"42.2127","longitude":"-178.2186"},
        "timezone":{"offset":"+8:00","description":"Beijing, Perth, Singapore, Hong Kong"}},
        "email":"bjorn.gabrielsen@example.com",
        "login":{"uuid":"23d9c291-218a-41ae-9f0e-e8f9eddff7a9",
        "username":"angrytiger892","password":"wishbone","salt":"ifFPhM4f",
        "md5":"b4d5ca5d040e6f28eab91370bd92d06a","sha1":"023ac0468d23d4388703bd51453e44d39e02a4db",
        "sha256":"dc1a06791a1e1e62fae6f1410658048e02331aa984b6848852ffcba42e8faadb"},
        "dob":{"date":"1973-03-18T14:02:24.801Z","age":49},
        "registered":{"date":"2022-02-27T16:28:02.709Z","age":0},
        "phone":"88899465","cell":"98852130",
        "id":{"name":"FN","value":"18037315105"},
        "picture":{"large":"https://randomuser.me/api/portraits/men/59.jpg",
        "medium":"https://randomuser.me/api/portraits/med/men/59.jpg",
        "thumbnail":"https://randomuser.me/api/portraits/thumb/men/59.jpg"},
        "nat":"NO"} 
    ]);
    

    const nameListComponent=()=>{
        return  nameList.map((aItme)=>
            {
            return(
            <NameListItem 
                key= {aItme.id.value}
                name= {aItme.name.first} 
                city={aItme.location.city}
                email={aItme.email}
                birthday={aItme.dob.date}
                avatar={aItme.picture.medium} /> 
                );
            }
            );
        
    }
    const btnClickHandler=()=>{
        setLoadData(new Date());
                   // setNameList(nameList.concat(newUser));
       // spred Operater
      //setNameList((nameList)=>[...nameList,newUser]);
    }
useEffect(()=>
{
    fetch("https://randomuser.me/api").then((response)=>{
            return response.json();
    }).then
    ( (responseData) => 
    { 
             setNameList( nameList =>[...nameList, responseData.results[0]]) 
            //setNameList(nameList.concat(responseData.results[0]))
         
    });
},[loadData]);
    return(

        <React.Fragment>
    
    <div className="container text-center">
    <h1  className="fs-1" > Teacher Name List</h1>
    <button className="btn btn-primary mb-2" onClick={btnClickHandler}>Add New User</button>
        <div className="row">
                {nameListComponent()}

        </div>
    </div>
    
    </React.Fragment>
    );
}
export default NameList;