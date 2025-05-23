import angeloPhoto from "@/public/images/angelo.png"
import antonioPhoto from "@/public/images/antonio.png"
import pauloPhoto from "@/public/images/paulo.png"
import { FeatureType, NavLinkType, ProductImagesType, Question } from "@/types"

export * from "./customValidate"
export * from "./errorMessage"

import { Mic, QrCode, TrainFront } from "lucide-react"
import Link from "next/link"

export const navLinks: NavLinkType[] = [
  {
    label: "Inicio",
    url: "/#inicio",
  },
  {
    label: "Produto",
    url: "/#produto",
  },
  {
    label: "Funcionalidades",
    url: "/#funcionalidades",
  },
  {
    label: "Perguntas Frequentes",
    url: "/#perguntas-frequentes",
  },
]

export const footerLinks = [
  {
    label: "Início",
    url: "/#inicio",
  },
  {
    label: "Sobre o Produto",
    url: "/#produto",
  },
  {
    label: "Funcionalidades",
    url: "/#funcionalidades",
  },
  {
    label: "Perguntas Frequentes",
    url: "/#perguntas-frequentes",
  },
  {
    label: "Equipe de Desenvolvimento",
    url: "/desenvolvedores",
  },
  {
    label: "Login",
    url: "/login",
  },
  {
    label: "Cadastro",
    url: "/cadastro",
  },
  {
    label: "Chat",
    url: "/chat",
  },
  {
    label: "Alertas",
    url: "/alertas",
  },
  {
    label: "Telegram",
    url: "/telegram",
  },
]

export const devs = [
  {
    name: "Angelo Recke",
    rm: "560299",
    classRoom: "1-TDSQ",
    position: "Engenheiro de Inteligencia Artificial",
    linkedin: "https://www.linkedin.com/in/angelo-recke-b9117a325/",
    github: "https://github.com/AngeloCCR",
    devPhoto: angeloPhoto,
  },
  {
    name: "Antonio de Luca",
    rm: "560169",
    classRoom: "1-TDSQ",
    position: "Desenvolvedor Backend e Líder",
    linkedin: "https://www.linkedin.com/in/antonio-de-luca-84a01420a/",
    github: "https://github.com/Antoniodluca-fiap",
    devPhoto: antonioPhoto,
  },
  {
    name: "Paulo Barbosa",
    rm: "559914",
    classRoom: "1-TDSQ",
    position: "Desenvolvedor Frontend e Engenheiro de Banco de Dados",
    linkedin: "https://www.linkedin.com/in/paulo-sergio-fb/",
    github: "https://github.com/PauloSergioFB",
    devPhoto: pauloPhoto,
  },
]

export const productImages: ProductImagesType = {
  sm: {
    src: "/images/phone-template.png",
    width: 310,
    height: 654,
  },
  md: {
    src: "/images/tablet-template.png",
    width: 453,
    height: 638,
  },
  lg: {
    src: "/images/desktop-template.png",
    width: 1050,
    height: 633,
  },
}

export const features: FeatureType[] = [
  {
    Icon: TrainFront,
    title: "Informações úteis",
    description:
      "Tire dúvidas sobre linhas, horários e funcionamento do metrô.",
  },
  {
    Icon: Mic,
    title: "Mensagem de voz",
    description: "Converse com o chatbot enviando áudios no Telegram.",
  },
  {
    Icon: QrCode,
    title: "Detecção de Localidade (em breve)",
    description:
      "Escaneie um dos QR Codes disponíveis pela estação para identificar sua posição.",
  },
]

export const questions: Question[] = [
  {
    question: "A Cecília é uma inteligência artificial?",
    response: (
      <>
        Sim, a Cecília é uma inteligência artificial desenvolvida por alunos da
        FIAP, em parceria com a CCR, para facilitar a experiência dos usuários
        no metrô de São Paulo. Ela fornece informações detalhadas sobre o
        sistema metroviário e auxilia na navegação dentro das estações.
      </>
    ),
  },
  {
    question: "A localização por QR Code já está disponível?",
    response: (
      <>
        Ainda não. A funcionalidade de localização por QR Code está em
        desenvolvimento e será lançada em breve. Em breve, você poderá escanear
        códigos nas estações para obter ajuda contextual diretamente no local.
      </>
    ),
  },
  {
    question: "Como eu inicio uma conversa com a Cecília?",
    response: (
      <>
        Para conversar com a Cecília, basta acessar o site{" "}
        <Link className="link text-primary-500 font-medium" href="/chat">
          estacaofacil.com.br/chat
        </Link>{" "}
        e iniciar o atendimento diretamente pelo navegador, sem a necessidade de
        baixar aplicativos.
      </>
    ),
  },
  {
    question: "Preciso instalar algum aplicativo para usar o chat?",
    response: (
      <>
        Não, você não precisa instalar nenhum aplicativo. O chat da Cecília está
        disponível online e pode ser acessado diretamente pelo site{" "}
        <Link className="link text-primary font-medium" href="/chat">
          estacaofacil.com.br/chat
        </Link>
      </>
    ),
  },
  {
    question: "Como faço para acessar o chat da Cecília no Telegram?",
    response: (
      <>
        É simples! Você pode buscar por <strong>@cecilia_est_facil_bot</strong>{" "}
        no Telegram ou clicar diretamente neste{" "}
        <a
          href="https://t.me/Cecilia_est_facil_bot"
          className="link text-primary-500 font-medium"
        >
          link
        </a>{" "}
        para iniciar a conversa. Envie sua dúvida e a Cecília vai te ajudar!
      </>
    ),
  },
  {
    question: "Quais tipos de informações a Cecília pode oferecer?",
    response: (
      <>
        A Cecília pode fornecer diversas informações sobre o metrô de São Paulo,
        como horários de funcionamento, tarifas, conexões, regras de embarque e
        muito mais. Basta enviar sua dúvida pelo chat!
      </>
    ),
  },
  {
    question: "Preciso criar uma conta para usar o chat?",
    response: (
      <>
        Não é necessário criar uma conta para utilizar o chatbot. No entanto, ao
        se cadastrar, suas conversas ficarão salvas, permitindo que você as
        consulte e continue de onde parou no futuro.
      </>
    ),
  },
  {
    question: "O chat está disponível apenas na Linha 4-Amarela?",
    response: (
      <>
        Não, a Cecília pode fornecer informações sobre todas as linhas do metrô
        de São Paulo. Você pode tirar dúvidas sobre horários, conexões, tarifas
        e muito mais, independentemente da linha.
      </>
    ),
  },
]
