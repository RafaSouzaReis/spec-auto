import "./globals.css";
import Roboto from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Spec Auto",
  description:
    "Spec Auto é uma plataforma focada em especificações automotivas organizadas com precisão e clareza. O design minimalista destaca dados técnicos essenciais e valoriza a experiência visual. Mais que um catálogo, é uma ferramenta para análise, comparação e apreciação de carros.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <nav>
            <div>
              <span>LOGOTIPO</span>
            </div>
            <ul>
              <li>Comparar</li>
              <li>Catalogo</li>
              <li>Marcas</li>
              <li>Sobre</li>
            </ul>
            <button></button>
          </nav>
        </header>
        <main className={roboto.className}>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
