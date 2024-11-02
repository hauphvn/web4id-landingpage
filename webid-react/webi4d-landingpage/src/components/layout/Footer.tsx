import {Facebook, Instagram, LogoText, Tiktok, Web, Youtube} from "@/components/icons/iconIndex.tsx";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation();
    return (
        <div className={'px-[1.5rem] pt-[1.875rem]'}>
            <div className="logo flex flex-col gap-y-[1rem]">
                <LogoText/>
                <div className={'text-[#797979] font-[400] text-[0.875rem]'}>
                    {t('subSlogan')}
                </div>
            </div>
            <div className={'my-[2rem]'}>
                <div className={'text-[1.5rem] font-[600] text-[#212326] mb-[1rem]'}>
                    {t('followUs')}
                </div>
                <div className={'flex gap-x-[1.875rem] mb-[2rem]'}>
                    <Instagram/>
                    <Youtube/>
                    <Facebook/>
                    <Web/>
                    <Tiktok/>
                </div>
                <div className={'bg-[#E0E0E0] h-[0.125rem] w-full'}></div>
            </div>
            <div className={'flex flex-col gap-y-[1rem] my-[1rem]'}>
                <div className={'text-[#212326] text-[1.5rem]'}>
                    {t('contactAddress')}
                </div>
                <div>
                    <div className={'text-[#797979] text-[0.875rem] font-[400]'}>
                        {t('address')}
                    </div>
                    <div className={'text-[#797979] text-[0.875rem] font-[400]'}>
                        {t('phone')}
                    </div>
                    <div className={'text-[#797979] text-[0.875rem] font-[400]'}>
                        {t('email')}
                    </div>
                </div>
            </div>
            <div className={'flex flex-col gap-y-[1rem] my-[1rem]'}>
                <div className={'text-[#212326] text-[1.5rem]'}>
                    {t('company')}
                </div>
                <div className={'flex flex-col gap-y-[1.5rem]'}>
                    <div className={'text-[#797979] text-[0.875rem] font-[400]'}>
                        {t('home')}
                    </div>
                    <div className={'text-[#797979] text-[0.875rem] font-[400]'}>
                        {t('about')}
                    </div>
                    <div className={'text-[#797979] text-[0.875rem] font-[400]'}>
                        {t('expressFeatures')}
                    </div>
                    <div className={'text-[#797979] text-[0.875rem] font-[400]'}>
                        {t('products')}
                    </div>
                    <div className={'text-[#797979] text-[0.875rem] font-[400]'}>
                        {t('pricing')}
                    </div>
                </div>
            </div>
            <div className={'bg-[#E0E0E0] h-[0.125rem] w-full my-[2rem]'}></div>
            <div className={'text-[#797979] text-[0.875rem] font-[400] mb-[10rem]'}>
                Copyright © PN4ID | Designed by PhucKhangNet - Powered by PhucKhangNet
            </div>
        </div>
    );
};

export default Footer;
