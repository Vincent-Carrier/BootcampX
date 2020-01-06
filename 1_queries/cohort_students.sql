SELECT students.id, students.name FROM students, cohorts WHERE students.cohort_id = cohorts.id AND cohorts.id = 1 ORDER BY name;
