import {useTranslation} from "react-i18next";
import {CheckCircle, LeftArrow, RightArrow, XCircle} from "@/components/icons/iconIndex.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";

const packages = [
    {
        id: 1,
        title: 'freeVersion',
        price: 'free',
        benefits: [
            {
                isIncluded: false,
                title: 'exclusiveBenefits'
            },
            {
                isIncluded: true,
                title: '20Account'
            },
            {
                isIncluded: true,
                title: '1000Product'
            },
            {
                isIncluded: true,
                title: 'dataTransfer'
            }
        ]
    },
    {
        id: 2,
        title: 'basicVersion',
        price: 'basicPrice',
        mostPopular:'mostPopular',
        benefits: [
            {
                isIncluded: false,
                title: 'exclusiveBenefits'
            },
            {
                isIncluded: true,
                title: '20Account'
            },
            {
                isIncluded: true,
                title: '1000Product'
            },
            {
                isIncluded: true,
                title: 'dataTransfer'
            }
        ]
    },
    {
        id: 3,
        title: 'professionalVersion',
        price: 'professionalPrice',
        benefits: [
            {
                isIncluded: false,
                title: 'exclusiveBenefits'
            },
            {
                isIncluded: true,
                title: '20Account'
            },
            {
                isIncluded: true,
                title: '1000Product'
            },
            {
                isIncluded: true,
                title: 'dataTransfer'
            }
        ]
    },
    {
        id: 4,
        title: 'enterpriseVersion',
        price: 'enterprisePrice',
        benefits: [
            {
                isIncluded: false,
                title: 'exclusiveBenefits'
            },
            {
                isIncluded: true,
                title: '20Account'
            },
            {
                isIncluded: true,
                title: '1000Product'
            },
            {
                isIncluded: true,
                title: 'dataTransfer'
            }
        ]
    }
]


const RegistryNow = () => {
    const [idSelected, setIdSelected] = useState(2);
    const {t} = useTranslation();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const renderItemPackage = (item) => {
        return (
            <div
                >
                <div className="top flex flex-col">
                    <div className={'flex gap-x-[1rem] items-center'}>
                        <div
                            className={` small-title text-[0.75rem] 2xl:text-[1.25rem] md:min-h-[2.375rem] xl:text-[1rem] md:text-[0.875rem] ${idSelected === item.id ? ' text-white ' : ' text-[#4B5262]'}`}>
                            {t(item.title)}
                        </div>
                        {item.mostPopular && (
                            <div
                                className={'bg-[#FF8000] text-white pl-[0.5rem] pr-[0.6rem] py-[0.625rem] text-[0.75rem] flex justify-center items-center rounded-[6.25rem]'}>
                                {t(item.mostPopular)}
                            </div>
                        )}
                    </div>

                    <div
                        className={` leading-[3rem] text-[1.5rem] 2xl:text-[2.125rem] xl:text-[1.75rem] md:text-[1.25rem] ${idSelected === item.id ? ' text-white ' : ' text-[#0F172A] '}`}>
                    {t(item.price)}
                    </div>
                </div>
                <div className="content">
                    {item.benefits.map((benefit: {
                        isIncluded: boolean;
                        title: string;
                    }) => (
                        <div key={benefit?.title} className={'flex gap-x-[0.75rem] items-center h-[3rem]'}>
                            <div className="icon">
                                {benefit.isIncluded ? <CheckCircle/> : <XCircle/>}
                            </div>
                            <div
                                className={`text-[0.875rem] text-[#4B5262] 2xl:text-[1.25rem] xl:text-[1rem] md:text-[0.875rem] ${idSelected === item.id ? 'text-[white]' : 'text-[#4B5262]'}`}>
                                {t(benefit.title)}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bottom">
                    <Button
                        className={`w-full h-[3rem] rounded-[6.25rem] ${idSelected === item.id ? 'bg-[#FFFFFF] text-[#0D0C22] hover:bg-[#cccccc]' : ' bg-[#0D0C22] text-white'}`}>
                        {t('registerNow')}
                    </Button>
                </div>
            </div>
        );
    }

    function onClickPrevNext(number: number) {
        if(number === -1){
            if(idSelected === 1){
                setIdSelected(4);
            }else{
                setIdSelected(idSelected - 1);
            }
        }else{
            if(idSelected === 4){
                setIdSelected(1);
            }else{
                setIdSelected(idSelected + 1);
            }
        }
    }

    return (
        <div
            id={'id-registry-now'}
            className="px-[1.5rem] mt-[2.5rem] flex flex-col gap-y-[2rem] w-full
        2xl:p-[1.625rem]

        xl:p-[1.25rem]

        md:p-[0.625rem]
        ">
            <div className="title text-[#0F172A] text-[1.5rem] font-[600] leading-[2.1rem]
             2xl:text-[3.25rem]
             2xl:text-center

                xl:text-[2.25rem]
                xl:text-center

                md:text-[1.75rem]
                md:text-center
            ">
                {t('quickRegister')}
            </div>
            <div className="items flex flex-wrap gap-y-[1rem] w-full justify-center
            2xl:gap-x-[2rem]
            2xl:justify-center
            2xl:pt-[4rem]

            xl:gap-x-[1.25rem]
            xl:justify-center
            xl:pt-[3rem]

            md:gap-x-[0.5rem]
            md:justify-center
            md:pt-[1.5rem]
            ">
                {packages.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => {
                            setIdSelected(item.id);
                        }}
                        className={` item flex flex-col gap-y-[1rem] rounded-[1.25rem] w-full border-[#E7E7E9] border-[0.094rem] px-[2rem] py-[3.125rem] 2xl:max-w-[23.125rem] xl:max-w-[20rem] md:max-w-[15.625rem]  
                        ${idSelected === item.id ? 'bg-[#263238] text-[#FFFFFF]' : ' '}
                        rounded-[1.25rem] cursor-pointer transition-all duration-300
                        `}>
                        {renderItemPackage(item)}
                    </div>
                ))}
                <div className={'hidden md:flex gap-x-[2.5rem]'}>
                    <div
                        onClick={() => onClickPrevNext(-1)}
                        className='p-[0.75rem] border-[#E7E7E9] border w-[3.375rem] h-[3.375rem] flex justify-center items-center rounded-[6.25rem] hover:cursor-pointer  active:bg-gray-200 '>
                        <LeftArrow/>
                    </div>
                    <div
                        onClick={() => onClickPrevNext(1)}
                        className='p-[0.75rem] border-[#E7E7E9] border w-[3.375rem] h-[3.375rem] flex justify-center items-center rounded-[6.25rem] hover:cursor-pointer  active:bg-gray-200 '>
                        <RightArrow/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistryNow;
