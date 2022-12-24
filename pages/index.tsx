import React from 'react';
import { GetServerSideProps } from 'next';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { withLayout } from '@hoc';
import { Header } from '@templates/Header';
import { Category, ProductCard } from '@entities';
import { Container } from '@components/Blocks';
import pizza1 from '../entities/ProductCard/pizza2.webp';
import pizza1Slim from '../entities/ProductCard/pizza2Slim.webp';
import pizza2 from '../entities/ProductCard/product.webp';
import pizza2Slim from '../entities/ProductCard/product-slim.webp';

const products = [
  {
    id: 0,
    badge: 'New',
    name: 'Пепперони',
    description:
      'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',
    price: 399,
    image: { regular: pizza1, slim: pizza1Slim },
    promotion: true,
  },
  {
    id: 1,
    badge: null,
    name: 'Сырная 🌱👶 ',
    description: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
    price: 599,
    image: { regular: pizza2, slim: pizza2Slim },
    promotion: false,
  },
];

function Home() {
  return (
    <>
      <Header />
      <Category />
      <Container>
        <ProductCard products={products} />
      </Container>
    </>
  );
}

export default withLayout(Home);

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const userAgent = req.headers['user-agent'];

  const { isDesktop } = getSelectorsByUserAgent(userAgent!);
  return {
    props: { isDesktop },
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface HomeProps extends Record<string, unknown> {
  isDesktop: boolean;
}
