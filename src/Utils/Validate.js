export const numberCheck = str => {
  const re = /^[0-9\b]+$/;

  if (str === "" || re.test(str)) {
    // 숫자만 입력 가능
    return true;
  } else {
    return false;
  }
};

export const stringCheck = str => {
  const re = /^[0-9?,0-9\b]+$/;
  if (str === "" || re.test(str)) {
    return true;
  } else {
    return false;
  }
};
