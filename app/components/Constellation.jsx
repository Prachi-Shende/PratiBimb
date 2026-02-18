export default function Constellation() {
  const nodes = [
    [200, 80],  [380, 160], [500, 60],  [650, 140], [750, 80],
    [100, 280], [300, 320], [480, 260], [620, 300], [800, 250],
    [150, 460], [400, 500], [570, 420], [720, 480], [880, 400],
    [250, 640], [450, 680], [600, 600], [780, 660], [950, 580],
  ];

  const edges = [
    [0,1],[1,2],[2,3],[3,4],[0,5],[1,6],[2,7],[3,8],[4,9],
    [5,6],[6,7],[7,8],[8,9],[5,10],[6,11],[7,12],[8,13],[9,14],
    [10,11],[11,12],[12,13],[13,14],[10,15],[11,16],[12,17],[13,18],[14,19],
    [15,16],[16,17],[17,18],[18,19],
  ];

  return (
    <svg
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.15,
        pointerEvents: 'none',
      }}
    >
      <defs>
        <style>{`
          @keyframes lineDraw {
            0%  { stroke-dashoffset: 200; }
            100%{ stroke-dashoffset: 0;   }
          }
          @keyframes nodePulse {
            0%,100% { r:2; opacity:0.5; }
            50%     { r:4; opacity:1;   }
          }
          .cline {
            stroke: #D4AF37;
            stroke-width: 0.8;
            fill: none;
            stroke-dasharray: 200;
            animation: lineDraw 3s ease forwards;
          }
          .cnode {
            fill: #D4AF37;
            animation: nodePulse 4s ease-in-out infinite;
          }
        `}</style>
      </defs>

      {edges.map(([a, b], i) => (
        <line
          key={i}
          className="cline"
          x1={`${nodes[a][0] / 10}%`} y1={`${nodes[a][1] / 7.5}%`}
          x2={`${nodes[b][0] / 10}%`} y2={`${nodes[b][1] / 7.5}%`}
          style={{ animationDelay: `${i * 0.08}s` }}
        />
      ))}

      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          className="cnode"
          cx={`${x / 10}%`}
          cy={`${y / 7.5}%`}
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </svg>
  );
}
