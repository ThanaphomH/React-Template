import logo from '@/assets/logo.svg'
import MainLayout from '@/layouts/MainLayout'

function App() {
  return (
    <main className="flex flex-col flex-1 w-full items-center justify-center">
      <img src={logo} className="App-logo w-32 h-32" alt="logo" />
      <p>
        Edit <code>src/app/page.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </main>
  )
}

export default App
export const Layout = MainLayout
