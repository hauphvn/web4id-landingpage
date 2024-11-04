import {useTranslation} from "react-i18next";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";

const MiddlePageEntryEmail = () => {
    const {t} = useTranslation();
    return (
        <div
            id={'id-middle-page-entry-email'}
            className="
        2xl:px-[13rem]
        2xl:mt-[7.5rem]

        ">
            <div className="2xl:bg-[url('/images/imageMiddlePageDesktop.png')] bg-[url('/images/imageMiddlePage.png')] bg-cover bg-center w-full h-full py-[8.313rem] px-[1.5rem] mt-[1rem]
            md:mt-0
            2xl:rounded-[1.25rem]
            2xl:overflow-hidden
        ">
                <div className={'flex flex-col justify-center items-center h-full'}>
                    <div className="text-white text-[1.5rem] font-[600] mb-[1.5rem] leading-[2.1rem]
                    2xl:max-w-[41.25rem]
                    2xl:text-[2.5rem]
                    2xl:font-[700]
                    2xl:leading-[3.243rem]
                    2xl:text-center

                    xl:max-w-[35rem]
                    xl:text-[2rem]
                    xl:leading-[2.8rem]
                    xl:text-center

                    md:max-w-[28.75rem]
                    md:text-[1.75rem]
                    md:leading-[2.5rem]


                    ">
                        {t('slogan')}
                    </div>
                    <div className="entry-email-register-middle-page
                bg-[#E7E7E9]
                 mt-[1.5rem] h-[3.688rem] rounded-[6.25rem] border-[#E7E7E9] border-[0.063rem] overflow-hidden p-[0.5rem]
                 flex justify-between items-center w-full

                  2xl:max-w-[34.563rem]

                    xl:max-w-[30rem]

                    md:max-w-[23.75rem]
                ">
                        <Input
                            type="email" placeholder={t('registerToAdvise')}
                            className="entry-email text-[0.75rem] placeholder:text-[#B9BBC6]  border-0 shadow-none outline-0 focus-visible:ring-0 focus-visible:ring-offset-0
2xl:text-[1.25rem]
xl:text-[1rem]
md:text-[0.875rem]
                            "/>
                        <Button className={'register-button h-[2.688rem] rounded-[6.25rem]'}>
                            {t('sendEmail')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MiddlePageEntryEmail;
