const passwordValidate = (text: string) => {
  const passRegex = new RegExp('^[A-Za-z0-9]{4,}$');
  if (passRegex.test(text)) {
    return true;
  } else {
    return false;
  }
};

const emailValidate = (text: string) => {
  let emailReg = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
  if (emailReg.test(text)) {
    return true;
  } else {
    return false;
  }
};

export {emailValidate, passwordValidate};
