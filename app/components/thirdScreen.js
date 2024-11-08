export default function ThirdScreen () {
    return(
        <div className="thirdScreen" tabIndex="3" id='contact'>
            <div className='flex'>
            <img className='likeIcon' src='./like.png' />
            <div className='connectMe'>ارتباط با من</div>
            </div>
            <div className='socialMediaLinks'>
            <div className='containerLinks'>
                <div className='text-[#D44638] max-[552px]:-mt-52 -mt-10 -ml-10 blob'><a href='mailto:mowjarman@gmail.com'>جیمیل</a></div>
                <div className='blob max-[750px]:-mt-32'><a className="instagramLink" href='https://www.instagram.com/mowjarman'>اینستاگرام</a></div>
            </div>
            <div className='containerLinks'>
                <div className='text-[#25D366] max-[552px]:-mt-20 -mt-9 -ml-10 blob'><a href='https://wa.me/+9058618858'>واتسپ</a></div>
                <div className='text-[#0088CC] -mt-9 blob'><a href='https://t.me/MowjArman'>تلگرام</a></div>
            </div>
            </div>
            <div className='flex justify-center max-[750px]:hidden'><a href='https://mehdi-arman-s-project.vercel.app/'><img src='./desginer.svg'/></a></div>
        </div>
    )
}