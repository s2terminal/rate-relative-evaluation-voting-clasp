/** 1〜maxまでの乱数 */
const rand = (max: number): number => Math.floor(Math.random() * max) + 1;
/** ランダムに1個とりだす */
const pick = <T>(a: T[]) => a[rand(a.length) - 1];

const RATE_VALUES = ["とても良かった","良かった","ふつう","悪かった","とても悪かった"];
const LANES = ["ServiceLane", "JobLane", "ProfileLane"];
export const TERMS = () => 12;

const generateDummyName = () => {
  const radix = 16;
  const randomNumber = 1000;
  return new Date().getTime().toString(radix) + Math.floor(randomNumber * Math.random()).toString(radix);
}
const generateRandomTarget = (term: number) => `${pick(LANES)}-${term}`;
const generateRandomValue = () => pick(RATE_VALUES);

type Data = {
  'name': string,
  'target': string,
  'value': string
}

export const generateDummyUserData = (): Data[] => {
  const ret: Data[] = [];
  const name = generateDummyName();

  for (let term = 1; term <= TERMS(); term++) {
    ret.push({
      'name': name,
      'target': generateRandomTarget(term),
      'value': generateRandomValue(),
    });
  }

  return ret;
}
