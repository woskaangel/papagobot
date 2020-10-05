# Papago Bot
![](https://img.shields.io/static/v1?label=node&message=v12.18.4&color=red)
![](https://img.shields.io/static/v1?label=npm&message=v6.14.6&color=orange)
> - Developer
> <table><tr><td align="center"><a href="https://github.com/woskaangel"><img src="https://avatars0.githubusercontent.com/u/52520428?s=460&v=4" width="100px;" alt=""/><br/<b>woskaangel</b></a></td><tr></table>
>
> - Languages
>     - [한국어](#한국어)
>     - [English](#english)
## 한국어
### 설치방법
#### Windows
1. 이 레포지토리를 내려받는다.
1. [node.js](https://nodejs.org/ko/) 인스톨러를 내려받아 설치(v7.6 이상)합니다. [npm](https://www.npmjs.com/)과 함께 설치되어야 합니다.
1. [.env](#env)파일을 생성합니다.
1. 명령 프롬프트에서 `npm install`를 입력합니다.
1. `npm start`명령어를 실행시킵니다.
#### Linux
1. 이 레포지토리를 내려받는다.
1. 패키지 매니저를 이용하여 [node.js](https://nodejs.org/) 를 설치(v7.6 이상)합니다.
1. [.env](#env)파일을 생성합니다.
1. 쉘(Shell)에서 `npm install`를 입력합니다.
1. `npm start`명령어를 실행시킵니다.
#### 공통
- [.env](#env)파일을 **반드시** 생성해주세요. 본 레포지토리에는  [.env](#env)파일의 양식이 없습니다. 양식에 따라 만들려면 [여기](#env)를 클릭하십시오.
- [Discord API](https://support.discord.com/hc/ko/articles/212889058-Discord-%EA%B3%B5%EC%8B%9D-API)를 사용하기 위해서 봇을 생성해야 합니다. 그리고 그 봇의 정보를 [.env](#env)파일에 입력해야 합니다.
- [Discord Bot](https://discord.com/developers/applications)을 생성하려면 [이곳](https://discord.com/developers/applications)을 클릭하세요.
## English
### How to install
#### Windows
1. Download and install this repository
1. Download and install the [node.js](https://nodejs.org/) installer(v7.6 or later). It must be installed with [npm](https://www.npmjs.com/)
1. Create a [.env](#env) file
1. At the Commandline, type `npm install`
1. Run the command `npm start`
#### Linux
1. Download and install this repository
1. Install [node.js](https://nodejs.org/)(v7.6 or later) using package manager
1. Create a [.env](#env) file
1. At the Shell, type `npm install`
1. Run the command `npm start`
#### Common
- Please create [.env](#env) file. This repertoire doesn't contain forms for [.env](#env) file. [Click here](#env) to create it according to the form.
- You must create a bot to use the [Discord API](https://support.discord.com/hc/ko/articles/212889058-Discord-%EA%B3%B5%EC%8B%9D-API). And you have to enter the information of the bot in the [.env](#env) file.
- [Click here](https://discord.com/developers/applications) to create a [Discord Bot](https://discord.com/developers/applications).
# env
```js
discordToken= YOUR_DISCORD_BOT_TOKEN
clientId= YOUR_DISCORD_BOT_CLIENT_ID
clientSecret= YOUR_DISCORD_BOT_CLIENT_SECRET
```