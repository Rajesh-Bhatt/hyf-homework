/*Get all reviews*/
select * from review;

/*Add a new review*/
insert into
    review (
        id,
        title,
        description,
        meal_id,
        stars,
        created_date
    )
VALUES (
        1,
        'Delicious Meal',
        'The food here is absolutely delicious',
        1,
        5,
        '2024-09-10 22:15:10'
    );

/*Get a review with any id, fx 1*/
select * from review where id = 1;

;

/*Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes*/
update review
set
    title = 'Very bad food',
    description = 'The food quality is very very bad',
    stars = 0
where
    id = 1;

/*Delete a review with any id, fx 1*/
delete from review where id = 1;