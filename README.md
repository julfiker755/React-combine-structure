> combine react demo
>
```js
// Front-end route difine and connect
app.use("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client','dist','index.html'))
})
```

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // backend server connect
  server:{
    proxy: {
      '/api/': {
        target: 'http://localhost:7000',
      }
    }
  }
})

````
