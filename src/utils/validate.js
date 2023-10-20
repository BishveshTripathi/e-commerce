const Validate = (email, password) => {
  const email_regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  const password_regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const validEmail = email_regex.test(email);
  const validPassword = password_regex.test(password);

  if (!validEmail) return "Email is not valid";
  if (!validPassword) return "Password is not valid";

  return null;
};

export default Validate;
