import React, {useEffect, useState} from "react";
import Layout from "../layout/Layout";
import Delete from "../components/modal/delete/DeleteConfirmation";
function Avis() {
    const [data , setData] = useState([]);
    useEffect(async() =>{
        getAvis();
    } , [])

    async function deleteAvis(_id){
        if(window.confirm("are you sure to delete this avis")){
        let result = await fetch('http://localhost:3001/comme/deletecomt/'+_id , {
          method: 'DELETE'
        });
        result = await result.json();
        console.warn(result)
        getAvis();
      }

    }
async function getAvis(){
    let result = await fetch("http://localhost:3001/comme/getcomm");
    result = await result.json();
    setData(result)

}
   


    return (
        <div className="">
            <section className="py-1 bg-blueGray-50 pr-10 lg:pr-0">
                <div className="w-full xl:w-11/12 mb-12 xl:mb-0 px-4 mx-5 mt-12 mr-40 lg:mr-0">
                    <h6 className="text-5xl my-3"><i>Liste d'avis</i></h6><br />
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="lg:flex items-center">
                                <div className="relative w-full px-4 max-w-full flex">
                                    <select className="p-2 rounded-tl-xl rounded-bl-xl   bg-gray-100 justify-start"
                                       >
                                        <option value="id">All</option>
                                        <option value="id">ID</option>
                                        <option value="type">Phone</option>
                                    </select>
                                    <div className="flex gap-x-3 rounded-tr-xl rounded-br-xl  border border-gray-100 p-2  item-center">
                                        {/* <figure className="w-5 h-5">
                                            <img src="/search_icon.svg" className="w-5 h-5"/>
                                        </figure> */}
                                        <input type="text" placeholder="Search" className="placeholder-gray-500 w-full font-medium focus:outline-none"
                                            onChange={
                                                (e) => {
                                                    setSearch(e.target.value);
                                                }
                                            }/>
                                    </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="w-full overflow-x-auto">
                        <table className="items-center  w-full border-collapse rounded-xl">
                            <thead className="rounded-xl">
                                <tr className="bg-gray-900 rounded-xl text-gray-100">
                                   
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        ID
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                       Message
                                    </th>
                                    
                                    
                                    
                                    
                                   
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody> {
                                data.map((item) => (
                                    <tr className="font-medium">
                                       
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                            {
                                            item._id.slice(0,5)
                                        } </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                            {
                                            item.avis
                                        } </td>
                                        
                                        
                                        
                                        
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex">
                                            
                                        &nbsp;&nbsp;&nbsp;&nbsp; <div className="rounded-full mx-1 p-2 bg-white">
                                               <span onClick={() =>deleteAvis(item._id)}><figure className="w-3 h-3">
                                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z" fill="rgba(188,18,18,1)"/></svg>
                                             </figure></span>
                                             </div>
                                        </td>
                                    </tr>
                                ))
                            } </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}

export default Layout(Avis);




