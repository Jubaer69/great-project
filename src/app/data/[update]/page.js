"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default  function Update({ params }) {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
//   const [res, setRes] = useState([])
  const idx =  params.update;

  async function Bal(){
    let limk = await fetch(`http://localhost:3000/api/students/${idx}`, {cache: "no-cache"});
    let gg = await limk.json();
    // setRes(gg.result)
    setName(gg.result.name)
    setRoll(gg.result.roll)
  }

  async function updx(){
    let op = await fetch(`http://localhost:3000/api/students/${idx}`, {
        method: 'PUT',
        body: JSON.stringify({name, roll})
    })
    const fck = await op.json()
    if(fck.success){
        alert('student updated')
    }else{
        alert('error found')
    }
  }
  

  useEffect(() => {
    Bal()
  }, [])

  return (
    <div className="w-full h-full bg-black">
      <h1 className="text-[30px] font-bold text-white text-center">
        Update Data
      </h1>
      <div>
        <input
          className="w-[320px] h-[40px] p-[3px_6px] text-white border border-solid border-white bg-transparent"
          value={name}
          placeholder="Enter student name"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="w-[320px] h-[40px] p-[3px_6px] text-white border border-solid border-white bg-transparent"
          value={roll}
          placeholder="Enter student roll"
          onChange={(e) => setRoll(e.target.value)}
          required
        />

        <button
          className="w-[320px] h-[40px] p-[3px_6px] text-white font-bold bg-violet-600"
          onClick={() => updx()}
        >
          Update student
        </button>
        <Link className="text-white" href='/data'>Go Back</Link>
      </div>
    </div>
  );
}
