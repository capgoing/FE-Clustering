import useFetch from "../../../hooks/useFetch";
import styled from "styled-components";
import colors from "../../../styles/colors";

const ImageContainer = styled.div`
  width: 100%;
  height: 60%;
  position: relative;
`;

const LegendContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1vw;
  font-size: 0.8vw;
  padding: 1vw;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5vw;
`;

const ColorCircle = styled.div`
  width: 0.5vw;
  height: 0.5vw;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

const getClusterColor = (clusterId) => {
  const hue = (clusterId * 47) % 360;
  return `hsl(${hue}, 70%, 60%)`;
};

const Result = () => {
  const { data } = useFetch("/api/cluster");
  const clusterList = data?.data?.cluster ?? [];

  const canvasWidth = 1000;
  const canvasHeight = 500;

  const getClusterCenter = (clusterId) => {
    const baseX = 100 + (clusterId * 73) % (canvasWidth - 200);
    const baseY = 100 + ((clusterId * 43) % (canvasHeight - 200));
    return { x: baseX, y: baseY };
  };

  const nodes = clusterList.flatMap((cluster) => {
    const center = getClusterCenter(cluster.clusterId);
    const color = getClusterColor(cluster.clusterId);
    const radius = 40;

    return cluster.words.map((word, index) => {
      const angle = (2 * Math.PI * index) / cluster.words.length;
      return {
        id: `${cluster.clusterId}-${index}`,
        word,
        x: center.x + radius * Math.cos(angle),
        y: center.y + radius * Math.sin(angle),
        color,
      };
    });
  });

  return (
    <>
      <ImageContainer>
        <svg
          viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: "100%",
            height: "80%",
            background: colors.white,
            borderRadius: "0.4vw",
          }}
        >
          {nodes.map((node) => (
            <g key={node.id}>
              <circle cx={node.x} cy={node.y} r={8} fill={node.color} />
              <text x={node.x + 10} y={node.y + 4} fontSize={14} fill={colors.black}>
                {node.word}
              </text>
            </g>
          ))}
        </svg>

        <LegendContainer>
          {clusterList.map((cluster) => (
            <LegendItem key={cluster.clusterId}>
              <ColorCircle color={getClusterColor(cluster.clusterId)} />
              {cluster.representWord}
            </LegendItem>
          ))}
        </LegendContainer>
      </ImageContainer>
    </>
  );
};

export default Result;
