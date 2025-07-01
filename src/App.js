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
      <div className="header-section">
        <div>
          <p style={{ textAlign: 'right', fontSize: 'small' }}>
            EN / FR / DE / 中文
          </p>

          <p style={{ fontSize: 'larger' }}>🌿Mathilde Paya</p>
          <p>
            <span className="black-badge">Currently a data science intern at Veolia in Hong Kong 👩🏻‍💻</span>
          </p>
          <p style={{ fontSize: 'xx-large' }}>Continuous learning towards issue solving, <span style={{ fontFamily: 'Playfair Display', fontStyle: 'italic', color: '#666666' }}>from development to deployment</span></p>
          <p style={{ fontSize: 'smaller', color: '#666666' }} >Hi! I am a computer science focused engineering student <a href="https://www.centralesupelec.fr/en/" target="_blank" rel="noopener noreferrer" style={{ all: 'unset', color: "#B51227", fontWeight: "bold", cursor: 'pointer' }}>@CentraleSupelec</a>. I am driven by curiosity and scientific excellence, and I use data as an information gold mine for improving processes that contribute to social and environmental efforts.</p>
        </div>

      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <SkillTree data={tree_data} width={availableWidth} height={availableHeight} />
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
        <p>LinkedIn</p>
        <p>CV</p>
        <p>GitHub</p>
        <p>mathildepaya@gmail.com</p>
      </div>
    </div>
  );
}

export default App;
