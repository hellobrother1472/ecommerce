import React, {useState} from 'react';
import { faq } from '../data/faq';

const Faq = () => {
    const questions = faq;
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }

        setSelected(i);
    }

    return (
        <div className='faq-main'>
            <div className='faq-main-heading mt-6'>
                <div className='faq-heading flex flex-col justify-center items-center'>
                    <h1 className='text-royal-blue mdm:text-2xl md:text-4xl font-semibold'>Shopex Help Center</h1>
                    <p className='border-b-4 border-red-500 w-20 mx-auto mt-2'></p>
                </div>
                <div className='faq-heading-desc text-center text-lg px-4 py-2 smm:hidden mt-2'>The Shopex Help Centre page lists out various types of issues that you may have encountered so that there can be quick resolution and you can go back to shopping online. For example, you can get more information regarding order tracking, delivery date changes, help with returns (and refunds), and much more. The Shopex Help Centre also lists out more information that you may need regarding payment, shopping, and more. You can get the Shopex Help Centre number or even access Shopex Help Centre support if you need professional help regarding various topics. The support executive will ensure speedy assistance so that your shopping experience is positive and enjoyable. You can even inform your loved ones of the support page so that they can properly get their grievances addressed as well. Once you have all your queries addressed, you can pull out your shopping list and shop for all your essentials in one place. You can shop during festive sales to get your hands on some unbelievable deals online.</div>
            </div>
            <div className='faq-section mt-5 flex flex-col gap-8 smm:p-4 mb-4'>
                <div className='faq-section-heading flex justify-center'>
                    <h2 className='text-royal-blue mdm:text-xl md:text-2xl font-semibold border-b-2 border-red-500 w-14 text-center'>FAQ</h2>
                </div>
                <div className='question flex flex-col gap-6 w-3/4 m-auto mdm:w-full'>
                    {
                        questions.map((item, i) => (
                            <div className='item p-4 bg-gray-100' key={i} onClick={() => toggle(i)} >
                                <div className='title flex justify-between items-center gap-2 cursor-pointer mdm:text-base text-2xl'>
                                    <h4 className='font-bold'>{item.question}</h4>
                                    <h5 className='flex justify-center items-center p-1 py-0.5 font-bold w-8 bg-gray-300 rounded-full'>{selected === i ? '-' : '+'}</h5>
                                </div>
                                <div className={selected === i ? 'h-auto max-h-96 transition-all duration-500' : 'max-h-0 overflow-hidden transition-all duration-500'}>
                                    <h5 className='mdm:text-sm text-xl mt-2'>{item.answer}</h5>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Faq