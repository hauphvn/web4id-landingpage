import {useTranslation} from "react-i18next";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";

const TopInfo = () => {
    const {t} = useTranslation();
    return (
        <div
            id={'id-top-info'}
            className={'md:bg-[#FAFBFC] top-info md:flex md:flex-row-reverse md:mt-[3.75rem]'}>
            <div className="top-info-image">
                <img
                    className={""}
                    src="/images/top-content-desktop.png" alt="Phuc Khang Net"/>
            </div>
            <div className="top-info-content px-[1.5rem] md:pt-[4.5rem]">
                <div className={'font-[600] text-[1.75rem] text-[#0F172A]' +
                    ' 2xl:text-[3.75rem]' +
                    ' 2xl:leading-[4.5rem]' +
                    ' ' +
                    ' xl:text-[2.75rem]' +
                    ' xl:leading-[3.5rem]' +

                    ' md:text-[2rem]' +
                    ' md:leading-[2.5rem]'}>
                    {t('topInfoContentTitle')}
                </div>
                <div className={'text-[0.75rem] text-[#4B5262] ' +
                    '2xl:leading-[1.575rem] ' +
                    '2xl:text-[1.125rem] ' +
                    '' +
                    'xl:text-[1rem] ' +
                    ''}>
                    {t('topInfoContentSubTitle')}
                </div>
                <div className="entry-email-register
                 mt-[1.5rem] h-[3.688rem] rounded-[6.25rem] border-[#E7E7E9] border-[0.063rem] overflow-hidden p-[0.5rem]
                 flex justify-between items-center

                  2xl:max-w-[34.563rem]
                ">
                    <Input
                        type="email" placeholder={t('registerToAdvise')}
                        className={'entry-email placeholder:text-[#B9BBC6] border-0 shadow-none outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 ' +
                            '' +
                            '2xl:text-[1.25rem] ' +
                            '' +
                            'xl:text-[1rem] '}/>
                    <Button className={'register-button h-[2.688rem] rounded-[6.25rem] ' +
                        '2x:font-[600]' +
                        '2xl:text-[0.875rem] ' +
                        ''}>
                        {t('sendEmail')}
                    </Button>
                </div>
                <div className="app-store flex gap-x-[1.563rem] mt-[1.5rem]">
                    <img className={'h-[2.75rem]'} src="/images/app-store.png" alt="Phuc khang net app store"/>
                    <img className={'h-[2.75rem]'} src="/images/ch-play.png" alt="Phuc khang net ch play"/>
                </div>
            </div>
        </div>
    );
};

export default TopInfo;
