import React, { useState, useEffect } from 'react';
import SkillTree from "./SkillTree";
import tree_data from "./cs_skill_tree.json";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate available width and height for the graph
  // For example, subtract header/footer heights + some padding
  const headerHeight = 250; // approximate height of your header section + margins
  const footerHeight = 60;  // approximate height of footer
  const verticalPadding = 40; // some vertical margin/padding

  const availableHeight = windowSize.height - headerHeight - footerHeight - verticalPadding;
  const availableWidth = Math.min(windowSize.width * 0.9, 900); // max width 900px, 90% of viewport width

  return (
    <div>
      <div style={{backgroundColor: 'orange', fontSize:'large', textAlign:'center'}}>
        🚧 W O R K 🚧 I N 🚧 P R O G R E S S 🚧
      </div>
      <div className="header-section">
        <div>
          <p style={{ textAlign: 'right', fontSize: 'small' }}>
            EN / FR / DE / 中文
          </p>

          <p style={{ fontSize: 'larger' }}>🌿Mathilde Paya</p>
          <p>
            <span className="black-badge">Currently a data science intern at Veolia in Hong Kong 👩🏻‍💻</span>
          </p>
          <p style={{ fontSize: 'xx-large' }}>Engineering secure systems, <span style={{ fontFamily: 'Playfair Display', fontStyle: 'italic', color: '#666666' }}>from the ground up</span></p>
          <p style={{ fontSize: 'small', color: '#666666' }} >Hi! I am a computer science focused engineering student <a href="https://www.centralesupelec.fr/en/" target="_blank" rel="noopener noreferrer" style={{ all: 'unset', color: "#B51227", fontWeight: "bold", cursor: 'pointer' }}>@CentraleSupelec</a>. I am driven by curiosity and scientific excellence, and I use data as an information gold mine for improving processes that contribute to social and environmental efforts.</p>

        </div>

      </div>

      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <div style={{ width: '20%' }}>
          <p
            style={{
              fontSize: 'x-small',
              color: '#333',
              margin: '20px',
              textAlign: 'justify',
              background: '#fff9b1',
              borderRadius: '6px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
              padding: '16px 12px',
              border: '1px solid #f3e6c4',
              maxWidth: '280px',
              minHeight: '100px',
              lineHeight: 1.7,
              position: 'relative'
            }}
          >
            💡Here is a visualization of what I learned so far, and what I am interested in. Overall, I am <b>moving towards a more in-depth undertanding of networks and systems</b>, aiming ultimately at entering the cybersecurity field.
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              margin: '0 20px',
              marginTop: '18px',
              maxWidth: '280px',
              padding: '16px 14px',
              fontFamily: "'Work Sans', Arial, sans-serif",
              fontSize: 'small'
            }}
          >
            <img
              src="/link.png"
              alt="link icon"
              style={{ width: 28, height: 28, marginTop: 2, marginRight: 10, flexShrink: 0 }}
            />
            <div>
              <span style={{ fontWeight: 600, color: '#43676b', fontSize: '1rem' }}>Let’s connect!</span>
              <div style={{ marginTop: 6, color: '#444' }}>
                Have a project, idea, or opportunity in mind?<br />
                <a
                  href="mailto:mathildepaya@gmail.com"
                  style={{
                    color: '#43676b',
                    textDecoration: 'underline',
                    fontWeight: 500,
                    wordBreak: 'break-all'
                  }}
                >
                  Email me
                </a>
                &nbsp;— I’d love to hear from you.
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: '80%' }}>
          <SkillTree data={tree_data} width={availableWidth} height={availableHeight} />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          fontSize: 'smaller',
          color: '#666666',
          justifyContent: 'center',
        }}
      >
        <p>
          <a
            href="https://www.linkedin.com/in/mathilde-paya-325514254/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ all: 'unset', cursor: 'pointer' }}
          >
            LinkedIn
          </a>
        </p>
        <p>
          <a
            href="/CV Mathilde Paya.pdf"
            download
            style={{ all: 'unset', cursor: 'pointer' }}
          >
            CV
          </a>
        </p>
        <p>
          <a
            href="https://github.com/mathildepaya-arch"
            target="_blank"
            rel="noopener noreferrer"
            style={{ all: 'unset', cursor: 'pointer' }}
          >
            GitHub
          </a>
        </p>
        <p>mathildepaya@gmail.com</p>
      </div>
    </div>
  );
}

export default App;
