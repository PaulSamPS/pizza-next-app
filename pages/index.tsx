import { Title } from '@components';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Title level='1'>h1</Title>
      <Title level='2'>h2</Title>
      <Title level='3'>h3</Title>
      <Title level='4'>h4</Title>
      <Title level='1' caps>uppercase</Title>
    </div>
  );
}
