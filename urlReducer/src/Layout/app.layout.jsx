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
        <footer className="bg-white text-black text-xl font-extrabold p-10 text-center mt-10">
        © 2025 ShortEase. All Rights Reserved.
        📧 Contact: support@shortease.com | 📍 Privacy Policy | 📜 Terms of Service
        </footer>
      </div>
    </div>
  )
}

export default AppLayout