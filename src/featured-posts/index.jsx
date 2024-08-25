import { Component } from 'react'

export default class featuredWorks extends Component {
    render() {
        const { works } = this.props
        return (
            <div className='flex flex-col gap-8'>
                {
                    works.map((item, index) => {
                        return <div key={index} className='flex  gap-6 flex-col lg:flex-row md:flex-row sm:p-[30px] border-b-[2px] border-b-[#80787874]' >
                            <div className='w-full py-[30px]'>
                                <img src={item.img} alt="design-img" className='w-full' />
                            </div>
                            <div className='flex flex-col items-center md:items-start pt-[50px] gap-4'> <h2 className=' text-[22px] lg:text-[34px] font-bold text-[#21243D] text-start'>{item.title}</h2>
                                <div className='flex py-2 '><span className='bg-[#21243D] rounded-full px-2 flex justify-center items-center hover:bg-white hover:text-[#21243D] transition ease-in-out duration-300'><p className=' text-[18px] lg:text-[20px]  text-[#fdfdff] hover:text-[#21243D]'>{item.date}</p></span> <span className=' pl-6'> <p className=' text-[18px] lg:text-[24px]  text-[#5c5c61cb] text-start'>{item.desc}</p></span></div>
                                <div><p className=' text-[18px] lg:text-[22px]  text-[#1c1d21] md:text-start lg:text-start'>{item.info}</p></div></div>
                        </div>
                    })
                }
            </div>
        )
    }
}
