/// <reference types ="cypress" />

import {acctno, curr, cusFname, cust, fname, lname, postCode, url, urlAdmin, urlConf, urlCus} from './xyz.env.cy'

describe('XYZ Bank Test - Customer', () => {
  it('Customer Login', () => {
    cy.visit(url)
    //cy.url().should('include', urlConf)
    cy.get('.borderM')
    cy.get('.borderM > :nth-child(3)').click()
  })

  it('Customer Login', () => {
    cy.visit(url)
    cy.get('.borderM > :nth-child(1) > .btn').click()
    //cy.url().should('include', urlCus)
    cy.get('#userSelect').select(cust)
    cy.get('[type="submit"]').click()
    cy.get('.borderM')
  })
  it.only('Transaction', () => {
    cy.visit(urlCus)
    //cy.get('[ng-class="btnClass1"]').click()
    cy.get('#userSelect').select(cust)
    cy.get('[ng-class="btnClass1"]').click()
    cy.get('[type="submit"]').click()
  })
  
})

