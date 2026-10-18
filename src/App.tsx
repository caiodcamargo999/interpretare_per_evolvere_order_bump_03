import React, { useState } from 'react';
import './landing.css';

interface ModuleSection {
  part: string;
  title: string;
  pages: string;
  description: string;
  icon: string;
  badgeColor: string;
  highlights: string[];
}

const readingSections: ModuleSection[] = [
  {
    part: 'PARTE 1',
    title: 'Guida al Kit & Lettura senza Ansia',
    pages: 'Pagine 5 – 7',
    icon: '⏱️',
    badgeColor: '#887396',
    description:
      'Guida per i genitori: come trasformare la lettura in un gioco motivante con il cronometro personale, evitare di correggere ogni minima esitazione e lasciare libertà di scelta sui testi.',
    highlights: ['Come motivare senza spegnere l\'entusiasmo', 'Il cronometro come record personale', 'Domande aperte per dialogare sul testo']
  },
  {
    part: 'LIVELLO 1',
    title: '8 Testi Molto Brevi (Partenza Semplice)',
    pages: 'Pagine 8 – 16',
    icon: '🐱',
    badgeColor: '#00a1e6',
    description:
      'Racconti brevissimi (es. "Il gatto curioso", "La ricetta magica") per i bambini che tendono ad arrendersi subito: arrivano in fondo in meno di 2 minuti provando una soddisfazione immediata.',
    highlights: ['8 Racconti agili e veloci', 'Successo garantito fin dal 1° giorno', 'Valutazione a 5 stelle inclusa']
  },
  {
    part: 'LIVELLO 2',
    title: '8 Testi Brevi (Ritmo & Curiosità)',
    pages: 'Pagine 17 – 25',
    icon: '📚',
    badgeColor: '#be868c',
    description:
      'Storie avvincenti di media lunghezza (es. "Il mistero della biblioteca", "Il volo delle rondini"): stimolano la concentrazione sostenuta e la curiosità scientifica e narrativa.',
    highlights: ['8 Testi di media lunghezza', 'Trame avvincenti e divulgative', 'Aumento della velocità di lettura']
  },
  {
    part: 'LIVELLO 3',
    title: '8 Testi Più Lunghi (Resistenza)',
    pages: 'Pagine 26 – 34',
    icon: '🏰',
    badgeColor: '#887396',
    description:
      'Brani ampi e dettagliati (es. "Il segreto del vecchio faro", "Come comunicano le api"): consolidano la concentrazione profonda e preparano ai testi scolastici più complessi.',
    highlights: ['8 Letture narrative e scientifiche', 'Allenamento della memoria a lungo termine', 'Comprensione delle sfumature del testo']
  },
  {
    part: 'SOLUZIONI',
    title: 'Chiavi di Risposta Complete (Tutti i Testi)',
    pages: 'Pagine 35 – 40',
    icon: '🔑',
    badgeColor: '#2a9d8f',
    description:
      'Le soluzioni complete di tutte le domande dei tre livelli. Consentono ai genitori di verificare le risposte del bambino in pochi secondi e senza alcuna incertezza.',
    highlights: ['Tutte le risposte dei 24 testi', 'Correzione istantanea in 10 secondi', 'Spiegazioni chiare e inequivocabili']
  },
  {
    part: 'MERITO',
    title: 'Diario di Lettura & Attestato Ufficiale',
    pages: 'Pagine 41 – 42',
    icon: '🏆',
    badgeColor: '#00963a',
    description:
      'Tabella per registrare data, tempo e stelle assegnate a ogni lettura, più l\'Attestato Ufficiale di Completamento da firmare e appendere in cameretta come traguardo raggiunto.',
    highlights: ['Diario delle letture a stelle', 'Monitoraggio dei tempi di lettura', 'Attestato Ufficiale da incorniciare']
  }
];

export default function App() {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [downloadCount, setDownloadCount] = useState(0);

  const pdfUrl = '/Ora_di_Lettura-orderbump.pdf';
  const pdfDownloadName = 'Ora_di_Lettura-orderbump.pdf';

  const triggerDownload = () => {
    setIsDownloaded(true);
    setDownloadCount(prev => prev + 1);

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfDownloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f7f8fa',
        color: '#363636',
        fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        display: 'flex',
        flexDirection: 'column',
        WebkitFontSmoothing: 'antialiased'
      }}
    >
      {/* Top Brand Notification Banner */}
      <div
        style={{
          background: '#887396',
          color: '#ffffff',
          textAlign: 'center',
          padding: '10px 16px',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'Poppins, sans-serif',
          letterSpacing: '0.3px'
        }}
      >
        ✨ Accesso a Vita Garantito · Salva questa pagina tra i preferiti del tuo browser
      </div>

      {/* Main Header */}
      <header
        style={{
          background: '#ffffff',
          borderBottom: '1.5px solid #e6e8ea',
          padding: '48px 20px 40px 20px',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(0, 161, 230, 0.12)',
              border: '1.5px solid #00a1e6',
              color: '#00a1e6',
              fontWeight: 700,
              fontSize: '12px',
              padding: '6px 18px',
              borderRadius: '20px',
              letterSpacing: '0.8px',
              marginBottom: '20px',
              textTransform: 'uppercase',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            <span>🔒</span>
            <span>Area Riservata Clienti · Download Immediato</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 700,
              lineHeight: '1.25',
              marginBottom: '14px',
              color: '#363636',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            Il Tuo Percorso Ora di Lettura
          </h1>

          <p
            style={{
              fontSize: '17px',
              color: '#6b6b6b',
              maxWidth: '680px',
              margin: '0 auto 28px auto',
              lineHeight: '1.6'
            }}
          >
            Congratulazioni per il tuo acquisto! Il tuo file PDF di{' '}
            <strong style={{ color: '#00a1e6' }}>Ora di Lettura — 24 Testi per Leggere Fino in Fondo</strong> è pronto
            per il download immediato e per la stampa.
          </p>

          {/* Quick 1-Click Download Button */}
          <button
            onClick={triggerDownload}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              background: isDownloaded ? '#00963a' : '#00a1e6',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '17px',
              padding: '16px 36px',
              borderRadius: '14px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: isDownloaded
                ? '0 8px 24px rgba(0, 150, 58, 0.35)'
                : '0 8px 24px rgba(0, 161, 230, 0.35)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
              textTransform: 'uppercase',
              fontFamily: 'Poppins, sans-serif'
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = isDownloaded
                ? '0 12px 28px rgba(0, 150, 58, 0.45)'
                : '0 12px 28px rgba(0, 161, 230, 0.45)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = isDownloaded
                ? '0 8px 24px rgba(0, 150, 58, 0.35)'
                : '0 8px 24px rgba(0, 161, 230, 0.35)';
            }}
          >
            <svg
              style={{ width: '22px', height: '22px' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>
              {isDownloaded
                ? `Scaricato con successo! ✅ (Riscarica PDF)`
                : 'Scarica il Tuo Kit in 1 Clic (PDF)'}
            </span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{ maxWidth: '1040px', margin: '0 auto', padding: '44px 20px', width: '100%', flex: 1 }}>
        {/* Main Product Card */}
        <section style={{ marginBottom: '44px' }}>
          <div
            style={{
              background: '#ffffff',
              border: '2.5px solid #00a1e6',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 36px)',
              boxShadow: '0 8px 30px rgba(0, 161, 230, 0.12)',
              position: 'relative'
            }}
          >
            {/* Tag Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
              <span
                style={{
                  background: '#00a1e6',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '12px',
                  padding: '5px 14px',
                  borderRadius: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                ORDER BUMP ESCLUSIVO · 24 TESTI
              </span>
              <span
                style={{
                  background: 'rgba(0, 199, 56, 0.12)',
                  color: '#00963a',
                  border: '1px solid #00c738',
                  fontWeight: 700,
                  fontSize: '12px',
                  padding: '5px 14px',
                  borderRadius: '8px',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                Completo & Aggiornato 2026
              </span>
              <span
                style={{
                  background: 'rgba(136, 115, 150, 0.14)',
                  color: '#887396',
                  border: '1px solid #887396',
                  fontWeight: 700,
                  fontSize: '12px',
                  padding: '5px 14px',
                  borderRadius: '8px',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                3 Livelli di Lunghezza + Cronometro
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(24px, 3.2vw, 32px)',
                fontWeight: 700,
                color: '#363636',
                marginBottom: '6px',
                lineHeight: '1.3',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              Ora di Lettura — 24 Testi per Leggere Fino in Fondo
            </h2>

            <p
              style={{
                color: '#00a1e6',
                fontSize: '17px',
                fontWeight: 600,
                marginBottom: '16px',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              Percorso di Lettura Scorrevole: Testi Brevi e Coinvolgenti, Sfide a Tempo e Autovalutazione a Stelle
            </p>

            {/* Visual Hero Banner */}
            <div style={{ marginBottom: '24px', borderRadius: '16px', overflow: 'hidden', border: '1.5px solid #e6e8ea' }}>
              <img
                src="/images/ora_di_lettura_hero.png"
                alt="Ora di Lettura - 24 Testi per Leggere Fino in Fondo"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            <p style={{ color: '#555555', fontSize: '15px', lineHeight: '1.65', marginBottom: '22px' }}>
              Un bambino che fatica a stare concentrato su un testo non ha bisogno di letture forzate o lunghe, ma di
              racconti pensati apposta per <strong>farlo arrivare fino alla fine con soddisfazione e sorriso</strong>.
              I 24 testi di questo kit trasformano la lettura quotidiana in un piccolo gioco motivante grazie a sfide
              con cronometro, autovalutazione a 5 stelle e domande curiose sulla storia.
            </p>

            {/* Checklist features */}
            <div
              style={{
                background: '#f7f8fa',
                border: '1.5px solid #e6e8ea',
                borderRadius: '14px',
                padding: '22px',
                marginBottom: '26px'
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: '14px',
                  color: '#363636',
                  marginBottom: '14px',
                  fontFamily: 'Poppins, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.4px'
                }}
              >
                Cosa include questo percorso didattico:
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#363636' }}>
                  <svg
                    style={{ width: '20px', height: '20px', color: '#00c738', flexShrink: 0, marginTop: '2px' }}
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <span>
                    <strong>Guida Metodologica per Genitori:</strong> Consigli per supportare la lettura senza stress, senza interrompere continuamente e stimolando la voglia spontanea di leggere.
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#363636' }}>
                  <svg
                    style={{ width: '20px', height: '20px', color: '#00c738', flexShrink: 0, marginTop: '2px' }}
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <span>
                    <strong>Livello 1 — Testi Molto Brevi (8 Schede):</strong> Racconti leggeri ed entusiasmanti per partire subito con successo, pensati per chi si distrae rapidamente.
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#363636' }}>
                  <svg
                    style={{ width: '20px', height: '20px', color: '#00c738', flexShrink: 0, marginTop: '2px' }}
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <span>
                    <strong>Livello 2 — Testi Brevi (8 Schede):</strong> Brani narrativi e curiosità scientifiche di media lunghezza per costruire ritmo, concentrazione e fluidità.
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#363636' }}>
                  <svg
                    style={{ width: '20px', height: '20px', color: '#00c738', flexShrink: 0, marginTop: '2px' }}
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <span>
                    <strong>Livello 3 — Testi Più Lunghi (8 Schede):</strong> Avventure appassionanti che consolidano la capacità di lettura sostenuta in vista della scuola secondaria.
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#363636' }}>
                  <svg
                    style={{ width: '20px', height: '20px', color: '#00c738', flexShrink: 0, marginTop: '2px' }}
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <span>
                    <strong>Cronometro & Autovalutazione a 5 Stelle:</strong> Ogni scheda stimola il bambino a battere i propri record e a esprimere il proprio giudizio critico.
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#363636' }}>
                  <svg
                    style={{ width: '20px', height: '20px', color: '#00c738', flexShrink: 0, marginTop: '2px' }}
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <span>
                    <strong>Soluzioni Complete + Diario e Attestato:</strong> Risposte dettagliate a tutte le domande (Pagg. 35-40), registro progressi e attestato finale di lettura.
                  </span>
                </li>
              </ul>
            </div>

            {/* Action Bar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                paddingTop: '12px',
                borderTop: '1px solid #e6e8ea'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#6b6b6b',
                    background: '#f4f0f5',
                    padding: '6px 14px',
                    borderRadius: '8px'
                  }}
                >
                  📄 42 Pagine (PDF A4)
                </span>
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#6b6b6b',
                    background: '#f4f0f5',
                    padding: '6px 14px',
                    borderRadius: '8px'
                  }}
                >
                  💾 2.3 MB
                </span>
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#6b6b6b',
                    background: '#f4f0f5',
                    padding: '6px 14px',
                    borderRadius: '8px'
                  }}
                >
                  📖 24 Testi Completi
                </span>
              </div>

              <a
                href={pdfUrl}
                download={pdfDownloadName}
                onClick={triggerDownload}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: isDownloaded ? '#00963a' : '#00a1e6',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '16px',
                  padding: '14px 28px',
                  borderRadius: '14px',
                  textDecoration: 'none',
                  boxShadow: isDownloaded
                    ? '0 6px 18px rgba(0, 150, 58, 0.3)'
                    : '0 6px 18px rgba(0, 161, 230, 0.35)',
                  transition: 'all 0.2s ease',
                  textTransform: 'uppercase',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                <svg
                  style={{ width: '18px', height: '18px' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>{isDownloaded ? 'Scaricato ✅ (Riscarica)' : 'Scarica Manuale (PDF)'}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Section: Structure of the Kit (6 Parts Grid) */}
        <section style={{ marginBottom: '48px' }}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div
              style={{
                display: 'inline-block',
                background: 'rgba(0, 161, 230, 0.14)',
                border: '1.5px solid #00a1e6',
                color: '#00a1e6',
                fontWeight: 700,
                fontSize: '12px',
                padding: '5px 16px',
                borderRadius: '20px',
                letterSpacing: '0.8px',
                marginBottom: '12px',
                textTransform: 'uppercase',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              La Struttura del Percorso Didattico
            </div>
            <h2
              style={{
                fontSize: 'clamp(24px, 3.2vw, 32px)',
                fontWeight: 700,
                color: '#363636',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              3 Livelli di Lunghezza Progressiva + Soluzioni
            </h2>
            <p style={{ color: '#6b6b6b', fontSize: '16px', marginTop: '6px' }}>
              Dai racconti brevissimi alle storie complete: un viaggio pensato per far amare i libri.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '24px'
            }}
          >
            {readingSections.map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#ffffff',
                  border: `2px solid ${item.badgeColor}`,
                  borderRadius: '18px',
                  padding: '26px 22px',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '14px'
                    }}
                  >
                    <span
                      style={{
                        background: item.badgeColor,
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '11px',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.4px',
                        fontFamily: 'Poppins, sans-serif'
                      }}
                    >
                      {item.part}
                    </span>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#888888' }}>
                      {item.pages}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '24px' }}>{item.icon}</span>
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#363636',
                        lineHeight: '1.3',
                        fontFamily: 'Poppins, sans-serif'
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p style={{ color: '#666666', fontSize: '14px', lineHeight: '1.55', marginBottom: '16px' }}>
                    {item.description}
                  </p>
                </div>

                <div
                  style={{
                    background: '#f7f8fa',
                    border: '1px solid #e6e8ea',
                    borderRadius: '10px',
                    padding: '12px 14px'
                  }}
                >
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {item.highlights.map((hl, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#444444' }}>
                        <span style={{ color: '#00c738', fontWeight: 700 }}>✓</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Instructions & Printing Guide Section */}
        <section
          style={{
            background: '#ffffff',
            border: '1.5px solid #e6e8ea',
            borderRadius: '20px',
            padding: '36px 28px',
            marginBottom: '44px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <h3
              style={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#363636',
                fontFamily: 'Poppins, sans-serif',
                marginBottom: '8px'
              }}
            >
              💡 Consigli per Stimolare la Lettura Senza Spegnere l'Entusiasmo
            </h3>
            <p style={{ color: '#6b6b6b', fontSize: '15px' }}>
              Tre strategie per coltivare il piacere di leggere e far arrivare tuo figlio fino alla fine.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px'
            }}
          >
            <div
              style={{
                background: '#f7f8fa',
                border: '1.5px solid #e6e8ea',
                borderRadius: '14px',
                padding: '22px'
              }}
            >
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>🎯</div>
              <h4
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#363636',
                  fontFamily: 'Poppins, sans-serif',
                  marginBottom: '8px'
                }}
              >
                1. Lascia Scegliere al Bambino
              </h4>
              <p style={{ fontSize: '14px', color: '#666666', lineHeight: '1.55' }}>
                All'interno del livello adatto, lascia che sia lui o lei a decidere quale racconto leggere per primo. La libertà di scelta moltiplica l'interesse.
              </p>
            </div>

            <div
              style={{
                background: '#f7f8fa',
                border: '1.5px solid #e6e8ea',
                borderRadius: '14px',
                padding: '22px'
              }}
            >
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>🗣️</div>
              <h4
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#363636',
                  fontFamily: 'Poppins, sans-serif',
                  marginBottom: '8px'
                }}
              >
                2. Non Interrompere a Ogni Esitazione
              </h4>
              <p style={{ fontSize: '14px', color: '#666666', lineHeight: '1.55' }}>
                Durante la lettura ad alta voce, lascia scorrere la frase. Correggere continuamente spezza il filo del racconto e crea frustrazione.
              </p>
            </div>

            <div
              style={{
                background: '#f7f8fa',
                border: '1.5px solid #e6e8ea',
                borderRadius: '14px',
                padding: '22px'
              }}
            >
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>⏱️</div>
              <h4
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#363636',
                  fontFamily: 'Poppins, sans-serif',
                  marginBottom: '8px'
                }}
              >
                3. Il Cronometro come Gioco Personale
              </h4>
              <p style={{ fontSize: '14px', color: '#666666', lineHeight: '1.55' }}>
                Misurare i minuti serve solo come sfida contro se stessi per migliorare i propri record, mai come una gara contro altri bambini.
              </p>
            </div>
          </div>
        </section>

        {/* Support & Guarantee Purple Card */}
        <section
          style={{
            background: '#887396',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '36px 28px',
            textAlign: 'center',
            boxShadow: '0 8px 24px rgba(136, 115, 150, 0.25)'
          }}
        >
          <div style={{ fontSize: '32px', marginBottom: '12px' }}>🛡️</div>
          <h3
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#ffffff',
              fontFamily: 'Poppins, sans-serif',
              marginBottom: '10px'
            }}
          >
            Hai Bisogno di Assistenza o Vuoi Riscaricare il File?
          </h3>
          <p
            style={{
              fontSize: '15px',
              color: 'rgba(255, 255, 255, 0.92)',
              maxWidth: '640px',
              margin: '0 auto 20px auto',
              lineHeight: '1.6'
            }}
          >
            Il tuo acquisto include l'accesso a vita garantito a tutti i materiali. Salva questa pagina tra i preferiti del tuo
            browser per accedere ai file ogni volta che ne avrai bisogno. Per qualsiasi domanda o supporto tecnico, siamo sempre a tua completa disposizione.
          </p>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.18)',
              border: '1px solid rgba(255, 255, 255, 0.35)',
              padding: '10px 24px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            ✉️ Supporto via Email: risposte rapide entro 24 ore lavorative
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          background: '#ffffff',
          borderTop: '1.5px solid #e6e8ea',
          padding: '32px 20px',
          textAlign: 'center',
          fontSize: '14px',
          color: '#888888',
          fontFamily: 'Roboto, sans-serif'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ marginBottom: '8px' }}>
            © {new Date().getFullYear()} Ora di Lettura — Tutti i diritti riservati.
          </p>
          <p style={{ fontSize: '13px', color: '#aaaaaa' }}>
            Percorso pratico di lettura scorrevole per la scuola primaria e secondaria di primo grado.
          </p>
        </div>
      </footer>
    </div>
  );
}
