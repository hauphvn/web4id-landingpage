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
        <div className={'express-feature mt-[2.5rem] px-[1.5rem]'}>
            <div className="title font-[600] text-[1.5rem] mb-[2rem]">
                {t('expressFeatures')}
            </div>
            <div className="items flex flex-wrap gap-y-[1rem]">
                <div
                    className="item min-h-[14.563rem] flex flex-col justify-center items-center px-[1rem] py-[0.75rem] border-[#E7E7E9] border shadow-[#EEEEEE80] shadow gap-y-[1.5rem] rounded-[1rem]">
                    <div className="icon">
                        <ProcessSquare/>
                    </div>
                    <div className="content flex flex-col gap-y-[1rem]">
                        <div className={'text-[1.5rem] font-[600] text-center leading-[1.8rem]'}>
                            {t('processHandelOrder')}
                        </div>
                        <div className={'font-[400] text-[0.875rem] text-[#07111D] opacity-[70%] text-center'}>
                            {t('processHandelOrderContent')}
                        </div>
                    </div>
                </div>
                <div
                    className="item min-h-[14.563rem] flex flex-col justify-center items-center px-[1rem] py-[0.75rem] border-[#E7E7E9] border shadow-[#EEEEEE80] shadow gap-y-[1.5rem] rounded-[1rem]">
                    <div className="icon">
                        <ExpressStart/>
                    </div>
                    <div className="content flex flex-col gap-y-[1rem]">
                        <div className={'text-[1.5rem] font-[600] text-center leading-[1.8rem]'}>
                            {t('updateOrderStatus')}
                        </div>
                        <div className={'font-[400] text-[0.875rem] text-[#07111D] opacity-[70%] text-center'}>
                            {t('updateOrderStatusContent')}
                        </div>
                    </div>
                </div>
                <div
                    className="item min-h-[14.563rem] flex flex-col justify-center items-center px-[1rem] py-[0.75rem] border-[#E7E7E9] border shadow-[#EEEEEE80] shadow gap-y-[1.5rem] rounded-[1rem]">
                    <div className="icon">
                        <SquareMenu/>
                    </div>
                    <div className="content flex flex-col gap-y-[1rem]">
                        <div className={'text-[1.5rem] font-[600] text-center leading-[1.8rem]'}>
                            {t('syncWarehouse')}
                        </div>
                        <div className={'font-[400] text-[0.875rem] text-[#07111D] opacity-[70%] text-center'}>
                            {t('syncWarehouseContent')}
                        </div>
                    </div>
                </div>
                <div
                    className="item min-h-[14.563rem] flex flex-col justify-center items-center px-[1rem] py-[0.75rem] border-[#E7E7E9] border shadow-[#EEEEEE80] shadow gap-y-[1.5rem] rounded-[1rem]">
                    <div className="icon">
                        <ImageProductLorem/>
                    </div>
                    <div className="content flex flex-col gap-y-[1rem]">
                        <div className={'text-[1.5rem] font-[600] text-center leading-[1.8rem]'}>
                            {t('addImageProduct')}
                        </div>
                        <div className={'font-[400] text-[0.875rem] text-[#07111D] opacity-[70%] text-center'}>
                            {t('addImageProductContent')}
                        </div>
                    </div>
                </div>
                <div
                    className="item min-h-[14.563rem] flex flex-col justify-center items-center px-[1rem] py-[0.75rem] border-[#E7E7E9] border shadow-[#EEEEEE80] shadow gap-y-[1.5rem] rounded-[1rem]">
                    <div className="icon">
                        <ReportIcon/>
                    </div>
                    <div className="content flex flex-col gap-y-[1rem]">
                        <div className={'text-[1.5rem] font-[600] text-center leading-[1.8rem]'}>
                            {t('smartReport')}
                        </div>
                        <div className={'font-[400] text-[0.875rem] text-[#07111D] opacity-[70%] text-center'}>
                            {t('smartReportContent')}
                        </div>
                    </div>
                </div>
                <div
                    className="item min-h-[14.563rem] flex flex-col justify-center items-center px-[1rem] py-[0.75rem] border-[#E7E7E9] border shadow-[#EEEEEE80] shadow gap-y-[1.5rem] rounded-[1rem]">
                    <div className="icon">
                        <Truck/>
                    </div>
                    <div className="content flex flex-col gap-y-[1rem]">
                        <div className={'text-[1.5rem] font-[600] text-center leading-[1.8rem]'}>
                            {t('logisticSupport')}
                        </div>
                        <div className={'font-[400] text-[0.875rem] text-[#07111D] opacity-[70%] text-center'}>
                            {t('logisticSupportContent')}
                        </div>
                    </div>
                </div>
            </div>
            <div className={'flex justify-center'}>
                <Button className={'mt-[2rem] px-[0.938rem] py-[1.5rem] h-[2.875rem] rounded-[6.25rem]'}>{t('freeRegister')}</Button>
            </div>
        </div>
    )
};

export default ExpressFeature;
