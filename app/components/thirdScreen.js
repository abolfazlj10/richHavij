export default function ThirdScreen () {
    return(
        <div className="thirdScreen" tabIndex="3" id='contact'>
            <div className='flex'>
            <img className='likeIcon' src='./like.png' />
            <div className='connectMe'>ارتباط با من</div>
            </div>
            <div className='socialMediaLinks'>
            <div className='containerLinks'>
                <div className='text-[#D44638] blob'><a href='mailto:Amirarmaniya@gmail.com'>جیمیل</a></div>
                <div className='blob text-[#5DA5FF] min-[750px]:-mt-12 min-[750px]:-mr-10'><a href='https://www.behance.net/amirarman'>بی هنس</a></div>
                <div className='blob min-[750px]:-mr-16'><a className="instagramLink" href='https://www.instagram.com/amir_armaniya'>اینستاگرام</a></div>
                <div className='blob text-[#0A66C2] min-[750px]:-mr-10 max-[750px]:-ml-40 max-[750px]:-mt-10'><a href='https://www.linkedin.com/in/amir_armaniya'>لینکدین</a></div>
            </div>
            <div className='containerLinks'>
                <div className='text-[#0088CC] blob min-[750px]:-mt-20 max-[750px]:-mt-32 max-[750px]:-mr-24'><a href='https://t.me/amir_armaniya'>تلگرام</a></div>
                <div className='text-[#EA4C89] blob min-[750px]:-mt-20 min-[750px]:-mr-10 max-[750px]:-mr-20 max-[750px]:-mt-5'><a href='https://dribbble.com/aamis'>دریبل</a></div>
                <div className='text-[#25D366] blob min-[750px]:-mt-10 min-[750px]:-mr-10 max-[750px]:-mr-5'><a href='https://wa.me/+9373566967'>واتسپ</a></div>
            </div>
            </div>
            <div className='flex justify-center max-[750px]:hidden'><a href='https://mehdi-arman-s-project.vercel.app/'><img src='./desginer.svg'/></a></div>
        </div>
    )
}