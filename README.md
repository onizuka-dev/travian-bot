## Travian Bot
📦 Installation
```
npm install
```
🔧 Env variables
```
cp .env.example .env
```

📝 Fill out the new `.env` file with your credentials
```
# Example:
SERVER_URL=https://ts20.x2.america.travian.com
USERNAME=jhon@doe.com
PASSWORD=secret
CLICK_INTERVAL_MINUTES=5
ATTACK_LIST_RELATIVE_URL=/build.php?id=39&gid=16&tt=99
```
## A playground for Travian tools

### Automatic attack list trigger
Run playwright in debug mode, otherwise it will timeout
```
npx playwright test attack --debug
```

Enjoy!
