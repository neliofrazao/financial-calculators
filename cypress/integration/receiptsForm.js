describe('Get receipts result ', () => {
  context('Form subimition', () => {
    it('shoud submit form correctly', () => {
      cy.visit('http://localhost:8080/');
      cy.get('#amount').type('12340');
      cy.get('#installments').type('5');
      cy.get('#mdr').type('4');
      cy.get('#send').click();

      cy.get('#receipts > :nth-child(1)').should('contain', '10.440,00');
      cy.get('#receipts > :nth-child(2)').should('contain', '10.661,00');
      cy.get('#receipts > :nth-child(3)').should('contain', '10.898,00');
      cy.get('#receipts > :nth-child(4)').should('contain', '11.562,00');
    });

    it('Should print error message for wrong data', () => {
      cy.visit('http://localhost:8080/');
      cy.get('#amount').type('12340');
      cy.get('#installments').type('14');
      cy.get('#mdr').type('4');
      cy.get('#send').click();

      cy.get('#alert').should('contain', 'Por favor, preencha os itens corretamente');
    });
    it('Should print error message for missing data', () => {
      cy.visit('http://localhost:8080/');
      cy.get('#amount').type('12340');
      cy.get('#installments').type('14');
      cy.get('#send').click();

      cy.get('#alert').should('contain', 'Por favor, preencha os itens corretamente');
    });
  });
});
