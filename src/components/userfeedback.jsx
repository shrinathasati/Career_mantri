import React, { useState } from 'react';
import './FeedbackComponent.css'; // Import your CSS file for feedback styling

const FeedbackComponent = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [additionalComments, setAdditionalComments] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Fake default feedback
  const defaultFeedback = [
    {
      user: 'John Doe',
      rating: 5,
      comment: 'Excellent service! Highly recommended.',
    },
    {
      user: 'Jane Smith',
      rating: 4,
      comment: 'Good experience overall. Quick response time.',
    },
    // Add more default feedback as needed
  ];

  const handleInputChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  const handleCommentsChange = (event) => {
    setAdditionalComments(event.target.value);
  };

  const handleSubmit = () => {
    // Implement your logic for handling the feedback submission
    console.log('Feedback submitted:', feedback);
    console.log('Rating submitted:', rating);
    console.log('Additional Comments submitted:', additionalComments);

    // Set submitted to true to show a success message or hide the form
    setSubmitted(true);
  };

  return (
    <div className="feedback-container">
      <h1>Feedback</h1>
      <div className="default-feedback">
        <h1>User feedback</h1>
        {defaultFeedback.map((item, index) => (
          <div key={index} className="default-feedback-item">
            <p>{`User: ${item.user}`}</p>
            <p>{`Rating: ${item.rating}`}</p>
            <p>{`Comment: ${item.comment}`}</p>
          </div>
        ))}
      </div>
      <div className="user-feedback">
        <h1>Please submit your own feedback</h1>
        {submitted ? (
          <div className="success-message">
            <p>Thank you for your valuable feedback!</p>
          </div>
        ) : (
          <div className="feedback-form">
            {/* Your existing input fields */}
            <label className="question">
              How would you rate our service?{' '}
              <select value={rating} onChange={handleRatingChange}>
                <option value={0}>Select</option>
                <option value={1}>1 - Poor</option>
                <option value={2}>2 - Fair</option>
                <option value={3}>3 - Good</option>
                <option value={4}>4 - Very Good</option>
                <option value={5}>5 - Excellent</option>
              </select>
            </label>

            <label className="question">
              Additional Comments:
              <textarea
                rows="4"
                cols="50"
                placeholder="Enter your feedback here..."
                value={additionalComments}
                onChange={handleCommentsChange}
              ></textarea>
            </label>

            <label className="question">
              Feedback:
              <textarea
                rows="4"
                cols="50"
                placeholder="Tell us more about your experience..."
                value={feedback}
                onChange={handleInputChange}
              ></textarea>
            </label>

            <button onClick={handleSubmit} className="submit-button">Submit Feedback</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackComponent;
