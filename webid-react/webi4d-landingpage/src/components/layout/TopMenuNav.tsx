import {useTranslation} from "react-i18next";
import {itemsMenu} from "@/components/layout/LeftMenuMobile.tsx";
import SelectProductsMenu from "@/components/layout/SelectProductsMenu.tsx";

interface TopMenuNavProps {
    scrollToSection: ( section: string) => void;
}
const TopMenuNav = (props:TopMenuNavProps) => {
    const {t} = useTranslation();
    return (
        <div className={'flex'}>
            {itemsMenu.map((item, index) => (
                <div
                    onClick={() => {
                        props.scrollToSection(item.id || 'id-home');
                    }}
                    key={index}
                     className=" hover:cursor-pointer hover:text-brand-1 text-[#0D0C22] flex items-center pl-[2rem]
                     text-[0.875rem] font-[600] transition-colors duration-200
                     ">
                    {item?.children ? (
                       <div className={'z-[200]'}>
                           <SelectProductsMenu/>
                       </div>
                    ) : (
                        t(item.title)
                    )}
                </div>
            ))}
        </div>
    );
};

export default TopMenuNav;
