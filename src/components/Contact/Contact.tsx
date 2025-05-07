import { EnvelopeSimple, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import SectionTitle from "../SectionTitle";

const Contact = () => {
  const Icons = [
    {
      icon: <EnvelopeSimple size={38} />,
      link: "mailto:mailto:seuemail@email.com",
      label: "E-mail"
    },
    {
      icon: <GithubLogo size={38} />,
      link: "https://github.com/seuperfil",
      label: "Github"
    },
    {
      icon: <LinkedinLogo size={38} />,
      link: "https://linkedin.com/in/seuperfil",
      label: "Linkedin"
    }
  ]


  return (
    <section>
      <SectionTitle title="Contact" />
        <p style={{ marginTop: "10px", maxWidth: "600px", lineHeight: "1.6" }}>
          Se quiser trocar uma ideia, colaborar ou tirar dúvidas, estou à disposição.  
          Me chama no e-mail ou nas redes abaixo!
        </p>
      <div
        style={{
          display: "flex",
          // flexDirection: "column",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {Icons.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "#f1f5f9",
              textDecoration: "none",
              fontSize: "1.1rem",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(5px)";
              e.currentTarget.style.color = "#f97316";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.color = "#f1f5f9";
            }}
            // COLOCAR O MESMO MOUSEENTER E MOUSELEAVE NOS CARDS DE PROJETOS
            // ARRUMAR AS INFORMACOES DE CONTATOS
            // SUBIR ISSO EM ALGUM LUGAR
            // COLOCAR O LINK DO GITHUB E DO LINKEDIN
            // COLOCAR O LINK DO EMAIL
            // FAZER O READER SE MOVIMENTAR JUNTO COM A PAGINA
            // FAZER O HEADER FICAR FIXO
          >
            {item.icon}
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;