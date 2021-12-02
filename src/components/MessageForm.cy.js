import { mount } from '@cypress/vue';
import MessageForm from './MessageForm.vue';

describe('MessageForm', () => {
  it('show emit "send" event.', () => {
    mount(MessageForm);

    cy.get('[data-test="messageText"]').type('message');
    cy.contains('send')
      .click()
      .then(() => {
        // vtu =>wrapper
        // wrapper.emitted()
        // chai => ject
        expect(Cypress.vueWrapper.emitted('send')[0]).toEqual(['message']);
      });
  });
});
