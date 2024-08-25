import { Component } from 'react'
import '../../src/index.css'
export default class Header extends Component {
    render() {
        return (
            <header className=''>
                <nav className='flex justify-center lg:justify-end '>
                    <ul className='flex gap-5 '>
                        <li className='text-[18px] md:text-[20px] lg:text-[22px] font-semibold border-b-[2px] hover:border-b-[#FF6464] border-b-transparent hover:text-[#FF6464]  transition ease-in-out duration-300 '><a href="#">Works</a></li>
                        <li className='text-[18px] md:text-[20px] lg:text-[22px] font-semibold border-b-[2px] hover:border-b-[#FF6464] border-b-transparent hover:text-[#FF6464] transition ease-in-out duration-300 '><a href="./blog/index.html">Blog</a></li>
                        <li className='text-[18px] md:text-[20px] lg:text-[22px] font-semibold border-b-[2px] hover:border-b-[#FF6464] border-b-transparent hover:text-[#FF6464] transition ease-in-out duration-300 '><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
