import { FeatureType, NavLinkType, ProductImagesType, Question } from "@/types"
import Link from "next/link"

export const navLinks: NavLinkType[] = [
  {
    label: "Inicio",
    url: "/#",
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
    icon: "qr-code",
    title: "Detecção de Localidade",
    description:
      "Escaneie um dos QR Codes disponíveis pela estação para identificar sua posição.",
  },
  {
    icon: "clock",
    title: "Informações em Tempo Real",
    description:
      "Receba atualizações sobre horários, atrasos e lotação dos trens.",
  },
  {
    icon: "map",
    title: "Dicas e Recomendações",
    description: "Encontre restaurantes próximos às estações.",
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
    question: "Como funciona a localização por QR Code?",
    response: (
      <>
        A Cecília utiliza um sistema de localização in-door por QR Code. Basta
        escanear um QR Code presente na estação ou digitar o código exibido
        abaixo dele no aplicativo. Com isso, a Cecília saberá sua posição e
        poderá fornecer instruções precisas para você chegar ao seu destino
        dentro da estação.
      </>
    ),
  },
  {
    question: "Como eu inicio uma conversa com a Cecília?",
    response: (
      <>
        Para conversar com a Cecília, basta acessar o site{" "}
        <Link className="link font-medium text-primary" href="/chat">
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
        <Link className="link font-medium text-primary" href="/chat">
          estacaofacil.com.br/chat
        </Link>
      </>
    ),
  },
  {
    question: "Quais tipos de informações a Cecília pode oferecer?",
    response: (
      <>
        A Cecília pode fornecer diversas informações sobre o metrô de São Paulo,
        como horários de funcionamento, tarifas, status das linhas, conexões e
        regras de embarque. Além disso, para as estações compatíveis, ela pode
        guiá-lo pelos corredores utilizando o sistema de localização por QR
        Code.
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
        de São Paulo. No entanto, o sistema de localização in-door por QR Code
        está atualmente disponível apenas na Linha 4-Amarela.
      </>
    ),
  },
]
