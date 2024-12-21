"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function (){
    const dd = useRouter();
    useEffect(()=>{

    dd.push("/contact/5")

},[])

return(
    <>
    <a href="contact/2">Contact</a>
    </>
)
}