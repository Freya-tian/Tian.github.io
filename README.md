# start
1. start docker demon
2. run in cmd
   1. start backend:
     ` docker build -t server .  `
     ` docker run -p 3001:3001 server `
   2. start client
     ` docker build  -t client . `
     ` docker run -p 3000:3000 client `

