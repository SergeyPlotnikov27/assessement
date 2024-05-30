describe('The about Page', () => {
    it('О сервисе успешно открывается', () => {
      cy.visit('localhost:9500/about') // change URL to match your dev URL
    })
})