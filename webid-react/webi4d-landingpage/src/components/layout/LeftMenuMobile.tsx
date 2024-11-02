'use client';
import SelectProductsMenu from "@/components/layout/SelectProductsMenu";
import {useTranslation} from "react-i18next";

export const itemsMenu = [
    {
        title: 'home',
        href: '/'
    },
    {
        title: 'about',
        href: '/ve-chung-toi'
    },
    {
        title: 'expressFeatures',
        href: '/tin-nang-noi-bat'
    },
    {
        title: 'products',
        href: '/san-pham',
        children: [
            {
                title: 'productsA',
                href: '/san-pham/a'
            },
            {
                title: 'productsB',
                href: '/san-pham/b'
            }
        ]
    },
    {
        title: 'pricing',
        href: '/bao-gia'
    }
];

interface LeftMenuMobileProps {
    open?: boolean;
}

const LeftMenuMobile = (props: LeftMenuMobileProps) => {
    const {t} = useTranslation();
    const {open = false} = props;
    return (
        <nav id={'left-menu-mobile'}
            className={`fixed top-0  pt-[5.25rem] bg-neutral-50 w-full h-screen max-w-[18.438rem] z-50 flex flex-col shadow-xl transition-full duration-300 ${open ? 'left-0 opacity-100' : '-left-full opacity-0'}`}>
            {itemsMenu.map((item, index) => (
                <div key={index}
                     className="pl-[2rem] py-[1rem] hover:text-brand-1 text-[#0D0C22] text-[1.125rem] transition-colors duration-200">
                    {item?.children ? (
                        <SelectProductsMenu/>
                    ) : (
                        t(item.title)
                    )}
                </div>
            ))}
        </nav>
    );
};

export default LeftMenuMobile;
