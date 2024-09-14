import React from 'react';
import CustomImage from './CustomImage';
import ReactStars from 'react-stars';

interface ReviewItem {
    imageLink: string;
    name: string;
    review: number;
    description: string;
    date: string;
}

interface ReviewsProps {
    item: ReviewItem;
}

const Reviews: React.FC<ReviewsProps> = ({ item }) => {
    return (
        <div className='reviews shadow-sm my-3 p-3'>
            <div className="header">
                <CustomImage src={item.imageLink}/>
                <div>
                    <h4>{item.name}</h4>
                    <span>{item.date}</span>
                </div>
            </div>
 
                <ReactStars
                    count={5}
                    value={item.review}
                    size={20}
                    color2={'#ffd333'}
                    className='stars'
                    edit={false}	
                /> 
            <div>{item.description}</div>
        </div>
    );
}

export default Reviews;
