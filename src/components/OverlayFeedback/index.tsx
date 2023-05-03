import { useWindowDimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import { Canvas, Rect, BlurMask } from '@shopify/react-native-skia';

import { THEME } from '../../styles/theme';

const STATUS = ['transparent', THEME.COLORS.BRAND_LIGHT, THEME.COLORS.DANGER_LIGHT] as const;

type Props = {
  status: 0 | 1 | 2;
}

export function OverlayFeedback({ status }: Props) {
  const color = STATUS[status]

  const { height, width } = useWindowDimensions()

  return (
    <Animated.View style={{ height, width, position: 'absolute' }}>
      <Canvas style={{ flex: 1 }}>
        <Rect
          x={0}
          y={0}
          height={height}
          width={width}
          color={color}
        >
          <BlurMask blur={50} style="inner" />
        </Rect>
      </Canvas>
    </Animated.View>
  );
}
