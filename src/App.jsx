import React from 'react'
import './App.scss'
import { Hero } from './containers/hero/hero.jsx'
import { Projects } from './containers/projects/projects.jsx'
import './i18n.js'
import { TechnoBand } from './containers/techno-band/technoBand.jsx'
import Layout from './Layout.jsx'
import ProjectList from './pages/ProjectList/ProjectList.jsx'
import ProjectDescription from './pages/ProjectDescription/ProjectDescription.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    < Routes >
      <Route path="/" element={
        <Layout>
          <Hero />
          <TechnoBand />
          <Projects />
        </Layout>
      } />
      <Route path="/projects" element={
        <Layout>
          <ProjectList />
        </Layout>
      } />
      <Route path="/project/:id" element={
        <Layout>
          <ProjectDescription />
        </Layout>
      } />
    </Routes >
  )

}

export default App
