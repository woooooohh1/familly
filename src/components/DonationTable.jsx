import React from 'react';
import styles from './DonationTable.module.css';

export default function DonationTable({ data }) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>No</th>
            <th>보낸 사람</th>
            <th>금액</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.no}>
              <td>{item.no}</td>
              <td>{item.name}</td>
              <td>{item.amount.toLocaleString()}원</td>
              <td>{item.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
