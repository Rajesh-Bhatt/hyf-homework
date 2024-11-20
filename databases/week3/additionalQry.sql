INSERT INTO
    meal (
        `title`,
        `description`,
        `location`,
        `when`,
        `max_reservations`,
        `price`,
        `created_date`
    )
VALUES (
        'Noodle',
        'long strip of pasta or a similar flour paste',
        'Kathmandu',
        '2023-12-01 10:30:00',
        19,
        35,
        '2024-09-10 22:35:34'
    ),
    (
        'Chicken MOMO',
        ' steamed dumplings, stuffed with a minced chicken',
        'Kathmandu',
        '2024-06-25 09:24:50',
        35,
        150,
        '2024-11-01 12:20:10'
    ),
    (
        'Samosa',
        'deep fried snack made with spiced potato filling',
        'Kathmandu',
        '2024-05-11 12:40:00',
        45,
        25,
        '2020-09-21 10:00:00'
    );

/*Get meals that has a price smaller than a specific price fx 90*/
select * from meal where price < 100;

/*Get meals that still has available reservations*/
select * from meal where max_reservations > 0;

/*Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde*/
select * from meal where title like 'chicken Mo%';

/*Get meals that has been created between two dates*/
select *
from meal
where
    created_date BETWEEN '2020-01-01' AND '2024-12-31';

/*Get only specific number of meals fx return only 5 meals*/
select * from meal LIMIT 5;

/*Get the meals that have good reviews*/
select m.*
from meal m
    join review r ON m.id = r.meal_id
where
    r.stars >= 4;

/*Get reservations for a specific meal sorted by created_date*/
select * from reservation where id = 1 ORDER BY created_date Desc;

/*Sort all meals by average number of stars in the review*/

SELECT meal.id, meal.description, meal.location, ROUND(AVG(review.stars), 2) as average_rating
FROM meal
    LEFT JOIN review ON meal.id = review.meal_id
GROUP BY
    meal.id
ORDER BY average_rating DESC;