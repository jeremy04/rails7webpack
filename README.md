Rails 7, Bootstrap 5 + React 17 + Webpack 5 (no webpacker)

demo: https://sleepy-beach-68423.herokuapp.com/

- `$ bundle config build.pg --with-pg-config=` <code>\`</code>`which pg_config`<code>\`</code>
- `$ rails new . -j webpack -d postgresql --skip-test --skip-bootsnap --skip-active-storage --skip-system-test --skip-listen --skip-coffee --css bootstrap`
- ^^ Edit package.json with recommended instructions for building js/css ^^
- `$ bundle lock --add-platform x86_64-linux`
- `$ bundle install`
- `$ git commit -a -m "fixed gemfile lock"`
- `$ heroku create --stack heroku-20`
- `$ git push heroku main`
