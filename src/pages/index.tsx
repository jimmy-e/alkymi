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
        inValid: !!result.data.due_date.validation_error,
        value: result.data.due_date.text,
      }));
      dispatch(updateForm({
        formType: 'name',
        id: result.uuid,
        inValid: !!result.data.fund_name.validation_error,
        value: result.data.fund_name.text,
      }));
      dispatch(updateForm({
        formType: 'price',
        id: result.uuid,
        inValid: !!result.data.price.validation_error,
        value: result.data.price.text,
      }));
    });
  };

  useEffect(() => {
    getSampleData();
  }, [getSampleData]);

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
