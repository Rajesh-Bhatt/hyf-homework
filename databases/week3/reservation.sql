/*Get all reservations*/
select * from reservation;

/*Add a new reservation*/
insert into
    reservation (
        id,
        number_of_guests,
        meal_id,
        created_date,
        contact_phonenumber,
        contact_name,
        contact_email
    )
VALUES (
        1,
        29,
        1,
        '2024-09-08 17:30:08',
        729876543,
        'Philip Deo',
        'deophilip@hotmail.com'
    );

/*Get a reservation with any id, fx 1*/
select * from reservation where id = 1;

;

/*Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes*/
update reservation
set
    number_of_guests = 54,
    contact_phonenumber = 98482345,
    contact_name = 'Kristain Harry'
where
    id = 1;

/*Delete a reservation with any id, fx 1*/
delete from reservation where id = 1;