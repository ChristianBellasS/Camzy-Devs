import {
  FaArrowRight,
  FaCode,
  FaCloud,
  FaBolt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaRecycle,
  FaUsers,
  FaServer,
  FaDatabase,
  FaFingerprint,
  FaShieldAlt,
  FaPlay,
  FaEye,
  FaChartLine,
  FaCheck,
  FaTruck,
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
  FaSun,
  FaMoon,
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

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  const statsRef = useRef<HTMLDivElement>(null);

  const [terminalText, setTerminalText] = useState<string[]>([
    "<span class='kamzy-terminal__prompt'>$</span> npm create kamzy-app",
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

  // Logo según el tema
  const logoSrc = theme === "light" 
    ? `${import.meta.env.BASE_URL}logo/Kamzy1.png`
    : `${import.meta.env.BASE_URL}logo/Kamzy.png`;

  const projects: Project[] = [
    {
      id: 1,
      number: "01",
      icon: FaTruck,
      title: "Sistema Inteligente de Planificación Logística - Empresa de Transportes",
      description:
        "Sistema desarrollado para optimizar la gestión logística de una empresa de transportes mediante el análisis de datos, planificación de rutas y apoyo en la toma de decisiones operativas, contribuyendo a mejorar tiempos de entrega y eficiencia del servicio.",
      tags: ["Python", "Flask", "PostgreSQL"],
      stats: "Mejora en planificación",
      images: [
        `${import.meta.env.BASE_URL}sistema_logistica/logistica_login.png`,
        `${import.meta.env.BASE_URL}sistema_logistica/logistica_registro.png`,
        `${import.meta.env.BASE_URL}sistema_logistica/logistica_roles.png`,
        `${import.meta.env.BASE_URL}sistema_logistica/logistica_permisos.png`,
        `${import.meta.env.BASE_URL}sistema_logistica/logistica_almacenes.png`,
        `${import.meta.env.BASE_URL}sistema_logistica/logistica_crear_almacen.png`,
        `${import.meta.env.BASE_URL}sistema_logistica/logistica_prediccion.png`,
        `${import.meta.env.BASE_URL}sistema_logistica/logistica_asignacion.png`,
        `${import.meta.env.BASE_URL}sistema_logistica/logistica_planificacion.png`,
      ],
    },
    {
      id: 2,
      number: "02",
      icon: FaFingerprint,
      title: "Sistema para Control de Asistencias con Reconocimiento Facial",
      description:
        "Sistema desarrollado para automatizar el registro y control de asistencias mediante reconocimiento facial, permitiendo una identificación rápida, mayor precisión en el seguimiento de asistencia y una mejor gestión de la información.",
      tags: ["Python", "OpenCV", "Reconocimiento Facial"],
      stats: "Registro automatizado",
      images: [
        `${import.meta.env.BASE_URL}sistema_asistencias/asistencia_login.png`,
        `${import.meta.env.BASE_URL}sistema_asistencias/asistencia_personal.png`,
        `${import.meta.env.BASE_URL}sistema_asistencias/asistencia_registro_personal.png`,
        `${import.meta.env.BASE_URL}sistema_asistencias/asistencia_reconocimiento.png`,
        `${import.meta.env.BASE_URL}sistema_asistencias/asistencia_camara.png`,
        `${import.meta.env.BASE_URL}sistema_asistencias/asistencia_gestion.png`,
        `${import.meta.env.BASE_URL}sistema_asistencias/asistencia_editar_usuario.png`,
        `${import.meta.env.BASE_URL}sistema_asistencias/asistencia_camara_habilitada.png`,
        `${import.meta.env.BASE_URL}sistema_asistencias/asistencia_test_correcto.png`,
        `${import.meta.env.BASE_URL}sistema_asistencias/asistencia_test_correcto2.png`,
      ],
    },
    {
      id: 3,
      number: "03",
      icon: FaRecycle,
      title: "Sistema de Programación de Recojo de Residuos Sólidos",
      description:
        "Sistema web desarrollado para la municipalidad con el fin de optimizar la programación del recojo de residuos sólidos, permitiendo una mejor planificación de rutas, control del servicio y seguimiento de las operaciones de limpieza pública.",
      tags: ["PHP", "Laravel", "MySQL"],
      stats: "Limpieza pública",
      images: [
        `${import.meta.env.BASE_URL}sistema_municipalidad/municipalidad_login.png`,
        `${import.meta.env.BASE_URL}sistema_municipalidad/municipalidad_inicio.png`,
        `${import.meta.env.BASE_URL}sistema_municipalidad/municipalidad_colores.png`,
        `${import.meta.env.BASE_URL}sistema_municipalidad/municipalidad_marcas.png`,
        `${import.meta.env.BASE_URL}sistema_municipalidad/municipalidad_tipos_vehiculos.png`,
        `${import.meta.env.BASE_URL}sistema_municipalidad/municipalidad_marcas.png`,
        `${import.meta.env.BASE_URL}sistema_municipalidad/municipalidad_vehiculos.png`,
        `${import.meta.env.BASE_URL}sistema_municipalidad/municipalidad_imagenes.png`,
        `${import.meta.env.BASE_URL}sistema_municipalidad/municipalidad_mantenimientos.png`,
        `${import.meta.env.BASE_URL}sistema_municipalidad/municipalidad_tipo_personal.png`,
        `${import.meta.env.BASE_URL}sistema_municipalidad/municipalidad_personal.png`,
        `${import.meta.env.BASE_URL}sistema_municipalidad/municipalidad_contratos.png`,
        `${import.meta.env.BASE_URL}sistema_municipalidad/municipalidad_asistencias.png`,
        `${import.meta.env.BASE_URL}sistema_municipalidad/municipalidad_turnos.png`,
        `${import.meta.env.BASE_URL}sistema_municipalidad/municipalidad_zonas.png`,
        `${import.meta.env.BASE_URL}sistema_municipalidad/municipalidad_feriados.png`,
        `${import.meta.env.BASE_URL}sistema_municipalidad/municipalidad_grupos_personal.png`,
        `${import.meta.env.BASE_URL}sistema_municipalidad/municipalidad_programaciones.png`,
        `${import.meta.env.BASE_URL}sistema_municipalidad/municipalidad_dashboard.png`,
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

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleContact = () => {
    window.location.href = "mailto:kamzy.techx@gmail.com";
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
      "<span class='kamzy-terminal__prompt'>$</span> npm create kamzy-app",
      "<span class='kamzy-terminal__output'>✓</span> Proyecto inicializado",
      "<span class='kamzy-terminal__prompt'>$</span> git push origin main",
      "<span class='kamzy-terminal__output'>✓</span> Despliegue exitoso",
      "<span class='kamzy-terminal__prompt'>$</span> ls proyectos/",
      `<span class='kamzy-terminal__output'>${projects.length}+ proyectos completados</span>`,
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
    <main className="kamzy-landing" data-theme={theme}>
      <div className="kamzy-bg" aria-hidden="true">
        <div className="kamzy-grid"></div>
        <div className="kamzy-particles"></div>
        <div className="kamzy-glow kamzy-glow--accent"></div>
        <div className="kamzy-glow kamzy-glow--light"></div>
        <div className="kamzy-scanlines"></div>
      </div>

      <header className="kamzy-header">
        <div className="kamzy-header__container">
          <div className="kamzy-logo">
            <img src={logoSrc} alt="KAMZY Logo" className="kamzy-logo__image" />
            <span className="kamzy-logo__text">KAMZY</span>
            <span className="kamzy-logo__cursor">_</span>
          </div>

          <button className="kamzy-theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

          <button className="kamzy-btn kamzy-btn--outline" onClick={handleContact}>
            <FaEnvelope /> HABLEMOS
          </button>

          <div 
            className={`kamzy-menu-toggle ${menuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`kamzy-nav ${menuOpen ? 'open' : ''}`}>
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("inicio");
              }}
              className="kamzy-nav__link"
            >
              INICIO
            </a>
            <a
              href="#servicios"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("servicios");
              }}
              className="kamzy-nav__link"
            >
              SERVICIOS
            </a>
            <a
              href="#proyectos"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("proyectos");
              }}
              className="kamzy-nav__link"
            >
              PROYECTOS
            </a>
            <a
              href="#equipo"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("equipo");
              }}
              className="kamzy-nav__link"
            >
              EQUIPO
            </a>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("contacto");
              }}
              className="kamzy-nav__link"
            >
              CONTACTO
            </a>
          </nav>
        </div>
      </header>

      <section className="kamzy-hero" id="inicio">
        <div className="kamzy-hero__content">
          <div className="kamzy-tagline">
            <span className="kamzy-tagline__line"></span>
            <span className="kamzy-tagline__text">FULL-STACK · CLOUD · IA</span>
            <span className="kamzy-tagline__line"></span>
          </div>

          <h1 className="kamzy-hero__title">
            TECNOLOGÍA
            <span className="kamzy-hero__title--outline"> SIN LÍMITES</span>
          </h1>

          <p className="kamzy-hero__description">
            Desarrollamos soluciones digitales que rompen esquemas. Arquitectura
            cloud, inteligencia artificial y desarrollo a medida para empresas que
            quieren liderar.
          </p>

          <div className="kamzy-hero__actions">
            <button className="kamzy-btn kamzy-btn--primary" onClick={handleContact}>
              HABLEMOS <FaArrowRight />
            </button>
            <button
              className="kamzy-btn kamzy-btn--secondary"
              onClick={() => handleScroll("proyectos")}
            >
              <FaPlay /> VER PROYECTOS
            </button>
          </div>

          <div className="kamzy-stats" ref={statsRef}>
            <div className="kamzy-stats__item">
              <span className="kamzy-stats__number">{counts.proyectos}+</span>
              <span className="kamzy-stats__label">Proyectos</span>
              <div
                className="kamzy-stats__bar"
                style={{ width: `${(counts.proyectos / 8) * 100}%` }}
              ></div>
            </div>

            <div className="kamzy-stats__item">
              <span className="kamzy-stats__number">{counts.expertos}+</span>
              <span className="kamzy-stats__label">Expertos</span>
              <div
                className="kamzy-stats__bar"
                style={{ width: `${(counts.expertos / 3) * 100}%` }}
              ></div>
            </div>

            <div className="kamzy-stats__item">
              <span className="kamzy-stats__number">{counts.clientes}+</span>
              <span className="kamzy-stats__label">Tecnologías</span>
              <div
                className="kamzy-stats__bar"
                style={{ width: `${(counts.clientes / 20) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="kamzy-hero__visual">
          <div className="kamzy-terminal">
            <div className="kamzy-terminal__header">
              <span className="kamzy-terminal__dot kamzy-terminal__dot--red"></span>
              <span className="kamzy-terminal__dot kamzy-terminal__dot--yellow"></span>
              <span className="kamzy-terminal__dot kamzy-terminal__dot--green"></span>
              <span className="kamzy-terminal__title">kamzy@dev:~</span>
            </div>

            <div className="kamzy-terminal__body">
              {terminalText.map((line, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: line }} />
              ))}
              {terminalIndex < 6 && <span className="kamzy-terminal__cursor">█</span>}
            </div>
          </div>
        </div>
      </section>

      <section className="kamzy-services" id="servicios">
        <div className="kamzy-section-header">
          <h2 className="kamzy-section-title">
            <span className="kamzy-section-title__bracket">{"<"}</span>
            SERVICIOS
            <span className="kamzy-section-title__bracket">{"/>"}</span>
          </h2>
          <p className="kamzy-section-subtitle">
            Lo que hacemos, y lo hacemos espectacular.
          </p>
        </div>

        <div className="kamzy-services__grid">
          <div className="kamzy-service">
            <div className="kamzy-service__icon">
              <FaCode />
            </div>
            <h3>Desarrollo Full-Stack</h3>
            <p>
              React, Node, Python, Go. Aplicaciones web y móviles escalables desde
              el día cero.
            </p>
          </div>

          <div className="kamzy-service">
            <div className="kamzy-service__icon">
              <FaCloud />
            </div>
            <h3>Cloud & DevOps</h3>
            <p>
              AWS, Azure, GCP. Infraestructura como código, CI/CD y microservicios.
            </p>
          </div>

          <div className="kamzy-service">
            <div className="kamzy-service__icon">
              <FaBolt />
            </div>
            <h3>Inteligencia Artificial</h3>
            <p>
              Modelos de IA, machine learning y automatización inteligente para tu
              negocio.
            </p>
          </div>

          <div className="kamzy-service">
            <div className="kamzy-service__icon">
              <FaShieldAlt />
            </div>
            <h3>Ciberseguridad</h3>
            <p>Auditorías, pentesting y protección de datos. Tu código a salvo.</p>
          </div>

          <div className="kamzy-service">
            <div className="kamzy-service__icon">
              <FaDatabase />
            </div>
            <h3>Big Data</h3>
            <p>Análisis de datos a escala. Transformamos datos en decisiones.</p>
          </div>

          <div className="kamzy-service">
            <div className="kamzy-service__icon">
              <FaServer />
            </div>
            <h3>Arquitectura</h3>
            <p>Diseño de sistemas escalables y de alto rendimiento.</p>
          </div>
        </div>
      </section>

      <section className="kamzy-tech-banner">
        <div className="kamzy-tech-banner__content">
          <h2>TECNOLOGÍAS QUE DOMINAMOS</h2>

          <div className="kamzy-tech-groups">
            <div className="kamzy-tech-group">
              <h3>Frontend</h3>
              <div className="kamzy-tech-items">
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

            <div className="kamzy-tech-group">
              <h3>Backend</h3>
              <div className="kamzy-tech-items">
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

            <div className="kamzy-tech-group">
              <h3>Cloud & DevOps</h3>
              <div className="kamzy-tech-items">
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

            <div className="kamzy-tech-group">
              <h3>Bases de Datos</h3>
              <div className="kamzy-tech-items">
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

            <div className="kamzy-tech-group">
              <h3>IA & ML</h3>
              <div className="kamzy-tech-items">
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

            <div className="kamzy-tech-group">
              <h3>Otros</h3>
              <div className="kamzy-tech-items">
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

      <section className="kamzy-projects" id="proyectos">
        <div className="kamzy-section-header">
          <h2 className="kamzy-section-title">
            <span className="kamzy-section-title__bracket">{"{"}</span>
            PROYECTOS
            <span className="kamzy-section-title__bracket">{"}"}</span>
          </h2>
          <p className="kamzy-section-subtitle">
            {showAllProjects
              ? "Todos nuestros proyectos"
              : "Proyectos que transformaron negocios"}
          </p>
        </div>

        <div className="kamzy-projects__grid">
          {visibleProjects.map((project) => (
            <div key={project.id} className="kamzy-project">
              <div className="kamzy-project__number">{project.number}</div>
              <div className="kamzy-project__icon">
                <project.icon />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="kamzy-project__tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="kamzy-project__tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="kamzy-project__stats">
                <FaCheck /> {project.stats}
              </div>

              <button
                className="kamzy-project__button"
                onClick={() => openProjectModal(project)}
              >
                Ver proyecto <FaEye />
              </button>
            </div>
          ))}
        </div>

        <div className="kamzy-projects__more">
          <button className="kamzy-btn kamzy-btn--primary" onClick={toggleProjects}>
            {showAllProjects ? "VER MENOS PROYECTOS" : "VER TODOS LOS PROYECTOS"}{" "}
            <FaArrowRight />
          </button>
        </div>

        <div className="kamzy-projects__counter">
          Mostrando {visibleProjects.length} de {projects.length} proyectos
        </div>
      </section>

      <section className="kamzy-team" id="equipo">
        <div className="kamzy-section-header">
          <h2 className="kamzy-section-title">
            <span className="kamzy-section-title__bracket">{"("}</span>
            EQUIPO
            <span className="kamzy-section-title__bracket">{")"}</span>
          </h2>
          <p className="kamzy-section-subtitle">Los cerebros detrás del código</p>
        </div>

        <div className="kamzy-team__grid">
          <div className="kamzy-team__member">
            <div className="kamzy-team__image-container">
              <img
                src={`${import.meta.env.BASE_URL}equipo/Luis Arroyo.png`}
                alt="Luis Arroyo"
                className="kamzy-team__image"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/300x300/1A1A1A/FF00FF?text=LUIS";
                }}
              />
            </div>
            <h3>Luis Arroyo</h3>
            <p className="kamzy-team__role">Backend Developer & IA</p>
            <p className="kamzy-team__bio">
              Especialista en backend, APIs escalables y soluciones con inteligencia
              artificial.
            </p>
            <div className="kamzy-team__social">
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

          <div className="kamzy-team__member">
            <div className="kamzy-team__image-container">
              <img
                src={`${import.meta.env.BASE_URL}equipo/Christian Bellasmil.jpeg`}
                alt="Christian Bellasmil"
                className="kamzy-team__image"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/300x300/1A1A1A/00FFFF?text=CHRISTIAN";
                }}
              />
            </div>
            <h3>Christian Bellasmil</h3>
            <p className="kamzy-team__role">Frontend Developer & UI/UX</p>
            <p className="kamzy-team__bio">
              Especialista en interfaces modernas, experiencia de usuario y
              aplicaciones responsivas.
            </p>
            <div className="kamzy-team__social">
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

          <div className="kamzy-team__member">
            <div className="kamzy-team__image-container">
              <img
                src={`${import.meta.env.BASE_URL}equipo/AlexisChaname.jpeg`}
                alt="Alexis Chaname"
                className="kamzy-team__image"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/300x300/1A1A1A/FF00FF?text=ALEXIS";
                }}
              />
            </div>
            <h3>Alexis Chanamé</h3>
            <p className="kamzy-team__role">Software Architect & System Design</p>
            <p className="kamzy-team__bio">
              Especialista en diseño de sistemas escalables y definición de arquitecturas modernas.
            </p>
            <div className="kamzy-team__social">
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

          <div className="kamzy-team__member">
            <div className="kamzy-team__image-container">
              <img
                src={`${import.meta.env.BASE_URL}equipo/Alejandro Purizaca.jpeg`}
                alt="Alejandro Purizaca"
                className="kamzy-team__image"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/300x300/1A1A1A/FF00FF?text=ALEJANDRO";
                }}
              />
            </div>
            <h3>Alejandro Purizaca</h3>
            <p className="kamzy-team__role">DevOps & Cloud Security</p>
            <p className="kamzy-team__bio">
              Especialista en infraestructura, automatización y seguridad en la nube.
            </p>
            <div className="kamzy-team__social">
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

        <div className="kamzy-team__badge">
          <FaUsers /> +4 talentos en expansión
        </div>
      </section>

      <section className="kamzy-contact" id="contacto">
        <div className="kamzy-section-header">
          <h2 className="kamzy-section-title">
            <span className="kamzy-section-title__bracket">{"["}</span>
            CONTACTO
            <span className="kamzy-section-title__bracket">{"]"}</span>
          </h2>
          <p className="kamzy-section-subtitle">
            Conecta con nosotros de la forma que prefieras
          </p>
        </div>

        <div className="kamzy-contact__container">
          <div className="kamzy-contact__info-centered">
            <h3>¿Listo para innovar?</h3>
            <p className="kamzy-contact__description">
              Estamos a un mensaje de distancia para transformar tu idea en
              realidad. Elige el canal que prefieras y hablemos de tu próximo
              proyecto tecnológico.
            </p>

            <div className="kamzy-contact__cta">
              <button
                className="kamzy-btn kamzy-btn--primary kamzy-btn--large"
                onClick={handleContact}
              >
                <FaEnvelope /> CONTACTAR POR CORREO
              </button>
              <button
                className="kamzy-btn kamzy-btn--whatsapp kamzy-btn--large"
                onClick={handleWhatsApp}
              >
                <FaWhatsapp /> ESCRIBIR POR WHATSAPP
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="kamzy-footer">
        <div className="kamzy-footer__main">
          <div className="kamzy-footer__brand">
            <div className="kamzy-logo kamzy-logo--footer">
              <img src={logoSrc} alt="KAMZY Logo" className="kamzy-logo__image" />
              <span className="kamzy-logo__text">KAMZY</span>
              <span className="kamzy-logo__cursor">_</span>
            </div>
            <p>Innovación tecnológica sin límites.</p>

            <div className="kamzy-social">
              <a href="#" className="kamzy-social__link">
                <FaGithub />
              </a>
              <a href="#" className="kamzy-social__link">
                <FaLinkedin />
              </a>
              <a href="#" className="kamzy-social__link">
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="kamzy-footer__links">
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

        <div className="kamzy-footer__bottom">
          <p>© 2026 KAMZY Tech. Todos los derechos reservados.</p>
          <div className="kamzy-footer__badge">
            <FaHeart /> Made with love in Perú
          </div>
        </div>
      </footer>

      <div className="kamzy-floating-btn" onClick={handleContact}>
        <button className="kamzy-floating-btn__inner">
          <FaEnvelope />
          <span className="kamzy-floating-btn__tooltip">¿Hablamos?</span>
        </button>
      </div>

      <div
        className="kamzy-scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowUp />
      </div>

      {isModalOpen && selectedProject && (
        <div className="kamzy-modal" onClick={closeModal}>
          <div className="kamzy-modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="kamzy-modal__close" onClick={closeModal}>
              <FaTimes />
            </button>

            <div className="kamzy-modal__gallery">
              <div className="kamzy-modal__image-container">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - Imagen ${currentImageIndex + 1}`}
                  className="kamzy-modal__image"
                />

                <button
                  className="kamzy-modal__nav kamzy-modal__nav--prev"
                  onClick={prevImage}
                >
                  <FaChevronLeft />
                </button>

                <button
                  className="kamzy-modal__nav kamzy-modal__nav--next"
                  onClick={nextImage}
                >
                  <FaChevronRight />
                </button>
              </div>

              <div className="kamzy-modal__info">
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.description}</p>

                <div className="kamzy-modal__tags">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className="kamzy-modal__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="kamzy-modal__stats">
                  <FaCheck /> {selectedProject.stats}
                </div>

                <div className="kamzy-modal__counter">
                  <FaImage /> {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>
            </div>

            <div className="kamzy-modal__thumbnails">
              {selectedProject.images.map((img, index) => (
                <div
                  key={index}
                  className={`kamzy-modal__thumbnail ${
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