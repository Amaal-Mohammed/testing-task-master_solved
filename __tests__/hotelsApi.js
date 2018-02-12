var axios = require("axios");
describe("Hotels Api", function() {
	//Testing get request
	test('List of hotels', () => {
	  return axios.get('http://localhost:3000/hotels')
			.then( res => console.log(res.data) )
	})
	//Testing post request
	axios.post('http://localhost:3000/hotels', {
		  "name":"Elmandra",
		  "city": "alexandria",
		  "price": 500,
		  "availability": [
			  { "from": "10-10-2020", "to": "15-10-2020" },
			  { "from": "25-10-2020", "to": "15-11-2020" },
			  { "from": "10-12-2020", "to": "15-12-2020" }
			]
		  })
		  .then( res => console.log(res.status) ).catch(function (error) {
			console.log(error);
	 });
	 //Testing get with parameter
	test('List of hotels with param', () => {
		return  axios.get('http://localhost:3000/hotels', {
			params: {
			  id: 1
			}
		  })
				.then( res => console.log(res.data) )
	})
	//Testing patch request 
	test('patch hotel', () => {
		axios.patch('http://localhost:3000/hotels/3',{
		name: 'new Elmandra'
		},)
		.then( res => console.log(res.status) )
	});
	//Testing delete request
	test('delete', () => {
		return  axios.delete('http://localhost:3000/hotels/5')
			.then( res => console.log(res.data) )
	})
});




