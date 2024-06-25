import Link from 'next/link'

function NavBar() {
  return (
    <nav className='flex justify-between bg-nav py-2 px-1'>
      <div className='flex items-center space-x-4 text-default-text'>
        <Link href="/">
        Home
        </Link>
        <Link href="/TicketPage/new">
        Tickets
        </Link>
      </div>
      <div>
        <p className='text-default-text'>
          test2mail.com
        </p>
      </div>
    </nav>
  )
}

export default NavBar