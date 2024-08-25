import { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className='flex flex-col items-center py-8 gap-5'>
                <div className='flex gap-3 text-[34px]  text-[#242439] lg:text-start md:text-start '> <a href="https://www.instagram.com/"><i class="fa-brands fa-square-instagram"></i></a> <a href="https://x.com/"><i class="fa-brands fa-square-twitter"></i></a> <a href="https://www.facebook.com/"><i class="fa-brands fa-square-facebook"></i></a><a href="https://linkedin.com/"> <i class="fa-brands fa-linkedin"></i></a></div>
                <p className='text-[22px] lg:text-[24px] text-[#4f4f51] '>Copyright ©2020 All rights reserved </p>
            </div>
        )
    }
}
