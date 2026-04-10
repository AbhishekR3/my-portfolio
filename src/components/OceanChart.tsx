import type { OceanData } from '../types';
import './OceanChart.css';

interface OceanChartProps {
  data: OceanData;
}

const TRAITS = [
  { key: 'O' as const, label: 'Openness',          color: '#8b5cf6' },
  { key: 'C' as const, label: 'Conscientiousness', color: '#14b8a6' },
  { key: 'E' as const, label: 'Extraversion',      color: '#f59e0b' },
  { key: 'A' as const, label: 'Agreeableness',     color: '#22c55e' },
  { key: 'N' as const, label: 'Neuroticism',       color: '#ef4444' },
];

// Pentagon starting from top, going clockwise, 72° apart
const ANGLES = TRAITS.map((_, i) => ((i * 72 - 90) * Math.PI) / 180);

const CX = 250;
const CY = 170;
const MAX_R = 100;
const LABEL_R = 132;

// text-anchor per vertex: top=middle, right side=start, left side=end
const TEXT_ANCHOR: Array<'middle' | 'start' | 'end'> = ['middle', 'start', 'start', 'end', 'end'];

function pt(r: number, angle: number): [number, number] {
  return [CX + r * Math.cos(angle), CY + r * Math.sin(angle)];
}

function polygonPoints(r: number): string {
  return ANGLES.map((a) => pt(r, a).join(',')).join(' ');
}

export default function OceanChart({ data }: OceanChartProps) {
  const scorePoints = ANGLES.map((angle, i) => {
    const r = (data[TRAITS[i].key].score / 100) * MAX_R;
    return pt(r, angle).join(',');
  }).join(' ');

  // Bottom of the lowest label row (Extraversion / Agreeableness scores)
  const subtitleY = CY + LABEL_R * Math.sin((54 * Math.PI) / 180) + 14 + 18;

  return (
    <svg
      viewBox={`0 0 500 ${Math.ceil(subtitleY) + 10}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="OCEAN personality radar chart"
      className="ocean-chart-svg"
    >
      {/* Title */}
      <text x={CX} y={20} textAnchor="middle" className="ocean-chart-title">
        OCEAN Test Profile
      </text>

      {/* Grid pentagons — 25%, 50%, 75%, 100% */}
      {[0.25, 0.5, 0.75, 1.0].map((level) => (
        <polygon
          key={level}
          points={polygonPoints(MAX_R * level)}
          fill="none"
          stroke="var(--color-border)"
          strokeWidth={level === 1.0 ? 1.5 : 1}
        />
      ))}

      {/* Colored axis lines from center to each vertex */}
      {ANGLES.map((angle, i) => {
        const [x, y] = pt(MAX_R, angle);
        return (
          <line
            key={i}
            x1={CX}
            y1={CY}
            x2={x}
            y2={y}
            stroke={TRAITS[i].color}
            strokeWidth={1.5}
            strokeOpacity={0.5}
          />
        );
      })}

      {/* Score fill polygon */}
      <polygon points={scorePoints} className="ocean-score-polygon" />

      {/* Colored vertex dots */}
      {ANGLES.map((angle, i) => {
        const key = TRAITS[i].key;
        const r = (data[key].score / 100) * MAX_R;
        const [x, y] = pt(r, angle);
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={5}
            fill={TRAITS[i].color}
            stroke="var(--color-bg-elevated)"
            strokeWidth={1.5}
          />
        );
      })}

      {/* Labels: full trait name (colored) + numeric score */}
      {ANGLES.map((angle, i) => {
        const key = TRAITS[i].key;
        const [lx, ly] = pt(LABEL_R, angle);
        const anchor = TEXT_ANCHOR[i];
        const score = Math.round(data[key].score);
        return (
          <g key={i}>
            <text x={lx} y={ly} textAnchor={anchor} className="ocean-label-key" fill={TRAITS[i].color}>
              {TRAITS[i].label}
            </text>
            <text x={lx} y={ly + 14} textAnchor={anchor} className="ocean-label-score">
              {score}
            </text>
          </g>
        );
      })}

      {/* Subtitle below the diagram */}
      <text x={CX} y={subtitleY} textAnchor="middle" className="ocean-chart-subtitle">
        Based on Claude Chats and Search History
      </text>
    </svg>
  );
}
