import React,{Component} from "react";
import Cards from "./Cards.component";
import Charts from "./Charts.component";

//Managing State and Props via TS

interface Props{

}

interface State{
chartData:any,
cardData:any

}
class Dashboard extends Component<Props,State>{

    constructor(props:Props)
    {
        super(props)
        this.state={
            chartData:{c1:[5,6,7]},
            cardData:{"title":"THis is Card Data"}
        }
    }
    render()
        {
            const {chartData,cardData} = this.state;
        return(
            <div>
                <Cards cardData={cardData}/>
                <Charts chartData = {chartData}/>
            </div>
        )
    }
}

export default Dashboard;
