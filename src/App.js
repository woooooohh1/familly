import React, { useState } from 'react';
import DonationTable from './components/DonationTable';
import styles from './App.module.css';

const initialData = [
  { no: 1, name: '한두삼(삼호수산)', amount: 100000, note: '아버지' },
  { no: 2, name: '현대전기', amount: 200000, note: '아버지' },
  { no: 3, name: '지동구(동구건설)', amount: 300000, note: '아버지' },
  { no: 4, name: '김정렬', amount: 200000, note: '아버지' },
  { no: 5, name: '세무법인 율곡(김내철)', amount: 200000, note: '아버지' },
  { no: 6, name: '김동휘', amount: 100000, note: '정우현 친구' },
  { no: 7, name: '비디에스인포컴(주) 대표 김영수', amount: 300000, note: '정우현 회사' },
  { no: 8, name: '비디에스인포컴(주) 임직원일동', amount: 500000, note: '정우현 회사' },
  { no: 9, name: '원현욱 부장', amount: 100000, note: '정우현 회사' },
  { no: 10, name: '이지선 대리', amount: 100000, note: '정우현 회사' },
  { no: 11, name: '박재현 대리', amount: 100000, note: '정우현 회사' },
  { no: 12, name: '이승훈 상무', amount: 100000, note: '정우현 회사' },
  { no: 13, name: '강채구 전무', amount: 100000, note: '정우현 회사' },
  { no: 14, name: '나종일 이사', amount: 50000, note: '정우현 회사' },
  { no: 15, name: '정지민 사원', amount: 100000, note: '정우현 회사' },
  { no: 16, name: '박대용 (거성)', amount: 100000, note: '아버지' },
  { no: 17, name: '이재호', amount: 200000, note: '아버지 친구' },
  { no: 18, name: '나유성', amount: 50000, note: '정우현 친구' },
  { no: 19, name: '이용훈', amount: 50000, note: '정우현 친구' },
  { no: 20, name: '김재혁', amount: 100000, note: '정우현 친구' },
  { no: 21, name: '김진수/김숙영', amount: 300000, note: '정우현 친구' },
  { no: 22, name: '강미경', amount: 300000, note: '정우현 친구' },
  { no: 23, name: '윤수빈', amount: 100000, note: '정우현 친구' },
  { no: 24, name: '김동은', amount: 200000, note: '정우현 친구' },
  { no: 25, name: '김종철(거진형부)', amount: 1000000, note: '어머니 가족' },
  { no: 26, name: '완섭', amount: 1000000, note: '어머니 가족' },
  { no: 27, name: '박하람', amount: 50000, note: '정우현 회사' },
  { no: 28, name: '양선', amount: 50000, note: '정우현 친구' },
  { no: 29, name: '이수미', amount: 100000, note: '어머니 친구' },
  { no: 30, name: '김보민', amount: 100000, note: '어머니 가족' },
  { no: 31, name: '배승재', amount: 100000, note: '정우현 친구' },
  { no: 32, name: '강성호', amount: 500000, note: '아버지 친구' },
  { no: 33, name: '정명희(성남이모)', amount: 500000, note: '어머니 가족' },
  { no: 34, name: '이지상 대리', amount: 100000, note: '정우현 회사' },
  { no: 35, name: '고돈일', amount: 100000, note: '어머니 지인' },
  { no: 36, name: '김성민 이사', amount: 100000, note: '정우현 회사' },
  { no: 37, name: '노학현 대리', amount: 100000, note: '정우현 회사' },
  { no: 38, name: '황춘근', amount: 100000, note: '아버지' },
  { no: 39, name: '조미숙', amount: 200000, note: '어머니 친구' },
  { no: 40, name: '김영진', amount: 500000, note: '어머니 가족' },
  { no: 41, name: '오상훈', amount: 200000, note: '정우현 친구' },
  { no: 42, name: '문유경', amount: 100000, note: '어머니 친구' },
  { no: 43, name: '동구건설 노선옥', amount: 100000, note: '아버지' },
  { no: 44, name: '류대인', amount: 100000, note: '정우현 친구' },
  { no: 45, name: '김태운', amount: 100000, note: '정우현 친구' },
  { no: 46, name: '성원우', amount: 70000, note: '누나 친구' },
  { no: 47, name: '이진영', amount: 300000, note: '누나 친구' },
  { no: 48, name: '양재준', amount: 300000, note: '아버지' },
  { no: 49, name: '거성대표 정병태', amount: 500000, note: '아버지' },
  { no: 50, name: '김형진', amount: 150000, note: '정우현 친구' },
  { no: 51, name: '김윤환', amount: 50000, note: '정우현 친구' },
  { no: 52, name: '보광장례식장 박권', amount: 100000, note: '아버지' },
  { no: 53, name: '정완옥 정완희', amount: 300000, note: '어머니 가족' },
  { no: 54, name: '신영건설 홍성용', amount: 100000, note: '아버지' },
  { no: 55, name: '신영건설 백중기', amount: 100000, note: '아버지' },
  { no: 56, name: '신영건설 김경수', amount: 100000, note: '아버지' },
  { no: 57, name: '신영건설 안재호', amount: 100000, note: '아버지' },
  { no: 58, name: '바다통신 전승옥', amount: 100000, note: '아버지' },
  { no: 59, name: '거성건설 김대기', amount: 50000, note: '아버지' },
  { no: 60, name: '이동옥 부장', amount: 100000, note: '정우현 회사' },
  { no: 61, name: '김현석', amount: 300000, note: '아버지' },
  { no: 62, name: '박범석', amount: 200000, note: '아버지' },
  { no: 63, name: '지오케이블 박병택', amount: 100000, note: '아버지' },
  { no: 64, name: '임보빈', amount: 200000, note: '어머니 친구' },
  { no: 65, name: '최윤실', amount: 100000, note: '누나 회사' },
  { no: 66, name: '류청락', amount: 200000, note: '누나 회사' },
  { no: 67, name: '김소현', amount: 100000, note: '누나 회사' },
  { no: 68, name: '배민채', amount: 50000, note: '누나 회사' },
  { no: 69, name: '김주영', amount: 200000, note: '누나 회사' },
  { no: 70, name: '동부 삼촌', amount: 500000, note: '어머니 가족' },
]

const notes = ['전체', ...Array.from(new Set(initialData.map(d => d.note)))];

export default function App() {
  const [filter, setFilter] = useState('전체');
  const filteredData = filter === '전체'
    ? initialData
    : initialData.filter(item => item.note === filter);
  const total = filteredData.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>💸 부조금 정리</h1>

      <div className={styles.filters}>
        {notes.map(note => (
          <button
            key={note}
            onClick={() => setFilter(note)}
            className={`${styles.filterButton} ${filter === note ? styles.active : ''}`}
          >
            {note}
          </button>
        ))}
      </div>

      <DonationTable data={filteredData} />

      <div className={styles.total}>
        총 합계: <strong>{total.toLocaleString()}원</strong>
      </div>
    </div>
  );
}
