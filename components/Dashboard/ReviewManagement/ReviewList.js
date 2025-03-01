function ReviewList() {
    const [reviews, setReviews] = React.useState(mockData.reviews);
    const [filters, setFilters] = React.useState({
        rating: '',
        date: ''
    });

    const columns = [
        {
            header: 'Student',
            field: 'studentId',
            render: (studentId) => {
                const student = mockData.students.find(s => s.id === studentId);
                return (
                    <div className="flex items-center space-x-3">
                        <img
                            src={student.profilePicture}
                            alt={student.name}
                            className="w-8 h-8 rounded-full"
                        />
                        <span>{student.name}</span>
                    </div>
                );
            }
        },
        {
            header: 'Host Family',
            field: 'familyId',
            render: (familyId) => {
                const family = mockData.families.find(f => f.id === familyId);
                return family.name;
            }
        },
        {
            header: 'Rating',
            field: 'rating',
            render: (rating) => (
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, index) => (
                        <i
                            key={index}
                            className={`fas fa-star ${
                                index < rating ? 'text-yellow-400' : 'text-gray-600'
                            }`}
                        ></i>
                    ))}
                </div>
            )
        },
        {
            header: 'Comment',
            field: 'comment'
        },
        {
            header: 'Date',
            field: 'date',
            render: (date) => new Date(date).toLocaleDateString()
        }
    ];

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const filteredReviews = reviews.filter(review => {
        return (
            (!filters.rating || review.rating === parseInt(filters.rating)) &&
            (!filters.date || review.date.includes(filters.date))
        );
    });

    return (
        <div data-name="review-list" className="space-y-4">
            <div className="flex gap-4 mb-6">
                <div className="flex-1">
                    <label className="form-label">Rating</label>
                    <select
                        name="rating"
                        value={filters.rating}
                        onChange={handleFilterChange}
                        className="form-select"
                    >
                        <option value="">All Ratings</option>
                        <option value="5">5 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="2">2 Stars</option>
                        <option value="1">1 Star</option>
                    </select>
                </div>
                <div className="flex-1">
                    <label className="form-label">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={filters.date}
                        onChange={handleFilterChange}
                        className="form-input"
                    />
                </div>
            </div>

            <DataTable
                columns={columns}
                data={filteredReviews}
            />
        </div>
    );
}
