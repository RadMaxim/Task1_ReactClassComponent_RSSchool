// "use client"

// import { ElementType } from "@/All_Interface/BottomSection"
// import { useEffect, useState } from "react";

// interface SaveData{
//     dataForSaveAndUse:ElementType[]|string|null;
//     key:string
// }
// export const useStore=({dataForSaveAndUse, key}:SaveData)=>{
//         const [state, setState] = useState<ElementType[]|string|null>()
//         useEffect(()=>{
//             setState(dataForSaveAndUse)
//             localStorage.setItem(key,JSON.stringify(dataForSaveAndUse))
//         },[])
//         if (dataForSaveAndUse) {
//             return state
//         }



// }