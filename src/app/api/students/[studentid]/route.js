import { connectionSrt } from "@/lib/connect";
import { Hello } from "@/lib/model/stmodels";
import mongoose from "mongoose";
import { NextResponse } from "next/server";



export async function PUT(request, {params}){
    let id = await  params.studentid;
    let body = await request.json();
    let final = {_id: id};
    await mongoose.connect(connectionSrt)
    let result = await Hello.findOneAndUpdate(final, body)
    return NextResponse.json({result, success: true})
}

export async function GET(request, {params}){
    let id = await  params.studentid;
    let final = {_id: id};
    await mongoose.connect(connectionSrt)
    let result = await Hello.findById(final)
    return NextResponse.json({result, success: true})
}

export async function DELETE(request, {params}){
    let id = await  params.studentid;
    let final = {_id: id};
    await mongoose.connect(connectionSrt)
    let result = await Hello.findOneAndDelete(final)
    return NextResponse.json({result, success: true})
}

