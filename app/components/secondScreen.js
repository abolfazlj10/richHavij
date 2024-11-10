export default function SecondScreen () {
    return(
        <div className="twoScreen" tabIndex="2" id='about'>
            <div className='max-[750px]:hidden grid-cols-subgrid col-span-2'></div>
            <div className='aboutTitle'>
                <img className='fingerprint' src='./fingerprintsecond.svg' />
                <div className='nameAbout'>امیرحسین آرمان‌نیا؟!</div>
            </div>
            <div className='max-[750px]:hidden grid-cols-subgrid col-span-1'></div>
            <div className='aboutText'>
                سلام! امیرحسین‌ام؛ ۲۲ سالمه و دوست دارم که خلق کنم و ارتباط بدم. <br/>
                دوست دارم همه چیزو بهم وصل کنم و باهاشون چیزای جدید درست کنم. <br/>
                من عاشق اینم که روح دوباره بدم به چیزهایی که به ظاهر ربطی بهم ندارن اما در باطن از یک جسم هستن! <br/>
                من یک <span className="text-highBrown font-hasti">طراح‌ام</span>، یک طراح که تصویر سازی میخونه و خلاقیت خوبی داره. <br/>
                برای من فرقی نداره تو چیکار میکنی، میتونی با دادن اطلاعات کافی روی من برای خلق ایده و محصولات جدید حساب کنی. <br/>
                <b>پس بیا گپ بزنیم!</b>
            </div>
            <div>
                <img className="signRich" src='./richsign.svg' />
            </div>
            <div className="arrowDown grid-cols-subgrid col-span-2 max-[750px]:hidden">
                <a href='#contact'><img src='./chevrons-down.svg' /></a>
            </div>
        </div>
    )
}