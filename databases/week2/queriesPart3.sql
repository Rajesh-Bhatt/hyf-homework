-----------------
-----Part 3:-----
-----------------
/*Switching to MyDatabase*/
use MyDatabase;

/*To show all the table in MyDatabase*/
show tables;

/*Get all the tasks assigned to users whose email ends in @spotify.com*/
select t.id, t.title, t.description, u.name, u.email
from
    user u
    JOIN user_task ut ON u.id = ut.user_id
    JOIN task t ON t.id = ut.task_id
WHERE
    u.email LIKE '%@spotify.com';

/*Get all the tasks for 'Donald Duck' with status 'Not started'*/

SELECT t.id, t.title, t.description, t.created, t.updated, t.due_date, u.name, s.name AS status
FROM
    user u
    JOIN user_task ut ON u.id = ut.user_id
    JOIN task t ON ut.task_id = t.id
    JOIN status s ON t.status_id = s.id
WHERE
    u.name = 'Donald Duck'
    AND s.name = 'Not started';

/*Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)*/
select t.id, t.title, t.description, t.created, u.name
from
    user u
    JOIN user_task ut ON u.id = ut.user_id
    JOIN task t ON t.id = ut.task_id
WHERE
    u.name = 'Maryrose Meadows'
    AND MONTH(t.created) = 09;

/*Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)*/
SELECT MONTH(t.created) AS month, COUNT(*) AS task_count
FROM task t
GROUP BY
    MONTH(t.created)
ORDER BY MONTH(t.created);