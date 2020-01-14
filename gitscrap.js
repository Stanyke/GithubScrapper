const passport = require('passport')
const GithubStrategy = require('passport-github').Strategy


let scopes = ['notifications', 'user:email', 'read:org', 'repo']
passport.use(
	new GithubStrategy(
		{
			clientID: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			callbackURL: 'http://localhost:3000/login/github/return',
			scope: scopes.join(' ')
		},
		function(token, tokenSecret, profile, cb) {
			return cb(null, { profile: profile, token: token })
		}
	)
)
passport.serializeUser(function(user, done) {
	done(null, user)
})
passport.deserializeUser(function(obj, done) {
	done(null, obj)
})


const gitRoute = passport;

module.exports = gitRoute;