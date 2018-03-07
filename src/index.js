const getPlayersIndex = (one, second) => {
  const params = ['papel', 'pedra', 'tesoura'];

  const oneParams = params.indexOf(one);
  const secondParams = params.indexOf(second);

  return [oneParams, secondParams];
}


module.exports = (_one, _second) => {
  const [one, two] = getPlayersIndex(_one, _second);

  if(one < 0 || two < 0)
   throw new Error('Fudeu!!!');

  if (one === two)
    return 0;

  if ((one < two || one - 2 === two) && one + 2 !== two)
    return 1;

  return 2;
};
