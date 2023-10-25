const Validate = (username, email, password) => {
  const username_regex = /^[a-zA-Z0-9_]{3,20}$/;
  const email_regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  const password_regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const validUsername = username_regex.test(username);
  const validEmail = email_regex.test(email);
  const validPassword = password_regex.test(password);

  if (!validUsername) return "Username is not valid";
  if (!validEmail) return "Email is not valid";
  if (!validPassword) return "Password is not valid";

  return null;
};

export default Validate;
