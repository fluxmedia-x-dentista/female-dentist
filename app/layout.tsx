import type { Metadata } from "next"; import "./globals.css";
export const metadata:Metadata={title:"Cabinet Dentaire | Sourires & Bien-être",description:"Des soins dentaires attentionnés dans un cadre doux et moderne."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
