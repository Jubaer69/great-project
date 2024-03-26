"use client"

import { useRouter } from "next/navigation";

export default function Del({idx}){
    const router = useRouter()
    const id = idx;
    async function delx(){
        const link = await fetch(`http://localhost:3000/api/students/${id}`, {
            method: 'DELETE',
            cache: "no-cache"
        });
        let gg = await link.json();
        if(gg.success){
            alert('student deleted')
            return router.push('/data')
        }else{
            return alert('error found')
        }
    }
    return <button onClick={() => delx()} className="bg-red-400 text-black p-[5px_10px] rounded-md font-bold  cursor-pointer text-[20px]">Delete</button>
}