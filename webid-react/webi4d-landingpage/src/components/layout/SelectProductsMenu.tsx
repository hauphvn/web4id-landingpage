'use client';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useTranslation} from "react-i18next";

interface SelectProductsMenuProps {
    onChange?: (e: string) => void;
    defaultValue?: string;
}

const SelectProductsMenu = (props: SelectProductsMenuProps) => {
    const {onChange: onSelectProductsMenu, defaultValue} = props;
    const {t} = useTranslation();
    return (
        <div
        id={'id-select-products-menu'}
        >
            <Select
                defaultValue={defaultValue}
                onValueChange={onSelectProductsMenu}
            >
                <SelectTrigger
                    className=" w-[auto] text-[#0D0C22] pl-0 text-[1.125rem]
                    md:text-[0.875rem] shadow-none
                    border-none focus:ring-0 focus:ring-offset-0 ">
                    <SelectValue placeholder={t('selectTitleMenu')}/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem className={'text-[1.125rem]'} value="en">{t('productsA')}</SelectItem>
                    <SelectItem className={'text-[1.125rem]'} value="vi">{t('productsB')}</SelectItem>
                </SelectContent>
            </Select>
        </div>

    );
};

export default SelectProductsMenu;
