import DarkVeil from './DarkVeil';

export default function App() {
  return (
    <main className="landing">
      <div className="landing__background" aria-hidden="true">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1}
          lightMode={false}
        />
      </div>

      <div className="landing__vignette" aria-hidden="true" />
      <div className="landing__grain" aria-hidden="true" />

      <header className="brand">
        <span className="brand__mark">S7</span>
        <span className="brand__word">SEV7N</span>
      </header>

      <section className="hero" aria-labelledby="mesoweb-title">
        <p className="hero__eyebrow">A new web workspace</p>
        <h1 id="mesoweb-title" className="hero__title">MESOWEB</h1>
        <p className="hero__byline">By <span>SEV7N</span></p>
        <p className="hero__description">
          A focused interface for the next generation of the Meso platform.
        </p>

        <button className="hero__cta" type="button">
          <span>Enter MESOWEB</span>
          <span className="hero__arrow" aria-hidden="true">↗</span>
        </button>
      </section>

      <footer className="landing__footer">
        <span>MESOWEB</span>
        <span className="landing__line" aria-hidden="true" />
        <span>01 / 01</span>
      </footer>
    </main>
  );
}