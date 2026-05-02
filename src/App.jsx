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

export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1100px" }}>
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
            NEVORA.AI creates atmospheric AI videos, product visuals, and
            commercial concepts for brands that need premium, modern, and
            emotionally charged visual storytelling.
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
            <a
              href="#work"
              style={{
                background: "white",
                color: "black",
                textDecoration: "none",
                borderRadius: "999px",
                padding: "18px 32px",
                fontSize: "16px",
                display: "inline-block",
              }}
            >
              View portfolio
            </a>

            <a
              href="#services"
              style={{
                background: "transparent",
                color: "white",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "999px",
                padding: "18px 32px",
                fontSize: "16px",
                display: "inline-block",
              }}
            >
              View services
            </a>

            <a
              href="https://www.instagram.com/nevora.ai/"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "transparent",
                color: "white",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "999px",
                padding: "18px 32px",
                fontSize: "16px",
                display: "inline-block",
              }}
            >
              Instagram
            </a>

            <a
              href="mailto:nevora.aistudio@gmail.com"
              style={{
                background: "transparent",
                color: "white",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "999px",
                padding: "18px 32px",
                fontSize: "16px",
                display: "inline-block",
              }}
            >
              Email
            </a>
          </div>
        </div>
      </section>

      <section
        id="work"
        style={{
          padding: "100px 40px 80px",
          background: "#050505",
        }}
      >
        <p
          style={{
            letterSpacing: "5px",
            color: "#b5b5b5",
            fontSize: "14px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          SELECTED WORK
        </p>

        <h2
          style={{
            fontSize: "clamp(40px, 5vw, 60px)",
            textAlign: "center",
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          Featured projects
        </h2>

        <p
          style={{
            color: "#cfcfcf",
            textAlign: "center",
            maxWidth: "760px",
            margin: "0 auto 60px",
            lineHeight: "1.7",
            fontSize: "18px",
          }}
        >
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
              style={{
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: "28px",
                padding: "28px",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                  borderRadius: "20px",
                  marginBottom: "28px",
                  display: "block",
                  background: "#111",
                }}
              />

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

      <section
        style={{
          padding: "70px 40px 100px",
          background: "#050505",
        }}
      >
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
                  <p
                    style={{
                      color: "#cfcfcf",
                      lineHeight: "1.8",
                      fontSize: "17px",
                    }}
                  >
                    {project.concept}
                  </p>

                  <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
                    Process
                  </h3>
                  <p
                    style={{
                      color: "#cfcfcf",
                      lineHeight: "1.8",
                      fontSize: "17px",
                    }}
                  >
                    {project.process}
                  </p>
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
        id="services"
        style={{
          padding: "100px 40px",
          background: "#0b0b0b",
        }}
      >
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <p
            style={{
              letterSpacing: "5px",
              color: "#b5b5b5",
              fontSize: "14px",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            SERVICES
          </p>

          <h2
            style={{
              fontSize: "clamp(40px, 5vw, 60px)",
              textAlign: "center",
              marginBottom: "20px",
              fontWeight: "700",
            }}
          >
            Premium AI production packages
          </h2>

          <p
            style={{
              color: "#cfcfcf",
              textAlign: "center",
              maxWidth: "760px",
              margin: "0 auto 60px",
              lineHeight: "1.7",
              fontSize: "18px",
            }}
          >
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

                <p
                  style={{
                    color: "#d6d6d6",
                    lineHeight: "1.7",
                    fontSize: "17px",
                    marginBottom: "18px",
                  }}
                >
                  {item.description}
                </p>

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
          padding: "90px 40px",
          background: "#050505",
        }}
      >
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <p
            style={{
              letterSpacing: "5px",
              color: "#b5b5b5",
              fontSize: "14px",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            STUDIO WORKFLOW
          </p>

          <h2
            style={{
              fontSize: "clamp(38px, 5vw, 54px)",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            From idea to final cinematic delivery
          </h2>

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

      <section
        style={{
          padding: "100px 40px",
          background: "#050505",
        }}
      >
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
            LET’S CREATE
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
            Contact NEVORA.AI to discuss AI video, visual concepts, commercial
            storytelling, and premium brand visuals.
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
              href="https://www.instagram.com/nevora.ai/"
              target="_blank"
              rel="noreferrer"
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
              Contact on Instagram
            </a>

            <a
              href="mailto:nevora.aistudio@gmail.com"
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
              Email NEVORA.AI
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
        <p>AI Video • Creative Direction • Cinematic Brand Concepts</p>
      </footer>
    </main>
  );
}