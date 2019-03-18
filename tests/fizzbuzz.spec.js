import { expect } from 'chai';
import FizzBuzz from '../src/fizzbuzz/fizzbuzz.js';

describe('FizzBuzz Function', () => {
  
  describe('Smoke tests', () => {
    it('should exist the module "FizzBuzz"', () => {
      expect(FizzBuzz).to.exist;
    });
  });

  describe('Fizz', () => {
    it('should return "Fizz" when multiple of 3', () => {
      expect(FizzBuzz(3)).to.be.equal('Fizz');
      expect(FizzBuzz(6)).to.be.equal('Fizz');
    });
  });

  describe('Buzz', () => {
    it('should return "Buzz" when multiple of 5', () => {
      expect(FizzBuzz(5)).to.be.equal('Buzz');
      expect(FizzBuzz(10)).to.be.equal('Buzz');
    });
  });

  describe('FizzBuzz', () => {
    it('should return "FizzBuzz" when multiple of 3 and 5', () => {
      expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
      expect(FizzBuzz(30)).to.be.equal('FizzBuzz');
    });
  });

  describe('Not FizzBuzz', () => {
    it('should return a number when not multiple of 3 or 5', () => {
      expect(FizzBuzz(4)).to.be.equal(4);
      expect(FizzBuzz(7)).to.be.equal(7);
    });
  });

});
