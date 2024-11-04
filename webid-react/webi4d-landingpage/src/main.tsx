import {createRoot} from 'react-dom/client'
import './index.css'
import './utils/i18n.ts';
import App from './App.tsx';
import global_vi from '@/locales/vi/translation.json';
import global_en from '@/locales/en/translation.json';
import i18next from "i18next";
import {I18nextProvider} from "react-i18next";

i18next.init({
    interpolation: {
        escapeValue: false// not needed for react as it escapes by default
    },
    lng: 'vi',
    fallbackLng: 'vi',
    resources: {
        vi: {
            translation: global_vi
        },
        en: {
            translation: global_en
        }
    }
})
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <div>Hello world!</div>,
//     },
// ]);

createRoot(document.getElementById('root')!).render(
    // <StrictMode>
        <I18nextProvider i18n={i18next}>
        <App/>
        </I18nextProvider>
    // </StrictMode>,
)
