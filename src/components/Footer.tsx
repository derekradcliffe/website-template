// import { Link } from '@tanstack/react-router';

export default function Footer() {
  return (
    <footer className="flex flex-col w-full">
      <div className="text-center text-white bg-gray-800 p-4 mt-10">
        <h2 className="text-2xl font-bold">Footer Title</h2>
        <p className="text-lg">Footer Subtitle</p>
        <p className="text-xs mt-6">Designed by <a className="hover:underline" href="https://derekradcliffe.com">DRD</a></p>
      </div>
    </footer>
  )
}
