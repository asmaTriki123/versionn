import React, {useEffect, useState} from "react";
import Layout from "../layout/Layout";
import {useRouter} from "next/router";
import axios from "axios";
function AddStation() {
const[Nom_station , setNom_station]=useState("")
const[type_lavage , setType_lavage]=useState("")
const[email , setEmail]=useState("")
const[password , setPassword]=useState("")
const[longitude , setLongitude]=useState("")
const[latitude , setLatitude]=useState("")
const[Role , setRole]=useState("")
   
const router = useRouter()

    
    async function Add(){
        let item = {Nom_station , type_lavage , email , password , longitude , latitude , Role}
        console.warn(item)
        let result = await fetch("http://localhost:3001/utilisateur/register" , {
            method: 'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type" : 'application/json',
                "Accept" : 'application/json'
            }
        })
        result = await result.json();
       
        router.push('/')
       
    }
    
    
       
    

   


    return (
        <div className="py-1 bg-blueGray-50 pr-10 lg:pr-0">
            <section className="py-1 bg-blueGray-50 pr-10 lg:pr-0">
                <div className="w-full xl:w-11/12 mb-12 xl:mb-0 px-4 mx-5 mt-12 mr-40 lg:mr-0">
                    <h1 className="text-5xl my-3" size="10px"><i>Ajouter une Station de lavage</i></h1><br />
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="lg:flex items-center">
                                <div className="relative w-full px-4 max-w-full flex">
                                    
                                   
                            </div>
                            
                        </div>
                    </div>

                    <div className="w-full overflow-x-auto bg-gray-80"  >
                        <form className="f bg-gray-80"  >
                        <div className="mt-5 flex flex-col gap-3">
                        <p className="text-sm text-gray-700 grid grid-cols-2 ">
                          <b className="">&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;Nom station</b>
                          <input
                            type="text"
                            onChange={(e)=>setNom_station(e.target.value)}
                            className="p-2 rounded-full bg-gray-100 float-right text-gray-900"
                          />&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        </p>
                        <p className="text-sm text-gray-700 grid grid-cols-2 ">
                          <b>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;type lavage:</b>
                          <input
                            type="text"
                            onChange={(e)=>setType_lavage(e.target.value)}
                            className="p-2 rounded-full bg-gray-100 float-right text-gray-900"
                          />
                        </p>
                        <p className="text-sm text-gray-700 grid grid-cols-2 ">
                          <b>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;Email :</b>
                          <input
                            type="text"
                            onChange={(e)=>setEmail(e.target.value)}
                            className="p-2 rounded-full bg-gray-100 float-right text-gray-900"
                          />
                        </p>
                        <p className="text-sm text-gray-700 grid grid-cols-2 ">
                          <b>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;password :</b>
                          <input
                            type="text"
                            onChange={(e)=>setPassword(e.target.value)}
                            className="p-2 rounded-full bg-gray-100 float-right text-gray-900"
                          />
                        </p>
                        <p className="text-sm text-gray-700 grid grid-cols-2 ">
                          <b>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;longitude:</b>
                          <input
                            type="text"
                            onChange={(e)=>setLongitude(e.target.value)}
                            className="p-2 rounded-full bg-gray-100 float-right text-gray-900"
                          />
                        </p>
                        <p className="text-sm text-gray-700 grid grid-cols-2 ">
                          <b>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;Latitude :</b>
                          <input
                            type="text"
                            onChange={(e)=>setLatitude(e.target.value)}
                            className="p-2 rounded-full bg-gray-100 float-right text-gray-900"
                          />
                        </p>
                        <p className="text-sm text-gray-700 grid grid-cols-2 ">
                          <b>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;Role :</b>
                          <input
                            type="text"
                            onChange={(e)=>setRole(e.target.value)}
                            className="p-2 rounded-full bg-gray-100 float-right text-gray-900"
                          />
                        </p>
                       
                        <br />
                      </div>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                      <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() =>Add()}
                  >
                   Add station
                  </button> </form><br/><br/>




                        
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}

export default Layout(AddStation);




