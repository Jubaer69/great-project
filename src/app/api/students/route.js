import { connectionSrt } from "@/lib/connect";
import { Hello } from "@/lib/model/stmodels";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    let data = [];
    let gg = false
    try{
        await mongoose.connect(connectionSrt)
        data = await Hello.find()
        gg = true
    }
    catch(error){
        data = 'not found';
        gg = false

    }
    return NextResponse.json({result: data, success: gg})
    
}

export async function POST(request, {params}){
    let payload = await request.json()
    let res = [];

    if(!payload.name || !payload.roll){
        return NextResponse.json({success: false})
    }
    else{
        await mongoose.connect(connectionSrt)
        let student = await Hello(payload)
        res = await student.save()
        return NextResponse.json({res, success: true})
    }
    
}