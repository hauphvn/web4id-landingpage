'use client';
import {useEffect, useState} from 'react';
import {Button} from "@/components/ui/button";
import {LineMenu} from "@/components/icons/iconIndex";
import LeftMenuMobile from "@/components/layout/LeftMenuMobile";
import {useTranslation} from "react-i18next";
import TopMenuNav from "@/components/layout/TopMenuNav.tsx";
import SelectLanguage from "@/components/layout/SelectLanguage.tsx";

const Header = () => {
    const {t} = useTranslation();
    const [onShowMenu, setOnShowMenu] = useState(false);

    useEffect(() => {
        const leftMenuMobile = document.querySelector('#left-menu-mobile');
        const handleClick = (e: MouseEvent) => {
            if (onShowMenu && leftMenuMobile && !leftMenuMobile.contains(e.target as Node)) {
                setOnShowMenu(false);
            }
        };
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <header className={'h-[6.25rem] w-full px-[1.5rem] py-[0.75rem]'}>
            <div className={'flex justify-between items-center'}>
                <div
                    className="flex justify-between items-center">
                    <div className={'pt-[0.75rem] px-[1rem] pb-[0.688rem] md:border-[#E7E7E9] md:border-[0.063rem] md:rounded-[0.625rem]'}>
                    <img
                        className={'w-[2rem] h-[2.563rem]'}
                        src={'/images/logo-small.png'} alt={'Phuc khang net'}/>
                    </div>
                    <div className={'hidden md:inline-block '}>
                        <TopMenuNav/>
                    </div>
                </div>

                <div className="flex gap-x-[0.75rem]">
                    <div className={'hidden md:inline-block'}>
                        <SelectLanguage/>
                    </div>
                    <Button
                        className={'px-[0.938rem] py-[1.5rem] bg-[#0D0C22] rounded-[6.25rem] font-[600]'}
                    >{t('registerNow')}</Button>
                    <div
                        className="md:hidden w-[46px] h-[46px] rounded-[50%] border border-[#E7E7E9] flex justify-center items-center"
                        onClick={() => setOnShowMenu(!onShowMenu)}
                    >
                        <LineMenu/>
                    </div>
                </div>
            </div>
            <LeftMenuMobile open={onShowMenu}/>
        </header>
    );
};

export default Header;
