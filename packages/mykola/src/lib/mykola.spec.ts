import { author } from './mykola';

describe('mykola.author', () => {
  it('should work', () => {
    expect(author.name).toEqual('Myk Bilokonsky');
    expect(author.twitter).toEqual('@mykola');
    expect(author.github).toEqual('mbilokonsky');
  });
});
