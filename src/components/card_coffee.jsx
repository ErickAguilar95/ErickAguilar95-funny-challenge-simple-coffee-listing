import './card_coffee.css';

import EmptyStar from '../assets/Star.svg';
import FillStar from '../assets/Star_fill.svg';

export const CardCoffee = ({ name, image, price, rating, votes, popular, available }) => {

    const start = votes > 0 ? FillStar : EmptyStar;
    const votesStr = votes > 0 ? `(${votes} votes)` : 'No ratings';

    return (
        <article className="card_coffe">
            <section className="card_coffee_section_image">
                <img className="card_coffee_image" src={image} alt={name} />
                {popular && <span className="card_coffee_popular">Popular</span>}
            </section>
            <section className="card_coffee_section_info">
                <div className='card-info-section_left card-coffee-name'>
                    {name}
                </div>
                <div className='card-info-section_right'>
                    <span className="card_coffee_price">{price}</span>
                </div>
                <div className='card-info-section_left'>
                    <section className="card_coffee_section_rating">
                        <img src={start} alt="Rating" className="card_coffee_rating" />
                        <span className="card_coffee_rating">{rating}</span>
                        <span className="card_coffee_votes"> {votesStr}</span>
                    </section>
                </div>
                <div className='card-info-section_right card-coffee-available'>
                    {available ? '' : 'Sold Out'}
                </div>
            </section>
        </article>
    );
}
