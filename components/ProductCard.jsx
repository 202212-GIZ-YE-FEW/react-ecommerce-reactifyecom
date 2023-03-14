import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

export default function ProductCard({ name, image, price }) {
	return (
		<>
			<div className='card'>
				<div className='image'>
					<Image
						src={image}
						alt={name}
                        width={268}
                        height={300}
					/>
				</div>
				<div className='starts'>
					<span class='fa fa-star checked'></span>
					<span class='fa fa-star checked'></span>
					<span class='fa fa-star checked'></span>
					<span class='fa fa-star unchecked'></span>
					<span class='fa fa-star unchecked'></span>
					<FontAwesomeIcon
						icon={faStar}
						className='checked'
					/>
					<FontAwesomeIcon
						icon={faStar}
						className='checked'
					/>
					<FontAwesomeIcon
						icon={faStar}
						className='checked'
					/>
					<FontAwesomeIcon
						icon={faStar}
						className='unchecked'
					/>
					<FontAwesomeIcon
						icon={faStar}
						className='unchecked'
					/>
				</div>
				<div className='details'>
					<h4 className='title'>{name}</h4>
					<p id='price'>
						<b>{price}</b>
					</p>
				</div>
				<button
					type='button'
					class='btncart'
				>
					Add to cart
				</button>
			</div>
		</>
	)
}
