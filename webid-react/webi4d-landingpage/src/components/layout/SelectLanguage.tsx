'use client';
import {useTranslation} from "react-i18next";
import {ENFlag, VNFlag} from "@/components/icons/iconIndex.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "../ui/dropdown-menu";
import {Button} from "@/components/ui/button.tsx";


const SelectLanguage = () => {
    const [t, i18n] = useTranslation();
    const changeLang = (lang: string) => {
        i18n.changeLanguage(lang);
    }
    return (
            <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button
                            className={'w-[5.688rem] h-[3rem] border-[0.063rem] border-[#E7E7E9] rounded-[6.25rem]'}
                            asChild variant="outline">
                            <div >
                                {i18n.language === 'vi' ? (
                                    <div className={'flex justify-center items-center flex-row gap-x-[0.313rem] leading-1 w-full'}>
                                        <VNFlag/>
                                        <span className={'text-[#0D0C22] text-[0.875rem]'}>VN</span>
                                    </div>
                                ) : (
                                    <div
                                        className={'flex justify-center items-center flex-row p-0 m-0 gap-x-[0.313rem] leading-none w-full'}>
                                        <ENFlag/>
                                        <div className={'text-[#0D0C22] text-[0.875rem] pt-[0.25rem]'}>EN</div>
                                    </div>)}
                            </div>
                        </Button>
                    </DropdownMenuTrigger>

                <DropdownMenuContent className="justify-items-start">
                    <DropdownMenuLabel>{t('language')}</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuGroup>
                        <DropdownMenuItem
                        onClick={() => changeLang('vi')}
                        >
                            <div
                                className={'flex justify-center items-center flex-row gap-x-[0.313rem] leading-1 w-full'}>
                                <VNFlag/>
                                <span className={'text-[#0D0C22] text-[0.875rem]'}>VN</span>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => changeLang('en')}
                        >
                            <div
                                className={'flex justify-center items-center flex-row p-0 m-0 gap-x-[0.313rem] leading-none w-full'}>
                                <ENFlag/>
                                <div className={'text-[#0D0C22] text-[0.875rem] pt-[0.25rem]'}>EN</div>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

    );
};

export default SelectLanguage;
