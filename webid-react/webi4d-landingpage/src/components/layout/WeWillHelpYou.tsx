import {useTranslation} from "react-i18next";
import {CloseSquareRed} from "@/components/icons/iconIndex.tsx";

const WeWillHelpYou = () => {
    const {t} = useTranslation();
    return (
        <div className={'we-will-help-you p-[1.5rem] md:flex md:px-[12.625rem] md:flex-auto md:gap-x-[6rem] md:py-[5.625rem]'}>
            <div className={'flex-1'}>
                <div className="title text-[1.5rem] font-[600] text-[#0F172A] md:text-[3.25rem]
                md:font[900] md:leading-[4.55rem]
                ">
                    {t('weAreHereToHelp')}
                </div>
                <div className="sub text-[0.875rem] text-[#4B5262] mt-[1.5rem] md:text-xl md:leading-loose">
                    {t('weAreHereToHelpSub')}
                </div>
            </div>
            <div className={'flex-1'}>
                <div className="sub
            h-[4rem] md:h-[3.25rem] flex items-center justify-center uppercase
            border-[#E7E7E9] rounded-[6.25rem] border-[0.063rem]
            overflow-hidden px-[1.25rem] py-[0.75rem] bg-[#F9F9FB]
            text-[0.875rem] md:text-xl md:leading-7 text-[#0d0c22] mt-[1.5rem] md:mt-0">
                    {t('problemOfYou')}
                </div>
                <div className={'mt-[1rem] flex flex-col gap-y-[0.75rem] md:gap-y-[2rem]'}>
                    <div className={'flex gap-x-[1.5rem] items-center'}>
                        <CloseSquareRed/>
                        <div className={'text-[#07111D] font-[400] text-[0.75rem] opacity-[70%] md:text-xl'}>
                            {t('problemActiveNoEffect')}
                        </div>
                    </div>
                    <div className={'flex gap-x-[1.5rem] items-center'}>
                        <CloseSquareRed/>
                        <div className={'text-[#07111D] font-[400] text-[0.75rem] opacity-[70%] md:text-xl'}>
                            {t('problemManageOptimal')}
                        </div>
                    </div>
                    <div className={'flex gap-x-[1.5rem] items-center'}>
                        <CloseSquareRed/>
                        <div className={'text-[#07111D] font-[400] text-[0.75rem] opacity-[70%] md:text-xl'}>
                            {t('problemDependenceManual')}
                        </div>
                    </div>
                    <div className={'flex gap-x-[1.5rem] items-center'}>
                        <CloseSquareRed/>
                        <div className={'text-[#07111D] font-[400] text-[0.75rem] opacity-[70%] md:text-xl'}>
                            {t('problemCheckManual')}
                        </div>
                    </div>
                </div>
                <div className="sub
            h-[4rem] md:h-[3.25rem] flex items-center justify-center uppercase
            border-[#E7E7E9] rounded-[6.25rem] border-[0.063rem]
            overflow-hidden px-[1.25rem] py-[0.75rem] bg-[#F9F9FB]
            text-[0.875rem] md:text-xl md:leading-7 text-[#0d0c22] mt-[1.5rem] md:mt-[4rem]">
                    {t('whyYouNeedToSync')}
                </div>
                <div className={'mt-[1rem] flex flex-col gap-y-[0.75rem] md:gap-y-[2rem]'}>
                    <div className={'flex gap-x-[1.5rem] items-center'}>
                        <img className={'w-[1.25rem] h-[1.25rem]'} src="/images/check-square-green.png"
                             alt="check-pkn"/>
                        <div className={'text-[#07111D] font-[400] text-[0.75rem] opacity-[70%] md:text-xl'}>
                            {t('toActiveEffect')}
                        </div>
                    </div>
                    <div className={'flex gap-x-[1.5rem] items-center'}>
                        <img className={'w-[1.25rem] h-[1.25rem]'} src="/images/check-square-green.png"
                             alt="check-pkn"/>
                        <div className={'text-[#07111D] font-[400] text-[0.75rem] opacity-[70%] md:text-xl'}>
                            {t('optimalManagement')}
                        </div>
                    </div>
                    <div className={'flex gap-x-[1.5rem] items-center'}>
                        <img className={'w-[1.25rem] h-[1.25rem]'} src="/images/check-square-green.png"
                             alt="check-pkn"/>
                        <div className={'text-[#07111D] font-[400] text-[0.75rem] opacity-[70%] md:text-xl'}>
                            {t('dotNotDependence')}
                        </div>
                    </div>
                    <div className={'flex gap-x-[1.5rem] items-center'}>
                        <img className={'w-[1.25rem] h-[1.25rem]'} src="/images/check-square-green.png"
                             alt="check-pkn"/>
                        <div className={'text-[#07111D] font-[400] text-[0.75rem] opacity-[70%] md:text-xl'}>
                            {t('easyToCheck')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeWillHelpYou;
