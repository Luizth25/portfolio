import { Check, Copy, EnvelopeSimple, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import { useState } from 'react';
import SectionTitle from "../SectionTitle";
import {
  contactActions,
  contactCard,
  contactGrid,
  contactLink,
  contactLinkContainer,
  contactParagraph,
  copyButton,
} from './Contact.css';

const email = "luizftp25@gmail.com";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const Icons = [
    {
      icon: <EnvelopeSimple size={38} />,
      link: `mailto:${email}`,
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

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className={contactGrid}>
      <div>
        <SectionTitle title="Contato" />
        <p className={contactParagraph}>
          Quer conversar sobre uma oportunidade, projeto front-end ou uma ideia envolvendo
          interfaces, Design Systems e automações com IA? Me chama pelos meus canais.
        </p>
      </div>
      <div className={contactCard}>
        <div className={contactActions}>
          <a className={contactLink} href={`mailto:${email}`}>
            <EnvelopeSimple size={24} />
            Enviar e-mail
          </a>
          <button className={copyButton} type="button" onClick={copyEmail}>
            {copied ? <Check size={22} /> : <Copy size={22} />}
            {copied ? "E-mail copiado" : "Copiar e-mail"}
          </button>
        </div>
        <div className={contactLinkContainer}>
          {Icons.slice(1).map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={contactLink}
              aria-label={`Abrir ${item.label} de Luiz Felipe`}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
