
import { useEffect, useState } from "react";
import axios from "axios";
import { Food, LocalHost } from "../../../api/API";
import { FoodItmes } from "../../../components/FoodItmes";

export const ColdDishes = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`${LocalHost}${Food}2/`).then((res) => setData(res.data));
        console.log("oknfjnd");
    }, [LocalHost]);
    return (
			<>
				<ul className='dishes-list-box'>
					{data.map((item, index) => (
						<FoodItmes key={index} obj={item} />
					))}
				</ul>
			</>
		);
}

