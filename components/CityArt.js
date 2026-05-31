// Original, simplified landmark silhouettes (no copyrighted assets).
const ART = {
  london: (
    <>
      <rect x="46" y="14" width="10" height="46" />
      <polygon points="46,14 51,3 56,14" />
      <rect x="34" y="38" width="24" height="22" />
    </>
  ),
  paris: (
    <>
      <path d="M51 3 L46 26 L41 60 L47 60 L50 44 L52 44 L55 60 L61 60 L56 26 Z" />
      <rect x="44" y="30" width="14" height="3" />
    </>
  ),
  rome: <path d="M22 60 V40 a28 13 0 0 1 56 0 V60 Z" />,
  dubai: (
    <>
      <polygon points="50,2 53,22 57,60 43,60 47,22" />
      <rect x="30" y="42" width="8" height="18" />
      <rect x="62" y="48" width="8" height="12" />
      <rect x="20" y="50" width="6" height="10" />
      <rect x="74" y="46" width="6" height="14" />
    </>
  ),
  tokyo: (
    <>
      <rect x="48" y="12" width="4" height="8" />
      <polygon points="38,22 62,22 57,29 43,29" />
      <polygon points="34,33 66,33 60,40 40,40" />
      <polygon points="30,45 70,45 63,53 37,53" />
      <rect x="45" y="53" width="10" height="7" />
    </>
  ),
  singapore: (
    <>
      <rect x="33" y="26" width="6" height="34" />
      <rect x="47" y="26" width="6" height="34" />
      <rect x="61" y="26" width="6" height="34" />
      <path d="M28 26 Q50 16 72 26 L72 22 Q50 12 28 22 Z" />
    </>
  ),
  sydney: (
    <>
      <path d="M18 60 Q28 32 42 60 Z" />
      <path d="M32 60 Q46 22 60 60 Z" />
      <path d="M50 60 Q62 30 78 60 Z" />
      <rect x="14" y="58" width="70" height="2" />
    </>
  ),
  delhi: <path d="M36 60 V32 a14 14 0 0 1 28 0 V60 H55 V36 a5 5 0 0 0 -10 0 V60 Z" />,
  _default: (
    <>
      <rect x="18" y="42" width="9" height="18" />
      <rect x="31" y="32" width="9" height="28" />
      <rect x="44" y="38" width="9" height="22" />
      <rect x="57" y="28" width="9" height="32" />
      <rect x="70" y="44" width="9" height="16" />
    </>
  ),
};

export default function CityArt({ city, className = "" }) {
  return (
    <svg
      viewBox="0 0 100 60"
      preserveAspectRatio="xMidYMax meet"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      {ART[city.toLowerCase()] || ART._default}
    </svg>
  );
}
