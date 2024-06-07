import React from "react";
import Top10Quantidade from "./top10quantidade";
import Top5valor from "./top5valor";
import TopProdServ from "./topProdServ";

interface DashboardProps {
    tema: string;
}

const Dashboard: React.FC<DashboardProps> = ({ tema }) => {
    return (
        <div className="container-fluid" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Top10Quantidade tema={tema} />
                <Top5valor tema={tema} />
                <TopProdServ tema={tema} />
            </div>
        </div>
    );
}

export default Dashboard;
