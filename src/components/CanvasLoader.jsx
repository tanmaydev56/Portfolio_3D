
import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress(); // Correct spelling

  return (
    <Html
      as='div'
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <p
        className='canvas-loader'
        style={{ fontSize: 14, marginTop: 40, color: '#f1f1f1' }}
      >
        {progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
      </p>
    </Html>
  );
};

export default CanvasLoader;
