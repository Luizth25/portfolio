import { EnvelopeSimple, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import SectionTitle from "../SectionTitle";
import { contactLink, contactLinkContainer } from './Contact.css';

const Contact = () => {
  const Icons = [
    {
      icon: <EnvelopeSimple size={38} />,
      link: "mailto:luizftp25@gmail.com",
      label: "E-mail"
    },
    {
      icon: <GithubLogo size={38} />,
      link: "https://github.com/luizth25",
      label: "Github"
    },
    {
      icon: <LinkedinLogo size={38} />,
      link: "https://linkedin.com/in/luiz-preto",
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
      <div className={contactLinkContainer}>
        {Icons.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={contactLink}>
            {item.icon}
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;