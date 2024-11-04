import './App.css'
import Header from "@/components/layout/Header.tsx";
import TopInfo from "@/components/layout/TopInfo.tsx";
import WeWillHelpYou from "@/components/layout/WeWillHelpYou.tsx";
import ExpressFeature from "@/components/layout/ExpressFeature.tsx";
import ProductManage from "@/components/layout/ProductManage.tsx";
import OrderManage from "@/components/layout/OrderManage.tsx";
import DataManage from "@/components/layout/DataManage.tsx";
import MiddlePageEntryEmail from "@/components/layout/MiddlePageEntryEmail.tsx";
import RegistryNow from "@/components/layout/RegistryNow.tsx";
import ImageDownloadAppNow from "@/components/layout/ImageDownloadAppNow.tsx";
import Footer from "@/components/layout/Footer.tsx";
import About from "@/components/layout/About.tsx";
import {useRef} from "react";

function App() {
    const aboutRef = useRef(null);
    const homeRef = useRef(null);
    const features = useRef(null);
    const products = useRef(null);
    const pricing = useRef(null);
    const scrollToSection = (section: string) => {
        const refs = {
            home: homeRef,
            about: aboutRef,
            features: features,
            products: products,
            pricing: pricing
        };

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        refs[section].current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
    return (
        <main className={'w-full'}>
            <div className='w-full fixed top-0
             left-0 md:shadow bg-white z-2
            '>
                <Header
                    scrollToSection={scrollToSection}
                />
            </div>
            <div className="w-full md:max-w-[1920px] md:mt-[6rem]">
                <section
                    ref={homeRef}
                >
                    <TopInfo/>
                </section>
                <WeWillHelpYou/>
                <section
                    ref={aboutRef}>
                    <About/>
                </section>
                <section
                    ref={features}
                >
                    <ExpressFeature/>
                </section>
                <section
                    ref={products}
                >
                    <ProductManage/>
                    <DataManage/>
                    <OrderManage/>
                </section>
                <MiddlePageEntryEmail/>
                <section
                    ref={pricing}
                >
                    <RegistryNow/>
                </section>
                <ImageDownloadAppNow/>
            </div>
            <Footer
            scrollToSection={scrollToSection}
            />
        </main>
    )
}

export default App
