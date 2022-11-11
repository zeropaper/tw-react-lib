import { Grid, Typography } from './components';


function App() {
  // https://kidadl.com/quotes/best-samuel-l-jackson-quotes-from-the-iconic-actor-and-producer
  return (
    <Grid m={4} cols={2} gap={10}>
      <div>
        <Typography variant="h1">Hello!</Typography>
      </div>

      <div>
        <Typography>
          If you have an opportunity to use your voice you should use it.
        </Typography>
      </div>

      <div>
        <Typography variant='strong'>
          The best advice that was given to me was that I had to be 10 times smarter, braver and more polite to be equal. So I did.
        </Typography>
      </div>
    </Grid>
  )
}

export default App
