const stripe = require('stripe')('sk_test_51NT6fAJmZluKvBcaTVW0pch70KXSrc0ruGH7j7BlIawrJPzLmohhzcJQ6Zphvkv5qfzjB4lnS0esibfm6XYNgUuj00XEz7I09x');
const express=require('express');
const {ApolloServer}=require('apollo-server-express');
const path=require('path');
const { authMiddleware } = require('./utils/auth');
const{typeDefs,resolvers}=require('./schema');
const db= require('./config/connection');
const PORT=process.env.PORT||3001;
const app=express();

const server=new ApolloServer({
    typeDefs,
    resolvers,
    context:authMiddleware
});

app.use(express.urlencoded({extended:false}));
app.use(express.json());


//donation api
const MY_DOMAIN = 'https://donatetrader-6968094a5822.herokuapp.com/'
app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1NTBRZJmZluKvBcaqKlnB66q',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${MY_DOMAIN}/thankyou`,
      cancel_url: `${MY_DOMAIN}/home`,
    });
  
    res.redirect(303, session.url);
  });

if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,'../client/build')));
}
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../client/build/index.html'));
})

//Create a new instance of an Apollo Server with the GraphQL Schema
const startApolloServer=async(typeDefs,resolvers)=>{
    await server.start();
    server.applyMiddleware({app});

    db.once('open',()=>{
        app.listen(PORT,()=>{
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
};

startApolloServer(typeDefs,resolvers);