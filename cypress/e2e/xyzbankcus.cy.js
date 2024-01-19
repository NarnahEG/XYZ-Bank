/// <reference types ="cypress" />

import {acctno, amt, curr, cusFname, cust, depAmt, failed, fname, lname, postCode, success, url, urlAdmin, urlConf, urlCus, witAmt} from './xyz.env.cy'

describe('XYZ Bank Test - Customer', () => {
  beforeEach(() => {
    //Customer Login
    cy.visit(url)
    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.get('#userSelect').select(cust)
    cy.get('form.ng-valid > .btn').click()
  })

  afterEach(() => {
    //Customer Home Page
    cy.get('.logout').click()
  })

  it('Transaction', () => {
    cy.url().should('include', urlConf)
    cy.get('[ng-class="btnClass1"]').click()
  })

  it('Deposit', () => {
    cy.url().should('include', urlConf)
    cy.get('[ng-class="btnClass2"]').click()
    cy.get('.form-control').type(depAmt)
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.error').should('be.visible').and ('have.text',success)
  })

  it('Withdrawal', () => {
    cy.url().should('include', urlConf)
    cy.get('[ng-class="btnClass3"]').click()
    cy.get('.form-control').type(witAmt)
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.error').should('be.visible').and ('have.text', failed)
  })
  
})

