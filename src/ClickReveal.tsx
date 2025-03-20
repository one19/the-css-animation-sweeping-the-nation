import styled from '@emotion/styled';
import { useState } from 'react';

type Props = {
  points: string[];
};

const Item = styled.li<{ visible: boolean }>`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 300ms ease-in-out;
`;

const ClickReveal = ({ points }: Props) => {
  const [visibleCount, setVisibleCount] = useState(0);

  return (
    <ul
      onClick={() =>
        setVisibleCount((count) => Math.min(count + 1, points.length))
      }
    >
      {points.map((point, i) => (
        <Item key={i} visible={i < visibleCount}>
          {point}
        </Item>
      ))}
    </ul>
  );
};

export default ClickReveal;
