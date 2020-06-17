const skillLevel = [
  'New to Chess',
  'Beginner',
  'Intermediate',
  'Advanced',
  'Expert'
];
const wrongUsername = [' ', ' test', '1A', '!!@@', '123456789abcdefqhijkl'];

const wrongEmail = [' ', 'a"b(c)d,e:f;gi[j\k]l@example.com', 'Abc.example.com', 'A@b@c@example.com',
  'just"not"right@example.com', 'not\\allowed@example.com', 'this\ still\"not\allowed@example.com',
  'example@localhost', '"much.more unusual"@example.com', '#@%^%#$@#$@#.com', '@example.com',
  'email@example@example.com', 'あいうえお@example.com', 'email@example.com (Joe Smith)',
  'email@example', 'email@111.222.333.44444'];

const wrongPassword = [' ', 1, '12345'];


const notifications = {
  wrongUserInputNot: 'Username must be between 3-20 characters long and use only letters and numbers',
  wrongEmailInputNot: 'This is not a valid email format',
  wrongPasswordInputNot: 'Password should have at least 6 characters',
  weakPasswordInputNot: 'Password is too weak'
};

const correctUsername = ['rerh', 'someNewUser1', 'somesomesomesomesome', 'somesomesomesome1234'];

const correctEmail = ['valid@user.com', 'valid..@user.com', 'valid..@user..com', 'valid..@user..co',
  'valid@user..commmm', 'valid@-user.com'];

const correctPassword = ['123456!#', '123456!#HH*&?@'];

export {skillLevel, wrongUsername, notifications, wrongEmail, wrongPassword, correctUsername, correctEmail,
  correctPassword };


