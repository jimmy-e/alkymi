import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Result } from '@/types';
import PageHeader from './PageHeader/PageHeader';
import TableHeader from './TableHeader/TableHeader';
import { getData } from '@/store/data/dataActions';
import { updateForm } from '@/store/view/viewActions';
import Table from './Table/Table';
import styles from './Index.module.css'

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const getSampleData = async () => {
    const data = await axios.get('https://private-39e16-alkymiexercise.apiary-mock.com/list');
    dispatch(getData(data.data.results));

    data.data.results.forEach((result: Result) => {
      dispatch(updateForm({
        formType: 'date',
        id: result.uuid,
        value: result.data.due_date.text,
        valid: result.data.due_date.validation_error,
      }));
      dispatch(updateForm({
        formType: 'name',
        id: result.uuid,
        value: result.data.fund_name.text,
        valid: result.data.fund_name.validation_error,
      }));
      dispatch(updateForm({
        formType: 'price',
        id: result.uuid,
        value: result.data.price.text,
        valid: result.data.price.validation_error,
      }));
    });
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
