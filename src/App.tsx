import { Typography } from './components';

function App() {
  return (
    <div className='p-4'>
      <Typography variant="h1">Hello!</Typography>

      {/* https://kidadl.com/quotes/best-samuel-l-jackson-quotes-from-the-iconic-actor-and-producer */}
      <Typography>
        If you have an opportunity to use your voice you should use it.
      </Typography>

      <Typography variant='strong'>
        The best advice that was given to me was that I had to be 10 times smarter, braver and more polite to be equal. So I did.
      </Typography>
    </div>
  )
}

export default App
