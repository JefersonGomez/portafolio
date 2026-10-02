// Lámina grabada para TechRAG Assistant, el único proyecto sin captura.
// No es un icono decorativo: es el pipeline que describe su README, dibujado en
// el mismo lenguaje de línea fina que los sellos. Termina en una burbuja de chat,
// que es el único elemento violeta de la lámina.

const NODES_INGESTA = [
  { x: 48, w: 132, label: 'REPO' },
  { x: 224, w: 168, label: 'FRAGMENTOS' },
  { x: 436, w: 172, label: 'EMBEDDINGS' },
  { x: 652, w: 124, label: 'PGVECTOR' },
];

const NODES_CONSULTA = [
  { x: 48, w: 142, label: 'PREGUNTA' },
  { x: 234, w: 158, label: 'BÚSQUEDA' },
  { x: 436, w: 110, label: 'LLM' },
];

const ROW_A = 122;
const ROW_B = 330;
const H = 56;

function Row({ nodes, y }) {
  return (
    <g>
      {nodes.map((n) => (
        <g key={n.label}>
          <rect
            x={n.x}
            y={y}
            width={n.w}
            height={H}
            rx="8"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <text
            x={n.x + n.w / 2}
            y={y + H / 2}
            fill="currentColor"
            fontSize="13"
            fontWeight="500"
            letterSpacing="1.4"
            textAnchor="middle"
            dominantBaseline="central"
          >
            {n.label}
          </text>
        </g>
      ))}
      {nodes.slice(0, -1).map((n, i) => (
        <line
          key={`a-${n.label}`}
          x1={n.x + n.w + 6}
          y1={y + H / 2}
          x2={nodes[i + 1].x - 10}
          y2={y + H / 2}
          stroke="currentColor"
          strokeWidth="1.5"
          markerEnd="url(#rag-arrow)"
        />
      ))}
    </g>
  );
}

export default function RagPlate({ className = '' }) {
  return (
    <svg
      viewBox="0 0 824 460"
      className={className}
      fill="none"
      role="img"
      aria-label="Diagrama del pipeline de TechRAG: un repositorio se parte en fragmentos, se convierte en embeddings y se indexa en pgvector; una pregunta dispara una búsqueda semántica que pasa por un modelo de lenguaje y devuelve una respuesta."
    >
      <defs>
        <marker
          id="rag-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 1 L 9 5 L 0 9 z" fill="currentColor" />
        </marker>
      </defs>

      <g className="text-muted">
        <text x="48" y="96" fill="currentColor" fontSize="11" fontWeight="500" letterSpacing="1.8">
          INGESTA
        </text>
        <Row nodes={NODES_INGESTA} y={ROW_A} />

        {/* La ruta que baja del índice a la búsqueda, como en un plano técnico. */}
        <path
          d="M 714 178 L 714 258 L 313 258 L 313 320"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          markerEnd="url(#rag-arrow)"
        />

        <text x="48" y="304" fill="currentColor" fontSize="11" fontWeight="500" letterSpacing="1.8">
          CONSULTA
        </text>
        <Row nodes={NODES_CONSULTA} y={ROW_B} />

        <line
          x1="552"
          y1={ROW_B + H / 2}
          x2="594"
          y2={ROW_B + H / 2}
          stroke="currentColor"
          strokeWidth="1.5"
          markerEnd="url(#rag-arrow)"
        />
      </g>

      {/* La respuesta: el único elemento violeta de la lámina. */}
      <g className="text-violet">
        <path
          d="M 618 312 h 148 a 14 14 0 0 1 14 14 v 64 a 14 14 0 0 1 -14 14 h -108 l -26 22 v -22 h -14 a 14 14 0 0 1 -14 -14 v -64 a 14 14 0 0 1 14 -14 z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="668" cy="358" r="6.5" fill="currentColor" />
        <circle cx="696" cy="358" r="6.5" fill="currentColor" />
        <circle cx="724" cy="358" r="6.5" fill="currentColor" />
      </g>
    </svg>
  );
}
