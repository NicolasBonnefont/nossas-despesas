import AdSense from "../adsense";
import Menu from "../components/menu";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <AdSense/>
    <Menu/>
    {children}
    </>
  )
}
