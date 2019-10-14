import { SubmissionError } from 'redux-form';

const sleep = (ms) => Promise((revolse) => setTimeout(revolse, ms));

const submit = values => {
  return sleep(1000).then(() => {
    if (!'0101010100'.includes(values.username)) {
      throw new SubmissionError({
        username: 'username sai',
        _error: 'login failed',
      });
    } else if (!'123123'.includes(values.password)) {
      throw new SubmissionError({
        password: 'password sai',
        _error: 'login failed',
      });
    }
  });
};
