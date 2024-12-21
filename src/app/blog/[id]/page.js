export default async function({params}){
    const id = params.id
    const Api_Path = `https://api.vercel.app/blog/${id}`;
    const Api_Call = async ()=>{
        const header = {
            method:"GET",
        }
        const res = (await fetch(`${Api_Path}`,header))
        const x = await res.json()
        return x
    }
    const x = await Api_Call()
    return(
        <>
        <h1>{x.author}</h1>
        <h1>{x.title}</h1>
        <h1>{x.category}</h1>
        <h1>{x.id}</h1>
        </>
    )

}