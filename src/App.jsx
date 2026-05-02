const projects = [
  {
    title: "Audi Q8 e-tron",
    subtitle: "The Aesthetics of the Future",
    category: "AI Video / Luxury Automotive",
    image: "/images/audi-q8-cover.jpg.png",
    youtube: "https://www.youtube.com/embed/97CBgS4R8Lk",
    concept:
      "The future has presence. A premium electric car visualized through cinematic lighting, elegant motion, and a futuristic luxury atmosphere.",
    process:
      "The project was built as a series of high-end cinematic frames focused on metal textures, light accents, premium brand presence, shadow play, and a refined futuristic style.",
    tools: [
      "Video generation: Kling AI and Flow for smooth transitions and realistic motion physics.",
      "Concept & prompting: Grok for script development and detailed visual direction.",
      "Editing & color: DaVinci Resolve for professional grading and an old-money premium mood.",
      "Sound design: Suno for atmospheric, high-end audio direction.",
    ],
  },
  {
    title: "Symphony of Rust",
    subtitle: "A Voice of Life in a World of Machines",
    category: "AI Film / Atmospheric Visual Story",
    image: "/images/symphony-rust-cover.jpg.jpeg",
    youtube: "https://www.youtube.com/embed/3l2LHv8ifUU",
    concept:
      "An emotional cinematic story about the power of art. A world where music grows flowers through rust, silence, and cold technology.",
    process:
      "The narrative was developed through contrast: a dark post-apocalyptic environment, cybernetic details, expressive emotion, and vivid neon elements of living art.",
    tools: [
      "Visual generation: Kling AI and Flow for complex scenes with smoke, sparks, motion, and blooming flowers.",
      "Idea & structure: Grok for storyline development and shot descriptions.",
      "Post-production: DaVinci Resolve for editing, pacing, and frame dynamics.",
      "Music: Suno for a dramatic violin-driven soundtrack integrated into the story.",
    ],
  },
];

const servicePackages = [
  {
    name: "The Heritage Tier",
    label: "Essential Visuals",
    price: "Starting at $650",
    description:
      "Ideal for niche brands that need a refined, cinematic visual presence across social media.",
    details:
      "This package focuses on hyperrealistic and cinematic content where every detail supports the premium value of the product. NEVORA.AI uses advanced AI tools to simulate professional macro cinematography, elegant lighting, and high-end product atmosphere.",
    includes: [
      "1 Hero Cinematic Film — a 15-second flagship video in 4K focused on details, textures, and product presence.",
      "3 Curated Social Shorts — Reels and TikTok-ready edits with polished pacing and visual rhythm.",
      "5 Bespoke AI Renders — photorealistic product images for social media, websites, or campaign visuals.",
      "Custom Sound Design — original audio direction created to strengthen emotional perception.",
    ],
    tools:
      "Script and concept development in Grok, motion generation in Kling AI and Flow, and final color correction in DaVinci Resolve.",
  },
  {
    name: "The Signature Suite",
    label: "Digital Experience",
    price: "Starting at $1,850",
    description:
      "A complete visual solution — from brand image strategy to a functional premium web experience.",
    details:
      "This package is designed for brands that want their website to feel luxurious, cinematic, and alive. NEVORA.AI combines modern landing page development with generative video integration to create the feeling of a living digital boutique.",
    includes: [
      "Premium Landing Page Development — design and structure for a website that reflects the brand’s values.",
      "Interactive AI Backgrounds — seamless video loops integrated into the website interface to create depth and atmosphere.",
      "30-Second Flagship Commercial — a complete cinematic brand video with a strong visual narrative.",
      "Full Asset Library — a complete set of graphics and video assets for a consistent brand presence across platforms.",
    ],
    tools:
      "Web development, complex scene generation in Kling AI, professional editing in DaVinci Resolve, and atmospheric music creation in Suno.",
  },
  {
    name: "The Visionary Partnership",
    label: "Creative Retainer",
    price: "Starting at $3,500 / month",
    description:
      "Your dedicated AI production department for ongoing premium visual content.",
    details:
      "This package is created for companies that need regular content updates, consistent creative direction, and continuous visual development. NEVORA.AI becomes your strategic creative partner, delivering a steady flow of elite AI-powered visual content.",
    includes: [
      "Monthly Strategic Direction — moodboards and visual guidelines developed for each month.",
      "8 Cinematic AI Video Ads — regular production of high-end advertising creatives.",
      "Unlimited Static Content — ongoing generation of images and graphics based on brand needs.",
      "Priority Support & Updates — priority service and regular updates to your website and visual materials.",
    ],
    tools:
      "The full NEVORA.AI studio stack: Kling AI, Flow, Suno, Grok, and DaVinci Resolve for consistent brand quality.",
  },
];

const capabilities = [
  {
    title: "Website Development",
    text: "Premium landing pages, portfolio websites, and cinematic digital experiences for brands and creative professionals.",
  },
  {
    title: "Presentation Design",
    text: "Corporate presentations, investor decks, sales presentations, and visual pitch materials with a refined premium structure.",
  },
  {
    title: "Logo Animation",
    text: "Elegant animated logo intros, brand motion elements, and subtle identity accents for videos, websites, and launches.",
  },
  {
    title: "Corporate & Sales Decks",
    text: "High-end business presentations designed for clarity, trust, visual hierarchy, and premium brand positioning.",
  },
  {
    title: "Architectural Exterior Renders",
    text: "AI-enhanced exterior renders of buildings, residential concepts, commercial spaces, and district visualizations.",
  },
  {
    title: "Campaign Visual Assets",
    text: "AI-generated images, social media visuals, launch materials, atmospheric concepts, and brand content systems.",
  },
];

const workflow = [
  {
    stage: "Concept & Scripting",
    tool: "Grok",
    result: "Clear story structure, visual direction, and precise prompts.",
  },
  {
    stage: "Video Generation",
    tool: "Kling AI / Flow",
    result: "Hyperrealistic movement, cinematic shots, and dynamic transitions.",
  },
  {
    stage: "Audio Design",
    tool: "Suno",
    result: "Original soundtracks that strengthen the emotion of the visuals.",
  },
  {
    stage: "Editing & Mastering",
    tool: "DaVinci Resolve",
    result: "Professional color grading, pacing, editing, and final polish.",
  },
];

const whyNevora = [
  "Cinematic AI direction, not random generation.",
  "Premium visual mood and consistent brand atmosphere.",
  "Fast production for luxury, product, fashion, beauty, real estate, and automotive brands.",
  "Full creative workflow: concept, generation, sound, editing, web, presentations, and delivery.",
];

const brandNeeds = [
  "Premium product visuals",
  "AI commercials",
  "Social media campaigns",
  "Luxury landing pages",
  "Corporate presentations",
  "Sales presentations",
  "Logo animation",
  "Exterior building renders",
  "District visualizations",
  "Cinematic brand storytelling",
];

export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }

          .premium-card {
            transition: all 0.5s ease;
            will-change: transform, box-shadow, background;
          }

          .premium-card:hover {
            transform: scale(1.03);
            box-shadow: 0 24px 70px rgba(207, 181, 59, 0.22);
            border-color: rgba(207, 181, 59, 0.45) !important;
            background: rgba(255, 255, 255, 0.075) !important;
          }

          .premium-title {
            transition: color 0.5s ease;
          }

          .premium-card:hover .premium-title {
            color: #CFB53B;
          }

          .project-card {
            transition: all 0.5s ease;
          }

          .project-card:hover {
            transform: scale(1.02);
            box-shadow: 0 20px 60px rgba(207, 181, 59, 0.16);
            border-color: rgba(207, 181, 59, 0.35) !important;
          }

          .project-card img {
            transition: transform 0.5s ease;
          }

          .project-card:hover img {
            transform: scale(1.04);
          }

          .quiet-card {
            transition: all 0.5s ease;
          }

          .quiet-card:hover {
            transform: translateY(-6px);
            border-color: rgba(207, 181, 59, 0.35) !important;
            background: rgba(255, 255, 255, 0.065) !important;
          }

          .gold-text {
            color: #CFB53B;
          }
        `}
      </style>

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 30% 10%, rgba(207,181,59,0.10), transparent 28%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08), transparent 24%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1100px", position: "relative", zIndex: 1 }}>
          <p
            style={{
              letterSpacing: "5px",
              color: "#b5b5b5",
              fontSize: "14px",
              marginBottom: "24px",
            }}
          >
            NEVORA.AI CREATIVE STUDIO
          </p>

          <h1
            style={{
              fontSize: "clamp(46px, 7vw, 84px)",
              lineHeight: "1.05",
              margin: "0 auto",
              maxWidth: "1050px",
              fontWeight: "700",
            }}
          >
            Cinematic AI visuals for brands that want to feel unforgettable.
          </h1>

          <p
            style={{
              color: "#cfcfcf",
              fontSize: "20px",
              lineHeight: "1.7",
              maxWidth: "760px",
              margin: "32px auto",
            }}
          >
            NEVORA.AI creates atmospheric AI videos, premium websites,
            presentations, architectural renders, product visuals, and
            commercial concepts for brands that need modern and emotionally
            charged visual storytelling.
          </p>

          <p
            style={{
              color: "#cfb53b",
              fontSize: "15px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "34px",
            }}
          >
            Available for selected AI commercial, product visual, real estate
            and luxury brand projects.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
              marginTop: "36px",
            }}
          >
            <a href="#work" style={buttonPrimary}>
              View portfolio
            </a>

            <a href="#services" style={buttonSecondary}>
              View services
            </a>

            <a href="#contact" style={buttonGold}>
              Start a project
            </a>

            <a
              href="https://www.instagram.com/nevora.ai/"
              target="_blank"
              rel="noreferrer"
              style={buttonSecondary}
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "90px 40px",
          background: "#080808",
        }}
      >
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <p style={sectionLabel}>WHY NEVORA.AI</p>

          <h2 style={sectionTitle}>
            AI visuals with direction, atmosphere, and commercial intent.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "18px",
              marginTop: "50px",
            }}
          >
            {whyNevora.map((item) => (
              <div
                key={item}
                className="quiet-card"
                style={{
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: "24px",
                  padding: "24px",
                  background: "rgba(255,255,255,0.04)",
                  color: "#d6d6d6",
                  lineHeight: "1.7",
                  fontSize: "17px",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" style={{ padding: "100px 40px 80px" }}>
        <p style={sectionLabel}>SELECTED WORK</p>

        <h2 style={sectionTitle}>Featured projects</h2>

        <p style={sectionDescription}>
          Two of the strongest visual works from NEVORA.AI — cinematic,
          emotional, and atmosphere-driven.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
            maxWidth: "1180px",
            margin: "0 auto",
          }}
        >
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-card"
              style={{
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: "28px",
                padding: "28px",
                background: "rgba(255,255,255,0.04)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "260px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  marginBottom: "28px",
                  background: "#111",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              <p
                style={{
                  color: "#999",
                  marginBottom: "10px",
                  fontSize: "16px",
                }}
              >
                {project.category}
              </p>

              <h3
                style={{
                  fontSize: "34px",
                  marginTop: 0,
                  marginBottom: "8px",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: "#b5b5b5",
                  fontSize: "18px",
                  marginTop: 0,
                  marginBottom: "20px",
                }}
              >
                {project.subtitle}
              </p>

              <p
                style={{
                  color: "#cfcfcf",
                  lineHeight: "1.8",
                  marginBottom: "24px",
                  fontSize: "17px",
                }}
              >
                {project.concept}
              </p>

              <a
                href={project.youtube.replace("embed/", "watch?v=")}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "white",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.4)",
                  fontSize: "16px",
                }}
              >
                Watch video
              </a>
            </article>
          ))}
        </div>
      </section>

      <section style={{ padding: "70px 40px 100px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          {projects.map((project) => (
            <div
              key={project.title + " details"}
              style={{
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: "32px",
                padding: "42px",
                background: "rgba(255,255,255,0.04)",
                marginBottom: "28px",
              }}
            >
              <p
                style={{
                  letterSpacing: "4px",
                  color: "#999",
                  fontSize: "13px",
                  marginBottom: "16px",
                }}
              >
                CASE STUDY
              </p>

              <h2
                style={{
                  fontSize: "clamp(32px, 4vw, 44px)",
                  marginTop: 0,
                  marginBottom: "28px",
                }}
              >
                {project.title}: {project.subtitle}
              </h2>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "56.25%",
                  borderRadius: "24px",
                  overflow: "hidden",
                  marginBottom: "36px",
                  background: "#111",
                }}
              >
                <iframe
                  src={project.youtube}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: "0",
                  }}
                />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "30px",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
                    Concept
                  </h3>
                  <p style={paragraph}>{project.concept}</p>

                  <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
                    Process
                  </h3>
                  <p style={paragraph}>{project.process}</p>
                </div>

                <div>
                  <h3 style={{ fontSize: "22px", marginBottom: "16px" }}>
                    Tools & AI Stack
                  </h3>

                  {project.tools.map((tool) => (
                    <div
                      key={tool}
                      style={{
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "18px",
                        padding: "16px",
                        marginBottom: "12px",
                        color: "#d6d6d6",
                        lineHeight: "1.6",
                        background: "rgba(255,255,255,0.03)",
                      }}
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: "90px 40px",
          background: "#080808",
        }}
      >
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <p style={sectionLabel}>FOR BRANDS THAT NEED</p>

          <h2 style={sectionTitle}>
            Premium visual content for modern campaigns and digital launches.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
              marginTop: "50px",
            }}
          >
            {brandNeeds.map((need) => (
              <div
                key={need}
                className="quiet-card"
                style={{
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: "999px",
                  padding: "18px 22px",
                  background: "rgba(255,255,255,0.04)",
                  textAlign: "center",
                  color: "#d6d6d6",
                  fontSize: "16px",
                }}
              >
                {need}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        style={{
          padding: "100px 40px",
          background: "#0b0b0b",
        }}
      >
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <p style={sectionLabel}>SERVICES</p>

          <h2 style={sectionTitle}>Premium AI production packages</h2>

          <p style={sectionDescription}>
            Flexible creative solutions for brands that need cinematic visuals,
            premium digital presence, and consistent AI-powered content.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px",
            }}
          >
            {servicePackages.map((item) => (
              <article
                key={item.name}
                className="premium-card"
                style={{
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: "30px",
                  padding: "32px",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.025))",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    color: "#999",
                    fontSize: "14px",
                    letterSpacing: "3px",
                    marginBottom: "16px",
                    textTransform: "uppercase",
                  }}
                >
                  {item.label}
                </p>

                <h3
                  className="premium-title"
                  style={{
                    fontSize: "34px",
                    lineHeight: "1.1",
                    marginTop: 0,
                    marginBottom: "16px",
                  }}
                >
                  {item.name}
                </h3>

                <p
                  style={{
                    color: "white",
                    fontSize: "22px",
                    marginTop: 0,
                    marginBottom: "22px",
                  }}
                >
                  {item.price}
                </p>

                <p style={paragraph}>{item.description}</p>

                <p
                  style={{
                    color: "#bfbfbf",
                    lineHeight: "1.7",
                    fontSize: "16px",
                    marginBottom: "24px",
                  }}
                >
                  {item.details}
                </p>

                <h4 style={{ fontSize: "18px", marginBottom: "14px" }}>
                  Includes
                </h4>

                <div style={{ marginBottom: "24px" }}>
                  {item.includes.map((point) => (
                    <div
                      key={point}
                      style={{
                        borderTop: "1px solid rgba(255,255,255,0.12)",
                        padding: "14px 0",
                        color: "#d0d0d0",
                        lineHeight: "1.6",
                        fontSize: "15px",
                      }}
                    >
                      {point}
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: "auto",
                    borderRadius: "20px",
                    padding: "18px",
                    background: "rgba(255,255,255,0.06)",
                    color: "#cfcfcf",
                    lineHeight: "1.6",
                    fontSize: "15px",
                  }}
                >
                  <strong style={{ color: "white" }}>Tools: </strong>
                  {item.tools}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "100px 40px",
          background: "#050505",
        }}
      >
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <p style={sectionLabel}>EXTENDED STUDIO CAPABILITIES</p>

          <h2 style={sectionTitle}>
            Beyond AI video, NEVORA.AI builds complete visual systems.
          </h2>

          <p style={sectionDescription}>
            Additional creative services for brands, real estate projects,
            corporate communication, digital launches, and premium commercial
            presentation.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="quiet-card"
                style={{
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: "26px",
                  padding: "28px",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <h3
                  style={{
                    fontSize: "24px",
                    marginTop: 0,
                    marginBottom: "14px",
                    color: "white",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#cfcfcf",
                    lineHeight: "1.75",
                    fontSize: "16px",
                    marginBottom: 0,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "90px 40px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <p style={sectionLabel}>STUDIO WORKFLOW</p>

          <h2 style={sectionTitle}>From idea to final cinematic delivery</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "18px",
            }}
          >
            {workflow.map((item) => (
              <div
                key={item.stage}
                className="quiet-card"
                style={{
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: "24px",
                  padding: "24px",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <p
                  style={{
                    color: "#999",
                    fontSize: "14px",
                    marginBottom: "10px",
                  }}
                >
                  {item.tool}
                </p>

                <h3
                  style={{
                    fontSize: "24px",
                    marginTop: 0,
                    marginBottom: "16px",
                  }}
                >
                  {item.stage}
                </h3>

                <p
                  style={{
                    color: "#cfcfcf",
                    lineHeight: "1.7",
                    marginBottom: 0,
                  }}
                >
                  {item.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: "100px 40px" }}>
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: "32px",
            padding: "60px 40px",
            background: "white",
            color: "black",
            textAlign: "center",
          }}
        >
          <p
            style={{
              letterSpacing: "5px",
              color: "#777",
              fontSize: "14px",
              marginBottom: "20px",
            }}
          >
            START A PROJECT
          </p>

          <h2
            style={{
              fontSize: "clamp(38px, 5vw, 56px)",
              lineHeight: "1.1",
              maxWidth: "850px",
              margin: "0 auto 30px",
            }}
          >
            Ready to create a cinematic AI story for your brand?
          </h2>

          <p
            style={{
              color: "#444",
              fontSize: "18px",
              lineHeight: "1.7",
              maxWidth: "650px",
              margin: "0 auto 36px",
            }}
          >
            Request a visual concept, discuss a premium AI commercial, design a
            presentation, or build a complete digital experience for your brand.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:nevora.aistudio@gmail.com?subject=Project inquiry for NEVORA.AI"
              style={{
                background: "black",
                color: "white",
                textDecoration: "none",
                borderRadius: "999px",
                padding: "18px 32px",
                fontSize: "16px",
                display: "inline-block",
              }}
            >
              Request a visual concept
            </a>

            <a
              href="https://www.instagram.com/nevora.ai/"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "transparent",
                color: "black",
                textDecoration: "none",
                border: "1px solid rgba(0,0,0,0.25)",
                borderRadius: "999px",
                padding: "18px 32px",
                fontSize: "16px",
                display: "inline-block",
              }}
            >
              Contact on Instagram
            </a>
          </div>

          <p style={{ marginTop: "28px", color: "#555", fontSize: "16px" }}>
            nevora.aistudio@gmail.com
          </p>
        </div>
      </section>

      <footer
        style={{
          padding: "30px 40px",
          color: "#777",
          background: "#050505",
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
          fontSize: "14px",
        }}
      >
        <p>© 2026 NEVORA.AI Creative Studio. All rights reserved.</p>
        <p>
          AI Video • Websites • Presentations • Logo Animation • Architectural
          Renders
        </p>
      </footer>
    </main>
  );
}

const buttonPrimary = {
  background: "white",
  color: "black",
  textDecoration: "none",
  borderRadius: "999px",
  padding: "18px 32px",
  fontSize: "16px",
  display: "inline-block",
};

const buttonSecondary = {
  background: "transparent",
  color: "white",
  textDecoration: "none",
  border: "1px solid rgba(255,255,255,0.25)",
  borderRadius: "999px",
  padding: "18px 32px",
  fontSize: "16px",
  display: "inline-block",
};

const buttonGold = {
  background: "#CFB53B",
  color: "black",
  textDecoration: "none",
  borderRadius: "999px",
  padding: "18px 32px",
  fontSize: "16px",
  display: "inline-block",
  fontWeight: "600",
};

const sectionLabel = {
  letterSpacing: "5px",
  color: "#b5b5b5",
  fontSize: "14px",
  marginBottom: "20px",
  textAlign: "center",
};

const sectionTitle = {
  fontSize: "clamp(40px, 5vw, 60px)",
  textAlign: "center",
  marginBottom: "20px",
  fontWeight: "700",
};

const sectionDescription = {
  color: "#cfcfcf",
  textAlign: "center",
  maxWidth: "760px",
  margin: "0 auto 60px",
  lineHeight: "1.7",
  fontSize: "18px",
};

const paragraph = {
  color: "#cfcfcf",
  lineHeight: "1.8",
  fontSize: "17px",
};