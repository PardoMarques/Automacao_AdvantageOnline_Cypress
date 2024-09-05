describe('Teste Frontend: Login', () => {

  it('Deve realizar a chamada de Login com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body:{
        "email": "fulano@qa.com",
        "password": "teste"
      }
    }).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      expect(res.body).to.have.property('message')
      expect(res.body).to.have.property('authorization')
    })
  })
})