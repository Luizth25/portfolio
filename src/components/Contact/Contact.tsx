import { EnvelopeSimple, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import SectionTitle from "../SectionTitle";
import { constactParagraph, contactLink, contactLinkContainer } from './Contact.css';

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
    <section id="contact">
      <SectionTitle title="Contact" />
        <p className={constactParagraph}>
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