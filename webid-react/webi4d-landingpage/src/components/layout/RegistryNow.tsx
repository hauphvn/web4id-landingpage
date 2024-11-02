import {useTranslation} from "react-i18next";
import {CheckCircle, XCircle} from "@/components/icons/iconIndex.tsx";
import {Button} from "@/components/ui/button.tsx";

const RegistryNow = () => {
    const {t} = useTranslation();
    return (
        <div className={'px-[1.5rem] mt-[2.5rem] flex flex-col gap-y-[2rem] w-full '}>
            <div className="title text-[#0F172A] text-[1.5rem] font-[600] leading-[2.1rem]">
                {t('quickRegister')}
            </div>
            <div className={'items flex flex-wrap gap-y-[1rem] w-full '}>
                <div
                    className="item flex flex-col gap-y-[1rem] rounded-[1.25rem] w-full border-[#E7E7E9] border-[0.094rem] px-[2rem] py-[3.125rem]">
                    <div className="top flex flex-col">
                        <div className={'small-title text-[0.75rem] text-[#4B5262]'}>
                            {t('freeVersion')}
                        </div>
                        <div className={'text-[#0F172A] leading-[3rem] text-[1.5rem]'}>
                            {t('free')}
                        </div>
                    </div>
                    <div className="content">
                        <div className={'flex gap-x-[0.75rem] items-center h-[3rem]'}>
                            <div className="icon">
                                <XCircle/>
                            </div>
                            <div className={'text-[0.875rem] text-[#4B5262]'}>
                                {t('exclusiveBenefits')}
                            </div>
                        </div>
                        <div className={'flex gap-x-[0.75rem] items-center h-[3rem]'}>
                            <div className="icon">
                                <CheckCircle/>
                            </div>
                            <div className={'text-[0.875rem] text-[#4B5262]'}>
                                {t('20Account')}
                            </div>
                        </div>
                        <div className={'flex gap-x-[0.75rem] items-center h-[3rem]'}>
                            <div className="icon">
                                <CheckCircle/>
                            </div>
                            <div className={'text-[0.875rem] text-[#4B5262]'}>
                                {t('1000Product')}
                            </div>
                        </div>
                        <div className={'flex gap-x-[0.75rem] items-center h-[3rem]'}>
                            <div className="icon">
                                <CheckCircle/>
                            </div>
                            <div className={'text-[0.875rem] text-[#4B5262]'}>
                                {t('dataTransfer')}
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <Button className={'w-full text-white h-[3rem] rounded-[6.25rem] bg-[#0D0C22]'}>
                            {t('registerNow')}
                        </Button>
                    </div>
                </div>
                <div
                    className="item flex flex-col gap-y-[1rem] rounded-[1.25rem] w-full border-[#E7E7E9] border-[0.094rem] px-[2rem] py-[3.125rem]">
                    <div className="top flex flex-col">
                        <div className={'flex gap-x-[1rem] items-center'}>
                            <div className={'small-title text-[0.75rem] text-[#4B5262]'}>
                                {t('basicVersion')}
                            </div>
                            <div className={'bg-[#FF8000] text-white pl-[0.5rem] pr-[0.6rem] py-[0.625rem] text-[0.75rem] flex justify-center items-center rounded-[6.25rem]'}>
                                {t('mostPopular')}
                            </div>
                        </div>
                        <div className={'text-[#0F172A] leading-[3rem] text-[1.5rem]'}>
                            {t('basicPrice')}
                        </div>
                    </div>
                    <div className="content">
                        <div className={'flex gap-x-[0.75rem] items-center h-[3rem]'}>
                            <div className="icon">
                                <CheckCircle/>
                            </div>
                            <div className={'text-[0.875rem] text-[#4B5262]'}>
                                {t('exclusiveBenefits')}
                            </div>
                        </div>
                        <div className={'flex gap-x-[0.75rem] items-center h-[3rem]'}>
                            <div className="icon">
                                <CheckCircle/>
                            </div>
                            <div className={'text-[0.875rem] text-[#4B5262]'}>
                                {t('20Account')}
                            </div>
                        </div>
                        <div className={'flex gap-x-[0.75rem] items-center h-[3rem]'}>
                            <div className="icon">
                                <CheckCircle/>
                            </div>
                            <div className={'text-[0.875rem] text-[#4B5262]'}>
                                {t('1000Product')}
                            </div>
                        </div>
                        <div className={'flex gap-x-[0.75rem] items-center h-[3rem]'}>
                            <div className="icon">
                                <CheckCircle/>
                            </div>
                            <div className={'text-[0.875rem] text-[#4B5262]'}>
                                {t('dataTransfer')}
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <Button className={'w-full text-white h-[3rem] rounded-[6.25rem] bg-[#0D0C22]'}>
                            {t('registerNow')}
                        </Button>
                    </div>
                </div>
                <div
                    className="item flex flex-col gap-y-[1rem] rounded-[1.25rem] w-full border-[#E7E7E9] border-[0.094rem] px-[2rem] py-[3.125rem]">
                    <div className="top flex flex-col">
                        <div className={'small-title text-[0.75rem] text-[#4B5262]'}>
                            {t('professionalVersion')}
                        </div>
                        <div className={'text-[#0F172A] leading-[3rem] text-[1.5rem]'}>
                            {t('professionalPrice')}
                        </div>
                    </div>
                    <div className="content">
                        <div className={'flex gap-x-[0.75rem] items-center h-[3rem]'}>
                            <div className="icon">
                                <CheckCircle/>
                            </div>
                            <div className={'text-[0.875rem] text-[#4B5262]'}>
                                {t('exclusiveBenefits')}
                            </div>
                        </div>
                        <div className={'flex gap-x-[0.75rem] items-center h-[3rem]'}>
                            <div className="icon">
                                <CheckCircle/>
                            </div>
                            <div className={'text-[0.875rem] text-[#4B5262]'}>
                                {t('20Account')}
                            </div>
                        </div>
                        <div className={'flex gap-x-[0.75rem] items-center h-[3rem]'}>
                            <div className="icon">
                                <CheckCircle/>
                            </div>
                            <div className={'text-[0.875rem] text-[#4B5262]'}>
                                {t('1000Product')}
                            </div>
                        </div>
                        <div className={'flex gap-x-[0.75rem] items-center h-[3rem]'}>
                            <div className="icon">
                                <CheckCircle/>
                            </div>
                            <div className={'text-[0.875rem] text-[#4B5262]'}>
                                {t('dataTransfer')}
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <Button className={'w-full text-white h-[3rem] rounded-[6.25rem] bg-[#0D0C22]'}>
                            {t('registerNow')}
                        </Button>
                    </div>
                </div>
                <div
                    className="item flex flex-col gap-y-[1rem] rounded-[1.25rem] w-full border-[#E7E7E9] border-[0.094rem] px-[2rem] py-[3.125rem]">
                    <div className="top flex flex-col">
                        <div className={'small-title text-[0.75rem] text-[#4B5262]'}>
                            {t('enterpriseVersion')}
                        </div>
                        <div className={'text-[#0F172A] leading-[3rem] text-[1.5rem]'}>
                            {t('enterprisePrice')}
                        </div>
                    </div>
                    <div className="content">
                        <div className={'flex gap-x-[0.75rem] items-center h-[3rem]'}>
                            <div className="icon">
                                <CheckCircle/>
                            </div>
                            <div className={'text-[0.875rem] text-[#4B5262]'}>
                                {t('exclusiveBenefits')}
                            </div>
                        </div>
                        <div className={'flex gap-x-[0.75rem] items-center h-[3rem]'}>
                            <div className="icon">
                                <CheckCircle/>
                            </div>
                            <div className={'text-[0.875rem] text-[#4B5262]'}>
                                {t('20Account')}
                            </div>
                        </div>
                        <div className={'flex gap-x-[0.75rem] items-center h-[3rem]'}>
                            <div className="icon">
                                <CheckCircle/>
                            </div>
                            <div className={'text-[0.875rem] text-[#4B5262]'}>
                                {t('1000Product')}
                            </div>
                        </div>
                        <div className={'flex gap-x-[0.75rem] items-center h-[3rem]'}>
                            <div className="icon">
                                <CheckCircle/>
                            </div>
                            <div className={'text-[0.875rem] text-[#4B5262]'}>
                                {t('dataTransfer')}
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <Button className={'w-full text-white h-[3rem] rounded-[6.25rem] bg-[#0D0C22]'}>
                            {t('registerNow')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistryNow;
