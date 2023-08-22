import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  it('renders without errors', () => {
    render(<App />);
    const titleElement = screen.getByText(/Ancient Rome Quiz/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('initially shows the "Start Quiz" button', () => {
    render(<App />);
    const startButton = screen.getByText(/Start Quiz/i);
    expect(startButton).toBeInTheDocument();
  });

  it('clicking "Start Quiz" button changes the view', () => {
    render(<App />);
    const startButton = screen.getByText(/Start Quiz/i);

    fireEvent.click(startButton);

    const titleElement = screen.getByText(/Quiz Completed/i);
    expect(titleElement).toBeInTheDocument();
  });

  
  it('does not show Quiz component initially', () => {
    render(<App />);
    const quizComponent = screen.queryByTestId('quiz-component');
    expect(quizComponent).toBeNull();
  });

  it('getting App snapshot',()=>{
    const { container} = render(<App/>)
    expect(container).toMatchSnapshot();
  })
});
