import styles from '../styles/Home.module.css';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Layout from '../components/layout/layout';
import FotosPrincipal from '../components/ui/FotosPrincipal';
import InfoNew from '../components/ui/InfoNew';


const Home = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <div>
          <FotosPrincipal/>
          <InfoNew />
        </div>
      </Layout>
    </div>
  )
}

export default Home;

const Heading = styled.h1`
  color: red
`;