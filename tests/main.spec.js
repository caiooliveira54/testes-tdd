import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main.js';

describe('Calc', () => {
  
  describe('Smoke tests', () => {
    it('should exist the method "sum"', () => {
      expect(sum).to.exist;
    });

    it('should exist the method "sub"', () => {
      expect(sub).to.exist;
    });

    it('should exist the method "mult"', () => {
      expect(mult).to.exist;
    });

    it('should exist the method "div"', () => {
      expect(div).to.exist;
    });
  });

  describe('Sum', () => {
    it('shoud return 5 when "sum(3,2)"', () => {
      expect(sum(3,2)).to.be.equal(5);
    });
  });

  describe('Sub', () => {
    it('shoud return 2 when "sub(6,4)"', () => {
      expect(sub(6,4)).to.be.equal(2);
    });
  });

  describe('Mult', () => {
    it('shoud return 15 when "mult(3,5)"', () => {
      expect(mult(3,5)).to.be.equal(15);
    });
  });

  describe('Div', () => {
    it('should not divide when "div(12, 0)"', () => {
      expect(div(12, 0)).to.be.equal("It's not possible to divide by zero.");
    });

    it('shoud return 6 when "div(18,3)"', () => {
      expect(div(18,3)).to.be.equal(6);
    });
  });
});
