import React, { useMemo } from 'react';
import Plot from 'react-plotly.js';

function jsonToTreemapData(node) {
  const labels = [];
  const parents = [];
  const colors = [];

  function statusToColor(status) {
    switch (status) {
      case 'mastered':
        return '#43676b';
      case 'interested':
        return '#87bba3';
      default:
        return '#f8fbfc';
    }
  }

  function traverse(node, parentName = '') {
    labels.push(node.name);
    parents.push(parentName);

    // Determine color only for leaf nodes
    if (!node.children || node.children.length === 0) {
      colors.push(statusToColor(node.status));
    } else {
      colors.push('#c9e3ca'); // Internal nodes have no color
      node.children.forEach(child => traverse(child, node.name));
    }
  }

  traverse(node);
  return { labels, parents, colors };
}

export default function SkillTree({ data, width, height }) {
  const { labels, parents, colors } = useMemo(() => jsonToTreemapData(data), [data]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
      <Plot
        data={[
          {
            type: 'treemap',
            labels,
            parents,
            marker: { colors, showscale: false },
            branchvalues: 'total',
            tiling: { pad: 15 },
            hoverinfo: 'skip',
          },
        ]}
        layout={{
          margin: { t: 50, l: 25, r: 25, b: 25 },
          title: data.name,
          width,
          height,
          font: { family: 'Work Sans, sans-serif' },
          hovermode: false,
        }}
        config={{ displayModeBar: false }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start', marginTop: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{
            display: 'inline-block',
            width: 8,
            height: 8,
            background: '#43676b',
            borderRadius: 2,
            border: '1px solid #333'
          }} />
          <span style={{ fontSize: 11 }}>Mastered</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{
            display: 'inline-block',
            width: 8,
            height: 8,
            background: '#87bba3',
            borderRadius: 2,
            border: '1px solid #333'
          }} />
          <span style={{ fontSize: 11 }}>Interested</span>
        </div>
      </div>
    </div>
  );
}
