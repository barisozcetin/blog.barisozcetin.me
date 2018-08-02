It's a simple blog script build with Gatsby and uses Storyblok as CMS . First created for my own needs. But planning to making it make it more flexible soon.

Live at [my own blog](https://blog.barisozcetin.me)

## Prerequisites
* Node
* Gatsby CLI

## Install

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

And run from your CLI:
```sh
gatsby new project-name https://github.com/barisozcetin/blog.barisozcetin.me
```

Then you can run it by:
```sh
cd project-name
gatsby develop
```

## Build 

To build the project run:
```sh
gatsby build
```

## Stack

* [Gatsby](https://www.gatsbyjs.org/) React based static site generator.
* [Storyblok](https://www.storyblok.com/) Headless Content Management System to keep my blog posts
* [styled-jsx](https://github.com/zeit/styled-jsx) Awesome way to use scoped CSS in JSX
* [Spectre](https://github.com/picturepan2/spectre) Lightweight CSS framework
* [EmailJS](http://www.emailjs.com/) Helps us to send e-mails without a server

## Todos

* Contact form will be editable.
* Subscription will be added.
* Storyblok content format will be flexible.