import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className=' text-gray-500 py-8  bottom-0  w-full  h-12 '>
			<div className='container mx-auto flex justify-around'>
				<div className='pr-4'>
					<h5 className='uppercase font-semibold mb-2 mx-2 text-sm'>
						About Us
					</h5>
					<p className='text-xs mx-2'>
						we are reactfyecom Team who created this website
						<br />
						with our love
					</p>
				</div>

				<div className='pl-20 '>
					<h5 className='uppercase font-semibold mb-2 text-sm'>Contact Us</h5>
					<ul className='list-reset'>
						<li className='mt-2 inline-block mr-6 '>
							<Link
								href='https://github.com/202212-GIZ-YE-FEW/react-ecommerce-reactifyecom'
								className='text-gray-400 hover:text-black transition-colors '
							>
								{/* <FontAwesomeIcon icon={faGithub} /> */}
								<FaGithub />
							</Link>
						</li>
						<li className='mt-2 inline-block mr-6'>
							<Link
								href='https://www.linkedin.com/'
								className='text-gray-400 hover:text-black transition-colors '
							>
								<FaLinkedin />
							</Link>
						</li>
						<li className='mt-2 inline-block mr-6'>
							<Link
								href='/'
								className='text-gray-400 hover:text-black transition-colors duration-200'
							>
								<FaFacebook />
							</Link>
						</li>
					</ul>
				</div>

				<div className='pl-20'>
					<h5 className='uppercase font-semibold mb-2 text-sm '>Resource</h5>
					<ul className='list-reset text-xs'>
						<li className='mt-2 mr-6'>
							<Link
								href='https://tailwindcss.com/docs/installation'
								className='text-gray-400 hover:text-black transition-colors '
							>
								{/* <FontAwesomeIcon icon={faGithub} /> */}
								Taiwilind
							</Link>
						</li>
						<li className='mt-2 mr-6'>
							<Link
								href='https://reactrouter.com/en/main/start/overview'
								className='text-gray-400 hover:text-black transition-colors '
							>
								ReactRoute
							</Link>
						</li>
						<li className='mt-2 inline-block mr-6'>
							<Link
								href='https://fontawesome.com/v6/docs/web/setup/get-started'
								className='text-gray-400 hover:text-black transition-colors duration-200'
							>
								FontAwesome
							</Link>
						</li>
					</ul>
				</div>

				<div className='pl-20'>
					<h5 className='uppercase font-semibold mb-2 pr-10 text-sm'>
						Technologies
					</h5>
					<ul className='list-reset text-xs'>
						<li className='mt-2 mr-6'>
							<a
								href='https://nextjs.org/'
								className='text-gray-400 hover:text-black transition-colors '
							>
								{/* <FontAwesomeIcon icon={faGithub} /> */}
								Next.js
							</a>
						</li>
						<li className='mt-2 mr-6'>
							<a
								href='https://tailwindcss.com/docs/installation'
								className='text-gray-400 hover:text-black transition-colors '
							>
								Tailwind
							</a>
						</li>
						<li className='mt-2 inline-block mr-6'>
							<a
								href='https://react-icons.github.io/react-icons/'
								className='text-gray-400 hover:text-black transition-colors duration-200'
							>
								ReactIcons
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className='border-t border-gray-800 mt-4 pt-8 flex justify-center'>
				<p className='text-sm'>© 2023 Re:Coded Student</p>
			</div>
		</footer>
	)
}

export default Footer
