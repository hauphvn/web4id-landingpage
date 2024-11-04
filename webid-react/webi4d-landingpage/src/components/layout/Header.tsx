'use client';
import {useEffect, useState} from 'react';
import {Button} from "@/components/ui/button";
import {LineMenu} from "@/components/icons/iconIndex";
import LeftMenuMobile from "@/components/layout/LeftMenuMobile";
import {useTranslation} from "react-i18next";
import TopMenuNav from "@/components/layout/TopMenuNav.tsx";
import SelectLanguage from "@/components/layout/SelectLanguage.tsx";

interface HeaderProps {
    scrollToSection: (section: string) => void;
}
const Header = (props:HeaderProps) => {
    const {scrollToSection} = props;
    const {t} = useTranslation();
    const [onShowMenu, setOnShowMenu] = useState(
        sessionStorage.getItem('onShowMenu') === 'true'
    );

    useEffect(() => {
        const leftMenuMobile = document.querySelector('#left-menu-mobile');
        const iconMenuMobile = document.querySelector('#icon-menu-mobile');
        const handleClick = (e: MouseEvent) => {
            const showMenu = sessionStorage.getItem('onShowMenu');
            if (showMenu && leftMenuMobile && !leftMenuMobile.contains(e.target as Node) && !iconMenuMobile?.contains(e.target as Node)) {
                setOnShowMenu(false);
                sessionStorage.setItem('onShowMenu', String(false));
            }
        };
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <header className=' w-full p-[0.625rem] md:p-[1.125rem]
        '>
            <div className={'flex justify-between items-center'}>
                <div
                    className="flex justify-between items-center">
                    <div
                        onClick={() => {
                            scrollToSection('home');
                        }}
                        className={'pt-[0.75rem] px-[1rem] pb-[0.688rem] md:border-[#E7E7E9] md:border-[0.063rem] md:rounded-[0.625rem]'}>
                        <img
                            className={'hover:cursor-pointer w-[2rem] h-[2.563rem]'}
                            src={'/images/logo-small.png'} alt={'Phuc khang net'}/>
                    </div>
                    <div className={'hidden md:inline-block z-[200]'}>
                        <TopMenuNav scrollToSection={scrollToSection}/>
                    </div>
                </div>

                <div className="flex gap-x-[0.75rem]">
                    <div className={'hidden md:inline-block'}>
                        <SelectLanguage/>
                    </div>
                    <Button
                        onClick={() => {
                            scrollToSection('pricing');
                        }}
                        className={'px-[0.938rem] py-[1.5rem] bg-[#0D0C22] rounded-[6.25rem] font-[600]'}
                    >{t('registerNow')}</Button>
                    <div
                        id={'icon-menu-mobile'}
                        className="md:hidden w-[46px] h-[46px] rounded-[50%] border border-[#E7E7E9] flex justify-center items-center"
                        onClick={() => {
                            setOnShowMenu(!onShowMenu);
                            sessionStorage.setItem('onShowMenu', String(!onShowMenu));
                        }}
                    >
                        <LineMenu/>
                    </div>
                </div>
            </div>
            <LeftMenuMobile
                scrollToSection={(e) => {
                    scrollToSection(e);
                    setOnShowMenu(false);
                    sessionStorage.setItem('onShowMenu', String(false));
                }}
                open={onShowMenu}/>
        </header>
    );
};

export default Header;
