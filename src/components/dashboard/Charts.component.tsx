import React,{FC} from  "react";
interface Props{
    chartData:any
}

const Charts:FC<Props> = (props:Props) =>{
return <h1>Charts Section: {JSON.stringify(props)}</h1>
}


export default Charts;