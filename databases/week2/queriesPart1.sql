-----------------
-----Part 1:-----
-----------------
/*Prerequisite*/
INSERT INTO
    user (id, name, email, phone)
VALUES (
        13,
        'Rajesh Bhatt',
        'rajesh.bhatt9@example.com',
        45 -71877654
    );

/*Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id*/
INSERT INTO
    task (
        title,
        description,
        created,
        updated,
        due_date,
        status_id,
        user_id
    )
VALUES (
        'Task Title',
        'Task Description',
        '2024-09-03',
        '2024-09-03',
        '2024-09-10',
        1,
        13
    );

/*Change the title of a task*/
UPDATE task SET title = 'New Task Title' WHERE user_id = 13;

/*Change a task due date*/
UPDATE task SET due_date = '2024-09-25' WHERE user_id = 13;

/*Change a task status*/
UPDATE task SET status_id = 2 WHERE user_id = 13;

/*Mark a task as complete*/
UPDATE task SET status_id = 3 WHERE user_id = 13;

/*Delete a task*/
DELETE FROM task WHERE user_id = 13;