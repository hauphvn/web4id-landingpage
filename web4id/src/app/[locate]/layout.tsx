import {NextIntlClientProvider} from 'next-intl';
import type {Metadata} from "next";
import '../globals.css';
import {Inter} from 'next/font/google';
import {getMessages} from "next-intl/server";
import {notFound} from 'next/navigation';
import {routing} from "@/i18n/routing";
// Using variable font
const inter = Inter({
    subsets: ['vietnamese'],
    display: "swap", // Use font-display: swap to ensure text is displayed immediately

});
export const metadata: Metadata = {
    title: "PK4ID giải pháp kinh doanh và quản lý cho doanh nghiệp",
    description: "PK4ID - Giải pháp kinh doanh và quản lý toàn diện, hỗ trợ tối ưu hoạt động cho cá nhân và doanh nghiệp",
};

export default async function LocaleLayout({
                                               children,
                                               params: {locate}
                                           }: Readonly<{
    children: React.ReactNode;
    params: { locate: string }
}>) {
    if (!routing.locales.includes(locate as any)) {
        notFound();
    }
    const messages = await getMessages();
    return (
        <html lang={locate}>
        <body className={`${inter.className}`}>
        <NextIntlClientProvider messages={messages}>
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
