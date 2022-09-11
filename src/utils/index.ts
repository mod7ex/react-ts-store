const uidGen = () => {
  let count = 0;

  return () => {
    count++;
    return `${Date.now()}-id-${count}`;
  };
};

export const uid = uidGen();
