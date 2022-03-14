import React from 'react'
import {Link} from 'react-router-dom'

import Helmet from '../Components/Helmet'
import HeroSlider from '../Components/HeroSlider'
import Grid from '../Components/Grid'
import ProductCard from '../Components/ProductCard'
import Section, {SectionBody, SectionTitle} from '../Components/Section'
import PolicyCard from '../Components/PolicyCard'

import policy from '../assets/fake-data/policy'
import productData from '../assets/fake-data/products'
import heroSliderData from '../assets/fake-data/hero-slider'
import banner from '../assets/images/banner.png'



 
const Home = () => {
  return (
      <Helmet title="Trang Chủ">
            
            {/*hero slider */}
            <HeroSlider
                  data={heroSliderData}
                  control={true}
                  auto={true}
                  timeOut={4000}
            /> 
            {/*end hero slider */}

            {/*banner */}
            <Section>
                <SectionBody>
                    <Link to="/catalog">
                        <img src={banner} atl="" />
                    </Link>
                </SectionBody>
            </Section>
            {/*end banner */}
            
            {/*policy section */}
            <Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={30} 
                    >
                        {
                            policy.map((item, index) => <Link key={index} to="/policy">
                                    <PolicyCard 
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                    />
                            </Link>)
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/*end policy */}

            {/*best sell */}
            <Section>
                <SectionTitle>
                    top sản phẩm bán chạy trong tuần
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={30}
                    >
                        {
                            productData.getProducts(4).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />   
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/*end best sell */}

            {/*new arrival sell */}
            <Section>
                <SectionTitle>
                    sản phẩm mới 
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={30}
                    >
                        {
                            productData.getProducts(8).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />   
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/*end arrival sell */}

            
      </Helmet> 
  )
}

export default Home