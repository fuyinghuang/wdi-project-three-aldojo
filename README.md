# General Assembly WDI Project 3: Aldojo

[Heroku Pages](https://aldojo.herokuapp.com/)

[GitHub Repo](https://github.com/huangfuin1101/wdi-project-three-aldojo)


## Home page
![](screenshots/home.png)

## Log in mode
![](screenshots/log-in-mode.png)

## Index page
![](screenshots/index.png)

## Show page
![](screenshots/show-page.png)

## Sign up page
![](screenshots/signup.png)

## Create page
![](screenshots/add.png)

## Edit and delete
![](screenshots/edit-delete.png)

## Review page
![](screenshots/reviews.png)


## Profile page
![](screenshots/profile.png)


## Technologies Used

* Git
* GitHub
* Heroku
* Node.js
* MongoDB
* express: v4.16.4
* express-ejs-layout: v2.5.0
* ejs: v2.6.1
* express-session: v1.15.6
* body-parser: v1.18.3
* mongoose: v5.3.7
* method-override: v3.5.0
* JavaScript (ECMAScript 6)
* CSS3 with animation
* Bulma
* Google Fonts
* Fontawesome
* Adobe Illustrator

### Brief
To build a RESTful personal blog with pinterest style, the app had meet some criteria as below:

* Has models for handmade product and user reviews.
* A user model and user authentication.
* Allows user to create, edit, delete product and give/delete reviews only when user has logged in.
Has a User model and user authentication


### Featured Piece of Code
This function lets user can view that what items been added and reviewed by the user and the it would appear on the Profile page once the user log in. From controllers/userController.js
```
function userShow(req, res, next) {
  User
    .findById(req.params.id)
    .populate('comments addedHandmades')
    .then(user => {
      console.log('this is the users comments ', user.comments);
      res.render('profile', user);
    })
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}
```

### Styling
This app follows black and white style of the brand image with a clean looking that matches minimalism. I used Bulma, google font and Font Awesome plus CSS as styling tools for this app.

### Future Features
There are some features I would like to add in the future:
* Describing more details for content of handmadeModel.
* Adding a search bar in Index page to look for particular item.
* Creating another two models for Tools and Materials page that link to the Show page once each individual items been clicked will get future details about it.
* Adding more features user profile, for example user can upload own profile image.
* Adding another authentication check for user password.
* Adding admin route to access all the path without sign up as a user first.
