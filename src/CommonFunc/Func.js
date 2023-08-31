
export const Increment =(value)=>{
   return(value+=1) 
}
export const Decrement = (value)=>{
    if(value>1){
        value-= 1
    }
    return(value)
}
export const stat = (stat)=>{
if(stat == true){
   return stat = false
}
else{
    return stat= true
}
}