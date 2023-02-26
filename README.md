# Wisebits - Test task

## ↑↓→← Arrow-game description
Player's goal is to press the keyboard arrow key that was shown to him before the next one appears. After three consecutive successful hits - game won, after three errors - lost.

Steps:
1. Design architectural solution for this task with redux-saga in mind. Describe shape of reducers and how you break business logic into different sagas with minimum implementation details.
2. Implement designed solution.
3. Cover your solution with tests written in jest.

Review criteria:
* Ability to see obvious and not so obvious errors and suggest a solution, ability to see general logical flaws.
* Ability to describe problem domain with sagas.
* Redux-saga knowledge, code quality, absence of bugs.
* Familiarity with jest and knowledge of testing approaches.

## How to:
1. `git clone https://github.com/EmeraldWeb/wisebits.git` - clone this repo
2. `npm i --no-save` - install dependencies, you will need a Node.js
3. `npm run prod` - build bundle and serve webpackDevServer, which open a page localhost:9000 in your default browser

### Other commands you may find useful
(Full list in package.json "scripts")

* `npm run build` only production build
* `npm run lint` code linting
* `npm run test` code testing
* `npm run test:coverage` test coverage
