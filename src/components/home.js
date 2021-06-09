import React from "react";

export default function Home(){
  return(
    <>
    <h1>Welcome, Raghav Awasthi</h1> 
    <h4>{localStorage.getItem('CognitoIdentityServiceProvider.3i9iga2srecu9re5nqtkv0455b.LastAuthUser')}</h4>
    </>
  )
}