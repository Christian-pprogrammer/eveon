import Head from 'next/head';
import styles from '@/styles/Home.module.css';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const QUERY = gql`
  {
    products {
      items {
        slug
        description
        assets {
          source
        }
      }
    }
  }
`;

function Home() {
  const { loading, data } = useQuery(QUERY);
  console.log(data);
  return <div className={styles.container}>
    <h1>Products from the vendure</h1>
    {
      data && data.products.items.map((item: any, index: number)=>(
        <h3 key={index}>{index + 1} : {item.slug}</h3>
      ))
    }
  </div>;
}

export default Home;