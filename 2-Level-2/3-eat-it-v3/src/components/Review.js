import React from 'react';

function renderStars(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(<i style={{ color: 'red',fontSize:'18px' }} key={i} className="fa fa-star"></i>)
    }
    return arr;
}

const Review = (props) => {
    let { value: review } = props;
    return (
        <div className="alert alert-info">
            {renderStars(review.stars)} &mdash; {review.author}
            <hr />
            <div>{review.body}</div>
        </div>
    );
};

export default Review;