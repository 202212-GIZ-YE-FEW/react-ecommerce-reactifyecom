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
                        width={113}
                        height={150}
					/>
				</div>
				<div className='starts'>
				
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
