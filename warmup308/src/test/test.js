var expect = chai.expect;
// var should = chai.should();

// sample!
describe('Intersection', function() {
  it('[1, 3, 5], [1, 2, 3] should return [1,3]', function() {
    expect(intersection([1, 3, 5], [1, 2, 3])).to.deep.equal([1, 3]);
  });
  it('[1, 234, 23, 3532, 12, 456, 33, 5], [1, 2, 33, 23, 5] should return [1, 23, 33, 5]', function() {
    expect(intersection([1, 234,23,3532, 12,456, 33, 5], [1, 2, 33, 23, 5])).to.deep.equal([1, 23, 33, 5]);
  });
});
