import { useEffect, useState } from "react";
import "@/App.css";
import { Heart, Sparkles, Moon, ArrowRight, Check, Shield, Star, Flower2, Eye, Brain, MessageCircle } from "lucide-react";

const modules = [
  {
    number: "01",
    title: "O ciclo da dor invisível",
    description: "Como o controle e a manipulação começam sem que você perceba.",
    icon: Eye
  },
  {
    number: "02", 
    title: "A mente da vítima",
    description: "O que acontece no seu emocional quando você tenta amar alguém que te confunde.",
    icon: Brain
  },
  {
    number: "03",
    title: "O colapso silencioso",
    description: "Quando o corpo fala o que a mente tenta esconder.",
    icon: Moon
  },
  {
    number: "04",
    title: "O luto da mulher perdida",
    description: "Por que é tão difícil se reconhecer depois da dor e como começar o reencontro.",
    icon: Heart
  },
  {
    number: "05",
    title: "O caminho de volta",
    description: "A reconstrução emocional, o resgate da voz e a base para recomeçar de verdade.",
    icon: Sparkles
  }
];

const benefits = [
  "Clareza sobre o que realmente aconteceu com você",
  "Entendimento psicológico sobre manipulação e culpa",
  "Reconexão com suas emoções e limites",
  "Exercícios simbólicos e profundos que te ajudam a sentir o que ficou anestesiado",
  "A sensação real de alívio e de que o recomeço é possível"
];

const targetAudience = [
  "Para mulheres que sentem que perderam a própria voz em relações, famílias ou ciclos de abuso emocional",
  "Para quem se sente culpada por sentir demais ou acha que precisa aguentar",
  "Para quem já cansou de entender o outro, mas ainda não sabe como se entender de novo",
  "Para quem quer se reencontrar, se libertar e se reconstruir de dentro pra fora"
];

const bonuses = [
  {
    title: 'Mini e-book "A Psicologia da Manipulação"',
    description: "Entenda os padrões mentais do manipulador e por que você ficou presa emocionalmente."
  },
  {
    title: "Ferramentas Terapêuticas em PDF",
    description: "Mapa das Microviolências + Roda do Caos Emocional + Diário da Reconexão."
  },
  {
    title: "Desconto especial no Programa Seraphis",
    description: "Receba um voucher exclusivo para continuar sua reconstrução completa."
  }
];

const included = [
  "Acesso imediato às 5 aulas",
  "Todos os materiais terapêuticos",
  "Bônus exclusivos inclusos",
  "Suporte durante a jornada",
  "Acesso vitalício ao conteúdo"
];

function App() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToPrice = () => {
    document.getElementById("investimento")?.scrollIntoView({ behavior: "smooth" });
  };

  const openCheckout = () => {
    window.open("https://payfast.greenn.com.br/143480/offer/eHvbJv", "_blank");
  };

  return (
    <div className="app-container">
      {/* Noise Overlay */}
      <div className="noise-overlay"></div>

      {/* Hero Section */}
      <section className="hero-section" data-testid="hero-section">
        <div className="hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1542850064-fc1049b84450?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920" 
            alt="Background"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <span className="hero-badge" data-testid="hero-badge">
            <Sparkles size={14} />
            O RETORNO À ESSÊNCIA
          </span>
          
          <h1 className="hero-title" data-testid="hero-title">
            Você não precisa ser<br />
            <span className="highlight">a mulher que o mundo te fez ser</span>
          </h1>
          
          <p className="hero-subtitle" data-testid="hero-subtitle">
            É hora de lembrar quem você sempre foi.
          </p>
          
          <button 
            className="cta-button primary" 
            onClick={openCheckout}
            data-testid="hero-cta-button"
          >
            INICIAR MINHA JORNADA AGORA
            <ArrowRight size={18} />
          </button>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="section pain-section" id="dor" data-animate data-testid="pain-section">
        <div className={`container ${isVisible["dor"] ? "animate-in" : ""}`}>
          <div className="pain-grid">
            <div className="pain-content">
              <h2 className="section-title" data-testid="pain-title">
                Você se perdeu tentando agradar,<br />
                <span className="highlight">se calar e sobreviver</span>
              </h2>
              
              <div className="pain-questions">
                <p>Quantas vezes você se anulou para manter a paz?</p>
                <p>Quantas vezes sentiu que ninguém te via — nem você mesma?</p>
                <p>Você se acostumou a carregar culpas que nunca foram suas.</p>
              </div>
              
              <blockquote className="pain-quote" data-testid="pain-quote">
                "Mas o que você chama de fraqueza... é só cansaço de carregar o que nunca foi seu."
              </blockquote>
            </div>
            
            <div className="pain-image">
              <img 
                src="https://images.unsplash.com/photo-1696864001203-416807def24a?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" 
                alt="Mulher em reflexão"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section" id="sobre" data-animate data-testid="about-section">
        <div className={`container ${isVisible["sobre"] ? "animate-in" : ""}`}>
          <span className="section-badge">A JORNADA</span>
          <h2 className="section-title centered" data-testid="about-title">
            O que é o "Retorno à Essência"?
          </h2>
          
          <div className="about-content">
            <p className="about-text">
              O Retorno à Essência é uma jornada de <strong>5 aulas emocionais e terapêuticas</strong> criadas 
              para mulheres que querem entender o que aconteceu dentro delas e dar o primeiro passo para 
              se libertar de vínculos, dores e rótulos que as afastaram da própria verdade.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-card">
                <Flower2 className="highlight-icon" />
                <p>Cada aula é uma chave.</p>
              </div>
              <div className="highlight-card">
                <Heart className="highlight-icon" />
                <p>Cada exercício, uma ponte para voltar a si.</p>
              </div>
            </div>
            
            <p className="about-text">
              Você vai compreender como a manipulação afeta o emocional, por que a culpa e o medo 
              te paralisam, e como reconstruir sua identidade emocional com lucidez e autocompaixão.
            </p>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="section modules-section" id="modulos" data-animate data-testid="modules-section">
        <div className={`container ${isVisible["modulos"] ? "animate-in" : ""}`}>
          <span className="section-badge">CONTEÚDO</span>
          <h2 className="section-title centered" data-testid="modules-title">
            O que você vai viver nessa jornada
          </h2>
          
          <div className="modules-grid">
            {modules.map((module, index) => (
              <div 
                className="module-card" 
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`module-card-${index + 1}`}
              >
                <div className="module-number">{module.number}</div>
                <module.icon className="module-icon" />
                <h3 className="module-title">{module.title}</h3>
                <p className="module-description">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="section audience-section" id="para-quem" data-animate data-testid="audience-section">
        <div className={`container ${isVisible["para-quem"] ? "animate-in" : ""}`}>
          <span className="section-badge">IDENTIFICAÇÃO</span>
          <h2 className="section-title centered" data-testid="audience-title">
            Para quem é essa jornada
          </h2>
          
          <div className="audience-grid">
            {targetAudience.map((item, index) => (
              <div className="audience-card" key={index} data-testid={`audience-card-${index + 1}`}>
                <Heart className="audience-icon" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section benefits-section" id="beneficios" data-animate data-testid="benefits-section">
        <div className={`container ${isVisible["beneficios"] ? "animate-in" : ""}`}>
          <span className="section-badge">TRANSFORMAÇÃO</span>
          <h2 className="section-title centered" data-testid="benefits-title">
            O que você vai ganhar ao entrar
          </h2>
          
          <div className="benefits-list">
            {benefits.map((benefit, index) => (
              <div className="benefit-item" key={index} data-testid={`benefit-item-${index + 1}`}>
                <div className="benefit-check">
                  <Check size={18} />
                </div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="section bonuses-section" id="bonus" data-animate data-testid="bonuses-section">
        <div className={`container ${isVisible["bonus"] ? "animate-in" : ""}`}>
          <span className="section-badge">
            <Sparkles size={14} />
            BÔNUS EXCLUSIVOS
          </span>
          <h2 className="section-title centered" data-testid="bonuses-title">
            Você também vai receber
          </h2>
          
          <div className="bonuses-grid">
            {bonuses.map((bonus, index) => (
              <div className="bonus-card" key={index} data-testid={`bonus-card-${index + 1}`}>
                <Star className="bonus-icon" />
                <h3 className="bonus-title">{bonus.title}</h3>
                <p className="bonus-description">{bonus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="section why-now-section" id="porque-agora" data-animate data-testid="why-now-section">
        <div className={`container ${isVisible["porque-agora"] ? "animate-in" : ""}`}>
          <h2 className="section-title centered" data-testid="why-now-title">Por que agora?</h2>
          
          <div className="why-now-content">
            <p className="why-now-text">
              Porque o tempo não devolve quem você era.<br />
              <strong>Mas ele pode te mostrar quem você ainda pode ser.</strong>
            </p>
            
            <p className="why-now-text">
              Cada dia que você adia a sua cura, a dor se organiza para continuar.
            </p>
            
            <p className="why-now-text emphasis">
              O Retorno à Essência é o corte nesse ciclo — o ponto em que você escolhe você.
            </p>
            
            <p className="why-now-highlight">
              As vagas são limitadas, e o acesso será exclusivo para esta turma.
            </p>
            
            <p className="why-now-cta">
              <strong>Não adie mais o seu reencontro.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section testimonial-section" id="depoimento" data-animate data-testid="testimonial-section">
        <div className={`container ${isVisible["depoimento"] ? "animate-in" : ""}`}>
          <div className="testimonial-card" data-testid="testimonial-card">
            <MessageCircle className="testimonial-icon" />
            <blockquote className="testimonial-quote">
              "Eu achava que precisava de coragem para sair do que me destruía, mas percebi que 
              o que eu precisava era de consciência. Essa jornada foi o primeiro dia em que 
              voltei a me ouvir de verdade."
            </blockquote>
            <p className="testimonial-author">— Depoimento Real</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section pricing-section" id="investimento" data-animate data-testid="pricing-section">
        <div className={`container ${isVisible["investimento"] ? "animate-in" : ""}`}>
          <span className="section-badge gold">INVESTIMENTO</span>
          
          <div className="pricing-card" data-testid="pricing-card">
            <div className="pricing-header">
              <span className="pricing-label">Oferta Especial</span>
              <div className="pricing-value" data-testid="pricing-value">
                <span className="currency">R$</span>
                <span className="price">47</span>
              </div>
              <span className="pricing-period">Acesso vitalício</span>
            </div>
            
            <div className="pricing-includes">
              {included.map((item, index) => (
                <div className="include-item" key={index} data-testid={`include-item-${index + 1}`}>
                  <Sparkles size={16} className="include-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <button className="cta-button primary large" onClick={openCheckout} data-testid="pricing-cta-button">
              GARANTIR MINHA VAGA AGORA
              <ArrowRight size={20} />
            </button>
            
            <div className="guarantee" data-testid="guarantee-badge">
              <Shield size={20} />
              <span>Transformação garantida ou seu dinheiro de volta</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section final-cta-section" data-testid="final-cta-section">
        <div className="container">
          <h2 className="section-title centered" data-testid="final-cta-title">
            Você não precisa voltar a ser quem era.<br />
            <span className="highlight">Precisa apenas lembrar de quem sempre foi</span>
          </h2>
          
          <p className="final-subtitle">
            antes da culpa, antes do medo, antes de se calar.
          </p>
          
          <p className="final-tagline">
            O Retorno à Essência é o começo do seu recomeço.
          </p>
          
          <button className="cta-button primary large" onClick={openCheckout} data-testid="final-cta-button">
            QUERO COMEÇAR MINHA JORNADA AGORA
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" data-testid="footer">
        <div className="container">
          <p>© 2025 O Retorno à Essência. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
