import TextInput from "@/components/TextInput";
import DoubleTextInput from "@/components/DoubleTextInput";
import CheckboxInput from "@/components/CheckboxInput";
import DownloadPDF from "@/components/DownloadPDF";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col justify-center">
            <form className="max-w-mg mx-auto bg-blue-900 p-20 rounded-2xl">
                <div className="flex flex-col items-center justify-center mb-5">
                    <span className="text-3xl font-bold text-white mb-5">Iscrizione grest 2024</span>
                    <span className="text-2xl font-bold text-white mb-10">Download dei documenti</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <DownloadPDF size={233} pages={4}
                                 link={"https://drive.google.com/uc?export=download&id=1QDZChoNOrECLhiUNSKesMip6zZcbNryM"}
                                 fileName={"Scheda di iscrizione e deleghe"}/>
                    <DownloadPDF size={398} pages={6}
                                 link={"https://drive.google.com/uc?export=download&id=1oljCdreQelJ8xzI3aHPWqztnwcqLsX0n"}
                                 fileName={"Regolamento e privacy"}/>
                </div>
            </form>
        </main>
    );
}
