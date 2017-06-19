# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
image_url       | string    |
description     | text      |
password_digest | string    | not null
session_token   | string    | not null

## pins

column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
title         | string    | not null
url           | string    | not null
image_url     | string    | not null
description   | text      |
user_id       | integer   | not null, foreign key (references users), indexed

## boards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | null: false
description | text      |
user_id     | integer   | not null, foreign key (references users), indexed

## pinnings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
board_id    | integer   | not null, foreign key (references boards), indexed
pin_id      | integer   | not null, foreign key (references pins), indexed

## follows
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
following_id   | integer   | not null, foreign key (references users), indexed
follower_id    | integer   | not null, foreign key (references users), indexed
