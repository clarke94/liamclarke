---
title: Undying Ghost
path: /project/undying-ghost
featuredImage: ../media/undying-ghost/UDL.png
slides: [
    ../media/undying-ghost/UDL.png,
]
tools: [
    'nodejs',
    'jenkins',
]
date: 2019-12-01T19:38:53.520Z
category: apps
description:
---

A Discord bot that integrates with the game, Destiny 2, through the [Bungie API](https://github.com/Bungie-net/api). The bot was created to manage and maintain a Destiny 2 clan which consists of 100 users.

The bot performs multiple tasks automatically and also tasks from user inputs:

The automated tasks are to check users activity every 2 weeks, dependant on the result of each users activity will depend on its action. Users that have completed a certain number of tasks will be promoted, users that complete just enough for their role will stay where they are and users who do not complete tasks are demoted. If a user has 3 consecutive weeks of failing there tasks at the lowest role, the bot will automatically remove them from the clan after alerting the clan administrators/moderators.

The user input tasks come in a variety of different commands that a user can use depending on their role, those commands include, syncing members with the Bungie API, kicking, promoting, adding members, showing achievements and a lot more.

The App lets users do all of these game tasks without ever leaving the clan community which is based on the Discord chat app. Making all the features of the clan integrated directly into Discord for all users to use without any additional fuss.