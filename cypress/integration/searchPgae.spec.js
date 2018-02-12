describe("Search page", function() {
		//For Testing Placeholder
	  it("when you open the home page show a place holder till the data is loaded", function () { 
			cy.visit('http://hotelsearch.surge.sh/');
			cy.contains('Premature optimization is the root of all evil!').log("Placeholder is displayed before content")
			cy.wait(2000);			 	
	  })
		//For testing that data is loaded correctly in the page
	   it("when the data loaded should show a 2 date pickers and 2 button", function () { 
			cy.visit('http://hotelsearch.surge.sh/');
			cy.wait(2000);
			cy.contains('Clear').should('be.visible').log("Clear button exists")
			cy.contains('Search').should('be.visible').log("Search button exists")
			cy.get('input[data-test="start"]').should('be.visible').log("From Field exists")
			cy.get('input[data-test="end"]').should('be.visible').log("To Field exists")
			cy.wait(2000);			 	
	  })
		//For testing that date picker exists
	  it("when you click any of  to it should open a date picker", function () {
			cy.visit('http://hotelsearch.surge.sh/');
			cy.wait(2000);
			cy.get('input[data-test="start"]').click();
			cy.wait(2000);
			cy.contains('OK').should('be.visible').log("Date Picker exist")
			cy.wait(2000);			 	
	  })
	 
		//For testing that To field is updated when user select date from the date picker 
	  it("when you choose a date from the picker it should update the fields ", function () {
			cy.visit('http://hotelsearch.surge.sh/')
			cy.wait(2000);
			cy.get('input[data-test="start"]').click();
			cy.contains('08').click();
			cy.contains('OK').click().log("Select from date")
			cy.get('input[data-test="start"]').should('have.value', '08-01-2020').log("Validate that date field should be updated")
			cy.wait(2000);
	  })
	   //For testing Clear button
	   it("when you click Clear Button, it should clear the two Fields ", function () {
			cy.contains('Clear').click().log("Clear Button is clicked")
			cy.wait(2000);
			cy.get('input[class="jss204 jss207"]').should('have.value', '').log("Fields should be cleared" )
			cy.wait(2000);
	  })
		//For testing Search button when To and From fields are empty
		it("when you click search and Fields are empty,Validation is displayed ", function () {
			cy.visit('http://hotelsearch.surge.sh/');
			cy.wait(5000);
			cy.contains('Clear').click().log("Clear button is clicked")
			cy.contains('Search').click().log("Search button is clicked")
			cy.wait(5000);
			cy.get('input[class="jss204 jss207"]').should('have.value', 'this field is required').log("Validation message is displayed" )
			cy.wait(2000);
	  })
		//For testing Search when From and to field are not empty 
	   it("when you click search and Fields are not empty should go to result page ", function () {
			cy.visit('http://hotelsearch.surge.sh/')
			cy.wait(5000);
			cy.get('input[data-test="start"]').click().log("From field is clicked successfully")
			cy.contains('08').click();
			cy.contains('OK').click().log("Select To date ")
			cy.wait(2000);
			cy.get('input[data-test="end"]').click().log("To field is clicked successfully")
			cy.contains('12').click();
			cy.contains('OK').click().log("Select To date ")
			cy.contains('Search').click().log("Search field is clicked successfully")
			cy.contains('Sort By Name').should('be.visible')
	  })
		// For testing invalid scenario search with start date greater than end date
		it("invalid scenario search with start date greater than end date", function () {
			cy.visit('http://hotelsearch.surge.sh/')
			cy.wait(5000);
			cy.contains('Clear').click().log("Clear button is clicked")
			cy.get('input[data-test="start"]').click().log("From field is clicked successfully")
			cy.contains('11').click();
			cy.contains('OK').click().log("Select To date ")
			cy.wait(2000);
			cy.get('input[data-test="end"]').click().log("To field is clicked successfully")
			cy.contains('10').click();
			cy.contains('OK').click().log("Select To date ")
			cy.contains('Search').click().log("Search field is clicked successfully")
			cy.get('input[class="jss204 jss207"]').should('have.value', 'start date can not be greater than end date').log("Validation message is displayed" )		
	  })
   
  
  });
  
  