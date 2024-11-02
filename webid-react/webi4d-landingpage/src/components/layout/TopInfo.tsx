import {useTranslation} from "react-i18next";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";

const TopInfo = () => {
    const {t} = useTranslation();
    return (
        <div className={'md:bg-[#FAFBFC] top-info md:flex md:flex-row-reverse md:mt-[3.75rem]'}>
           <div className="top-info-image">
               <img src="/images/top-content-desktop.png" alt="Phuc Khang Net"/>
           </div>
            <div className="top-info-content px-[1.5rem] md:pt-[4.5rem]">
                <div className={'font-[600] text-[1.75rem] text-[#0F172A]'}>
                    {t('topInfoContentTitle')}
                </div>
                <div className={'text-[0.75rem] text-[#4B5262]'}>
                    {t('topInfoContentSubTitle')}
                </div>
                <div className="entry-email-register
                 mt-[1.5rem] h-[3.688rem] rounded-[6.25rem] border-[#E7E7E9] border-[0.063rem] overflow-hidden p-[0.5rem]
                 flex justify-between items-center
                ">
                    <Input
                        type="email" placeholder={t('registerToAdvise')}
                        className={'entry-email placeholder:text-[#B9BBC6] border-0 shadow-none outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 '}/>
                    <Button className={'register-button h-[2.688rem] rounded-[6.25rem]'}>
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
