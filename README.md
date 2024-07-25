
<h1 align="center">
	Rainbow Text Library
</h1>

## Install

```sh
npm i rainbowtextss
```

## Usage

```js
import { Log } from "rainbowtextss";

console.log(Log.success('Hello world!'));
```

Rainbow Text comes with an easy to use composable API where you just chain and nest the styles you want.

```js
import { Log } from "rainbowtextss";

const log = console.log;

// Combine styled and normal strings
log(Log.success('Hello') + ' World' + Log.info('!'));


// Nest styles of the same type even (color, background)
log(Log.info(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

```

Easily define your own themes:

```js
import { useEffect } from "react";
import "./App.css";
import { Log } from "rainbowtextss";

function App() {
  useEffect(() => {
    Log.success("CONGRATULATIONS!");
    Log.danger("MIND ");
    Log.info("You see!");
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rainbow Text Console</h1>
      </header>
    </div>
  );
}

export default App;
```
