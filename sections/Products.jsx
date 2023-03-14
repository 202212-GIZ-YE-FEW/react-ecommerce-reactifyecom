import ProductCard from '@/components/ProductCard'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function Products() {
	return (
		<div>
			<h1 className='Popular'>
				View More <i> <FontAwesomeIcon icon={fas}/> &#xf061;</i>
			</h1>
			<section className='list'>
				<div className='card-cover'>
					<div className='details-cover'>
						<h4 className='title'>Popular Category</h4>
						<p>
							<Link href='#'>Mobile</Link>
						</p>
						<p>
							<Link href='#'>Electronics</Link>
						</p>
						<p>
							<Link href='#'>Game</Link>
						</p>
					</div>
				</div>
				<ProductCard
					name='JBL Clip 4 Orange Portable Speaker'
					image='https://api.websolutionus.com/shopo/uploads/website-images/popular-cat-banner-2022-09-20-01-15-44-7577.jpg'
					price='$133.00'
				/>
				<ProductCard
					name='Samsung Galaxy A52 (8/128 GB)'
					image='https://api.websolutionus.com/shopo/uploads/website-images/popular-cat-banner-2022-09-20-01-15-44-7577.jpg'
					price='$9.99'
				/>

				<ProductCard
					name='Xbox Wireless Game Controller'
					image='https://api.websolutionus.com/shopo/uploads/website-images/popular-cat-banner-2022-09-20-01-15-44-7577.jpg'
					price='$89.99'
				/>
			</section>
		</div>
	)
}
