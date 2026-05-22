import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { mockProjects } from "../../../public/mock/projects";
import SectionTitle from "../SectionTitle";
import {
  carouselButton,
  carouselButtonNext,
  carouselButtonPrevious,
  carouselEnd,
  carouselShell,
  carouselStart,
  projectBadge,
  projectCard,
  projectContent,
  projectDescription,
  projectHighlights,
  projectImage,
  projectImageWrap,
  projectLink,
  projectStack,
  projectStackItem,
  projectsContainer,
  projectsIntro,
  projectsSection,
  projectTitle,
} from "./MyProjects.css";


const MyProjects = () => { 
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateCarouselEdges = () => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    setAtStart(carousel.scrollLeft <= 4);
    setAtEnd(carousel.scrollLeft >= maxScrollLeft - 4);
  };

  useEffect(() => {
    updateCarouselEdges();
    window.addEventListener("resize", updateCarouselEdges);

    return () => {
      window.removeEventListener("resize", updateCarouselEdges);
    };
  }, []);

  const scrollProjects = (direction: "previous" | "next") => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const cardWidth = carousel.querySelector("article")?.clientWidth ?? 360;
    const gap = 16;
    const scrollAmount = direction === "next" ? cardWidth + gap : -(cardWidth + gap);

    carousel.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const startDragging = (event: PointerEvent<HTMLDivElement>) => {
    const carousel = carouselRef.current;
    const target = event.target as HTMLElement;

    if (!carousel || target.closest("a, button")) {
      return;
    }

    isDraggingRef.current = true;
    startXRef.current = event.clientX;
    scrollLeftRef.current = carousel.scrollLeft;
    carousel.setPointerCapture(event.pointerId);
  };

  const dragProjects = (event: PointerEvent<HTMLDivElement>) => {
    const carousel = carouselRef.current;

    if (!carousel || !isDraggingRef.current) {
      return;
    }

    const distance = event.clientX - startXRef.current;

    carousel.scrollLeft = scrollLeftRef.current - distance;
    updateCarouselEdges();
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    isDraggingRef.current = false;

    if (carousel.hasPointerCapture(event.pointerId)) {
      carousel.releasePointerCapture(event.pointerId);
    }

    updateCarouselEdges();
  };

  return (
    <section id="myProjects" className={projectsSection}>
      <div>
        <SectionTitle title="Meus Projetos" />
        <p className={projectsIntro}>
          Alguns projetos que mostram prática com SPAs, consumo de APIs, interfaces responsivas,
          componentização e experiências web com foco em produto.
        </p>
      </div>
      <div className={`${carouselShell} ${atStart ? carouselStart : ""} ${atEnd ? carouselEnd : ""}`}>
        <button
          className={`${carouselButton} ${carouselButtonPrevious}`}
          type="button"
          aria-label="Ver projetos anteriores"
          disabled={atStart}
          onClick={() => scrollProjects("previous")}
        >
          <CaretLeft size={24} />
        </button>
        <button
          className={`${carouselButton} ${carouselButtonNext}`}
          type="button"
          aria-label="Ver próximos projetos"
          disabled={atEnd}
          onClick={() => scrollProjects("next")}
        >
          <CaretRight size={24} />
        </button>
        <div
          className={projectsContainer}
          ref={carouselRef}
          onPointerDown={startDragging}
          onPointerMove={dragProjects}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
          onPointerLeave={stopDragging}
          onScroll={updateCarouselEdges}
        >
          {mockProjects.map((project) => (
            <article key={project.id} className={projectCard}>
              <div className={projectImageWrap}>
                <img
                  src={project.Image}
                  alt={`Preview do projeto ${project.name}`}
                  className={projectImage}
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <div className={projectContent}>
                <span className={projectBadge}>{project.category}</span>
                <h3 className={projectTitle}>{project.name}</h3>
                <p className={projectDescription}>{project.description}</p>
                <ul className={projectHighlights}>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className={projectStack}>
                  {project.stack.map((tech) => (
                    <span className={projectStackItem} key={tech}>{tech}</span>
                  ))}
                </div>
                <a
                  className={projectLink}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir demo do projeto ${project.name}`}
                >
                  Ver demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default MyProjects;
