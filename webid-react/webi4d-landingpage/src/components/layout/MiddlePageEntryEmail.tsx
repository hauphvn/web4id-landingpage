import {useTranslation} from "react-i18next";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";

const MiddlePageEntryEmail = () => {
    const {t} = useTranslation();
    return (
        <div className={"bg-[url('/images/imageMiddlePage.png')] bg-cover bg-center w-full h-full py-[8.313rem] px-[1.5rem] mt-[1rem] "}>
            <div className={'flex flex-col justify-center items-center h-full'}>
                <div className={'text-white text-[1.5rem] font-[600] mb-[1.5rem] leading-[2.1rem]'}>
                    {t('slogan')}
                </div>
                <div className="entry-email-register-middle-page
                bg-[#E7E7E9]
                 mt-[1.5rem] h-[3.688rem] rounded-[6.25rem] border-[#E7E7E9] border-[0.063rem] overflow-hidden p-[0.5rem]
                 flex justify-between items-center w-full
                ">
                    <Input
                        type="email" placeholder={t('registerToAdvise')}
                        className={'entry-email text-[0.75rem] placeholder:text-[#B9BBC6]  border-0 shadow-none outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 '}/>
                    <Button className={'register-button h-[2.688rem] rounded-[6.25rem]'}>
                        {t('sendEmail')}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MiddlePageEntryEmail;
