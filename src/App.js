import Card from "./Card";

function App() {
  return (
    <div className="" style={{ padding: '20%', position: 'relative' }}>
      <select
        style={{
          float: 'right',
          border: 'none',
          background: 'transparent',
          fontSize: '0.9rem',
          color: '#666',
          padding: '4px 8px',
          margin: '8px',
          appearance: 'none',
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          outline: 'none', // <- KEY PART
          boxShadow: 'none', // <- Sometimes browsers add a shadow
          cursor: 'pointer',
        }}
      >
        <option value="en">EN</option>
        <option value="fr">FR</option>
        <option value="de">DE</option>
        <option value="zh">中文</option>
      </select>

      <p style={{ fontSize: 'larger' }}>🌿Mathilde Paya</p>
      <p>
        <span className="black-badge">Currently a data science intern at Veolia in Hong Kong 👩🏻‍💻</span>
      </p>
      <p style={{ fontSize: 'xx-large' }}>Continuous learning towards issue solving, <span style={{ fontFamily: 'Playfair Display', fontStyle: 'italic', color: '#666666' }}>from development to deployment</span></p>
      <p style={{ fontSize: 'smaller', color: '#666666' }} >Hi! I am a computer science focused engineering student <a href="https://www.centralesupelec.fr/en/" target="_blank" rel="noopener noreferrer" style={{ all: 'unset', color: "#B51227", fontWeight: "bold", cursor: 'pointer' }}>@CentraleSupelec</a>. I am driven by curiosity and scientific excellence, and I use data as an information gold mine for improving processes that contribute to social and environmental efforts.</p>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'space-between', marginTop: '20px' }}>
        <Card
          title="Data Science Internship"
          body="Working at Veolia on applied ML models for optimizing environmental processes."
        />
        <Card
          title="Data Science Internship"
          body="Working at Veolia on applied ML models for optimizing environmental processes."
        />
        <Card
          title="Data Science Internship"
          body="Working at Veolia on applied ML models for optimizing environmental processes."
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', marginTop: '20px', fontSize: 'smaller', color: '#666666', justifyContent: 'center' }}>
        <p>LinkedIn</p>
        <p>CV</p>
        <p>GitHub</p>
        <p>mathildepaya@gmail.com</p>
      </div>
    </div>
  );
}

export default App;
