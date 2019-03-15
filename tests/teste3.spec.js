var expect = require('chai').expect;

describe('Teste3', () => {
  var arr;

  // roda uma vez, antes do bloco
  before(function() {
    
  });

  // roda uma vez, depois do bloco
  after(function() {
      });

  // roda todas as vezes, antes de cada bloco
  beforeEach(function() {
    arr = [1, 2, 3];
  });

  // roda todas as vezes, depois de cada bloco
  afterEach(function() {
    
  });

  // testar tipos ou se existe (smoke test)
  it('should be an array', function(){
    expect(arr).to.be.a('array');
  })

  it('should have a size of 4 when push another value to te array', function() {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should have a size of 4 when push another value to te array', function() {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });

  it('should remove 3 when use pop in the array', function() {
    expect(arr.pop() === 3).to.be.true;
  });

});
