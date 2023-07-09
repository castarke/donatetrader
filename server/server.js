const express=require('express');
const jwt=require('jsonwebtoken');
const {ApolloServer}=require('apollo-server-express');
const path=require('path');
const{typeDefs,resolvers}=require('./schema');
const db= require('./config/connection');
const PORT=process.env.PORT||3001;
const app=express();

const getUserFromToken=(token)=>{
    try{
        if(token){
            return jwt.verify(token,'9nw59gd');//secret-key
        }
        return null;
    }catch(error){
        return null;
    }
};


const server=new ApolloServer({
    typeDefs,
    resolvers,
    context:({req})=>{
        const token=req.headers.authorization||'';
        const user=getUserFromToken(token);
        return {user};
    },
});

//a
app.use(express.urlencoded({extended:false}));
app.use(express.json());
if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,'../client/build/index.html')));
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

startApolloServer()