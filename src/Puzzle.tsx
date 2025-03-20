import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

type CellProps = {
  x: number;
  y: number;
};

const successWave = keyframes`
  25% {
    background-color: #d9deff88;
    color: #096dc8;
    font-size: 45px;
    font-weight: bold;
  }
`;

export const Wrapper = styled.div<Partial<CellProps>>`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 250px;
  border-top: 1px solid black;
  border-left: 1px solid black;
  ${({ x }) => x && `--success-start-x: ${x};`}
  ${({ y }) => y && `--success-start-y: ${y};`}
`;

const setSuccess = (successProps: CellProps | null) => {
  const puzzleElement = document.getElementById('puzzle');

  puzzleElement?.style.removeProperty('--success-start-x');
  puzzleElement?.style.removeProperty('--success-start-y');

  if (puzzleElement && successProps?.x && successProps.y) {
    const { x, y } = successProps;
    setTimeout(() => {
      puzzleElement.style.setProperty('--success-start-x', `${x}`);
      puzzleElement.style.setProperty('--success-start-y', `${y}`);
    }, 1);
  }
};

const Cell = styled.div<CellProps>`
  width: 50px;
  height: 50px;
  position: relative;
  font-size: 35px;
  text-align: center;
  line-height: 50px;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  background: #444;
  --x: ${({ x }) => x};
  --y: ${({ y }) => y};

  #puzzle[style*='--success-start-x'][style*='--success-start-y'] & {
    animation: ${successWave} 1s linear forwards;
    animation-delay: calc(
      (
          max(
              var(--x) - var(--success-start-x),
              var(--success-start-x) - var(--x)
            ) +
            max(
              var(--y) - var(--success-start-y),
              var(--success-start-y) - var(--y)
            )
        ) *
        0.2s
    );
  }

  &::after {
    content: '${({ x, y }) => `(${x}, ${y})`}';
    position: absolute;
    top: 0;
    left: 0;
    font-size: 12px;
    line-height: 12px;
  }
`;

const PUZZLE = 'irishpolioabetsdonutsteps';

const Puzzle = () => (
  <>
    <Wrapper id="puzzle">
      {[...Array(25)].map((_, i) => {
        const x = (i % 5) + 1;
        const y = Math.floor(i / 5) + 1;
        return (
          <Cell key={i} x={x} y={y} onClick={() => setSuccess({ x, y })}>
            {PUZZLE[i]}
          </Cell>
        );
      })}
    </Wrapper>
  </>
);

export default Puzzle;
