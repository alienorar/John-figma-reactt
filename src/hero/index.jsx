import { Component } from 'react'
import '../../src/index.css'
import heroUser from '../assets/hero-user.svg'
export default class Hero extends Component {
    render() {
        return (
            <div>
                <div className='lg:mt-[100px] mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between gap-5 lg:gap-[50px]'>
                    <div className='flex flex-col gap-2 justify-center order-2 lg:order-1 items-center lg:items-start p-4 md:items-start' >
                        <h1 className='lg:w-[700px] text-[34px] lg:text-[44px] font-bold text-[#21243D] lg:text-start md:text-start '>Hi, I am John,
                            Creative Technologist</h1>
                        <p className='text-[22px] lg:text-[24px] text-[#4f4f51] lg:text-start md:text-start ' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <button className='bg-[#FF6464] w-[208px] p-[10px] border-[2px] border-transparent  text-white font-mono mt-5 rounded hover:border-[#21243D] hover:bg-white hover:text-[#21243D] transition ease-in-out duration-300 '>
                            Download Resume
                        </button>
                    </div>
                    <div className='flex justify-center items-start order-1 lg:order-2 pt-6'>
                        <img src={heroUser} alt="hero-user" />
                    </div>
                </div>
            </div>
        )
    }
}
