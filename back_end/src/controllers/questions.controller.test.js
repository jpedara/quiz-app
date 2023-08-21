const { getRandomQuestions } = require('./questions.controller');
let { questions } = require('../models/questions');

it('should return a subset of random questions when the number of questions is greater than 5', () => {
    const req = {};
    const res = {
      json: jest.fn(),
    };

    questions.length = 10; // Simulate having more than 5 questions
    getRandomQuestions(req, res);

    expect(res.json).toHaveBeenCalledTimes(1); // Ensure res.json is called once
    const result = res.json.mock.calls[0][0];
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(5); // Ensure 5 random questions are returned
  });

  
describe('getRandomQuestions', () => {
  it('should return all questions when the number of questions is less than or equal to 5', () => {
    const req = {};
    const res = {
      json: jest.fn(),
    };

    questions.length = 3; // Simulate having 5 or fewer questions
    const result = getRandomQuestions(req, res);

  
    expect(res.json).toHaveBeenCalledWith(questions);
  });



  it('should handle errors by calling next with the error', () => {
    const req = {};
    const res = {};
    const next = jest.fn();

    // Simulate an error by modifying the questions array
    questions.push(undefined);

    getRandomQuestions(req, res, next);

    expect(next).toHaveBeenCalled();
  });
});
