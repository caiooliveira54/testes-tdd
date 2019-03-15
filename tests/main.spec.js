import { expect } from 'chai';

describe('Main', () => {
  describe('Method A', () => {
    context('Case 1', () => {
        // .skip pule tal teste ou caso de teste. ele vai ser sinalizado em azul.
        // ex.: it.skip('faz alguma parada ae', () => { });
      it.skip('faz alguma parada ae', () => {

        throw new Error('se ferrou ae');
      });
      
      it('faz alguma parada ae 1.5', () => {
  
      });
    });

    // .only faz com que o npm test execute apenas tal teste. 
    // ex.: context context.only('Case 2', () => { });
    context('Case 2', () => {
      it('faz alguma parada ae 2', () => {
  
      });
    });

  });

  describe('Method A', () => {

  });
});
