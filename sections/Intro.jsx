// import { arrowCircleLeft, arrowRight, check, pay, van } from '@/public'
import Image from 'next/image'
import Link from 'next/link'

const image1 =
	'https://api.websolutionus.com/shopo/uploads/custom-images/slider-2022-10-27-01-36-38-2956.png'

const image2 =
	'https://api.websolutionus.com/shopo/uploads/custom-images/slider-2022-10-27-01-36-44-4193.png'

const image3 =
	'https://api.websolutionus.com/shopo/uploads/website-images/Mega-menu-2022-10-27-01-41-46-7345.png'

const image4 =
	'https://api.websolutionus.com/shopo/uploads/website-images/Mega-menu-2022-10-27-01-42-01-1798.png'

export default function Intro() {
	return (
		<>
			<section>
				<div className='container mx-auto'>
					<div className='max-w-[1228px]'>
						<div className='grid grid-rows-2 grid-flow-col gap-8'>
							<div className='row-span-2 relative w-full xl:mr-0 mr-2 flex items-center group'>
								<Image
									src={image1}
									alt=''
									width={740}
									height={600}
								/>
								<div className='ml-8 absolute flex flex-col justify-between'>
									<div className='md:w-[112px] w-[100px] shadow md:h-[25px] h-[18px] flex items-center justify-center bg-white rounded-full md:mb-[30px] mb-[15px]'>
										<span className='text-black uppercase md:text-xs text-[10px] font-semibold'>
											New released
										</span>
									</div>
									<div className='md:mb-[30px] mb-[15px]'>
										<p className='md:text-[50px] text-[20px] leading-none text-black md:mb-3'>
											Headphone
										</p>
										<h1 className='md:text-[50px] text-[20px] md:w-[400px] md:leading-[66px] text-black font-bold'>
											JBL Music
										</h1>
									</div>
									<div className='w-[90px]'>
										<Link href='#'>
											<div className='cursor-pointer w-full relative'>
												<div className='inline-flex space-x-1.5 rtl:space-x-reverse items-center relative z-20'>
													<span className='text-sm text-black font-medium leading-[30px]'>
														Shop Now
													</span>
													<span className='leading-[30px]'>
														<Image
															src='/icons/arrow-right.svg'
															alt='Arrow right svg icon'
															width={7}
															height={11}
														/>
													</span>
												</div>
												<div className='w-[82px] transition-all duration-300 ease-in-out group-hover:h-4 h-[2px] bg-yellow absolute left-0 rtl:right-0 bottom-0 z-10'></div>
											</div>
										</Link>
									</div>
								</div>
							</div>
							{/*  */}
							<div className='w-full xl:mr-0 mr-2 relative flex items-center group rtl:md:pr-[40px] ltr:md:pl-[40px] rtl:pr-[30] ltr:pl-[30px]'>
								<Image
									width={400}
									height={285}
									alt=''
									src={image3}
								/>
								<div className=' ml-8 absolute flex flex-col justify-between'>
									<div>
										<div className='md:w-[112px] w-[100px] shadow md:h-[25px] h-[18px] flex items-center justify-center bg-white rounded-full md:mb-[22px] mb-[15px]'>
											<span className='text-black uppercase md:text-xs text-[10px] font-semibold'>
												Gaming
											</span>
										</div>
										<div className='md:mb-[30px] mb-2.5'>
											<p className='md:text-[30px] leading-none text-black font-semibold md:mb-3'>
												Apple
											</p>
											<h1 className='md:text-[30px] md:leading-[40px] text-black font-semibold'>
												Smart Watch
											</h1>
										</div>
									</div>
									<div className='w-[90px]'>
										<Link href='#'>
											<div className='cursor-pointer w-full relative'>
												<div className='inline-flex rtl:space-x-reverse space-x-1.5 items-center relative z-20'>
													<span className='text-sm text-black font-medium leading-[30px]'>
														Shop Now
													</span>
													<span className='leading-[30px]'>
														<Image
															src='/icons/arrow-right.svg'
															alt='Arrow right svg icon'
															width={7}
															height={11}
														/>
													</span>
												</div>
												<div className='w-[82px] transition-all duration-300 ease-in-out group-hover:h-4 h-[0px] bg-yellow absolute left-0 rtl:right-0 bottom-0 z-10'></div>
											</div>
										</Link>
									</div>
								</div>
							</div>

							{/*  */}
							<div className='w-full xl:mr-0 mr-2 relative flex items-center group rtl:md:pr-[40px] ltr:md:pl-[40px] rtl:pr-[30] ltr:pl-[30px]'>
								<Image
									width={400}
									height={285}
									alt=''
									src={image4}
								/>
								<div className='ml-8 absolute flex flex-col justify-between'>
									<div>
										<div className='md:w-[112px] w-[100px] shadow md:h-[25px] h-[18px] flex items-center justify-center bg-white rounded-full md:mb-[22px] mb-[15px]'>
											<span className='text-black uppercase md:text-xs text-[10px] font-semibold'>
												Gaming
											</span>
										</div>
										<div className='md:mb-[30px] mb-2.5'>
											<p className='md:text-[30px] leading-none text-black font-semibold md:mb-3'>
												Xbox
											</p>
											<h1 className='md:text-[30px] md:leading-[40px] text-black font-semibold'>
												5th Version
											</h1>
										</div>
									</div>
									<div className='w-[90px]'>
										<Link href='#'>
											<div className='cursor-pointer w-full relative'>
												<div className='inline-flex rtl:space-x-reverse space-x-1.5 items-center relative z-20'>
													<span className='text-sm text-black font-medium leading-[30px]'>
														Shop Now
													</span>
													<span className='leading-[30px]'>
														<Image
															src='/icons/arrow-right.svg'
															alt='Arrow right svg icon'
															width={7}
															height={11}
														/>
													</span>
												</div>
												<div className='w-[82px] transition-all duration-300 ease-in-out group-hover:h-4 h-[0px] bg-yellow absolute left-0 rtl:right-0 bottom-0 z-10'></div>
											</div>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/*  */}
					{/* Quality of service section */}
					<div className='max-w-[1228px] mx-auto'>
						<div className='w-full bg-white flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center lg:h-[110px] px-10 lg:py-0 py-10'>
							<div className='flex space-x-5 rtl:space-x-reverse items-center'>
								<div>
									<span className='w-10 h-10 text-yellow'>
										<Image
											src='/icons/van.svg'
											alt='Arrow right svg icon'
											width={7}
											height={11}
										/>
									</span>
								</div>
								<div>
									<p className='text-black text-[15px] font-700 tracking-wide mb-1'>
										Free Shipping
									</p>
									<p className='text-sm text-gray line-clamp-1'>
										Free Shipping on Payment
									</p>
								</div>
							</div>
							<div className='flex space-x-5 rtl:space-x-reverse items-center'>
								<div>
									<span className='w-10 h-10 text-yellow'>
										<Image
											src='/icons/arrow-circle-left.svg'
											alt='Arrow right svg icon'
											width={7}
											height={11}
										/>
									</span>
								</div>
								<div>
									<p className='text-black text-[15px] font-700 tracking-wide mb-1'>
										Return Policy
									</p>
									<p className='text-sm text-gray line-clamp-1'>
										24 Hours Return Policy
									</p>
								</div>
							</div>
							<div className='flex space-x-5 rtl:space-x-reverse items-center'>
								<div>
									<span className='w-10 h-10 text-yellow'>
										<Image
											src='/icons/pay.svg'
											alt='Arrow right svg icon'
											width={7}
											height={11}
										/>
									</span>
								</div>
								<div>
									<p className='text-black text-[15px] font-700 tracking-wide mb-1'>
										Secured Payment
									</p>
									<p className='text-sm text-gray line-clamp-1'>
										Secure Card Payments
									</p>
								</div>
							</div>
							<div className='flex space-x-5 rtl:space-x-reverse items-center'>
								<div>
									<span className='w-10 h-10 text-yellow'>
										<Image
											src='/icons/pay.svg'
											alt='Arrow right svg icon'
											width={7}
											height={11}
										/>
									</span>
								</div>
								<div>
									<p className='text-black text-[15px] font-700 tracking-wide mb-1'>
										Best Quality
									</p>
									<p className='text-sm text-gray line-clamp-1'>
										Best Quality Products
									</p>
								</div>
							</div>
						</div>
					</div>

					{/*  */}
				</div>
			</section>
		</>
	)
}
