CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(500),
    password TEXT
);

CREATE TABLE blog_posts (
    id SERIAL PRIMARY KEY,
    user_id INT references users(id),
    title VARCHAR(200),
    image TEXT,
    content TEXT
);

SELECT * FROM users;
SELECT * FROM blog_posts;