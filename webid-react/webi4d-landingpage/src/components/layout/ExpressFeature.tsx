import {useTranslation} from "react-i18next";
import {
    ExpressStart,
    ImageProductLorem,
    ProcessSquare,
    ReportIcon,
    SquareMenu,
    Truck
} from "@/components/icons/iconIndex.tsx";
import {Button} from "@/components/ui/button.tsx";

const ExpressFeature = () => {
    const {t} = useTranslation();
    return (
        <div
            id={'id-express-feature'}
            className={'express-feature mt-[2.5rem] px-[1.5rem]'}>
            <div className="title font-[600] text-[1.5rem] mb-[2rem]
            2xl:text-center
            2xl:text-[3.25rem]

            xl:text-center
            xl:text-[2.25rem]

            md:text-center
            md:text-[1.75rem]


            ">
                {t('expressFeatures')}
            </div>
            <div className="items flex flex-wrap gap-y-[1rem] justify-center
            2xl:gap-x-[7.375rem]
            2xl:gap-y-[4rem]

            xl:gap-x-[3.5rem]
            xl:gap-y-[2rem]

            md:gap-x-[1.5rem]
            md:gap-y-[1.5rem]


            ">
                <div
                    className="item max-w-[25rem] 2xl:max-w-[31.25rem] min-h-[14.563rem] 2xl:max-h-[25rem] flex flex-col justify-center items-center px-[1rem] py-[0.75rem] border-[#E7E7E9] 2xl:px-[1.125rem] 2xl:py-[3.875rem]  border shadow-[#EEEEEE80] shadow gap-y-[1.5rem] rounded-[1rem]">
                    <div className="icon">
                        <ProcessSquare/>
                    </div>
                    <div className="content flex flex-col gap-y-[1rem]">
                        <div className={'text-[1.5rem] font-[600] text-center leading-[1.8rem]'}>
                            {t('processHandelOrder')}
                        </div>
                        <div className={'font-[400] text-[0.875rem] text-[#07111D] h-custom text-center ' +
                            ' 2xl:text-[1.25rem]'}>
                            {t('processHandelOrderContent')}
                        </div>
                    </div>
                </div>
                <div
                     className="item max-w-[25rem] 2xl:max-w-[31.25rem] min-h-[14.563rem] 2xl:max-h-[25rem] flex flex-col justify-center items-center px-[1rem] py-[0.75rem] border-[#E7E7E9] 2xl:px-[1.125rem] 2xl:py-[3.875rem]  border shadow-[#EEEEEE80] shadow gap-y-[1.5rem] rounded-[1rem]">
                    <div className="icon">
                        <ExpressStart/>
                    </div>
                    <div className="content flex flex-col gap-y-[1rem]">
                        <div className={'text-[1.5rem] font-[600] text-center leading-[1.8rem]'}>
                            {t('updateOrderStatus')}
                        </div>
                       <div className={'font-[400] text-[0.875rem] text-[#07111D] h-custom text-center ' +
                            ' 2xl:text-[1.25rem]'}>
                            {t('updateOrderStatusContent')}
                        </div>
                    </div>
                </div>
                <div
                     className="item max-w-[25rem] 2xl:max-w-[31.25rem] min-h-[14.563rem] 2xl:max-h-[25rem] flex flex-col justify-center items-center px-[1rem] py-[0.75rem] border-[#E7E7E9] 2xl:px-[1.125rem] 2xl:py-[3.875rem]  border shadow-[#EEEEEE80] shadow gap-y-[1.5rem] rounded-[1rem]">
                    <div className="icon">
                        <SquareMenu/>
                    </div>
                    <div className="content flex flex-col gap-y-[1rem]">
                        <div className={'text-[1.5rem] font-[600] text-center leading-[1.8rem]'}>
                            {t('syncWarehouse')}
                        </div>
                       <div className={'font-[400] text-[0.875rem] text-[#07111D] h-custom text-center ' +
                            ' 2xl:text-[1.25rem]'}>
                            {t('syncWarehouseContent')}
                        </div>
                    </div>
                </div>
                <div
                     className="item max-w-[25rem] 2xl:max-w-[31.25rem] min-h-[14.563rem] 2xl:max-h-[25rem] flex flex-col justify-center items-center px-[1rem] py-[0.75rem] border-[#E7E7E9] 2xl:px-[1.125rem] 2xl:py-[3.875rem]  border shadow-[#EEEEEE80] shadow gap-y-[1.5rem] rounded-[1rem]">
                    <div className="icon">
                        <ImageProductLorem/>
                    </div>
                    <div className="content flex flex-col gap-y-[1rem]">
                        <div className={'text-[1.5rem] font-[600] text-center leading-[1.8rem]'}>
                            {t('addImageProduct')}
                        </div>
                       <div className={'font-[400] text-[0.875rem] text-[#07111D] h-custom text-center ' +
                            ' 2xl:text-[1.25rem]'}>
                            {t('addImageProductContent')}
                        </div>
                    </div>
                </div>
                <div
                     className="item max-w-[25rem] 2xl:max-w-[31.25rem] min-h-[14.563rem] 2xl:max-h-[25rem] flex flex-col justify-center items-center px-[1rem] py-[0.75rem] border-[#E7E7E9] 2xl:px-[1.125rem] 2xl:py-[3.875rem]  border shadow-[#EEEEEE80] shadow gap-y-[1.5rem] rounded-[1rem]">
                    <div className="icon">
                        <ReportIcon/>
                    </div>
                    <div className="content flex flex-col gap-y-[1rem]">
                        <div className={'text-[1.5rem] font-[600] text-center leading-[1.8rem]'}>
                            {t('smartReport')}
                        </div>
                       <div className={'font-[400] text-[0.875rem] text-[#07111D] h-custom text-center ' +
                            ' 2xl:text-[1.25rem]'}>
                            {t('smartReportContent')}
                        </div>
                    </div>
                </div>
                <div
                    className="item max-w-[25rem] 2xl:max-w-[31.25rem] min-h-[14.563rem] 2xl:max-h-[25rem] flex flex-col justify-center items-center px-[1rem] py-[0.75rem] border-[#E7E7E9] 2xl:px-[1.125rem] 2xl:py-[3.875rem]  border shadow-[#EEEEEE80] shadow gap-y-[1.5rem] rounded-[1rem]">
                    <div className="icon">
                        <Truck/>
                    </div>
                    <div className="content flex flex-col gap-y-[1rem]">
                        <div className={'text-[1.5rem] font-[600] text-center leading-[1.8rem]'}>
                            {t('logisticSupport')}
                        </div>
                       <div className={'font-[400] text-[0.875rem] text-[#07111D] h-custom text-center ' +
                            ' 2xl:text-[1.25rem]'}>
                            {t('logisticSupportContent')}
                        </div>
                    </div>
                </div>
            </div>
            <div className={'flex justify-center'}>
                <Button
                    className={'mt-[2rem] ' +
                        'px-[0.938rem] py-[1.5rem] h-[2.875rem] rounded-[6.25rem] ' +
                        ' 2xl:text-[1.25rem]' +
                        ' 2xl:font-[600] ' +
                        ' 2xl:px-[2.063rem]' +
                        ' 2xl:py-[1.313rem]' +
                        ' 2xl:h-[4.375rem]' +
                        ' 2xl:mt-[4rem]' +

                        ' xl:text-[1rem]' +
                        ' xl:font-[600]' +
                        ' xl:px-[1.25rem]' +
                        ' xl:py-[0.75rem]' +
                        ' xl:h-[3rem]' +

                        ' md:text-[0.875rem]' +
                        ' md:font-[600]' +
                        ' md:px-[0.938rem]' +
                        ' md:py-[1.5rem]' +
                        ' md:h-[2.875rem]' +
                        ''}>{t('freeRegister')}</Button>
            </div>
        </div>
    )
};

export default ExpressFeature;
