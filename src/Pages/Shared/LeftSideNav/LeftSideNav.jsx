import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import ping1 from "../../../assets/1.png"
import ping2 from "../../../assets/2.png"
import ping3 from "../../../assets/3.png"


const LeftSideNav = () => {

    const [catagories,setCategories] = useState([]);

    useEffect(() =>{
        fetch('categories.json')
        .then(Response => Response.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div>
            <h1 className="text-4xl mb-2"> All categories</h1>
            {
                catagories.map(category =>  <Link 
                    className="block ml-4 text-2xl py-2 px-4 odd:bg-white hover:bg-slate-200"
                    key={category.id}
                    to={`/category/${category.id}`}
                    >{category.name}</Link>)
            }

            <div className="space-y-6 mt-6">
                <div>
                    <img src={ping1} className="w-full" />
                    <p className="text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div>
                        <div className="flex gap-2 mt-2 items-center"> 
                        <p className="mr-8 text-xl">sports</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75" stroke="#9F9F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                             <p> {moment().format("MMMM D , YYYY")}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={ping2} className="w-full" />
                    <p className="text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div>
                        <div className="flex gap-2 mt-2 items-center"> 
                        <p className="mr-8 text-xl">sports</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75" stroke="#9F9F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                             <p> {moment().format("MMMM D , YYYY")}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={ping3} className="w-full" />
                    <p className="text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div>
                        <div className="flex gap-2 mt-2 items-center"> 
                        <p className="mr-8 text-xl">sports</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75" stroke="#9F9F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                             <p> {moment().format("MMMM D , YYYY")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;