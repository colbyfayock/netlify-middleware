import * as React from 'react';

import Head from 'next/head';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';
import Button from 'components/Button';

import products from 'data/products.json';

import styles from 'styles/App.module.scss';

const useHydrated = () => {
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    setHydrated(true);
  }, []);
  return hydrated;
};

export default function Home({ shipping }) {
  const hydrated = useHydrated();

  return (
    <Layout>

      <Head>
        <title>Space Jelly Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section className={styles.homeHeader}>
        <Container>
          <h1 className={styles.homeTitle}>Space Jelly Shop</h1>
          {hydrated && shipping.country && (
            <p className={ styles.homeShipping }>
              { shipping.rate > 0 && <>{ shipping.rate } Flat Rate Shipping</>}
              { shipping.rate === 0 && (
                <>
                  <strong>FREE</strong> Shipping
                </>
              )}
              <br />
              <span>when shipping to { shipping.country }</span>
            </p>
          )}
        </Container>
      </Section>

      <Section>
        <Container>
          <ul className={styles.productGrid}>
            {products.map(product => {
              return (
                <li key={product.id}>
                  <img src={ product.image } />
                  <h2>{ product.name }</h2>
                  <p>{ product.description }</p>
                  <Button>Add to Cart</Button>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      shipping: {
        country: null,
        rate: 99.99,
      },
    },
  };
}
