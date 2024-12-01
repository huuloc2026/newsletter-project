# ts-node-react-template

A simple and minimalist TypeScript boilerplate with a starting `/server` and `/web` apps.

## Getting Started

1. `npm install` on the root directory;
2. Then `npm install` on the `./server` and `./web` directories;
3. Finally to run them both: `npm run local` on the root directory.


### Prerequisites

- [Node.js](https://nodejs.org/en/) (>= 18.0.0)
- [NPM](https://www.npmjs.com/) (>= 7.0.0)

```
newsletter-project
├─ .editorconfig
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 01
│  │  │  └─ b4fa9ca12bd0255a8f505a276b5a672b5e7640
│  │  ├─ 02
│  │  │  └─ e6be7ff1dc0baa84dc0a3588d7bcf63383c03d
│  │  ├─ 06
│  │  │  └─ 6b7d02db3c639ce1b1308b33db7655c9f2ec1d
│  │  ├─ 11
│  │  │  └─ ddd8dbe662a68e189c3a66ab6fc2df45c555bb
│  │  ├─ 16
│  │  │  └─ ea10a475e0e374936e64f9c20376e5cd182f10
│  │  ├─ 19
│  │  │  └─ 470f7261cd841fb9b6a756f1e0b536c16bc696
│  │  ├─ 1d
│  │  │  └─ 0528caf2c270d81599250dba909a580229c035
│  │  ├─ 1f
│  │  │  └─ 53cc1d27f5d06c7a4060eb8f8a19a412ce8ee9
│  │  ├─ 25
│  │  │  └─ 0ef39193e3d90718183cdb5e797628f1f4e1fc
│  │  ├─ 2e
│  │  │  └─ 7af2b7f1a6f391da1631d93968a9d487ba977d
│  │  ├─ 40
│  │  │  └─ 3d1ccbc9738f1e2d899e6af5e74490f051c104
│  │  ├─ 45
│  │  │  ├─ 1c4d49988364ccf406c3482ea713e0fdf9b5ed
│  │  │  └─ 7923a30085bcfcb1a9d8f4d42ab1934ae08a9f
│  │  ├─ 48
│  │  │  └─ 480a40001f1485b558376c63abb056f9f1f29c
│  │  ├─ 4a
│  │  │  └─ fea0b3fd58e31696d69c3f9435f8241e260db3
│  │  ├─ 50
│  │  │  └─ 30dfd9da5e24c13a04680f80fc5cc393434b8c
│  │  ├─ 53
│  │  │  └─ a20bb410986f08595eb14c5afd0917bed38826
│  │  ├─ 5b
│  │  │  └─ ced016a42c13dfa3e0c9abeaa429872a09e3f7
│  │  ├─ 61
│  │  │  └─ 4c86b487fa1bb02b80dcf725f9438d772f010a
│  │  ├─ 64
│  │  │  └─ 6d83c001fd3b138807d7289d8803208c2c145f
│  │  ├─ 66
│  │  │  ├─ 3d3af601b9563186d1e7c3b9da20acaae29177
│  │  │  └─ d2142a4d36d1e522a99b11c9c93ec5e88f583f
│  │  ├─ 6e
│  │  │  └─ 94e9cb56051d3a42ffaa10aed15ee75f15e572
│  │  ├─ 74
│  │  │  └─ 34255dcfb89331cae7ceb46addb6a2e72e27e5
│  │  ├─ 77
│  │  │  └─ a8270de98b4c4cea0e09dc423e8fe6b82f2f9f
│  │  ├─ 91
│  │  │  └─ 41046e3ea9d3ac171d38f93cd708d6aee6752d
│  │  ├─ 92
│  │  │  └─ f279e3e666d01def7e6fac12406dd9d23cd6a3
│  │  ├─ 95
│  │  │  └─ 8d3de52f60e2a79d5189df7efb6a7a51d02554
│  │  ├─ 96
│  │  │  └─ 0f29b1ae321cf6eb24715f4fef27e3da3ce22b
│  │  ├─ 99
│  │  │  └─ 8d5b90b25859346b7ad781608f872cc855a3c2
│  │  ├─ 9c
│  │  │  └─ d0d1fa32e0930b3478ce34a64c0a11e2f3df61
│  │  ├─ 9e
│  │  │  └─ e1617a418352c4028d995b1cfae7c853b3cc5d
│  │  ├─ a9
│  │  │  ├─ 1eb03032d2911dcfe0d5c1f082218a2d005d61
│  │  │  └─ 33eb2d3b8255e144ea8ab7ca995551b950138a
│  │  ├─ b5
│  │  │  ├─ b8321f7bcba61a1f809516830910312c70d8cc
│  │  │  └─ c61c956711f981a41e95f7fcf0038436cfbb22
│  │  ├─ be
│  │  │  └─ 4b5fe681d6c482e612fed075498277d1c5c235
│  │  ├─ bf
│  │  │  └─ 889be3762600c2041ebcfb1b32a8567281907f
│  │  ├─ c7
│  │  │  ├─ 18a0bfec8c859a9920118857d008a521a8ee6f
│  │  │  └─ 9ed24569b91be0588eb9e57d1e82fefb484340
│  │  ├─ d7
│  │  │  └─ 835d204e2570665e22e6ad7ee74be3750ffa2e
│  │  ├─ dc
│  │  │  └─ 0bf753cfbf899f0a930d3b774b07a4c3e54af3
│  │  ├─ ec
│  │  │  ├─ 3159d0886e930422e59045f70fbc7334cd8868
│  │  │  ├─ 7971588723212634a31c78ccf7c3ca9b9d6280
│  │  │  └─ be7d66db29c8afdfbf38ea3ec76c39d53c533e
│  │  ├─ f2
│  │  │  └─ 84b73c2d7d8207a00bbdf33dc3ddfe29e957fd
│  │  ├─ f4
│  │  │  └─ eb99b80cbd93f66c458c3498b20dce1a489097
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-379acdfedfbc1d2a7be970e31a0969e09ffc1aee.idx
│  │     ├─ pack-379acdfedfbc1d2a7be970e31a0969e09ffc1aee.pack
│  │     └─ pack-379acdfedfbc1d2a7be970e31a0969e09ffc1aee.rev
│  ├─ ORIG_HEAD
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ .vscode
│  ├─ extensions.json
│  └─ settings.json
├─ package-lock.json
├─ package.json
├─ README.md
├─ server
│  ├─ .eslintignore
│  ├─ .eslintrc.json
│  ├─ .gitignore
│  ├─ .nvmrc
│  ├─ .prettierrc.json
│  ├─ jest.config.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ prisma
│  │  ├─ client.ts
│  │  └─ schema.prisma
│  ├─ README.md
│  ├─ src
│  │  ├─ index.ts
│  │  ├─ routes
│  │  │  └─ newsletter
│  │  │     ├─ index.ts
│  │  │     └─ signup.ts
│  │  ├─ server.ts
│  │  ├─ services
│  │  │  └─ newsletter
│  │  │     └─ newsletterService.ts
│  │  └─ utils
│  │     ├─ RandomToken.ts
│  │     └─ ValidEmail.ts
│  ├─ test
│  │  └─ integration
│  │     └─ health.spec.ts
│  └─ tsconfig.json
└─ web
   ├─ .eslintrc.cjs
   ├─ .gitignore
   ├─ .nvmrc
   ├─ index.html
   ├─ package-lock.json
   ├─ package.json
   ├─ postcss.config.js
   ├─ public
   │  └─ vite.svg
   ├─ src
   │  ├─ App.tsx
   │  ├─ assets
   │  │  └─ react.svg
   │  ├─ index.css
   │  ├─ main.tsx
   │  ├─ routes
   │  │  ├─ Confirmation.tsx
   │  │  ├─ ErrorPage.tsx
   │  │  ├─ index.ts
   │  │  └─ SignUp.tsx
   │  ├─ utils
   │  │  ├─ constant.ts
   │  │  └─ randomUser.ts
   │  └─ vite-env.d.ts
   ├─ tailwind.config.js
   ├─ tsconfig.json
   ├─ tsconfig.node.json
   └─ vite.config.ts

```