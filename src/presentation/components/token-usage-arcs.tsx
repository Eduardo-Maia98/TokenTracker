import { Text, View } from 'react-native';
import { PieChartPro } from 'react-native-gifted-charts';

type TokenUsageArcsProps = {
  autoPercent: number;
  paidPercent: number;
  size?: number;
  strokeWidth?: number;
};

/** Tailwind gap-4 — vertical space between the two semicircle charts. */
const ARC_GAP_PX = 16;

function formatPercent(value: number): string {
  if (Number.isInteger(value)) {
    return `${value}%`;
  }
  return `${value.toFixed(1)}%`;
}

function clampPercent(value: number): number {
  if (value < 0) {
    return 0;
  }
  if (value > 100) {
    return 100;
  }
  return value;
}

function progressData(
  percent: number,
  fillColor: string,
  trackColor: string,
  edgeRadius: number,
) {
  const filled = clampPercent(percent);
  const roundBoth = {
    isStartEdgeCurved: true,
    isEndEdgeCurved: true,
    startEdgeRadius: edgeRadius,
    endEdgeRadius: edgeRadius,
  };

  if (filled <= 0) {
    return [{ value: 100, color: trackColor, ...roundBoth }];
  }
  if (filled >= 100) {
    return [{ value: 100, color: fillColor, ...roundBoth }];
  }

  return [
    {
      value: filled,
      color: fillColor,
      ...roundBoth,
    },
    {
      value: 100 - filled,
      color: trackColor,
      isEndEdgeCurved: true,
      endEdgeRadius: edgeRadius,
    },
  ];
}

type SemicircleProgressProps = {
  percent: number;
  fillColor: string;
  radius: number;
  strokeWidth: number;
};

function SemicircleProgress({
  percent,
  fillColor,
  radius,
  strokeWidth,
}: SemicircleProgressProps) {
  const innerRadius = Math.max(radius - strokeWidth, 0);
  const edgeRadius = strokeWidth / 2;

  return (
    <PieChartPro
      data={progressData(percent, fillColor, '#E5E5E5', edgeRadius)}
      donut
      semiCircle
      radius={radius}
      innerRadius={innerRadius}
      edgesRadius={edgeRadius}
      curvedStartEdges
      curvedEndEdges
      isAnimated={false}
    />
  );
}

/**
 * Dual semicircle progress charts: upper = auto, lower = paid.
 * Built with react-native-gifted-charts PieChartPro (rounded edges).
 */
export function TokenUsageArcs({
  autoPercent,
  paidPercent,
  size = 260,
  strokeWidth = 14,
}: TokenUsageArcsProps) {
  const radius = (size - ARC_GAP_PX) / 2;
  const chartHeight = radius + strokeWidth;

  return (
    <View
      className="items-center justify-center"
      style={{ width: size, height: chartHeight * 2 + ARC_GAP_PX }}
    >
      <View style={{ height: chartHeight, overflow: 'hidden', transform: [{ scaleX: -1 }] }}>
        <SemicircleProgress
          percent={autoPercent}
          fillColor="#171717"
          radius={radius}
          strokeWidth={strokeWidth}
        />
      </View>

      <View style={{ height: ARC_GAP_PX }} />

      <View
        style={{
          height: chartHeight,
          overflow: 'hidden',
          // rotate puts the semi on the bottom; scaleX keeps fill starting from the left
          transform: [{ rotate: '180deg' }, { scaleX: 1 }],
        }}
      >
        <SemicircleProgress
          percent={paidPercent}
          fillColor="#525252"
          radius={radius}
          strokeWidth={strokeWidth}
        />
      </View>

      <View className="absolute items-center justify-center">
        <Text className="text-2xl font-semibold text-neutral-900">
          {formatPercent(autoPercent)}
        </Text>
        <Text className="mt-1 text-xs uppercase tracking-wide text-neutral-500">
          Auto
        </Text>
        <View className="my-3 h-px w-10 bg-neutral-200" />
        <Text className="text-2xl font-semibold text-neutral-700">
          {formatPercent(paidPercent)}
        </Text>
        <Text className="mt-1 text-xs uppercase tracking-wide text-neutral-500">
          Paid
        </Text>
      </View>
    </View>
  );
}
