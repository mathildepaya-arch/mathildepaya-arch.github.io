import React, { useMemo } from 'react';
import Plot from 'react-plotly.js';

function jsonToTreemapData(node) {
    const labels = [];
    const parents = [];
    const colors = [];

    function statusToColor(status) {
        switch (status) {
            case 'mastered':
                return 'green';
            case 'interested':
                return 'lightgreen';
            case 'unknown':
            default:
                return 'lightgrey';
        }
    }

    function traverse(node, parentName = '') {
        labels.push(node.name);
        parents.push(parentName);

        // Determine color only for leaf nodes
        if (!node.children || node.children.length === 0) {
            colors.push(statusToColor(node.status));
        } else {
            colors.push('lightgrey'); // Internal nodes have no color
            node.children.forEach(child => traverse(child, node.name));
        }
    }

    traverse(node);
    return { labels, parents, colors };
}

export default function SkillTree({ data, width, height }) {
  const { labels, parents, colors } = useMemo(() => jsonToTreemapData(data), [data]);

  return (
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
        font: { family: 'Work Sans, sans-serif', color: 'black' },
        paper_bgcolor: 'white',
        plot_bgcolor: 'white',
        hovermode: false,
      }}
      config={{ displayModeBar: false }}
    />
  );
}
