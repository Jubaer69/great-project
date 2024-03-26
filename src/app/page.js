"use client";


import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

let fullArr = JSON.parse(localStorage.getItem("files"));
export default function Home() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [file, setFile] = useState("");
  const [arr, setArr] = useState(fullArr);

  async function addx(){
    let limk = await fetch('http://localhost:3000/api/students', {
      method: 'POST',
      body: JSON.stringify({name, roll}),
      cache: "no-cache"
    })
    limk = await limk.json()
    if(limk.success){
      alert('student added')
      setName('')
      setRoll('')
    }else{
      alert('error')
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    let data = new FormData()
    data.set("file", file)
    let go = await fetch(`http://localhost:3000/api/image`, {
      method: "POST",
      body: data
    })
    go = await go.json();
    
    if(go.success){
      setArr(old => [...old, file.name])
      console.log(arr)
    }else{
      alert('error found')
    }
    
  }

  useEffect(() => {
    localStorage.setItem('files', JSON.stringify(arr))
  }, [arr])

  function jub(ind){
    let bal = [...arr];
    bal.splice(ind, 1)
    setArr(bal)
  }
  

  return (
    <div className="w-full min-h-full relative bg-black">
      <h1 className="text-[30px] font-bold text-center text-white">
        A Great Project 💖
      </h1>
      <div className="w-full  hi mx-auto">
        <div className="w-full flex flex-col mx-auto  gap-5">
          <input
            className="w-[320px] h-[40px] p-[3px_6px] text-white border border-solid border-white bg-transparent"
            value={name}
            placeholder="Enter student name"
            onChange={(e) => setName(e.target.value)} required
          />

          <input
            className="w-[320px] h-[40px] p-[3px_6px] text-white border border-solid border-white bg-transparent"
            value={roll}
            placeholder="Enter student roll"
            onChange={(e) => setRoll(e.target.value)} required
          />
{/* 
          <input
            className="w-[320px] h-[40px] p-[3px_6px] text-white border border-solid border-white bg-transparent"
            value={group}
            placeholder="Enter student group"
            onChange={(e) => setGroup(e.target.value)} required
          />

          <input
            className="w-[320px] h-[40px] p-[3px_6px] text-white border border-solid border-white bg-transparent"
            value={section}
            placeholder="Enter student section"
            onChange={(e) => setSection(e.target.value)} required
          /> */}

          <button className="w-[320px] h-[40px] p-[3px_6px] text-white font-bold bg-violet-600"  onClick={() => addx()} >Add student</button>
          
          <Link className="text-white" href='/data'>Data</Link>
        </div>
      </div>


      <form onSubmit={onSubmit}
      >
        <input className="text-white" type="file" onChange={(e) => setFile(e.target.files?.[0])} />
        <button type="submit" className="text-white">Submit</button>
      </form>
      <Image className="animate-spin duration-[6s]"
        src="/physics.png"
        width={300}
        height={300}
      />

      <div className="w-full grid grid-cols-5 p-[40px_8%] gap-5">
        {arr.map((val, ind) => {
          return <Image onClick={() => jub(ind)} key={ind} src={`/${val}`} width={200}
          height={200} />
        })}
      </div>
    </div>
  );
}
