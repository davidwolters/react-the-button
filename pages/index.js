/**
 * Home page.
 */

import Head from 'next/head'
import '../components/NavigationBar';
import NavigationBar from '../components/NavigationBar'
import NavigationContext from '../state/NavigationContext'
import React, { useContext } from 'react'
import Content from '../components/Content'


export default function Home() {

  const navigation = useContext(NavigationContext);


  return (
      <>
        <NavigationBar pages={navigation.pages} selected="/" />
        <Content>
          <h1 className="page-title">Welcome to The Button</h1>
          <h3 className="center">Use the links above to navigate the site, let us know what level you got in the guest book!</h3>
        </Content>
      </>
  );

}
