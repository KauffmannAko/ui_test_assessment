export default {
  validUser: {
    firstName: 'John',
    lastName: 'Smith',
    email: `john.smith.${Date.now()}@example.com`,
    password: 'P@ssw0rd123',
    confirmPassword: 'P@ssw0rd123',
    linkedIn: 'https://www.linkedin.com/in/john-smith',
  },
  invalidEmailUser: {
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith',
    password: 'P@ssw0rd123',
    confirmPassword: 'P@ssw0rd123',
    linkedIn: 'https://www.linkedin.com/in/john-smith',
  },
  mismatchedPasswordUser: {
    firstName: 'John',
    lastName: 'Smith',
    email: `john.smith.${Date.now()}+mismatch@example.com`,
    password: 'Password123',
    confirmPassword: 'Password456',
    linkedIn: 'https://www.linkedin.com/in/john-smith',
  },
};
