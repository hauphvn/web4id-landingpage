import {useTranslation} from "react-i18next";
import {IconApp2Platform} from "@/components/icons/iconIndex.tsx";

const MiddlePageEntryEmail = () => {
    const {t} = useTranslation();
    return (
        <div className={"bg-[url('/images/backgroundDownloadApp.png')] bg-cover bg-center w-full h-full py-[4rem] px-[1.5rem] mt-[1rem] "}>
            <div className={'flex flex-col gap-y-[1.5rem]'}>
                <div className={'flex flex-col gap-y-[1.5rem]'}>
                    <div className={'text-white text-[1.5rem] font-[600]'}>
                        {t('downloadAppNow')}
                    </div>
                    <div className={'text-[#E0E0E0] text-[0.875rem] leading-[1.225rem]'}>
                        {t('downloadAppNowSub')}
                    </div>
                </div>
                <div className={'flex gap-x-[1.313rem] min-h-[6.875rem] items-center'}>
                    <img className={'w-[6.875rem] aspect-auto'} src={'/images/qr-app.png'} alt={'qr-app'} />
                    <div className={'text-[1.125rem] text-[#E0E0E0] font-[400]'}>
                        {t('scanQRCode')}
                        <div className={'text-[1.25rem] font-[700]'} >iOS & Android</div>
                    </div>
                </div>
                <div className="icons flex justify-center items-center">
                    <IconApp2Platform/>
                </div>
                <div>
                    <img src="/images/imagePhoneContentApp.png" alt="phuc khang net"/>
                </div>
            </div>
        </div>
    );
};

export default MiddlePageEntryEmail;
