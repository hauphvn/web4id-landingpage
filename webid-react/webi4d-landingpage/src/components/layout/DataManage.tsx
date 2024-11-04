import {useTranslation} from "react-i18next";

const DataManagement = () => {
    const {t} = useTranslation();
    return (
        <div
            id={'id-data-management'}
            className="data-management mt-[2.5rem] px-[1.5rem]
        2xl:mt-[7.5rem]

        xl:mt-[5rem]

        md:mt-[3.75rem]
        ">
            <div className="mb-[2rem] flex flex-col gap-y-[1.5rem]
            md:gap-y-[1rem]
            ">
                <div className="title font-[600] text-[1.5rem]

                2xl:text-[3.25rem]
                2xl:leading-[4.5rem]
                2xl:text-center

                xl:text-[2.25rem]
                xl:leading-[3rem]
                xl:text-center

                md:text-[1.75rem]
                md:leading-[2.5rem]
                md:text-center"

                >
                    {t('dataManagement')}
                </div>
                <div className=" text-[#4B5262] text-[0.875rem] leading-[1.225rem] md:text-center ' +
                     2xl:text-[1.25rem]
                     2xl:leading-[1.75rem]
                     2xl:flex
                     2xl:justify-center
                     2xl:font-[400]

                        xl:text-[1rem]
                        xl:leading-[1.5rem]
                        xl:flex
                        xl:justify-center
                        xl:font-[400]

                         md:text-[0.875rem]
                         md:leading-[1.225rem]
                         md:flex
                         md:justify-center
                         md:font-[400]
                ">
                    <div className="
                    2xl:max-w-[38.75rem]

                    xl:max-w-[35rem]

                    md:max-w-[28.75rem]
                    ">
                        {t('dataManagementContent')}
                    </div>
                    </div>
                </div>
                <div className="items flex flex-wrap gap-y-[1rem] justify-center
            2xl:gap-x-[2.938rem]
            2xl:mt-[4rem]

            xl:gap-x-[1.5rem]
            xl:mt-[2rem]

            md:gap-x-[1.5rem]
            md:mt-[1.5rem]
            ">
                <div
                    className="item min-h-[14.563rem] flex flex-col justify-center items-center py-[2.5rem] px-[2.875rem] border-[#E7E7E9] border shadow-[#EEEEEE80] shadow gap-y-[1.5rem] rounded-[1rem]
                    2xl:max-w-[27.188rem]

                    xl:max-w-[25rem]

                    md:max-w-[20.625rem]
                    ">
                    <div className="icon">
                        <img src={'/images/dataManage1.png'} alt={'Data Phuc khang net'}/>
                    </div>
                    <div className="content flex flex-col gap-y-[1rem]">
                        <div className="text-[1rem] font-[600] leading-[1.297rem]
                        2xl:text-[1.375rem]

                        xl:text-[1.125rem]

                        md:text-[1rem]
                        ">
                            {t('dataManagementContent1')}
                        </div>
                        <div className="font-[400] text-[0.875rem] text-[#4B5262]
                        2xl:text-[1.125rem]

                        xl:text-[1rem]

                        md:text-[0.875rem]
                        ">
                            {t('dataManagementContent1Sub')}
                        </div>
                    </div>
                </div>
                <div
                    className="item min-h-[14.563rem] flex flex-col justify-center items-center py-[2.5rem] px-[2.875rem] border-[#E7E7E9] border shadow-[#EEEEEE80] shadow gap-y-[1.5rem] rounded-[1rem]
                    2xl:max-w-[27.188rem]

                    xl:max-w-[25rem]

                    md:max-w-[20.625rem]
                    ">
                    <div className="icon">
                        <img src={'/images/dataManage2.png'} alt={'Data Phuc khang net'}/>
                    </div>
                    <div className="content flex flex-col gap-y-[1rem]">
                        <div className="text-[1rem] font-[600] leading-[1.297rem]
                        2xl:text-[1.375rem]

                        xl:text-[1.125rem]

                        md:text-[1rem]
                        ">
                            {t('dataManagementContent2')}
                        </div>
                        <div className="font-[400] text-[0.875rem] text-[#4B5262]
                        2xl:text-[1.125rem]

                        xl:text-[1rem]

                        md:text-[0.875rem]
                        ">
                            {t('dataManagementContent2Sub')}
                        </div>
                    </div>
                </div>
                <div
                    className="item min-h-[14.563rem] flex flex-col justify-center items-center py-[2.5rem] px-[2.875rem] border-[#E7E7E9] border shadow-[#EEEEEE80] shadow gap-y-[1.5rem] rounded-[1rem]
                    2xl:max-w-[27.188rem]

                    xl:max-w-[25rem]

                    md:max-w-[20.625rem]
                    ">
                    <div className="icon">
                        <img src={'/images/dataManage3.png'} alt={'Data Phuc khang net'}/>
                    </div>
                    <div className="content flex flex-col gap-y-[1rem]">
                        <div className="text-[1rem] font-[600] leading-[1.297rem]
                        2xl:text-[1.375rem]

                        xl:text-[1.125rem]

                        md:text-[1rem]
                        ">
                            {t('dataManagementContent3')}
                        </div>
                        <div className="font-[400] text-[0.875rem] text-[#4B5262]
                        2xl:text-[1.125rem]

                        xl:text-[1rem]

                        md:text-[0.875rem]
                        ">
                            {t('dataManagementContent3Sub')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DataManagement;
