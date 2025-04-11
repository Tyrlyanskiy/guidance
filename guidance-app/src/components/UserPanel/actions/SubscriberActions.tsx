const SubscriberActions = () => {
  const handleCommentClick = () => {
    console.log("Adding comment");
  };

  return (
    <div className="flex flex-col gap-2">
      <h3>Subscriber Actions</h3>
      <p>As a subscriber, you can add comments.</p>
      <p>Click the button below to perform actions:</p>

      <button onClick={handleCommentClick}>Add Comment</button>
    </div>
  );
};

export default SubscriberActions;
