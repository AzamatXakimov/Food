import { Food, LocalHost } from "../../../api/API";
import axios from "axios";
import { useEffect, useState } from "react";
import { FoodItmes } from "../../../components/FoodItmes";
export const Grill = () => {
    	const [data, setData] = useState([]);
			useEffect(() => {
				axios.get(`${LocalHost}${Food}4/`).then((res) => setData(res.data));
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