import app from './app'
import { PORT } from "./constants/constants";

app.listen(PORT,() => {

    console.log(`Application is running on ${PORT}`)
})