SELECT day, count(*)
FROM assignments
GROUP BY day ORDER BY day;
