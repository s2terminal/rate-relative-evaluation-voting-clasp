
## Usage
setup
```
$ docker-compose build
$ docker-compose run --rm app sh -c "yarn run clasp login --no-localhost && mv ~/.clasprc.json ./creds"
$ sudo chown --preserve-root $(id --name --user):$(id --name --group) ./creds/.clasprc.json
$ docker-compose build
$ docker-compose run --rm app yarn run clasp create --type sheet --parentId <id>
```

deploy
```
$ docker-compose run --rm app yarn run clasp open
$ docker-compose run --rm app yarn run clasp push
```
