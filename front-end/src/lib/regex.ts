export const emailValidation = (email: string) =>
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
    email,
  );

export const passwordValidation = (password: string) =>
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);

export const htmlConvertToString = (str: string) =>
  str
    .replace('&nbsp;', '')
    .replace('&lt;', '<')
    .replace('&gt;', '>')
    .replace('&amp;', '&')
    .replace('&quot;', '"')
    .replace('<b>', '')
    .replace('</b>', '');
