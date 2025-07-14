import React, { useState } from 'react';

// This component handles lost & found reports for laundry machines
// Shows a form to submit reports and displays existing ones

const LostAndFound = () => {
const [comments, setComments] = useState([]);
// State for the new comment being typed
const [newComment, setNewComment] = useState({
machine: '',
comment: ''
});

// Handles changes in the form inputs
const handleInputChange = (e) => {
const { name, value } = e.target;
setNewComment({
...newComment, // Keep existing values
[name]: value // Update the changed field
});
};

const handleSubmit = (e) => {
e.preventDefault();
if (!newComment.machine || !newComment.comment) {
alert('Please select a machine and enter your comment');
return;
}

setComments([...comments, {
  ...newComment,
  id: Date.now(),
  date: new Date().toLocaleString()
}]);

// Reset form after submission
setNewComment({
  machine: '',
  comment: ''
});


};

return (
<div className="lost-and-found-section">
<h2 className="section-title">Lost & Found</h2>
<p className="section-subtitle">Found something in a washer or dryer? Let us know!</p>

   {/* Submission form */}
  <form onSubmit={handleSubmit} className="comment-form">
    <div className="form-group">
      <label className="form-label">Machine</label>
      <select
        name="machine"
        value={newComment.machine}
        onChange={handleInputChange}
        className="form-select"
      >
        <option value="">Select a machine</option>
        <option value="Washer-Dryer #1">Washer-Dryer #1</option>
        <option value="Washer-Dryer #2">Washer-Dryer #2</option>
      </select>
    </div>
    
    <div className="form-group">
      <label className="form-label">Comment</label>
      <textarea
        name="comment"
        value={newComment.comment}
        onChange={handleInputChange}
        className="form-input"
        rows="3"
        placeholder="Describe what you found..."
      ></textarea>
    </div>
    
    <button type="submit" className="submit-button">
      Add Report
    </button>
  </form>
  
  {/* List of existing reports */}
  <div className="comments-list">
    {comments.length > 0 ? (
      comments.map((comment) => (
        <div key={comment.id} className="comment-card">
          <div className="comment-header">
            <span className="machine-badge">{comment.machine}</span>
            <span className="comment-date">{comment.date}</span>
          </div>
          <p className="comment-text">{comment.comment}</p>
        </div>
      ))
    ) : (
      <p className="no-comments">No lost items reported yet.</p>
    )}
  </div>
</div>


);
};

export default LostAndFound;