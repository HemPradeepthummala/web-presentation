class CluedoTitleSlide extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Jost:wght@300;400;500&display=swap');

        :host {
          display: block;
          width: 100%;
          aspect-ratio: 16 / 9;
        }

        .slide {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
          position: relative;
          font-family: 'Jost', sans-serif;
        }

        /* ── Left panel ── */
        .left {
          background: #2c1a0e;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 6% 7%;
          position: relative;
          overflow: hidden;
        }

        .left::before {
          content: '';
          position: absolute;
          top: -60px;
          right: -60px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 40px solid rgba(255, 255, 255, 0.04);
        }

        .left::after {
          content: '';
          position: absolute;
          bottom: -40px;
          left: -40px;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border: 28px solid rgba(255, 255, 255, 0.04);
        }

        .eyebrow {
          font-size: clamp(9px, 1.1vw, 13px);
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c9a46e;
          margin-bottom: clamp(8px, 1.5vw, 18px);
        }

        .title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 6.5vw, 76px);
          font-weight: 700;
          color: #fdf8f2;
          line-height: 1;
          margin-bottom: clamp(6px, 1.2vw, 14px);
        }

        .subtitle {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: clamp(11px, 1.6vw, 19px);
          color: #c9a46e;
          font-weight: 400;
          letter-spacing: 0.04em;
        }

        .divider {
          width: 40px;
          height: 2px;
          background: #c9a46e;
          margin: clamp(10px, 2vw, 22px) 0;
        }

        .team-name {
          font-size: clamp(9px, 1.1vw, 13px);
          font-weight: 300;
          letter-spacing: 0.12em;
          color: rgba(253, 248, 242, 0.5);
          text-transform: uppercase;
        }

        .magnifier {
          position: absolute;
          bottom: 12%;
          right: 6%;
          opacity: 0.07;
        }

        /* ── Right panel ── */
        .right {
          background: #fdf8f2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5% 6%;
          gap: clamp(10px, 2vw, 22px);
        }

        .section {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .role-label {
          font-size: clamp(8px, 0.9vw, 11px);
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #c9a46e;
        }

        .names {
          font-size: clamp(11px, 1.4vw, 16px);
          font-weight: 400;
          color: #2c1a0e;
          letter-spacing: 0.01em;
        }

        .sep {
          width: 100%;
          height: 0.5px;
          background: #e4d8c8;
        }
      </style>

      <div class="slide">
        <div class="left">
          <div class="eyebrow">Team Presentation</div>
          <div class="title">Cluedo</div>
          <div class="subtitle">Who done it?</div>
          <div class="divider"></div>
          <div class="team-name">The Deductives</div>

          <svg class="magnifier" width="120" height="120" viewBox="0 0 120 120" fill="none">
            <circle cx="50" cy="50" r="36" stroke="#fdf8f2" stroke-width="10"/>
            <line x1="76" y1="76" x2="108" y2="108" stroke="#fdf8f2" stroke-width="10" stroke-linecap="round"/>
          </svg>
        </div>

        <div class="right">
          <div class="section">
            <div class="role-label">Business Analyst</div>
            <div class="names">Javed</div>
          </div>
          <div class="sep"></div>
          <div class="section">
            <div class="role-label">Quality Assurance</div>
            <div class="names">Nitesh</div>
          </div>
          <div class="sep"></div>
          <div class="section">
            <div class="role-label">Developers</div>
            <div class="names">Mohanthi &nbsp;·&nbsp; Hem &nbsp;·&nbsp; Rahul</div>
            <div class="names">Umar &nbsp;·&nbsp; Vismaya &nbsp;·&nbsp; Sagnik</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("cluedo-title-slide", CluedoTitleSlide);