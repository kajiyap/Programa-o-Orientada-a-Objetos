import Top10Quantidade from "./top10quantidade";
import Top5valor from "./top5valor";
import TopProdServ from "./topProdServ";

export default function Dashboard(props){
    return(
        <div className="container-fluid" style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <Top10Quantidade tema={props.tema}/>
                <Top5valor tema={props.tema}/>
                <TopProdServ tema={props.tema}/>
            </div>
        </div>
    )
}