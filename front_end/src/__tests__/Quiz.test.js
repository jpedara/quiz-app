import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios'; // You might need to mock axios calls
import Quiz from '../components/Quiz';

// Mocking axios GET request for questions
jest.mock('axios');

describe('Quiz component', () => {
  const mockQuestions = [
    {
      question: 'What is a question?',
      choices: ['Choice 1', 'Choice 2', 'Choice 3','Choice 4'],
      answer_index: 0,
      hint: 'Hint for question 1',
    }
  ];

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockQuestions });
  });

  it('fetches and displays questions', async () => {
    render(<Quiz />);

    // Wait for questions to load
    await waitFor(() => screen.getAllByText(/Question 1/i));

    // Check if the question and choices are rendered
    const questionElement = screen.getByText(/What is a question?/i);
    expect(questionElement).toBeInTheDocument();

    const choiceButtons = screen.getAllByRole('button');
    expect(choiceButtons).toHaveLength(4);
  });

  it('displays quiz completion and score when finished', async () => {
    render(<Quiz />);

    // Wait for questions to load
    await waitFor(() => screen.getAllByText(/Question 1/i));

    // Answer all questions
    const choiceButtons = screen.getAllByRole('button');
    fireEvent.click(choiceButtons[0]);

    // Wait for the quiz completion message
    await waitFor(() => screen.getByText(/Quiz Completed!/i));

    // Check if the score is displayed correctly
    const scoreElement = screen.getByText(/Your Score: 1 \/ 1/i);
    expect(scoreElement).toBeInTheDocument();
  });

  it('should get App snapshot',()=>{
    const { container} = render(<Quiz/>)
    expect(container).toMatchSnapshot();
  })

});
