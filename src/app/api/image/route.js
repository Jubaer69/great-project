import { NextResponse } from "next/server"
import {writeFile} from 'fs/promises'

export async function POST(req){
    let data = await req.formData()
    let file =  data.get("file")
    if(!file){
        return NextResponse.json({result: "no file found", success: false})

    }
    let fileData = await file.arrayBuffer()
    let buffer = Buffer.from(fileData)
    let path = `./public/${file.name}`;
    await writeFile(path, buffer)
    return NextResponse.json({result: "file found", success: true})
}