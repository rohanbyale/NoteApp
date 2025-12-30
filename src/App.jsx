import { X } from "lucide-react";
import React, { useState } from "react";

const App = () => {
    const [title, settitle] = useState("");
    const [details, setdetails] = useState('')
    const [task, settask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();

const copyTask=[...task]

copyTask.push({title,details})
settask(copyTask)
console.log(copyTask);

    settitle("")
    setdetails("")
    
  };


  return (
    <div className="h-screen  lg:flex bg-black  text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex items-start p-10 lg:w-1/2  gap-4 flex-col "
      >
        <h1 className="text-3xl font-bold">Your Notes</h1>
        <input
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e)=>{
           settitle(e.target.value)
            
          }}
          className="px-5 py-2 w-full border-2 rounded outline-none"
        />

        <textarea
          type="text"
          placeholder="Enter Details"
          value={details}
          onChange={(e)=>{
               setdetails(e.target.value);
               
          }}
          className="h-20 px-5 py-2 w-full font-medium border-2 rounded outline-none"
        />
        <button className="bg-white outline-none font-medium text-black px-5 py-2  w-full rounded ">
          Add Notes
        </button>

        <img
          className=" h-52"
          src=""
          alt=""
        />
      </form>

      <div className=" lg:w-1/2  lg:border-l-2   p-10 ">
        <h1 className="text-3xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto ">
          {task.map(function(elem,idx){

            return <div  key={idx} className=" relative h-52 py-6 px-4 w-40 rounded-xl text-black bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
            
              <h2 className="absolute top-5 right-5 p-1 text-xs rounded-full bg-amber-500" > <X /> </h2>
              <h3 className="leading-tight text-xl font-bold"> {elem.title} </h3>
              <p className="mt-2 leading-tight font-medium text-gray-700 ">  {elem.details}</p>

         
            </div>
          })}
         
        </div>
      </div>
    </div> 
  );
};

export default App;
