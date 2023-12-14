import React from 'react'
// import React, { useState } from 'react'

function Navbar() {
	// const [categories, setCategories] = useState([])

	const fetchCategories = () => {
		let url = "https://owen.neenoz.com/rest/V1/categories/list?searchCriteria[pageSize]=50&searchCriteria[sortOrders][0][field]:=parent_id&searchCriteria[sortOrders][0][direction]:=asc";
		var myHeaders = new Headers();
		myHeaders.append("Authorization", "Bearer sn0me5z12njw5q8b2iht7f027yyw7c54");
		myHeaders.append("Content-Type", "application/json");
		// myHeaders.append("Origin", "http://localhost:3000");

		var requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow'
		};

		fetch(url, requestOptions)
			.then(response => response.text())
			.then(result => console.log(result.items))
			.catch(error => console.log('error', error));
	}

	return (
		<div>
			<button type="button" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm" onClick={fetchCategories}>Save</button>
		</div>
	)
}

export default Navbar
