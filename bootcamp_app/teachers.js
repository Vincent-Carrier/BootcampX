const {SQL} = require('sql-template-strings');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vincent',
  password: '',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(SQL`
  SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
  FROM assistance_requests
  JOIN teachers ON teacher_id = teachers.id
  JOIN students ON student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name =  '${process.argv[2]}'
  ORDER BY teacher;
`)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
})
.catch(err => console.error('query error', err.stack));
