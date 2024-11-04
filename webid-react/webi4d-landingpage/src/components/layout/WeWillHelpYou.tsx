import {useTranslation} from "react-i18next";
import {CloseSquareRed} from "@/components/icons/iconIndex.tsx";

const WeWillHelpYou = () => {
    const {t} = useTranslation();
    return (
        <div
            id={'id-we-will-help-you'}
            className={'we-will-help-you p-[1.5rem] md:flex 2xl:px-[12.625rem] xl:px-[2rem] md:flex-auto 2xl:gap-x-[6rem] xl:gap-x-[3rem] md:py-[5.625rem] flex-wrap'}>
            <div className={'flex-1'}>
                <div className="title text-[1.5rem] font-[600] text-[#0F172A]
                2xl:text-[3.25rem]
                2xl:leading-[4.5rem]
                xl:text-[2.25rem]
                xl:leading-[3rem]
                md:text-[1.75rem]
                md:leading-[2.5rem]
                mt-[1.5rem]
                md:mt-0"
                >
                    {t('weAreHereToHelp')}
                </div>
                <div className=" text-[0.875rem] text-[#4B5262] mt-[1.5rem]
                md:text-xl
                md:leading-loose"
                >
                    {t('weAreHereToHelpSub')}
                </div>
            </div>
            <div className={'flex-1'}>
                <div className="
            h-[4rem] mt-[2rem] flex items-center justify-center uppercase
            border-[#E7E7E9] rounded-[6.25rem] border-[0.063rem]
            overflow-hidden font-[400] px-[1.25rem] py-[0.75rem] bg-[#F9F9FB]
            text-[0.875rem]
            text-[#0d0c22]
            2xl:text-[1.1rem]
            2xl:mt-0
            2xl:leading-7
            2xl-[1.5rem]
            2xl:h-[3.25rem]

            xl:text-[1rem]
            xl:mt-0
            xl:leading-5
            xl-[1rem]

            sm:h-[3rem]
            ">
                    {t('problemOfYou')}
                </div>
                <div className={'mt-[1rem] flex flex-col gap-y-[0.75rem] md:gap-y-[2rem]'}>
                    <div className={'flex gap-x-[1.5rem] items-center'}>
                        <CloseSquareRed/>
                        <div className={'text-[rgba(7, 17, 29, 0.1)] font-[400] text-[0.75rem] h-custom md:text-xl'}>
                            {t('problemActiveNoEffect')}
                        </div>
                    </div>
                    <div className={'flex gap-x-[1.5rem] items-center'}>
                        <CloseSquareRed/>
                        <div className={'text-[#07111D] font-[400] text-[0.75rem] h-custom md:text-xl'}>
                            {t('problemManageOptimal')}
                        </div>
                    </div>
                    <div className={'flex gap-x-[1.5rem] items-center'}>
                        <CloseSquareRed/>
                        <div className={'text-[#07111D] font-[400] text-[0.75rem] h-custom md:text-xl'}>
                            {t('problemDependenceManual')}
                        </div>
                    </div>
                    <div className={'flex gap-x-[1.5rem] items-center'}>
                        <CloseSquareRed/>
                        <div className={'text-[#07111D] font-[400] text-[0.75rem] h-custom md:text-xl'}>
                            {t('problemCheckManual')}
                        </div>
                    </div>
                </div>
                <div className="
            h-[4rem] flex items-center justify-center uppercase
            border-[#E7E7E9] rounded-[6.25rem] border-[0.063rem]
            overflow-hidden px-[1.25rem] py-[0.75rem] bg-[#F9F9FB]
            text-[0.875rem]  text-[#0d0c22]
            font-[400]
            mt-[1.5rem]
            xl:mt-[4rem]
            2xl:text-[1.1rem]
            2xl:leading-7
            2xl-[1.5rem]
            2xl:h-[3.25rem]


            xl:text-[1rem]
            xl:leading-5
            xl-[1rem]
            xl:h-[3rem]

            sm:h-[3rem]
            ">
                    {t('whyYouNeedToSync')}
                </div>
                <div className={'mt-[1rem] flex flex-col gap-y-[0.75rem] md:gap-y-[2rem]'}>
                    <div className={'flex gap-x-[1.5rem] items-center'}>
                        <img className={'w-[1.25rem] h-[1.25rem]'} src="/images/check-square-green.png"
                             alt="check-pkn"/>
                        <div className={'text-[#07111D] font-[400] text-[0.75rem] h-custom md:text-xl'}>
                            {t('toActiveEffect')}
                        </div>
                    </div>
                    <div className={'flex gap-x-[1.5rem] items-center'}>
                        <img className={'w-[1.25rem] h-[1.25rem]'} src="/images/check-square-green.png"
                             alt="check-pkn"/>
                        <div className={'text-[#07111D] font-[400] text-[0.75rem] h-custom md:text-xl'}>
                            {t('optimalManagement')}
                        </div>
                    </div>
                    <div className={'flex gap-x-[1.5rem] items-center'}>
                        <img className={'w-[1.25rem] h-[1.25rem]'} src="/images/check-square-green.png"
                             alt="check-pkn"/>
                        <div className={'text-[#07111D] font-[400] text-[0.75rem] h-custom md:text-xl'}>
                            {t('dotNotDependence')}
                        </div>
                    </div>
                    <div className={'flex gap-x-[1.5rem] items-center'}>
                        <img className={'w-[1.25rem] h-[1.25rem]'} src="/images/check-square-green.png"
                             alt="check-pkn"/>
                        <div className={'text-[#07111D] font-[400] text-[0.75rem] h-custom md:text-xl'}>
                            {t('easyToCheck')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeWillHelpYou;
