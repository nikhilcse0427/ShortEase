import { Outlet } from 'react-router-dom'
import Header from '../components/header'
function AppLayout() {
  return (
    <div>
      <main className="min-h-screen mx-auto px-8">
        <Header />
        <Outlet /> {/* This renders the child routes */}
      </main>
      <div>
        <footer className="bg-amber-600 p-10 text-center mt-10">Footer Section</footer>
      </div>
    </div>
  )
}

export default AppLayout