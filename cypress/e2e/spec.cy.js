
/// <reference types ="Cypress"/>
describe('Checking Counter Application', () => {
  // it('Checking if counter application is present', () => {
  //   cy.visit("http://localhost:3000/")
  //   cy.get("h2").should("exist");
  //   cy.get(".addCounter").should("exist");
  //   cy.get(".redCounter").should("exist")
  // })

  // it("Should Increment Counter",()=>{
  //   cy.visit("http://localhost:3000/")
  //   cy.get("h2").should("have.text","The count is 6");
  //   cy.get(".addCounter").click();
  //   cy.get("h2").should("have.text","The count is 7");
  // })

  // it("Should Increment multiple times",()=>{
  //   cy.visit("http://localhost:3000/");
  //   cy.get("h2").should("have.text","The count is 6");
  //   cy.get(".addCounter").click();
  //   cy.get(".addCounter").click();
  //   cy.get(".addCounter").click();
  //   cy.get("h2").should("have.text","The count is 9");
  // })

  // it("Should Decrement multiple times",()=>{
  //   cy.visit("http://localhost:3000/");
  //   cy.get("h2").should("have.text","The count is 6");
  //   cy.get(".redCounter").click();
  //   cy.get(".redCounter").click();
  //   cy.get("h2").should("have.text","The count is 4");
  // })

  it("Should intercept the GET request",()=>{
    cy.visit("http://localhost:3000")
    cy.intercept("GET","http://localhost:8080/count",{value:"Masai"}).as(
      "getReq"
    );
    cy.wait("@getReq").should((data)=>{
      console.log("Data from")
    })
  })
})