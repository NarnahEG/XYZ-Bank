/// <reference types ="cypress" />

import {acctno, curr, cusFname, cust, fname, lname, postCode, url, urlAdmin, urlConf} from './xyz.env.cy'

describe('XYZ Bank Test-Admin', () => {
  it('Admin Login', () => {
    cy.visit(url)
    //cy.url().should('include', urlConf)
    cy.get('.borderM')
    cy.get('.borderM > :nth-child(3)').click()
  })

  it('Add Customer', () => {
    cy.visit(urlAdmin)
    //cy.url().should('include', urlAdmin)
    //cy.get('.borderM')
    cy.get('.center')
    cy.get('[ng-class="btnClass1"]').click()
    cy.get(':nth-child(1) > .form-control').type(fname)
    cy.get(':nth-child(2) > .form-control').type(lname)
    cy.get(':nth-child(3) > .form-control').type(postCode)
    cy.wait(8000)
    cy.get('form.ng-dirty > .btn').click()
  })

  it('Open Account', () => {
    cy.visit(urlAdmin)
    cy.get('.center')
    cy.get('.container-fluid > :nth-child(2)')
    cy.get('[ng-class="btnClass2"]').click()
    cy.get('#userSelect').select(cust)
    cy.get('#currency').select(curr)
    cy.get('[type="submit"]').click()
  })

  it('View Customer', () => {
    cy.visit(urlAdmin)
    //cy.url().should('include', urlAdmin)
    //cy.get('.borderM')
    cy.get('.center')
    cy.get('[ng-class="btnClass3"]').click()
    cy.get('.form-control').type (cusFname)
    cy.get('.home').click()
  })
})

