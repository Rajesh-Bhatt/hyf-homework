/*Find out how many tasks are in the task table*/
SELECT COUNT(*) FROM task;
/*Find out how many tasks in the task table do not have a valid due date*/
SELECT count(*) as not_valid_due_date
FROM task
WHERE
    due_date IS NULL;

/*Find all the tasks that are marked as done*/
SELECT * FROM task WHERE status_id = 3;
/*Find all the tasks that are not marked as done*/
SELECT * FROM task WHERE status_id != 3;
/*Get all the tasks, sorted with the most recently created first*/
SELECT * FROM task ORDER BY created DESC;
/*Get the single most recently created task*/
SELECT * FROM task ORDER BY created DESC LIMIT 1;
/*Get the title and due date of all tasks where the title or description contains "database"*/
SELECT title, due_date
FROM task
WHERE
    title like '%database%'
    OR description like '%database%';
/*Get the title and status (as text) of all tasks*/
select task.title, status.name AS status_name
FROM task
    JOIN status ON task.status_id = status.id;

/*Get the name of each status, along with a count of how many tasks have that status*/
SELECT status.name, COUNT(*) AS task_count
FROM status
    JOIN task ON task.status_id = status.id
GROUP BY
    task.status_id;

/*Get the names of all statuses, sorted by the status with most tasks first*/
SELECT status.name, COUNT(*) AS status_result
FROM status
    JOIN task ON task.status_id = status.id
GROUP BY
    task.status_id
ORDER BY status_result DESC