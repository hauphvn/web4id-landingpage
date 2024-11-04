import {Facebook, Instagram, LogoText, Tiktok, Web, Youtube} from "@/components/icons/iconIndex.tsx";
import {useTranslation} from "react-i18next";

interface FooterProps {
    scrollToSection: (section: string) => void;
}

const Footer = (props: FooterProps) => {
    const {scrollToSection} = props;
    const {t} = useTranslation();
    return (
        <div className='px-[1.5rem] pt-[1.875rem]
        2xl:px-[15rem]
        2xl:pt-[7.5rem]

        xl:py-[3.75rem]
        xl:px-[7.5rem]

        md:px-[5rem]
        md:pt-[5rem]


        '>
            <div className='flex flex-col
            xl:flex-row
            xl:justify-between
            '>
                <div
                    onClick={() => {
                        scrollToSection('home');
                    }}
                    className="
                    hover:cursor-pointer
                    logo flex flex-col gap-y-[1rem]">
                    <LogoText/>
                    <div className='text-[#797979] font-[400] text-[0.875rem]
                2xl:text-[1.125rem]
                '
                    >
                        {t('subSlogan')}
                    </div>
                </div>
                <div className='my-[2rem]
                md:flex md:justify-center md:items-center md:gap-x-[1.313rem]
                '>
                    <div className='text-[1.5rem] font-[600] text-[#212326] '>
                        {t('followUs')}
                    </div>
                    <div className={'flex gap-x-[1.875rem] mt-[1rem] md:mt-0'}>
                        <Instagram/>
                        <Youtube/>
                        <Facebook/>
                        <Web/>
                        <Tiktok/>
                    </div>
                </div>
            </div>
            <div className={'bg-[#E0E0E0] h-[0.125rem] w-full my-[1rem]'}></div>
            <div className='flex flex-col
            xl:flex-row
            xl:justify-between
            '>
                <div className={'flex flex-col gap-y-[1rem] my-[1rem]'}>
                    <div className={'text-[#212326] text-[1.5rem]'}>
                        {t('contactAddress')}
                    </div>
                    <div>
                        <div className='
                            hover:cursor-pointer hover:text-brand-1
                            text-[#797979] text-[0.875rem] font-[400]'>
                            {t('address')}
                            <div className={'inline text-[#263238]'}>
                                {t('addressContent')}
                            </div>
                        </div>
                        <div className='
                            hover:cursor-pointer hover:text-brand-1
                            text-[#797979] text-[0.875rem] font-[400]'>
                            {t('phone')}
                            <a href={`tel:${t('phoneToCallDirect')}`} className={'inline text-[#263238]'}>
                                {t('phoneContent')}
                            </a>
                        </div>
                        <div className='
                            hover:cursor-pointer hover:text-brand-1
                            text-[#797979] text-[0.875rem] font-[400]'>
                            {t('email')}
                            <a href={`mailto:${t('emailContent')}`} className={'inline text-[#263238]'}>
                                {t('emailContent')}
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-y-[1rem] my-[1rem]
                '>
                    <div className={'text-[#212326] text-[1.5rem]'}>
                        {t('company')}
                    </div>
                    <div className='flex flex-col gap-y-[1.5rem]
                    md:flex-row md:gap-x-[1.5rem] md:gap-y-[0rem] md:justify-between
                    '>
                        <div
                            onClick={() => {
                                scrollToSection('home');
                            }}
                            className='
                            hover:cursor-pointer hover:text-brand-1
                            text-[#797979] text-[0.875rem] font-[400]'>
                            {t('home')}
                        </div>
                        <div
                            onClick={() => {
                                scrollToSection('about');
                            }}
                            className='
                            hover:cursor-pointer hover:text-brand-1
                            text-[#797979] text-[0.875rem] font-[400]'>
                            {t('about')}
                        </div>
                        <div
                            onClick={() => {
                                scrollToSection('features');
                            }}
                            className='
                            hover:cursor-pointer hover:text-brand-1
                            text-[#797979] text-[0.875rem] font-[400]'>
                            {t('expressFeatures')}
                        </div>
                        <div
                            onClick={() => {
                                scrollToSection('products');
                            }}
                            className='
                            hover:cursor-pointer hover:text-brand-1
                            text-[#797979] text-[0.875rem] font-[400]'>
                            {t('products')}
                        </div>
                        <div
                            onClick={() => {
                                scrollToSection('pricing');
                            }}
                            className='
                            hover:cursor-pointer hover:text-brand-1
                            text-[#797979] text-[0.875rem] font-[400]'>
                            {t('pricing')}
                        </div>
                    </div>
                </div>
            </div>
            <div className={'bg-[#E0E0E0] h-[0.125rem] w-full my-[2rem]'}></div>
            <div className='text-[#797979] text-[0.875rem] font-[400] mb-[1rem]
            md:text-center
            '>
                Copyright © PN4ID | Designed by PhucKhangNet - Powered by PhucKhangNet
            </div>
        </div>
    );
};

export default Footer;
