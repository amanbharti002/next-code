import Link from "next/link"

export default  async function(){
    const Api = async () =>{
        const res = await fetch(`https://api.vercel.app/blog`,
            {
                method:"GET"
            })
            const resData = await res.json()
            return resData
    }
    const x = await Api()
    console.log(x)
    return(
        <>
       <ul>
       {
        x.map((e,i)=>
                <Link href={`blog/${e.id}`}><li key={i}>{e.author}</li></Link>
            
            )
        }
        </ul> 
       


        </>
    )
}