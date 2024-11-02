import './App.css'
import Header from "@/components/layout/Header.tsx";
import TopInfo from "@/components/layout/TopInfo.tsx";
import WeWillHelpYou from "@/components/layout/WeWillHelpYou.tsx";
import About from "@/components/layout/About.tsx";
import ExpressFeature from "@/components/layout/ExpressFeature.tsx";
import ProductManage from "@/components/layout/ProductManage.tsx";
import OrderManage from "@/components/layout/OrderManage.tsx";
import DataManage from "@/components/layout/DataManage.tsx";
import MiddlePageEntryEmail from "@/components/layout/MiddlePageEntryEmail.tsx";
import RegistryNow from "@/components/layout/RegistryNow.tsx";
import ImageDownloadAppNow from "@/components/layout/ImageDownloadAppNow.tsx";
import Footer from "@/components/layout/Footer.tsx";

function App() {
    return (
        <main className={'w-full'}>
            <div className={'w-full md:w-auto'}>
                <Header/>
            </div>
            <div className="w-full md:max-w-[1920px]">
                <TopInfo/>
                <WeWillHelpYou/>
                <About/>
                <ExpressFeature/>
                <ProductManage/>
                <DataManage/>
                <OrderManage/>
                <MiddlePageEntryEmail/>
                <RegistryNow/>
                <ImageDownloadAppNow/>
            </div>
            <Footer/>
        </main>
    )
}

export default App
