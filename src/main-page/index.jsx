import { Component } from 'react'
import RecentPosts from '../recent-posts'
import FeaturedWorks from '../featured-posts'
import desImg from '../assets/des-img.png'
import vibImg from '../assets/vib-img.png'
import malImg from '../assets/mal-img.png'
import Footer from '../footer'
export default class index extends Component {
    state = {
        posts: [
            {
                title: "Making a design system from scratch",
                date: "12 Feb 2020",
                desc: "Design, Pattern",
                info: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."

            },
            {
                title: "Creating pixel perfect icons in Figma",
                date: "12 Feb 2020",
                desc: "Figma, Icon Design",
                info: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."

            }

        ],
        works: [
            {
                img: desImg,
                title: "Designing Dashboards",
                date: "2020",
                desc: "Dashboard",
                info: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."

            },
            {
                img: vibImg,
                title: "Vibrant Portraits of 2020",
                date: "2018",
                desc: "Illustration",
                info: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."

            },
            {
                img: malImg,
                title: "36 Days of Malayalam type",
                date: "2018",
                desc: "Typography",
                info: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."

            }
        ]
    }


    render() {
        const { posts, works } = this.state
        return (
            <div>
                {/* recent posts */}
                <div className='bg-[#e0eff4] rounded my-[40px] py-6'>
                    <div className='flex justify-between p-6 items-center'><h2 className=' text-[18px] lg:text-[24px] font-semibold text-[#21243D] text-start'>Recent posts</h2> <a href="#" className=' text-[18px] lg:text-[24px]  text-[#00A8CC] text-start'>View all</a></div>
                    <div>
                        <RecentPosts posts={posts} />
                    </div>
                </div>
                {/* featured works */}
                <div>
                    <h2 className=' text-[18px] lg:text-[24px] font-semibold text-[#21243D] text-center lg:text-start px-8'>Featured works</h2>
                    <div>
                        <FeaturedWorks works={works} />
                    </div>
                </div>
                {/* Footer */}
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}
