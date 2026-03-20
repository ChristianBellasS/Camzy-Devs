import {
  FaArrowRight,
  FaCode,
  FaCloud,
  FaBolt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaUsers,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaPlay,
  FaEye,
  FaChartLine,
  FaCheck,
  FaHeart,
  FaEnvelope,
  FaWhatsapp,
  FaReact,
  FaNode,
  FaPython,
  FaAws,
  FaDocker,
  FaGoogle,
  FaMicrosoft,
  FaJava,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaImage,
  FaRobot,
  FaBrain,
  FaMobile,
  FaArrowUp,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiTensorflow,
  SiPytorch,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiGraphql,
  SiGo,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { useEffect, useRef, useState } from "react";
import "./HomePage.css";

type Project = {
  id: number;
  number: string;
  icon: IconType;
  title: string;
  description: string;
  tags: string[];
  stats: string;
  images: string[];
};

export default function HomePage() {
  const [counts, setCounts] = useState({
    proyectos: 0,
    expertos: 0,
    clientes: 0,
  });

  const statsRef = useRef<HTMLDivElement>(null);

  const [terminalText, setTerminalText] = useState<string[]>([
    "<span class='camzy-terminal__prompt'>$</span> npm create camzy-app",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [terminalIndex, setTerminalIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      number: "01",
      icon: FaServer,
      title: "Fintech App",
      description:
        "Plataforma de pagos con +100k usuarios. Arquitectura serverless en AWS que procesa millones de transacciones.",
      tags: ["AWS", "Serverless", "React"],
      stats: "99.9% uptime",
      images: [
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: 2,
      number: "02",
      icon: FaBolt,
      title: "IA para E-commerce",
      description:
        "Sistema de recomendaciones que aumentó ventas un 40% mediante machine learning y análisis predictivo.",
      tags: ["Python", "TensorFlow", "ML"],
      stats: "+40% ventas",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: 3,
      number: "03",
      icon: FaShieldAlt,
      title: "Healthcare Platform",
      description:
        "Telemedicina con encriptación end-to-end, cumplimiento HIPAA y más de 10k consultas mensuales.",
      tags: ["Node", "MongoDB", "Security"],
      stats: "HIPAA compliant",
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: 4,
      number: "04",
      icon: FaChartLine,
      title: "Smart Logistics",
      description:
        "Optimización de rutas con IA reduciendo costos operativos un 25% y mejorando tiempos de entrega.",
      tags: ["Go", "AI", "Real-time"],
      stats: "-25% costos",
      images: [
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: 5,
      number: "05",
      icon: FaRobot,
      title: "Chatbot Inteligente",
      description:
        "Asistente virtual con NLP para atención al cliente 24/7. Reduce tiempos de respuesta en un 80%.",
      tags: ["Python", "NLP", "IA"],
      stats: "80% faster",
      images: [
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: 6,
      number: "06",
      icon: FaMobile,
      title: "App de Delivery",
      description:
        "Plataforma multi-plataforma para delivery con seguimiento en tiempo real y pagos integrados.",
      tags: ["React Native", "Node", "Maps"],
      stats: "+50k descargas",
      images: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: 7,
      number: "07",
      icon: FaBrain,
      title: "Sistema de Visión Artificial",
      description:
        "Reconocimiento de objetos en tiempo real para control de calidad en fábricas.",
      tags: ["Python", "OpenCV", "TensorFlow"],
      stats: "99% precisión",
      images: [
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: 8,
      number: "08",
      icon: FaCloud,
      title: "Plataforma IoT",
      description:
        "Sistema de monitoreo industrial con sensores IoT y análisis predictivo de mantenimiento.",
      tags: ["AWS IoT", "Python", "MQTT"],
      stats: "-40% fallos",
      images: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
  ];

  const handleContact = () => {
    window.location.href = "mailto:camzy.techx@gmail.com";
  };

  const handleWhatsApp = () => {
    const phone = "51944830496";
    const message =
      "👋 ¡Hola! Estoy interesado en sus servicios tecnológicos 🚀💻 ¿Podrían compartirme más información y asesorarme?";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const toggleProjects = () => {
    setShowAllProjects((prev) => !prev);
  };

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 4);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        proyectos: Math.floor(8 * progress),
        expertos: Math.floor(3 * progress),
        clientes: Math.floor(20 * progress),
      });

      if (step >= steps) {
        setCounts({ proyectos: 8, expertos: 3, clientes: 20 });
        clearInterval(timer);
      }
    }, interval);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const lines = [
      "<span class='camzy-terminal__prompt'>$</span> npm create camzy-app",
      "<span class='camzy-terminal__output'>✓</span> Proyecto inicializado",
      "<span class='camzy-terminal__prompt'>$</span> git push origin main",
      "<span class='camzy-terminal__output'>✓</span> Despliegue exitoso",
      "<span class='camzy-terminal__prompt'>$</span> ls proyectos/",
      `<span class='camzy-terminal__output'>${projects.length}+ proyectos completados</span>`,
    ];

    if (terminalIndex < lines.length) {
      const timer = setTimeout(() => {
        if (charIndex < lines[terminalIndex].length) {
          setTerminalText((prev) => {
            const copy = [...prev];
            copy[terminalIndex] = lines[terminalIndex].substring(0, charIndex + 1);
            return copy;
          });
          setCharIndex((prev) => prev + 1);
        } else {
          setTerminalIndex((prev) => prev + 1);
          setCharIndex(0);
        }
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [terminalIndex, charIndex, projects.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, selectedProject]);

  return (
    <main className="camzy-landing">
      <div className="camzy-bg" aria-hidden="true">
        <div className="camzy-grid"></div>
        <div className="camzy-particles"></div>
        <div className="camzy-glow camzy-glow--magenta"></div>
        <div className="camzy-glow camzy-glow--cyan"></div>
        <div className="camzy-scanlines"></div>
      </div>

      <header className="camzy-header">
        <div className="camzy-header__container">
          <div className="camzy-logo">
            <img src={`${import.meta.env.BASE_URL}logo/Camzy.png`} alt="CAMZY Logo" className="camzy-logo__image" />
            <span className="camzy-logo__text">CAMZY</span>
            <span className="camzy-logo__cursor">_</span>
          </div>

          <button className="camzy-btn camzy-btn--outline" onClick={handleContact}>
            <FaEnvelope /> HABLEMOS
          </button>

          <div 
            className={`camzy-menu-toggle ${menuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`camzy-nav ${menuOpen ? 'open' : ''}`}>
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("inicio");
              }}
              className="camzy-nav__link"
            >
              INICIO
            </a>
            <a
              href="#servicios"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("servicios");
              }}
              className="camzy-nav__link"
            >
              SERVICIOS
            </a>
            <a
              href="#proyectos"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("proyectos");
              }}
              className="camzy-nav__link"
            >
              PROYECTOS
            </a>
            <a
              href="#equipo"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("equipo");
              }}
              className="camzy-nav__link"
            >
              EQUIPO
            </a>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("contacto");
              }}
              className="camzy-nav__link"
            >
              CONTACTO
            </a>
          </nav>
        </div>
      </header>

      <section className="camzy-hero" id="inicio">
        <div className="camzy-hero__content">
          <div className="camzy-tagline">
            <span className="camzy-tagline__line"></span>
            <span className="camzy-tagline__text">FULL-STACK · CLOUD · IA</span>
            <span className="camzy-tagline__line"></span>
          </div>

          <h1 className="camzy-hero__title">
            TECNOLOGÍA
            <span className="camzy-hero__title--outline"> SIN LÍMITES</span>
          </h1>

          <p className="camzy-hero__description">
            Desarrollamos soluciones digitales que rompen esquemas. Arquitectura
            cloud, inteligencia artificial y desarrollo a medida para empresas que
            quieren liderar.
          </p>

          <div className="camzy-hero__actions">
            <button className="camzy-btn camzy-btn--primary" onClick={handleContact}>
              HABLEMOS <FaArrowRight />
            </button>
            <button
              className="camzy-btn camzy-btn--secondary"
              onClick={() => handleScroll("proyectos")}
            >
              <FaPlay /> VER PROYECTOS
            </button>
          </div>

          <div className="camzy-stats" ref={statsRef}>
            <div className="camzy-stats__item">
              <span className="camzy-stats__number">{counts.proyectos}+</span>
              <span className="camzy-stats__label">Proyectos</span>
              <div
                className="camzy-stats__bar"
                style={{ width: `${(counts.proyectos / 8) * 100}%` }}
              ></div>
            </div>

            <div className="camzy-stats__item">
              <span className="camzy-stats__number">{counts.expertos}+</span>
              <span className="camzy-stats__label">Expertos</span>
              <div
                className="camzy-stats__bar"
                style={{ width: `${(counts.expertos / 3) * 100}%` }}
              ></div>
            </div>

            <div className="camzy-stats__item">
              <span className="camzy-stats__number">{counts.clientes}+</span>
              <span className="camzy-stats__label">Tecnologías</span>
              <div
                className="camzy-stats__bar"
                style={{ width: `${(counts.clientes / 20) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="camzy-hero__visual">
          <div className="camzy-terminal">
            <div className="camzy-terminal__header">
              <span className="camzy-terminal__dot camzy-terminal__dot--red"></span>
              <span className="camzy-terminal__dot camzy-terminal__dot--yellow"></span>
              <span className="camzy-terminal__dot camzy-terminal__dot--green"></span>
              <span className="camzy-terminal__title">camzy@dev:~</span>
            </div>

            <div className="camzy-terminal__body">
              {terminalText.map((line, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: line }} />
              ))}
              {terminalIndex < 6 && <span className="camzy-terminal__cursor">█</span>}
            </div>
          </div>
        </div>
      </section>

      <section className="camzy-services" id="servicios">
        <div className="camzy-section-header">
          <h2 className="camzy-section-title">
            <span className="camzy-section-title__bracket">{"<"}</span>
            SERVICIOS
            <span className="camzy-section-title__bracket">{"/>"}</span>
          </h2>
          <p className="camzy-section-subtitle">
            Lo que hacemos, y lo hacemos espectacular.
          </p>
        </div>

        <div className="camzy-services__grid">
          <div className="camzy-service">
            <div className="camzy-service__icon">
              <FaCode />
            </div>
            <h3>Desarrollo Full-Stack</h3>
            <p>
              React, Node, Python, Go. Aplicaciones web y móviles escalables desde
              el día cero.
            </p>
          </div>

          <div className="camzy-service">
            <div className="camzy-service__icon">
              <FaCloud />
            </div>
            <h3>Cloud & DevOps</h3>
            <p>
              AWS, Azure, GCP. Infraestructura como código, CI/CD y microservicios.
            </p>
          </div>

          <div className="camzy-service">
            <div className="camzy-service__icon">
              <FaBolt />
            </div>
            <h3>Inteligencia Artificial</h3>
            <p>
              Modelos de IA, machine learning y automatización inteligente para tu
              negocio.
            </p>
          </div>

          <div className="camzy-service">
            <div className="camzy-service__icon">
              <FaShieldAlt />
            </div>
            <h3>Ciberseguridad</h3>
            <p>Auditorías, pentesting y protección de datos. Tu código a salvo.</p>
          </div>

          <div className="camzy-service">
            <div className="camzy-service__icon">
              <FaDatabase />
            </div>
            <h3>Big Data</h3>
            <p>Análisis de datos a escala. Transformamos datos en decisiones.</p>
          </div>

          <div className="camzy-service">
            <div className="camzy-service__icon">
              <FaServer />
            </div>
            <h3>Arquitectura</h3>
            <p>Diseño de sistemas escalables y de alto rendimiento.</p>
          </div>
        </div>
      </section>

      <section className="camzy-tech-banner">
        <div className="camzy-tech-banner__content">
          <h2>TECNOLOGÍAS QUE DOMINAMOS</h2>

          <div className="camzy-tech-groups">
            <div className="camzy-tech-group">
              <h3>Frontend</h3>
              <div className="camzy-tech-items">
                <span>
                  <FaReact /> React
                </span>
                <span>
                  <FaCode /> Vue
                </span>
                <span>
                  <FaCode /> Angular
                </span>
                <span>
                  <SiTypescript /> TypeScript
                </span>
              </div>
            </div>

            <div className="camzy-tech-group">
              <h3>Backend</h3>
              <div className="camzy-tech-items">
                <span>
                  <FaNode /> Node.js
                </span>
                <span>
                  <FaPython /> Python
                </span>
                <span>
                  <SiGo /> Go
                </span>
                <span>
                  <FaJava /> Java
                </span>
              </div>
            </div>

            <div className="camzy-tech-group">
              <h3>Cloud & DevOps</h3>
              <div className="camzy-tech-items">
                <span>
                  <FaAws /> AWS
                </span>
                <span>
                  <FaMicrosoft /> Azure
                </span>
                <span>
                  <FaGoogle /> GCP
                </span>
                <span>
                  <FaDocker /> Docker
                </span>
                <span>
                  <SiKubernetes /> K8s
                </span>
              </div>
            </div>

            <div className="camzy-tech-group">
              <h3>Bases de Datos</h3>
              <div className="camzy-tech-items">
                <span>
                  <SiMongodb /> MongoDB
                </span>
                <span>
                  <SiPostgresql /> PostgreSQL
                </span>
                <span>
                  <FaDatabase /> MySQL
                </span>
                <span>
                  <FaDatabase /> Redis
                </span>
              </div>
            </div>

            <div className="camzy-tech-group">
              <h3>IA & ML</h3>
              <div className="camzy-tech-items">
                <span>
                  <SiTensorflow /> TensorFlow
                </span>
                <span>
                  <SiPytorch /> PyTorch
                </span>
                <span>
                  <FaBolt /> Scikit-learn
                </span>
              </div>
            </div>

            <div className="camzy-tech-group">
              <h3>Otros</h3>
              <div className="camzy-tech-items">
                <span>
                  <SiGraphql /> GraphQL
                </span>
                <span>
                  <FaCode /> REST API
                </span>
                <span>
                  <FaShieldAlt /> Seguridad
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="camzy-projects" id="proyectos">
        <div className="camzy-section-header">
          <h2 className="camzy-section-title">
            <span className="camzy-section-title__bracket">{"{"}</span>
            PROYECTOS
            <span className="camzy-section-title__bracket">{"}"}</span>
          </h2>
          <p className="camzy-section-subtitle">
            {showAllProjects
              ? "Todos nuestros proyectos"
              : "Proyectos que transformaron negocios"}
          </p>
        </div>

        <div className="camzy-projects__grid">
          {visibleProjects.map((project) => (
            <div key={project.id} className="camzy-project">
              <div className="camzy-project__number">{project.number}</div>
              <div className="camzy-project__icon">
                <project.icon />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="camzy-project__tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="camzy-project__tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="camzy-project__stats">
                <FaCheck /> {project.stats}
              </div>

              <button
                className="camzy-project__button"
                onClick={() => openProjectModal(project)}
              >
                Ver proyecto <FaEye />
              </button>
            </div>
          ))}
        </div>

        <div className="camzy-projects__more">
          <button className="camzy-btn camzy-btn--primary" onClick={toggleProjects}>
            {showAllProjects ? "VER MENOS PROYECTOS" : "VER TODOS LOS PROYECTOS"}{" "}
            <FaArrowRight />
          </button>
        </div>

        <div className="camzy-projects__counter">
          Mostrando {visibleProjects.length} de {projects.length} proyectos
        </div>
      </section>

      <section className="camzy-team" id="equipo">
        <div className="camzy-section-header">
          <h2 className="camzy-section-title">
            <span className="camzy-section-title__bracket">{"("}</span>
            EQUIPO
            <span className="camzy-section-title__bracket">{")"}</span>
          </h2>
          <p className="camzy-section-subtitle">Los cerebros detrás del código</p>
        </div>

        <div className="camzy-team__grid">
          <div className="camzy-team__member">
            <div className="camzy-team__image-container">
              <img
                src={`${import.meta.env.BASE_URL}equipo/Luis Arroyo.png`}
                alt="Luis Arroyo"
                className="camzy-team__image"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/300x300/1A1A1A/FF00FF?text=LUIS";
                }}
              />
            </div>
            <h3>Luis Arroyo</h3>
            <p className="camzy-team__role">Backend Developer & IA</p>
            <p className="camzy-team__bio">
              Especialista en backend, APIs escalables y soluciones con inteligencia
              artificial.
            </p>
            <div className="camzy-team__social">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/luis-arroyo-/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="camzy-team__member">
            <div className="camzy-team__image-container">
              <img
                src={`${import.meta.env.BASE_URL}equipo/Christian Bellasmil.jpeg`}
                alt="Christian Bellasmil"
                className="camzy-team__image"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/300x300/1A1A1A/00FFFF?text=CHRISTIAN";
                }}
              />
            </div>
            <h3>Christian Bellasmil</h3>
            <p className="camzy-team__role">Frontend Developer & UI/UX</p>
            <p className="camzy-team__bio">
              Especialista en interfaces modernas, experiencia de usuario y
              aplicaciones responsivas.
            </p>
            <div className="camzy-team__social">
              <a
                href="https://github.com/ChristianBellasS"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/christianbellasmil"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="camzy-team__member">
            <div className="camzy-team__image-container">
              <img
                src={`${import.meta.env.BASE_URL}equipo/AlexisChaname.jpeg`}
                alt="Alexis Chaname"
                className="camzy-team__image"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/300x300/1A1A1A/FF00FF?text=ALEXIS";
                }}
              />
            </div>
            <h3>Alexis Chanamé</h3>
            <p className="camzy-team__role">Software Architect & System Design</p>
            <p className="camzy-team__bio">
              Especialista en diseño de sistemas escalables y definición de arquitecturas modernas.
            </p>
            <div className="camzy-team__social">
              <a
                href="https://github.com/AlexD-13/"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/alexis-chaname/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="camzy-team__member">
            <div className="camzy-team__image-container">
              <img
                src={`${import.meta.env.BASE_URL}equipo/Alejandro Purizaca.jpeg`}
                alt="Alejandro Purizaca"
                className="camzy-team__image"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/300x300/1A1A1A/FF00FF?text=ALEJANDRO";
                }}
              />
            </div>
            <h3>Alejandro Purizaca</h3>
            <p className="camzy-team__role">DevOps & Cloud Security</p>
            <p className="camzy-team__bio">
              Especialista en infraestructura, automatización y seguridad en la nube.
            </p>
            <div className="camzy-team__social">
              <a
                href="https://github.com/AlesisxHz-afk/"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/alejandro.purizaca.374130/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

        </div>

        <div className="camzy-team__badge">
          <FaUsers /> +4 talentos en expansión
        </div>
      </section>

      <section className="camzy-contact" id="contacto">
        <div className="camzy-section-header">
          <h2 className="camzy-section-title">
            <span className="camzy-section-title__bracket">{"["}</span>
            CONTACTO
            <span className="camzy-section-title__bracket">{"]"}</span>
          </h2>
          <p className="camzy-section-subtitle">
            Conecta con nosotros de la forma que prefieras
          </p>
        </div>

        <div className="camzy-contact__container">
          <div className="camzy-contact__info-centered">
            <h3>¿Listo para innovar?</h3>
            <p className="camzy-contact__description">
              Estamos a un mensaje de distancia para transformar tu idea en
              realidad. Elige el canal que prefieras y hablemos de tu próximo
              proyecto tecnológico.
            </p>

            <div className="camzy-contact__cta">
              <button
                className="camzy-btn camzy-btn--primary camzy-btn--large"
                onClick={handleContact}
              >
                <FaEnvelope /> CONTACTAR POR CORREO
              </button>
              <button
                className="camzy-btn camzy-btn--whatsapp camzy-btn--large"
                onClick={handleWhatsApp}
              >
                <FaWhatsapp /> ESCRIBIR POR WHATSAPP
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="camzy-footer">
        <div className="camzy-footer__main">
          <div className="camzy-footer__brand">
            <div className="camzy-logo camzy-logo--footer">
              <span className="camzy-logo__text">CAMZY</span>
              <span className="camzy-logo__cursor">_</span>
            </div>
            <p>Innovación tecnológica sin límites.</p>

            <div className="camzy-social">
              <a href="#" className="camzy-social__link">
                <FaGithub />
              </a>
              <a href="#" className="camzy-social__link">
                <FaLinkedin />
              </a>
              <a href="#" className="camzy-social__link">
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="camzy-footer__links">
            <div>
              <h4>SOLUCIONES</h4>
              <ul>
                <li>
                  <a href="#">Desarrollo Web</a>
                </li>
                <li>
                  <a href="#">Cloud Computing</a>
                </li>
                <li>
                  <a href="#">Inteligencia Artificial</a>
                </li>
                <li>
                  <a href="#">Ciberseguridad</a>
                </li>
              </ul>
            </div>

            <div>
              <h4>EMPRESA</h4>
              <ul>
                <li>
                  <a href="#equipo">Sobre Nosotros</a>
                </li>
                <li>
                  <a href="#proyectos">Proyectos</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#contacto">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="camzy-footer__bottom">
          <p>© 2026 CAMZY Tech. Todos los derechos reservados.</p>
          <div className="camzy-footer__badge">
            <FaHeart /> Made with love in Perú
          </div>
        </div>
      </footer>

      <div className="camzy-floating-btn" onClick={handleContact}>
        <button className="camzy-floating-btn__inner">
          <FaEnvelope />
          <span className="camzy-floating-btn__tooltip">¿Hablamos?</span>
        </button>
      </div>

      <div
        className="camzy-scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowUp />
      </div>

      {isModalOpen && selectedProject && (
        <div className="camzy-modal" onClick={closeModal}>
          <div className="camzy-modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="camzy-modal__close" onClick={closeModal}>
              <FaTimes />
            </button>

            <div className="camzy-modal__gallery">
              <div className="camzy-modal__image-container">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - Imagen ${currentImageIndex + 1}`}
                  className="camzy-modal__image"
                />

                <button
                  className="camzy-modal__nav camzy-modal__nav--prev"
                  onClick={prevImage}
                >
                  <FaChevronLeft />
                </button>

                <button
                  className="camzy-modal__nav camzy-modal__nav--next"
                  onClick={nextImage}
                >
                  <FaChevronRight />
                </button>
              </div>

              <div className="camzy-modal__info">
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.description}</p>

                <div className="camzy-modal__tags">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className="camzy-modal__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="camzy-modal__stats">
                  <FaCheck /> {selectedProject.stats}
                </div>

                <div className="camzy-modal__counter">
                  <FaImage /> {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>
            </div>

            <div className="camzy-modal__thumbnails">
              {selectedProject.images.map((img, index) => (
                <div
                  key={index}
                  className={`camzy-modal__thumbnail ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}