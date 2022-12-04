# Sveltejs + Nestjs

## Idea

Users can post a product they recomend in this social media, providing details about the product and why they like it, the owner of the review can edit them after and delete if necessary, other users can rate their product review.

## Requirements

- User authentication, two user roles (normal, admin)
- User cms, with rating (Each user can only edit and delete their own reviews)
- Reviews are stored as markdown in db, user creates and edit their reviews through a markdown editor

## Stack

- Svelte with TS for client-side spa web app
- Nestjs with TS for api interface with database and business logic
- Postgres as database and data persistence
