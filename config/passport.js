const passport = require("passport");
const UserModel = require("./../database/models/user_model");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");

passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

passport.use(new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    },
    async (jwt_payload, done) => {
        try{
            const user = await UserModel.findById(jwt_payload.sub);

            if (!user) {
                return done(null, false);
            }

            return done(null, user);           
        } catch (error) {
            return done(error);
        }
    }
));