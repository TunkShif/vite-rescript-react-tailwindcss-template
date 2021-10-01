@module("./logo.svg") external logo: string = "default"
%%raw(`import './App.css'`)

@react.component
let make = () => {
  let (count, setCount) = React.useState(() => 0)

  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="space-y-6">
        <p />
        <p className="group">
          {"Hello "->React.string}
          <span className="group-hover:text-green-300"> {"Vite"->React.string} </span>
          {" + "->React.string}
          <span className="group-hover:text-red-400"> {"ReScript"->React.string} </span>
          {" + "->React.string}
          <span className="group-hover:text-blue-400"> {"React"->React.string} </span>
          {" + "->React.string}
          <span className="group-hover:text-blue-400"> {"TailwindCSS"->React.string} </span>
        </p>
        <p>
          <button
            className="py-2 px-4 bg-blue-400 rounded-md shadow-md hover:bg-blue-500"
            type_="button"
            onClick={_e => setCount(count => count + 1)}>
            {`count is: ${count->Belt.Int.toString}`->React.string}
          </button>
        </p>
        <p className="space-x-2">
          <span> {"Edit"->React.string} </span>
          <code className="px-2 bg-gray-50 text-gray-600 rounded-md">
            {"App.res"->React.string}
          </code>
          <span> {"and save to test HMR updates."->React.string} </span>
        </p>
        <p>
          <a
            className="App-link hover:underline"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            {"Learn React"->React.string}
          </a>
          {" | "->React.string}
          <a
            className="App-link hover:underline"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer">
            {"Vite Docs"->React.string}
          </a>
          {" | "->React.string}
          <a
            className="App-link hover:underline"
            href="https://rescript-lang.org/"
            target="_blank"
            rel="noopener noreferrer">
            {"Learn ReScript"->React.string}
          </a>
          {" | "->React.string}
          <a
            className="App-link hover:underline"
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer">
            {"TailwindCSS Docs"->React.string}
          </a>
        </p>
      </div>
    </header>
  </div>
}
