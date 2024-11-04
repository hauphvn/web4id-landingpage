import {useTranslation} from "react-i18next";
import {IconApp2Platform} from "@/components/icons/iconIndex.tsx";

const ImageDownloadAppNow = () => {
    const {t} = useTranslation();
    return (
        <div
            id={'id-download-app-now'}
            className="bg-[url('/images/backgroundDownloadApp.png')] bg-cover bg-center w-full h-full py-[4rem] px-[1.5rem] mt-[1rem]
        2xl:px-[16.25rem]
        2xl:py-[8.75rem]

       xl:px-[13.75rem]
       xl:py-[6.25rem]

       md:px-[11.25rem]
       md:py-[5.625rem]
        ">
            <div className='flex flex-col gap-y-[1.5rem]
            xl:flex-row

            2xl:gap-x-[5.75rem]

            xl:gap-x-[3.75rem]

            md:gap-x-[2.5rem]
            '>
                <div className='flex flex-col gap-y-[1.5rem] '>
                    <div className={'flex flex-col gap-y-[1.5rem]'}>
                        <div className='text-white text-[1.5rem] font-[600]
                    2xl:text-[2.5rem]

                    xl:text-[2rem]

                    md:text-[1.75rem]
                    '>
                            {t('downloadAppNow')}
                        </div>
                        <div className='text-[#E0E0E0] text-[0.875rem] leading-[1.225rem]
                    2xl:text-[1.125rem]

                    xl:text-[1rem]

                    md:text-[0.875rem]
                    '>
                            {t('downloadAppNowSub')}
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-[1.5rem]
                    2xl:flex-row

                    xl:flex-col
                    '>
                        <div className={'flex gap-x-[1.313rem] min-h-[6.875rem] items-center'}>
                            <img className={'w-[6.875rem] aspect-auto'} src={'/images/qr-app.png'} alt={'qr-app'}/>
                            <div className='text-[1.125rem] text-[#E0E0E0] font-[400]
                    2xl:text-[1.25rem]

                    xl:text-[1.125rem]

                    md:text-[1rem]
                    '>
                                {t('scanQRCode')}
                                <div className={'text-[1.25rem] font-[700]'}>iOS & Android</div>
                            </div>
                        </div>
                        <div className="icons flex justify-center items-center">
                            <IconApp2Platform/>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="/images/imagePhoneContentApp.png" alt="phuc khang net"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageDownloadAppNow;
