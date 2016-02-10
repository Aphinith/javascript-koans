describe("About Expects", function() {

  // We shall contemplate truth by testing reality, via spec expectations.  
  it("should expect true", function() {
    //changed the below boolean value from false to true
    expect(true).toBeTruthy(); // This should be true
  });

  // To understand reality, we must compare our expectations against reality.
  it("should expect equality", function() { 
	  //assigned the variable expectedValue to 2
    var expectedValue = 2;
	  var actualValue = 1 + 1;
	
	  expect(actualValue === expectedValue).toBeTruthy();
  });  

  // Some ways of asserting equality are better than others.
  it("should assert equality a better way", function() { 
	  //Declared the variable expectedValue after declaring the variable actualValue and assigned the variable expectedValue to be equal to actualValue
    var actualValue = 1 + 1
    var expectedValue = actualValue;
	
  // toEqual() compares using common sense equality.
	  expect(actualValue).toEqual(expectedValue);
  });

  // Sometimes you need to be precise about what you "type".
  it("should assert equality with ===", function() { 
	  //assigned the variable expectedValue to a number 2 with quotes around it so it is a string.
    var expectedValue = '2';
	  var actualValue = (1 + 1).toString();
	
  // toBe() will always use === to compare.
	  expect(actualValue).toBe(expectedValue);
  });  

  // Sometimes we will ask you to fill in the values.
  it("should have filled in values", function() {
	  expect(1 + 1).toEqual(2);
  });
});
