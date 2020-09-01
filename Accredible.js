
//import { HomePage } from "../page-objects/home-pages";
describe('Accredible Test Suite ', function() {
   // const homepage =new HomePage()
  //Mostly used for Setup Part
  beforeEach(()=> {
    //homepage.navigate()
    cy.visit('https://verify.accredible.com');   
    
  
  })  
  it ('verify Credential path Header and verify button Test',function()
    {

      cy.get('h2 > .ng-binding').contains('Enter a Credential URL'); 
    cy.get('.text-right > .button').eq().should('not.be.disabled');      

    })


   
    it('Verify Credential Status available Test', function()
    {
  
    cy.get('#myUrl').click();
     cy.get('#myUrl').type('https://www.credential.net/d228005c-f018-4f2d-b532-82d8c5be5963');
      cy.get('.text-right > .button').click();  
    
      cy.get('.cling > .status').eq().should('not.be.disabled');
      cy.get('.result-title').contains('Credential is VERIFIED');      
       

    
  })
  
    it('Verify Issue Date Test', function()

    {    
      cy.get('#myUrl').type('https://www.credential.net/d228005c-f018-4f2d-b532-82d8c5be5963');
      cy.get('.text-right > .button').click(); 
      cy.wait(5)
      cy.get('.card > :nth-child(5)').click();       
    

    })
  })
  
  
  
  
 


  


