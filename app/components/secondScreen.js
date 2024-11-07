export default function SecondScreen () {
    return(
        <div className="twoScreen" tabIndex="2" id='about'>
            <div className='grid-cols-subgrid col-span-2'></div>
            <div className='aboutTitle'>
                <img className='fingerprint' src='./fingerprint.svg' />
                <div className='nameAbout'>موج‌آرمان؟!</div>
            </div>
            <div className='grid-cols-subgrid col-span-1'></div>
            <div className='aboutText'>
                سلام! <br/>
                من مجتبی‌اَم؛ یه جَوونِ کنجکاو با هدف های بزرگ، همونی که هیچوقت نمره‌ی 20 کلاس رو نمی‌گرفته ولی وقتی صحبت از مسائل دیگه می‌شده مخی بوده واسه خودش! 
                19 سالمه و به‌تازگی پام به دانشگاه باز شده، زبان‌انگلیسی می‌خونم چون به‌نظرم کاربردیه. <br/>
                دوستام بهم میگم <span className='thingFrench'>آچار فرانسه</span>، هرکاری ازم برمیاد و اگه بهم وظیفه‌ای بدی، اون کار روی زمین نمی‌مونه، و دقیقا واسه همینه که میتونی بهم اعتماد کنی! <br/>
                <b>پس بیا گپ بزنیم!</b>
            </div>
            <div>
                <img src='./MowjSign.svg' />
            </div>
            <div className="arrowDown grid-cols-subgrid col-span-2">
                <a href='#contact'><img src='./ChevronsDown.svg' /></a>
            </div>
        </div>
    )
}