import { useEffect, useState } from "react";
import MainCard from "../MainCard/MainCard";
import PrivateRoute from "../../../Routes/PrivateRoute";


const Main = () => {

    const [cards,setCards] = useState([]);

    useEffect(()=>{
        fetch('news.json')
        .then(Response => Response.json())
        .then(data => setCards(data))
    },[])

    return (
        <div>
            <h1 className="text-3xl font-bold py-4 mt-2">Dragon News Home</h1>
            {
                cards.map(card => <MainCard key={card.id} card={card}></MainCard>)
            }

        </div>
    );
};

export default Main;