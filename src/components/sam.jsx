import { useEffect } from "react";

function Sam(){
    useEffect(()=>{
        getSam();
    },[]);
    const getSam=async()=>{
        const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=139cdb1a814740bbb24e440d0b71b45b&number=9&tags=vegetarian`)
        const data=await api.json()
        console.log(data);
    };
    return(<div>Sam</div>)
}

export default Sam;