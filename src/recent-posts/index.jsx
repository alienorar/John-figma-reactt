import { Component } from 'react'

export default class recentPosts extends Component {
    render() {
        const { posts } = this.props
        return (
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[50px] px-6 py-7'>
                    {
                        posts?.map((item, index) => {
                            console.log(item);
                            return <div key={index} className='flex flex-col p-[30px] bg-white rounded'>
                                <h2 className=' text-[18px] lg:text-[34px] font-bold text-[#21243D] text-start'>{item.title}</h2>
                                <div className='flex py-2 '><span className='border-r-[3px] border-r-[black] pr-6'><p className=' text-[18px] lg:text-[24px]  text-[#21243D] text-start'>{item.date}</p></span> <span className=' pl-6'> <p className=' text-[18px] lg:text-[24px]  text-[#21243D] text-start'>{item.desc}</p></span></div>
                                <div><p className=' text-[18px] lg:text-[22px]  text-[#44454a] text-start'>{item.info}</p></div>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}
