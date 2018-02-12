describe("SearchResult page", function() {
	  it("when you open result page directly from url it should show empty result and a link to search page", function () {
			cy.visit('http://hotelsearch.surge.sh/result')
			cy.contains('Search again').should('be.visible').log("Link to Search Page is displayed")
			cy.contains('No results').should('be.visible').log("No result is displayed")
			cy.wait(2000)
	  })
	  
	  it("when you open it from the search page you there is no result should also show empty result with link", function () {
			cy.visit('http://hotelsearch.surge.sh')
			cy.wait(2000)
			cy.contains('Clear').click().log("Clear To and from date fields")
			cy.get('input[data-test="start"]').click().log("Select start date")
			cy.contains('OK').click();
			cy.get('input[data-test="end"]').click().log("select end date")
			cy.contains('OK').click();	
			cy.contains('Search').click().log("Click Search button")
			cy.contains('Search again').should('be.visible').log("Link to Search page is displayed")
			cy.contains('No results').should('be.visible').log("No result is displayed")
	  })
	  //For testing when you open it from the search page with result it should show hotels card list
	  it("when you open it from the search page with result it should show hotels card list", function () {
			cy.visit('http://hotelsearch.surge.sh')
			cy.wait(2000)
			cy.contains('Search').click().log("Click Search button")
			var Hotels =["Concorde Hotel","Golden Tulip","Le Meridien","Media One Hotel","Novotel Hotel","Rotana Hotel"];
			Hotels.forEach(function(item, index, array) {
				cy.contains(item).should('be.visible').log("Hotel exists")
			})
		})
		//For testing when you type in filter by name field it should filter the cards by name
		it("when you type in filter by name field it should filter the cards by name", function () {
			cy.visit('http://hotelsearch.surge.sh')
			cy.wait(2000)
			cy.contains('Search').click().log("Click Search button")
			verifyFilterHotels("Concorde Hotel");
		})
		
		//when you change price slider it should filter the cards by price
		it("when you change price slider it should filter the cards by price", function () {
		
		})
		//For testing when you click sort by name it should sort the cards by name
		it("when you click sort by name it should sort the cards by name", function () {
			cy.visit('http://hotelsearch.surge.sh')
			cy.wait(2000)
			cy.contains('Search').click().log("Click Search button")
			cy.contains('Sort By Name').click().log("Sort By Name")
			sortHotelsByName();		
		})
		//Assuming price slider do not change
		//For testing when you click sort by price it should filter the cards by price
		it("when you click sort by price it should filter the cards by price", function () {
			cy.visit('http://hotelsearch.surge.sh')
			cy.wait(2000)
			cy.contains('Search').click().log("Click Search button")
			cy.contains('Sort By Price').click().log("Sort by price")
			sortHotelsByPrice();
		})
});


//Functions
	//Filter Hotels
	function verifyFilterHotels(hotelname)
	{
		var Hotels =["Concorde Hotel","Golden Tulip","Le Meridien","Media One Hotel","Novotel Hotel","Rotana Hotel"];
		cy.get('input[id="name"]').type(hotelname)
		Hotels.forEach(function(item, index, array) {
			if (Hotels.indexOf(hotelname)==index)
				cy.contains(hotelname).should('be.visible')
			else
				cy.contains(item).should('not.be.visible')		
		})
	}
	//Sorting hotels by name
	function sortHotelsByName()
		{ 
			var Hotels =["Concorde Hotel","Golden Tulip","Le Meridien","Media One Hotel","Novotel Hotel","Rotana Hotel"];
			Hotels.forEach(function(item, index, array) {
				if(Hotels.indexOf(cy.contains(item).text)==index)
					assert.isNotTrue('true', 'Names are not sorted')			
			})
		}
	//Sorting hotels by price
	function sortHotelsByPrice()
		{ 
			var Prices =["28981","29419" ,"32704","37303","40004" ,"40515"];
			Prices.forEach(function(item, index, array) {
				if(Prices.indexOf(cy.contains(item).text)==index)
					assert.isNotTrue('true', 'Prices are not sorted')			
			})
		}

	