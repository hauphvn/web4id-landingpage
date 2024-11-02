import {useTranslation} from "react-i18next";

const ProductManagement = () => {
    const {t} = useTranslation();
    return (
        <div className={'express-feature mt-[2.5rem] px-[1.5rem]'}>
            <div className={'mb-[2rem] flex flex-col gap-y-[1.5rem]'}>
                <div className="title font-[600] text-[1.5rem] ">
                    {t('productManagement')}
                </div>
                <div className={'text-[#4B5262] text-[0.875rem] leading-[1.225rem]'}>
                    {t('productManagementContent')}
                </div>
            </div>
            <div className="items flex flex-wrap gap-y-[1rem]">
                <div
                    className="item min-h-[14.563rem] flex flex-col justify-center items-center py-[2.5rem] px-[2.875rem] border-[#E7E7E9] border shadow-[#EEEEEE80] shadow gap-y-[1.5rem] rounded-[1rem]">
                    <div className="icon">
                        <img src={'/images/productManage1.png'} alt={'Product Phuc khang net'}/>
                    </div>
                    <div className="content flex flex-col gap-y-[1rem]">
                        <div className={'text-[1rem] font-[600] leading-[1.297rem]'}>
                            {t('productManagementContent1')}
                        </div>
                        <div className={'font-[400] text-[0.875rem] text-[#4B5262]'}>
                            {t('productManagementContent1Sub')}
                        </div>
                    </div>
                </div>
                <div
                    className="item min-h-[14.563rem] flex flex-col justify-center items-center py-[2.5rem] px-[2.875rem] border-[#E7E7E9] border shadow-[#EEEEEE80] shadow gap-y-[1.5rem] rounded-[1rem]">
                    <div className="icon">
                        <img src={'/images/productManage2.png'} alt={'Product Phuc khang net'}/>
                    </div>
                    <div className="content flex flex-col gap-y-[1rem]">
                        <div className={'text-[1rem] font-[600] leading-[1.297rem]'}>
                            {t('productManagementContent2')}
                        </div>
                        <div className={'font-[400] text-[0.875rem] text-[#4B5262]'}>
                            {t('productManagementContent2Sub')}
                        </div>
                    </div>
                </div>
                <div
                    className="item min-h-[14.563rem] flex flex-col justify-center items-center py-[2.5rem] px-[2.875rem] border-[#E7E7E9] border shadow-[#EEEEEE80] shadow gap-y-[1.5rem] rounded-[1rem]">
                    <div className="icon">
                        <img src={'/images/productManage3.png'} alt={'Product Phuc khang net'}/>
                    </div>
                    <div className="content flex flex-col gap-y-[1rem]">
                        <div className={'text-[1rem] font-[600] leading-[1.297rem]'}>
                            {t('productManagementContent3')}
                        </div>
                        <div className={'font-[400] text-[0.875rem] text-[#4B5262]'}>
                            {t('productManagementContent3Sub')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductManagement;
