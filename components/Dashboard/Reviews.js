function Reviews({ reviews, onSubmitReview }) {
    const [newReview, setNewReview] = React.useState({
        rating: 5,
        comment: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            onSubmitReview(newReview);
            setNewReview({ rating: 5, comment: '' });
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div data-name="reviews" className="dashboard-card">
            <h2 className="text-2xl font-bold mb-6">Reviews</h2>

            <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="form-label">Rating</label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
                                    className={`text-2xl ${star <= newReview.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                                >
                                    <i className="fas fa-star"></i>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="form-label" htmlFor="comment">Comment</label>
                        <textarea
                            id="comment"
                            value={newReview.comment}
                            onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                            className="form-input h-24"
                            placeholder="Share your experience..."
                        ></textarea>
                    </div>

                    <button type="submit" className="btn-primary">
                        Submit Review
                    </button>
                </form>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">Past Reviews</h3>
                {reviews && reviews.length > 0 ? (
                    <div className="space-y-4">
                        {reviews.map((review, index) => (
                            <div key={index} className="review-card">
                                <div className="review-rating">
                                    {[...Array(5)].map((_, i) => (
                                        <i
                                            key={i}
                                            className={`fas fa-star ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                                        ></i>
                                    ))}
                                </div>
                                <p className="mb-2">{review.comment}</p>
                                <p className="text-sm text-gray-400">
                                    {new Date(review.date).toLocaleDateString()}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-400">No reviews yet</p>
                )}
            </div>
        </div>
    );
}
