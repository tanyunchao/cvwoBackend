# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all
Post.destroy_all
Comment.destroy_all

user1 = User.create(username: "bobby")
user2 = User.create(username: "charlie")
user3 = User.create(username: "declan")

post1 = Post.create(title: "post1", body: "this is the content of the post 1", user: user1)
post2 = Post.create(title: "post2", body: "this is the content of the post 2", user: user1)
post3 = Post.create(title: "post3", body: "this is the content of the post 3", user: user1)
post4 = Post.create(title: "post4", body: "this is the content of the post 4", user: user2)
post5 = Post.create(title: "post5", body: "this is the content of the post 5", user: user2)
post6 = Post.create(title: "post6", body: "this is the content of the post 6", user: user3)

comment1 = Comment.create(body: "this is the comment for comment 1 by user 1 on post 1", user: user1, post: post1)
comment2 = Comment.create(body: "this is the comment for comment 2 by user 1 on post 1", user: user1, post: post1)
comment3 = Comment.create(body: "this is the comment for comment 3 by user 2 on post 2", user: user2, post: post2)
comment4 = Comment.create(body: "this is the comment for comment 4 by user 3 on post 3", user: user3, post: post3)
comment5 = Comment.create(body: "this is the comment for comment 5 by user 2 on post 3", user: user2, post: post3)