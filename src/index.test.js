const jokenpo = require('./index');

describe('input', () => {
  it('pedra && tesoura  == 11', () => {
    const result = jokenpo('pedra', 'tesoura');
    expect(result).toBe(1);
  });

  it('pedra && papel === 2', () => {
    const result = jokenpo('pedra', 'papel');
    expect(result).toBe(2);
  });

  it('pedra && pedra === 0', () => {
    const result = jokenpo('pedra', 'pedra');
    expect(result).toBe(0);
  });

  it('papel && tesoura === 2', () => {
    const result = jokenpo('papel', 'tesoura');
    expect(result).toBe(2);
  });

  it('papel && papel === 0', () => {
    const result = jokenpo('papel', 'papel');
    expect(result).toBe(0);
  });

  it('papel && pedra === 1', () => {
    const result = jokenpo('papel', 'pedra');
    expect(result).toBe(1);
  });

  it('tesoura && pedra === 2', () => {
    const result = jokenpo('tesoura', 'pedra');
    expect(result).toBe(2);
  });

  it('tesoura && papel === 1', () => {
    const result = jokenpo('tesoura', 'papel');
    expect(result).toBe(1);
  });

  it('tesoura && tesoura === 0', () => {
    const result = jokenpo('tesoura', 'tesoura');
    expect(result).toBe(0);
  });

  it('ass && papel === throw error', () => {
    expect(() => jokenpo('ass', 'papel')).toThrowError('Fudeu!!!');
  });

  it('ass && papel === throw error', () => {
    expect(() => jokenpo('ass', 'papel')).not.toThrowError('Fudeu 1!!!');
  });

  it('tesoura && ass === throw error', () => {
     expect(() => jokenpo('tesoura', 'ass')).toThrowError('Fudeu!!!');
  });

  it('"" && ass === throw error', () => {
     expect(() => jokenpo('', 'ass')).toThrowError('Fudeu!!!');
  });

  it('ass && "" === throw error', () => {
    expect(() => jokenpo('ass', '')).toThrowError('Fudeu!!!');
  });

  it('ass && "" === throw error', () => {
    expect(() => jokenpo('ass', null)).toThrowError('Fudeu!!!');
  });
});
