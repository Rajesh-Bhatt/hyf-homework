/*Get all meals*/
select * from meal;

/*Add a new meal*/
insert into
    meal (
        id,
        title,
        description,
        location,
        `when`,
        max_reservations,
        price,
        created_date
    )
VALUES (
        1,
        'Chicken Biryani',
        'a spiced mix of chicken meat and rice',
        'Kathmandu',
        '2024-09-09 22:20:05',
        12,
        89,
        '2024-09-09 20:09:00'
    );

/*Get a meal with any id, fx 1*/
select * from meal where id = 1;

/*Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes*/
update meal
set
    title = 'Tandoori Roti',
    description = 'flatbreads made with whole wheat flour and cooked in a tandoor',
    max_reservations = 20,
    price = 15
where
    id = 1;

/*Delete a meal with any id, fx 1*/
delete from meal where id = 1;