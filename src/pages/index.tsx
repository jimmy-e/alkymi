import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import PageHeader from './PageHeader/PageHeader';
import TableHeader from './TableHeader/TableHeader';
import { getData } from '@/store/data/dataActions';
import Table from './Table/Table';
import styles from './Index.module.css'

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const getSampleData = async () => {
    const data = await axios.get('https://private-39e16-alkymiexercise.apiary-mock.com/list');
    dispatch(getData(data.data.results));
  };

  useEffect(() => {
    getSampleData();
  }, []);

  return (
    <main className={styles.main}>
      <PageHeader />
      <div className={styles.tableContainer}>
        <TableHeader />
        <Table />
      </div>
    </main>
  );
};

export default Home;
