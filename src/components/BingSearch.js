import React, { useState } from "react";
import Axios from "axios";
import Results from "./Results";
import "./BingSearch.css";
import Turners from "../img/turners logo.png";

function Punctremoved(a) {
	const result = a.replace(/[.,\\/#!$%^&\\*;:{}=\-_`~()]/g, " ");
	return result;
}

const BingSearch = () => {
	const [searchResults, setSearchResults] = useState(null);
	const [notFound, setNotFound] = useState(false);
	const [inputQuery, setInputQuery] = useState("");


	// takes search box input, removes punctuation and assigns to inputQuery variable,
	//   ready to be searched
	const handleChange = (e) => {
		const userInput = e.target.value;
		//const inputSpecCharsRemoved = userInput.replace(/[^a-z0-9]/gi, "").trim();
		const inputSpecCharsRemoved = Punctremoved(userInput);
		setInputQuery(inputSpecCharsRemoved);
	};

	// run when user searches, checks for response to have data, if it does will add data
	//   to searchResults state, otherwise turns notFound state to be true
	const handleSearch = async (e) => {
		e.preventDefault();
		console.log(inputQuery);
		try {
			const response = await Axios.post("http://localhost:4008/search", {
				query: inputQuery,
			});
			const data = response.data;
			if ("webPages" in data) {
				setSearchResults(data.webPages.value);
		
			} else {
				setNotFound(true);
			}
	
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<div className="turners-logo">
				<img src={Turners} alt="" />
			</div>
			<nav className="nav-container">
				<div className="nav-links">
					<a className="links" href="https://www.turners.co.nz/?activetab=carsearch">
						Cars
					</a>
					<a href="https://www.turners.co.nz/car-subscription/">Turners Subscription</a>
					<a href="https://www.turners.co.nz/Trucks-Machinery/?">Truscks & Machinery</a>
					<a href="https://www.turners.co.nz/Damaged-Vehicles/?">Damaged & End of Life</a>
					<a href="https://www.turners.co.nz/motorcycles-scooters/?sortorder=0&pagesize=20&pageno=1">Motorcycles</a>
					<a href="https://www.turners.co.nz/General-Goods/?">General Goods</a>
					<a href="https://www.turners.co.nz/buses-caravans/?sortorder=0&pagesize=20&pageno=1">
						Buses, Caravans & Motorhomes
					</a>
				</div>
			</nav>
			<div className="search-container">
				<div className="inner-search-container">
					<form action="" onSubmit={handleSearch} className={notFound ? "not-found" : "search-form"}>
						<input type="text" onChange={handleChange} id="search-bar-input" placeholder="Search Our FAQs" />
						<button id="submit-btn">Search</button>
					</form>
				</div>
			</div>

			<div>
				<h1 className="search-header">Search Results</h1>
				{searchResults &&
					searchResults.map((result) => {
						return <Results address={result.url} name={result.name} snippet={result.snippet}></Results>;
					})}
					<h1>one line added</h1>
			</div>
		</div>
	);
};

export { BingSearch, Punctremoved };
