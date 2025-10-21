export const checkValidData = (email, password, username) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isUsernameValid = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(username);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";
  if (!isUsernameValid) return "Name is not valid";

  return null;
};
