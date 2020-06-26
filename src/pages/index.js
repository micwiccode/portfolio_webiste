import React from 'react'
import { Link } from 'gatsby'
import '../css/index.scss'

import Layout from '../components/layout'
import Menu from '../components/menu'
import { useSpring, animated } from 'react-spring'

function IndexPage() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1500 },
  })

  return (
    <Layout>
      <animated.div style={props}>
        <section className="section_welcome">
          <p className="section_welcome__title">Hi there</p>
          <p className="section_welcome__subtitle">
            My name is Michał
            <br />I am an <span>IT student </span>
            interested especially in web programming
          </p>
          <Link>
            <button className="section_welcome__btn">See my projects</button>
          </Link>
        </section>
      </animated.div>

      <section className="section">
        <div
          className="section__title"
          data-sal="slide-right"
          data-sal-duration="1000"
          data-sal-delay="100"
          data-sal-easing="ease"
        >
          About me
        </div>
        <div
          className="section__paragraph"
          data-sal="fade"
          data-sal-duration="800"
          data-sal-delay="100"
          data-sal-easing="ease"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad
          adipisci aperiam, beatae doloribus error esse exercitationem explicabo
          illo illum, labore magnam necessitatibus obcaecati odit voluptatem. A
          ab accusantium adipisci aliquid assumenda, autem consequatur
          consequuntur debitis dolore dolorum, ducimus error esse excepturi
          explicabo facilis illo in incidunt inventore labore laboriosam magni
          maiores maxime minus molestiae neque officia officiis quam quis
          ratione rerum sapiente sequi vel velit. Ab beatae culpa deserunt esse
          fugiat in porro, provident quae quis tempora! Adipisci aliquam
          assumenda atque autem cum cupiditate deleniti error est iusto mollitia
          nemo omnis quas, quisquam ratione rem, reprehenderit sint sunt,
          voluptatum?
        </div>
      </section>

      <section className="section">
        <div
          className="section__title"
          data-sal="slide-left"
          data-sal-duration="1000"
          data-sal-delay="100"
          data-sal-easing="ease"
        >
          My projects
        </div>
        <div
          className="section__paragraph"
          data-sal="fade"
          data-sal-duration="800"
          data-sal-delay="100"
          data-sal-easing="ease"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad
          adipisci aperiam, beatae doloribus error esse exercitationem explicabo
          illo illum, labore magnam necessitatibus obcaecati odit voluptatem. A
          ab accusantium adipisci aliquid assumenda, autem consequatur
          consequuntur debitis dolore dolorum, ducimus error esse excepturi
          explicabo facilis illo in incidunt inventore labore laboriosam magni
          maiores maxime minus molestiae neque officia officiis quam quis
          ratione rerum sapiente sequi vel velit. Ab beatae culpa deserunt esse
          fugiat in porro, provident quae quis tempora! Adipisci aliquam
          assumenda atque autem cum cupiditate deleniti error est iusto mollitia
          nemo omnis quas, quisquam ratione rem, reprehenderit sint sunt,
          voluptatum?
        </div>
      </section>
      <section className="section">
        <div
          className="section__title"
          data-sal="slide-right"
          data-sal-duration="1000"
          data-sal-delay="100"
          data-sal-easing="ease"
        >
          Conntact
        </div>
        <div
          className="section__paragraph"
          data-sal="fade"
          data-sal-duration="800"
          data-sal-delay="100"
          data-sal-easing="ease"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad
          adipisci aperiam, beatae doloribus error esse exercitationem explicabo
          illo illum, labore magnam necessitatibus obcaecati odit voluptatem. A
          ab accusantium adipisci aliquid assumenda, autem consequatur
          consequuntur debitis dolore dolorum, ducimus error esse excepturi
          explicabo facilis illo in incidunt inventore labore laboriosam magni
          maiores maxime minus molestiae neque officia officiis quam quis
          ratione rerum sapiente sequi vel velit. Ab beatae culpa deserunt esse
          fugiat in porro, provident quae quis tempora! Adipisci aliquam
          assumenda atque autem cum cupiditate deleniti error est iusto mollitia
          nemo omnis quas, quisquam ratione rem, reprehenderit sint sunt,
          voluptatum?
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
