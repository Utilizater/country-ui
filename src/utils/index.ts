export const isCountyCode = (st: string): boolean => {
  if (st.length !== 2) return false;
  const regex = new RegExp('[A-Z]{2}');
  return regex.test(st);
};

export const isLetter = (st: string) => st.match(/[a-zA-Z]/) || st === '';
