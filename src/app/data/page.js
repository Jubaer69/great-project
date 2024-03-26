import Del from "@/lib/Del";
import Link from "next/link";

async function Users() {
  const link = await fetch('http://localhost:3000/api/students', {cache: "no-cache"});
  const gg = await link.json();
  return gg.result;
}

export default async function Data() {
  const datas = await Users();
  console.log(datas)

  return (
    <div className="w-full h-full bg-black">
      <h1 className="text-[30px] text-center text-white font-bold">Data Base</h1>
      <div className="flex gap-6 items-center p-[5px_20px] border border-solid border-white">
          <h1 className="text-[26px] text-orange-400 w-[250px] font-bold text-white" >Name</h1>
          <h1 className="text-[26px] text-pink-400 w-[200px] font-bold text-white" >Roll</h1>
          <h1 className="text-[26px] w-[200px] text-green-400 font-bold text-white" >Task</h1>
        </div>
      {datas.map((val, ind) => {
        return <div key={ind} className="flex gap-6 items-center p-[5px_20px] border border-solid border-white">
          <h1 className="text-[20px] capitalize w-[250px] font-bold text-white" >{val.name}</h1>
          <h1 className="text-[20px] w-[200px] font-bold text-white" >{val.roll}</h1>
          <Link href={`/data/${val._id}`} className="bg-violet-400 text-black p-[5px_10px] rounded-md font-bold  cursor-pointer text-[20px]">Edit</Link>
          <Del idx={val._id} />
          {/* <button className="bg-red-400 text-black p-[5px_10px] rounded-md font-bold  cursor-pointer text-[20px]">Delete</button> */}
        </div>
      })}
      {/* <table className="w-[400px] ">
                <tr className="text-[24px] ">
                    <th className="border text-indigo-600 border-solid border-white text-white">Name</th>
                    <th className="border text-indigo-600 border-solid border-white text-white">Roll</th>
                </tr>
               <tbody>
               {datas.map(val => {
                    return <tr key={val._id} className="text-[20px]">
                       <td className="border border-solid border-white capitalize text-white">{val.name}</td>
                        <td className="border border-solid border-white text-white">{val.roll}</td>
                     </tr>
                })}
               </tbody>
            </table> */}

      
      <Link className="text-white" href="/">
        Go Back
      </Link>
    </div>
  );
}
