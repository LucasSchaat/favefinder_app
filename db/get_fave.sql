SELECT *
FROM blog_posts
JOIN users ON users.id = blog_posts.user_id
WHERE blog_posts.id = $1;