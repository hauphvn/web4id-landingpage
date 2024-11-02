import {useTranslation} from "react-i18next";
import {itemsMenu} from "@/components/layout/LeftMenuMobile.tsx";
import SelectProductsMenu from "@/components/layout/SelectProductsMenu.tsx";

const TopMenuNav = () => {
    const {t} = useTranslation();
    return (
        <div className={'flex'}>
            {itemsMenu.map((item, index) => (
                <div key={index}
                     className=" flex items-center pl-[2rem] hover:text-brand-1 text-[#0D0C22] text-[0.875rem] font-[600] transition-colors duration-200">
                    {item?.children ? (
                        <SelectProductsMenu/>
                    ) : (
                        t(item.title)
                    )}
                </div>
            ))}
        </div>
    );
};

export default TopMenuNav;
