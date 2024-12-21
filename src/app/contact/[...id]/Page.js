"use client"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/router"

export default function({params}){
    console.log(params.id[0])
    const id = useRouter
    const kk = useSearchParams();
    console.log(kk.get("name"))
    return(
        <>
        <h1>hello id {params.id}</h1>
        </>
    )
}