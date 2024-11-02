import {useTranslation} from "react-i18next";
import {
    AboutContentDesktop,
    FlagOne,
    FlagThree,
    FlagTwo,
    VLineGreenDots,
    YellowStart
} from "@/components/icons/iconIndex.tsx";

const About = () => {
    const {t} = useTranslation();
    return (
        <div className={'px-[1.5rem] md:py-[9.375rem] md:bg-[#FAFBFC]'}>
            <div className={'flex flex-col gap-y-[1.5rem]'}>
                <div className="title text-[#0F172A] font-[600] text-[1.5rem] md:text-[3.25rem]">
                    {t('aboutUs')}
                </div>
                <div className={'sub text-[0.875rem] text-[#4B5262] font-[400] md:text-[1.25rem] max-w-[38.75rem]'}>
                    {t('aboutUsContent')}
                </div>
            </div>
            <div className={'hidden md:inline-block w-full overflow-x-auto'}>
                <AboutContentDesktop/>
            </div>
            <div className={'md:hidden w-full h-full relative p-x-[2.563rem] flex gap-x-[0.688rem] mt-[2rem]'}>
                <div className={'flex justify-center w-full'}>
                    <div className={''}>
                        <VLineGreenDots/>
                    </div>
                    <div className={'p-x-[2rem] flex flex-col gap-y-[4.188rem]'}>
                        <div className={'phrase flex flex-col items-center gap-y-[0.375rem]'}>
                            <div className={'text-[#212326] capitalize'}>
                                {t('state1Year')}
                            </div>
                            <div className={'text-[#797979] font-[400] text-[0.75rem] capitalize'}>
                                {t('state1Content')}
                            </div>
                        </div>
                        <div
                            className={'phrase flex flex-col items-center gap-y-[0.375rem] max-w-[12.875rem] px-[0.625rem] '}>
                            <div className={'text-[#212326] capitalize'}>
                                {t('state2Year')}
                            </div>
                            <div className={'text-[#797979] font-[400] text-[0.75rem] capitalize'}>
                                {t('state2Content')}
                            </div>
                        </div>
                        <div
                            className={'phrase flex flex-col items-center justify-center gap-y-[0.375rem]  max-w-[12.875rem] px-[0.625rem] '}>
                            <div className={'text-[#212326] capitalize'}>
                                {t('state3Year')}
                            </div>
                            <div className={'text-[#797979] font-[400] text-[0.75rem] capitalize text-center'}>
                                {t('state3Content')}
                            </div>
                        </div>
                        <div
                            className={'phrase flex flex-col items-center gap-y-[0.375rem] max-w-[12.875rem] px-[0.625rem]'}>
                            <div className={'text-[#212326] capitalize'}>
                                {t('state4Year')}
                            </div>
                            <div className={'text-[#797979] font-[400] text-[0.75rem] capitalize'}>
                                {t('state4Content')}
                            </div>
                        </div>
                        <div
                            className={'phrase flex flex-col items-center gap-y-[0.375rem] max-w-[12.875rem] px-[0.625rem]'}>
                            <div className={'text-[#212326] capitalize'}>
                                {t('state5Year')}
                            </div>
                            <div className={'text-[#797979] font-[400] text-[0.75rem] capitalize'}>
                                {t('state5Content')}
                            </div>
                        </div>
                        <div
                            className={'phrase flex flex-col items-center gap-y-[0.375rem] max-w-[12.875rem] px-[0.625rem]'}>
                            <div className={'text-[#212326] capitalize'}>
                                {t('state6Year')}
                            </div>
                            <div className={'text-[#797979] font-[400] text-[0.75rem] capitalize'}>
                                {t('state6Content')}
                            </div>
                            <div className={'flex gap-x-[1.058rem] mt-[0.75rem]'}>
                                <FlagOne/>
                                <FlagTwo/>
                                <FlagThree/>
                            </div>
                        </div>
                        <div className={'absolute bottom-[-1rem] left-[8.625rem] phrase flex flex-col items-center '}>
                            <div className={'text-[#212326] capitalize font-[700] text-[1rem]'}>
                                {t('state7Year')}
                            </div>
                            <div className={'text-[#797979] font-[400] text-[0.75rem] capitalize mt-[0.375rem]'}>
                                {t('state7Content')}
                            </div>
                            <div className={'flex gap-x-[0.2rem] mt-[0.75rem]'}>
                                <YellowStart/>
                                <YellowStart/>
                                <YellowStart/>
                                <YellowStart/>
                                <YellowStart/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;
