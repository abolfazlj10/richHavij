export default function ThirdScreen () {
    return(
        <div className="thirdScreen" tabIndex="3" id='contact'>
            <div className='flex'>
            <img className='' src='./like.png' />
            <div className='connectMe'>ارتباط با من</div>
            </div>
            <div className='socialMediaLinks'>
            <div className='containerLinks'>
                <div className='text-[#D44638] mt-14'><a href='mailto:mowjarman@gmail.com'>جیمیل</a></div>
                <div className='instagramLink -mt-10'><a href='https://www.instagram.com/mowjarman'>اینستاگرام</a></div>
            </div>
            <div className='containerLinks'>
                <div className='text-[#25D366] mr-32'><a href='https://wa.me/+9058618858'>واتسپ</a></div>
                <div className='text-[#0088CC] mt-5'><a href='https://t.me/MowjArman'>تلگرام</a></div>
            </div>
            </div>
            <div className='flex justify-center'><a href='https://mehdi-arman-s-project.vercel.app/'><img src='./desginer.svg'/></a></div>
        </div>
    )
}